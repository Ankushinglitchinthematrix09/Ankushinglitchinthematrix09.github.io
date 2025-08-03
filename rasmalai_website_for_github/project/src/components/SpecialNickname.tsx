import React from 'react';
import { Heart, Cake } from 'lucide-react';

const SpecialNickname: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-rose-200 relative overflow-hidden">
          {/* Decorative hearts */}
          <div className="absolute top-4 left-4 text-rose-200">
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4 text-rose-200">
            <Heart className="w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute bottom-4 left-4 text-rose-200">
            <Heart className="w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-4 right-4 text-rose-200">
            <Heart className="w-6 h-6 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-6">
              <Cake className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-8">
            To My Rasmalai
          </h2>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-8 border border-rose-100">
            <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              You're my sweetest happiness in this whole world.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Just like rasmalai is sweet and comforting, being with you feels like 
              coming home to everything good in this world.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              You make ordinary days feel special, and I love how we can be silly 
              and serious, playful and caring, all at the same time.
            </p>
            
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-2xl inline-block">
              <p className="text-lg font-medium">
                You're my favorite person and my sweetest Rasmalai 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialNickname;