import React from 'react';
import { Infinity, Home, Sparkles } from 'lucide-react';

const OurForever: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Forever
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-white to-rose-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-6">
              <Infinity className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              I Hope for Our Beautiful Future
            </h3>
            
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                "I hope we keep growing together, supporting each other's dreams, 
                and building something beautiful that's uniquely ours."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Home className="w-8 h-8 text-rose-500 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Home</h4>
                <p className="text-gray-600 leading-relaxed">
                  Maybe someday we'll have our own place where we can make breakfast together and dance in the kitchen.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-rose-500 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Adventures</h4>
                <p className="text-gray-600 leading-relaxed">
                  So many places I want to explore with you, so many memories we haven't made yet.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 text-lg font-medium">
              Whatever the future holds, I want to face it with you. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurForever;