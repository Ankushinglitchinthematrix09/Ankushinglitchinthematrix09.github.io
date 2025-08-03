import React from 'react';
import { Music, Play, ExternalLink } from 'lucide-react';

const OurSong: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Song
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-6">
              <Music className="w-12 h-12 text-white" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            The Song That Plays in My Heart
          </h3>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Every couple has songs that become "theirs." I love how we're creating our own playlist 
            of memories, with each song taking us back to special moments we've shared.
          </p>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 italic text-lg">
              "That song that always comes on at the perfect moment, the one that makes us both smile 
              and reminds us why we're so good together."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Play Our Song
            </button>
            <button className="border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Open in Spotify
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSong;