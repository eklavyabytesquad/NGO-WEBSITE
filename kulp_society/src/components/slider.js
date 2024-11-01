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

  // Same ActionButton component as before
  const ActionButton = ({ text }) => (
    <button
      className={`group relative overflow-hidden px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full 
        font-semibold text-sm sm:text-base transition-all duration-300 transform 
        hover:-translate-y-1 active:translate-y-0 hover:scale-105 active:scale-100
        ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
      style={{
        boxShadow: '0 3px 0 rgb(219 39 119), 0 6px 12px rgba(0,0,0,0.2)',
      }}
    >
      {/* Button background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 
        opacity-100 transition-opacity duration-300" />
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 
        opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
        group-hover:translate-x-full transition-all duration-1000 
        bg-gradient-to-r from-transparent via-white to-transparent skew-x-12" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-white 
        font-semibold tracking-wide transition-transform duration-300 
        group-hover:translate-x-1">
        {text}
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 
          group-hover:translate-x-1" strokeWidth={2.5} />
      </span>
      
      {/* Button border glow */}
      <div className="absolute inset-0 -z-10 rounded-full opacity-40 blur-sm 
        bg-gradient-to-r from-pink-400 to-pink-600 group-hover:opacity-60 
        transition-opacity duration-300" />
    </button>
  );

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-pink-50 mt-16">
      {/* Main content same as before... */}
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
              {/* Previous content remains the same... */}
              <div className="flex items-center gap-2 mb-4 sm:mb-8">
                <Heart className={`w-4 h-4 sm:w-6 sm:h-6 text-white fill-white transition-all duration-500 transform
                  ${isAnimating ? 'scale-0' : 'scale-100'}`} />
                <div className={`w-16 sm:w-24 h-0.5 sm:h-1 bg-white mb-0 transition-all duration-500 transform
                  ${isAnimating ? 'scale-x-0' : 'scale-x-100'}`} />
              </div>

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

              <ActionButton text={slide.buttonText} />
            </div>
          </div>
        ))}
      </div>

      {/* Updated Navigation Controls with better mobile positioning and theme-matched styling */}
      <div className="absolute bottom-16 sm:bottom-12 md:bottom-16 left-0 right-0 flex justify-between items-center 
        px-4 sm:px-8 max-w-7xl mx-auto">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-pink-500/30 hover:bg-pink-500 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1
            border border-pink-300/30 hover:border-pink-400"
          style={{
            WebkitBackdropFilter: 'blur(4px)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-300 
            group-hover:-translate-x-1" />
        </button>

        {/* Theme-matched dots */}
        <div className="flex space-x-2 sm:space-x-3 bg-pink-500/20 backdrop-blur-sm px-3 py-2 rounded-full
          border border-pink-300/30">
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
                  'w-6 sm:w-8 h-1.5 sm:h-2 bg-pink-400 hover:bg-pink-500' : 
                  'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-300/50 hover:bg-pink-400/70'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-pink-500/30 hover:bg-pink-500 backdrop-blur-sm 
            transition-all duration-300 group shadow-lg hover:-translate-y-1
            border border-pink-300/30 hover:border-pink-400"
          style={{
            WebkitBackdropFilter: 'blur(4px)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-300 
            group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;