import React from 'react';
import { Heart, Smile, Star } from 'lucide-react';

const WhyILoveYou: React.FC = () => {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Your Endless Support",
      description: "You believe in me even when I don't believe in myself, and your support gives me strength to chase my dreams."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Your Warm Smile",
      description: "Your smile is the first thing I think about in the morning and the last thing I want to see at night."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "The Way You Care",
      description: "The little things you do, the way you remember what matters to me, shows me what real love looks like."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-rose-100 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Why I Love You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-rose-50"
            >
              <div className="text-rose-500 mb-6 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyILoveYou;