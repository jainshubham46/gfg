import React, { useState } from 'react';
import { Heart, Stars, X } from 'lucide-react';

const images = [
  "/1693323848215.jpg",
  "/IMG_2393.jpg", 
  "/IMG_2397.jpg",
  "/IMG_2401 (1).jpg",
  "/IMG_2407.jpg",
  "/IMG_2411.jpg",
  "/IMG_2426.jpg",
  "/IMG_2434.jpg",
  "/IMG_2449.jpg",
  "/IMG_2452.jpg",
  "/IMG_2455.jpg",
  "/SAVE_20230615_231535.jpg"
];

const message = `Dear Sindhuja,

As you embark on this beautiful journey of marriage, may your love story continue to bloom and grow stronger with each passing day. Your happiness fills our hearts with joy, and we couldn't be more excited to celebrate this new chapter in your life.

Your radiant smile and warm personality have always brightened our days. From sharing pizzas to shopping mall adventures, every moment spent with you has been special. As you step into this new phase of life, we know you'll create countless more beautiful memories.

May your love be as endless as the ocean, as deep as the sea, and as bright as the stars in the night sky. Here's to a lifetime of love, laughter, and countless beautiful moments together.

With all our love and best wishes for your happily ever after! ❤️`;

function SurprisePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-amber-50/90 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-12 flex items-center justify-center gap-3">
          <Stars className="text-amber-400" />
          Congratulations Sindhuja!
          <Stars className="text-amber-400" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer
                         transform transition-all duration-500 hover:scale-105
                         hover:shadow-2xl hover:-translate-y-2 group"
            >
              <img
                src={img}
                alt="Sindhuja's Moments"
                className="w-full h-80 object-cover transform transition-transform duration-700
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex items-end justify-center p-4">
                <span className="text-white text-lg font-serif">Click to view</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                      transform transition-all duration-500 hover:shadow-2xl hover:bg-white/90
                      border border-pink-100">
          <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-gray-800">
            {message}
          </pre>
        </div>

        <div className="fixed bottom-4 right-4 animate-bounce">
          <Heart className="text-red-400" size={40} fill="currentColor" />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50
                     animate-[fadeIn_0.3s_ease-in-out] backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300
                       transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg
                       animate-[scaleIn_0.3s_ease-in-out] shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SurprisePage;