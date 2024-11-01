import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, RefreshCw, Heart, Sparkles, Stars } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-pink-100 to-rose-100 p-4">
      <div className="text-center space-y-8 p-8 relative">
        {/* Background SVG Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-spin-slow" 
            width="400" height="400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(244, 114, 182, 0.1)" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(251, 207, 232, 0.1)" strokeWidth="2" />
            <path d="M50 5 L55 15 L50 12 L45 15 Z" fill="rgba(236, 72, 153, 0.1)" 
              className="animate-float" />
          </svg>
        </div>

        {/* Animated Hearts Background */}
        <div className="absolute inset-0 -z-10">
          <Heart className="absolute top-10 left-10 w-6 h-6 text-pink-200 animate-float" />
          <Heart className="absolute top-20 right-20 w-4 h-4 text-pink-300 animate-float-delayed" />
          <Heart className="absolute bottom-20 left-20 w-5 h-5 text-pink-200 animate-float" />
          <Sparkles className="absolute top-32 left-32 w-6 h-6 text-pink-200 animate-float-delayed" />
          <Stars className="absolute bottom-32 right-32 w-6 h-6 text-pink-300 animate-float" />
        </div>

        {/* Animated 404 Container */}
        <div className="relative">
          {/* Main 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 animate-pulse relative">
            404
          </h1>

          {/* Glowing Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-rose-400 
            opacity-20 blur-xl animate-pulse" />

          {/* Underline Animation */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4">
            <div className="h-1 bg-gradient-to-r from-pink-400 to-rose-400 
              animate-expand rounded-full shadow-lg" />
          </div>

          {/* Rotating Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <RefreshCw className="w-16 h-16 text-pink-300 opacity-20 animate-spin" />
          </div>
        </div>

        {/* Animated Message with Gradient */}
        <div className="space-y-6 animate-fadeIn mt-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 
            to-rose-400 bg-clip-text text-transparent">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Don't worry, you've just stumbled upon our prettiest error page! 
            Let's get you back to somewhere more exciting.
          </p>
        </div>

        {/* Enhanced Button */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="group relative inline-flex items-center justify-center px-8 py-3
              text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-rose-400
              rounded-full overflow-hidden transition-all duration-300
              hover:from-pink-600 hover:to-rose-500 hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
              transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <HomeIcon className="mr-2 h-5 w-5 animate-bounce-subtle" />
            Back to Home
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full
              bg-white opacity-10 transition-all duration-300
              group-hover:scale-100" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-float" />
          
          {/* Additional sparkle effects */}
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-200 rounded-full animate-ping" />
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-rose-200 rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;