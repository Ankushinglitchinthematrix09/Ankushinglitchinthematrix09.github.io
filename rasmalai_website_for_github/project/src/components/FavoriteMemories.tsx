import React from 'react';
import { Camera, MapPin, Calendar } from 'lucide-react';

const FavoriteMemories: React.FC = () => {
  const memories = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Our First Photo Together",
      description: "That nervous but excited feeling we both had — the start of our beautiful journey together.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Adventures Together",
      description: "Every place we explore together becomes special because you're there with me.",
      image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Date Nights",
      description: "Whether we're out somewhere fancy or just staying in, every moment with you is perfect.",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Favorite Memories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Every moment with you becomes a treasured memory
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center mb-2 text-rose-200">
                  {memory.icon}
                  <h3 className="text-xl font-bold ml-2">{memory.title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic text-lg">
            "Each photo tells a story, but our love story is still being written..."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FavoriteMemories;