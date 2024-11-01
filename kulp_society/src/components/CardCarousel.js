import React from 'react';
import KULP5 from '../assets/KULP5.png';
import KULP6 from '../assets/KULP6.png';
import KULP7 from '../assets/KULP7.png';
import KULP8 from '../assets/KULP8.png';
import KULP9 from '../assets/KULP9.png';
import KULP10 from '../assets/KULP10.png';
import KULP11 from '../assets/KULP11.png';
import KULP12 from '../assets/KULP12.png';
import KULP13 from '../assets/KULP13.png';
import KULP14 from '../assets/KULP14.png';
import KULP15 from '../assets/KULP15.png';
import KULP16 from '../assets/KULP16.png';
import KULP17 from '../assets/KULP17.png';
import KULP18 from '../assets/KULP18.png';
import KULP19 from '../assets/KULP19.png';

const ContinuousCardCarousel = () => {
  const cards = [
    { image: KULP5 },
    { image: KULP6 },
    { image: KULP7 },
    { image: KULP8 },
    { image: KULP9 },
    { image: KULP10 },
    { image: KULP11 },
    { image: KULP12 },
    { image: KULP13 },
    { image: KULP14 },
    { image: KULP15 },
    { image: KULP16 },
    { image: KULP17 },
    { image: KULP18 },
    { image: KULP19 }
  ];

  const doubledCards = [...cards, ...cards];

  return (
    <section className="w-full relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Updated decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-100/20 blur-3xl -top-48 -left-24 animate-float" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-50/30 blur-3xl top-1/4 right-0 animate-float-delayed" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-50/20 blur-3xl bottom-0 left-1/3 animate-float-slow" />
        
        {/* Additional subtle decorative elements */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-pink-100/10 blur-2xl top-1/3 left-1/4 animate-float-slow" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-purple-50/10 blur-2xl bottom-1/4 right-1/4 animate-float-delayed" />
      </div>

      {/* Main content */}
      <div className="relative pt-12 pb-20">
        <div className="px-8 mb-16">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-900 via-pink-600 to-purple-700 bg-clip-text text-transparent">
            Our Gallery
          </h2>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex gap-4 animate-scroll">
            {doubledCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 sm:w-64 md:w-72 group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <img
                    src={card.image}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Reduced gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-pink-50/80 to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-pink-50/80 to-transparent z-10" />
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 60s linear infinite;
            width: fit-content;
          }

          .animate-scroll:hover {
            animation-play-state: running;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }

          .animate-float {
            animation: float 15s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float 18s ease-in-out infinite;
            animation-delay: -9s;
          }

          .animate-float-slow {
            animation: float 20s ease-in-out infinite;
            animation-delay: -15s;
          }
        `}
      </style>
    </section>
  );
};

export default ContinuousCardCarousel;