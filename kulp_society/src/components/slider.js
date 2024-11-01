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
  const [isPanning, setIsPanning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Reset panning animation when slide changes
  useEffect(() => {
    setIsPanning(true);
    const timer = setTimeout(() => {
      setIsPanning(false);
    }, 4000); // Duration of the panning animation

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-pink-50 mt-16">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-out transform-gpu
              ${index === currentSlide ? 
                'opacity-100 scale-100 translate-x-0' : 
                direction === 'right' ?
                  'opacity-0 -translate-x-full scale-100' :
                  'opacity-0 translate-x-full scale-100'
              }`}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Background Image with Mobile Panning Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full relative">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-all duration-500
                    md:scale-110 md:object-cover md:transform-none
                    ${isAnimating ? 'scale-105' : 'scale-100'}
                    sm:object-cover sm:object-center
                    ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{
                    '@media (max-width: 640px)': {
                      transform: isPanning ? 'scale(1.2)' : 'scale(1.2)',
                      transition: 'transform 4s ease-out',
                    }
                  }}
                />
                <div 
                  className={`absolute inset-0 w-[120%] h-full left-[-10%]
                    sm:w-full sm:left-0 transition-transform duration-[4000ms] ease-out
                    ${isPanning && index === currentSlide ? 'translate-x-[-8.33%]' : 'translate-x-0'}
                    md:transform-none`}
                  style={{
                    background: `url(${slide.imageUrl}) center center/cover no-repeat`,
                    display: 'block',
                  }}
                />
              </div>
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">
              {/* Animated Line with hearts */}
              <div className="flex items-center gap-2 mb-4 sm:mb-8">
                <Heart className={`w-4 h-4 sm:w-6 sm:h-6 text-white fill-white transition-all duration-500 transform
                  ${isAnimating ? 'scale-0' : 'scale-100'}`} />
                <div className={`w-16 sm:w-24 h-0.5 sm:h-1 bg-white mb-0 transition-all duration-500 transform
                  ${isAnimating ? 'scale-x-0' : 'scale-x-100'}`} />
              </div>

              {/* Title */}
              <h2
                className={`text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 transition-all duration-500
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

              {/* Subtitle */}
              <p
                className={`text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mb-6 sm:mb-8 transition-all duration-500 delay-100
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

              {/* Button */}
              <button
                className={`group relative px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg 
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
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-between items-center px-4 sm:px-8">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/30 hover:bg-pink-400 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1"
        >
          <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-transform duration-300 
            group-hover:-translate-x-1" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2 sm:space-x-3">
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
                  'w-6 sm:w-8 h-1.5 sm:h-2 bg-white' : 
                  'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/30 hover:bg-pink-400 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1"
        >
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-transform duration-300 
            group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;