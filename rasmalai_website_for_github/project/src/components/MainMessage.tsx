import React from 'react';
import { Sparkles } from 'lucide-react';

const MainMessage: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-12 h-12 text-rose-500 animate-pulse" />
          </div>
          
          <div className="prose prose-lg md:prose-xl max-w-none text-center">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg md:text-xl">
              From the first moment we met, I knew you were someone incredibly special.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg md:text-xl">
              Priya, my sweet Rasmalai, every day with you feels like a blessing, and I'm so grateful you're in my life.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg md:text-xl">
              I see how much you care, how much you give, and I want to give you all the love and happiness you deserve.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg md:text-xl">
              You make me want to be a better person, and I hope we can build something beautiful together.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg md:text-xl font-medium">
              I love you so much, and I'm excited about our future together.
            </p>
            
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full">
                <p className="font-serif text-lg md:text-xl">
                  — With all my love, your boyfriend Ankush ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMessage;