import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import hero1 from '../assets/KULP1.jpg';
import hero2 from '../assets/KULP2.jpg';
import hero3 from '../assets/KULP3.jpg';

const slides = [
  {
    id: 1,
    title: "Empower Through Education",
    subtitle: "Help us provide quality education to underprivileged children worldwide",
    buttonText: "Support Education",
    imageUrl: hero1
  },
  {
    id: 2,
    title: "Fight Against Hunger",
    subtitle: "Join our mission to provide nutritious meals to those in need",
    buttonText: "Donate Food",
    imageUrl: hero2
  },
  {
    id: 3,
    title: "Build Better Lives",
    subtitle: "Together we can create lasting change in communities",
    buttonText: "Make Impact",
    imageUrl: hero3
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-pink-50 mt-16">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-800 ease-out transform-gpu
              ${index === currentSlide ? 
                'opacity-100 scale-100 translate-x-0' : 
                direction === 'right' ?
                  'opacity-0 -translate-x-full scale-95 blur-lg' :
                  'opacity-0 translate-x-full scale-95 blur-lg'
              }`}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Background Image with Black Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className={`w-full h-full object-cover transform scale-110 transition-transform duration-[2000ms]
                  ${isAnimating ? 'scale-105' : 'scale-100'}`}
              />
              {/* Single light black overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-start justify-center px-12 md:px-24 max-w-7xl mx-auto">
              {/* Animated Line with hearts */}
              <div className="flex items-center gap-2 mb-8">
                <Heart className={`w-6 h-6 text-white fill-white transition-all duration-1000 transform
                  ${isAnimating ? 'scale-0' : 'scale-100'}`} />
                <div className={`w-24 h-1 bg-white mb-0 transition-all duration-1000 transform
                  ${isAnimating ? 'scale-x-0' : 'scale-x-100'}`} />
              </div>

              {/* Title with enhanced styling */}
              <h2
                className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-800
                  ${isAnimating ?
                    direction === 'right' ?
                      'opacity-0 -translate-x-full' :
                      'opacity-0 translate-x-full'
                    : 'opacity-100 translate-x-0'
                  }`}
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.2)',
                }}
              >
                {slide.title}
              </h2>

              {/* Subtitle with enhanced visibility */}
              <p
                className={`text-xl md:text-2xl text-gray-100 max-w-2xl mb-8 transition-all duration-800 delay-100
                  ${isAnimating ?
                    direction === 'right' ?
                      'opacity-0 -translate-x-full' :
                      'opacity-0 translate-x-full'
                    : 'opacity-100 translate-x-0'
                  }`}
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {slide.subtitle}
              </p>

              {/* Enhanced 3D Button */}
              <button
                className={`group relative px-10 py-4 rounded-full font-semibold text-lg 
                  transition-all duration-500 transform hover:-translate-y-1 active:translate-y-0
                  ${isAnimating ?
                    'opacity-0 translate-y-10' :
                    'opacity-100 translate-y-0'
                  }`}
                style={{
                  boxShadow: '0 4px 0 rgb(219 39 119), 0 8px 16px rgba(0,0,0,0.2)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300" />
                <span className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-2 inline-flex items-center">
                  {slide.buttonText}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls with enhanced visibility */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/30 hover:bg-pink-400 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1"
        >
          <ArrowLeft className="w-6 h-6 text-white transition-transform duration-300 
            group-hover:-translate-x-1" />
        </button>

        {/* Enhanced Dots */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setDirection(index > currentSlide ? 'right' : 'left');
                setCurrentSlide(index);
              }}
              className={`transition-all duration-300 rounded-full shadow-lg hover:scale-110
                ${index === currentSlide ? 
                  'w-8 h-2 bg-white' : 
                  'w-2 h-2 bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/30 hover:bg-pink-400 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1"
        >
          <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 
            group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;