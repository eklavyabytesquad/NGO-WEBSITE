import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO.png';
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

const PreLoader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  const images = [
    KULP5, KULP6, KULP7, KULP8, KULP9, KULP10, KULP11, KULP12,
    KULP13, KULP14, KULP15, KULP16, KULP17, KULP18, KULP19
  ];

  const getInitialPosition = (index) => {
    const positions = [
      { x: -window.innerWidth, y: -window.innerHeight },  // top-left
      { x: 0, y: -window.innerHeight },                   // top
      { x: window.innerWidth, y: -window.innerHeight },   // top-right
      { x: window.innerWidth, y: 0 },                     // right
      { x: window.innerWidth, y: window.innerHeight },    // bottom-right
      { x: 0, y: window.innerHeight },                    // bottom
      { x: -window.innerWidth, y: window.innerHeight },   // bottom-left
      { x: -window.innerWidth, y: 0 },                    // left
    ];
    
    return positions[index % positions.length];
  };

  useEffect(() => {
    // Phase 1: Initial spread
    setTimeout(() => setAnimationPhase(1), 1000);
    
    // Phase 2: Grid formation
    setTimeout(() => setAnimationPhase(2), 3000);
    
    // Phase 3: Circular motion
    setTimeout(() => setAnimationPhase(3), 5000);
    
    // Phase 4: Show logo
    setTimeout(() => {
      setAnimationPhase(4);
      setShowLogo(true);
    }, 7000);
    
    // Complete loading
    setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 9000);

    return () => {};
  }, [onLoadingComplete]);

  const getAnimationStyle = (index) => {
    switch(animationPhase) {
      case 1: // Spread out in grid
        const row = Math.floor(index / 4);
        const col = index % 4;
        return {
          x: (col - 1.5) * 200,
          y: (row - 1.5) * 200,
          rotate: 0,
          scale: 1,
          opacity: 1
        };
      case 2: // Form a circle
        const angle = (index / images.length) * 2 * Math.PI;
        return {
          x: Math.cos(angle) * 300,
          y: Math.sin(angle) * 300,
          rotate: angle * (180 / Math.PI),
          scale: 1,
          opacity: 1
        };
      case 3: // Spiral towards center
        const spiralAngle = (index / images.length) * 2 * Math.PI * 2;
        const radius = (1 - index / images.length) * 200;
        return {
          x: Math.cos(spiralAngle) * radius,
          y: Math.sin(spiralAngle) * radius,
          rotate: spiralAngle * (180 / Math.PI),
          scale: 1,
          opacity: 1
        };
      case 4: // Converge to center
        return {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 0,
          opacity: 0
        };
      default:
        return getInitialPosition(index);
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 w-full h-full z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFE4E1 0%, #FFC0CB 50%, #FFB6C1 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Flying images */}
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="absolute"
                initial={getInitialPosition(index)}
                animate={getAnimationStyle(index)}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '130px',
                    height: '130px',
                    perspective: '1000px',
                  }}
                >
                  <img 
                    src={img} 
                    alt={`KULP${index + 5}`}
                    className="w-full h-full object-cover rounded-xl"
                    style={{
                      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Center logo */}
            <motion.div
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={showLogo ? {
                scale: 1,
                opacity: 1,
              } : {
                scale: 0,
                opacity: 0
              }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-48 h-48 object-contain p-4"
                />
              </motion.div>
            </motion.div>

            {/* Loading progress bar */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-72 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #FFF0F5, #FF69B4, #FFFFFF, #FFC0CB)',
                    backgroundSize: '300% 100%',
                  }}
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ 
                    width: `${((animationPhase + 1) / 5) * 100}%`,
                    backgroundPosition: ['0% 50%', '100% 50%']
                  }}
                  transition={{ 
                    width: { duration: 1 },
                    backgroundPosition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              </div>
              <motion.p className="mt-2 text-white text-sm font-medium text-center">
                {showLogo ? "Almost there..." : "Loading..."}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;