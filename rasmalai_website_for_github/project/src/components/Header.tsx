import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Heart className="w-8 h-8 mr-3 animate-pulse text-red-200" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide">
            To My Beautiful Girlfriend
          </h1>
          <Heart className="w-8 h-8 ml-3 animate-pulse text-red-200" />
        </div>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-rose-100">
          Priya
        </h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-2xl border border-white/20">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Hi my sweet Priya, this little space is for you, made with all my love from your boyfriend Ankush 💝
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;