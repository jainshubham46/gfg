import React, { useState } from 'react';
import { Heart, Flower } from 'lucide-react';
import SurprisePage from './SurprisePage';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  if (showSurprise) {
    return <SurprisePage />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className={`absolute text-pink-200/30 animate-float-${i % 4}`}
            size={40 + (i * 10)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <Flower
            key={`flower-${i}`}
            className={`absolute text-red-200/20 animate-spin-slow-${i % 4}`}
            size={50 + (i * 8)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
      </div>

      {/* Glass effect container */}
      <div className="relative z-10 backdrop-blur-sm bg-white/10 p-12 rounded-3xl shadow-2xl
                    border border-white/20">
        <div className="text-center">
          <h1 className="text-5xl font-serif mb-12 text-gray-50 flex items-center gap-3">
            <Heart className="text-red-400 animate-pulse" size={40} />
            Wise you many many congratulations Mrs. BRC
            <Heart className="text-red-400 animate-pulse" size={40} />
          </h1>
          
          <button
            onClick={() => setShowSurprise(true)}
            className="px-12 py-4 bg-black text-white rounded-full text-xl font-semibold
                       transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                       focus:outline-none focus:ring-4 focus:ring-pink-300
                       bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)]
                       bg-[length:250%_250%] hover:bg-[position:100%_100%] duration-1000
                       relative overflow-hidden group"
          >
            <span className="relative z-10">Surprise</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20
                          group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;