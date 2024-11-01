import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// Import images
import TREE from '../assets/TREE.png';
import KULP5 from '../assets/KULP5.png';
import KULP6 from '../assets/KULP6.png';
import KULP7 from '../assets/KULP7.png';
import KULP8 from '../assets/KULP8.png';
import KULP9 from '../assets/KULP9.png';
import KULP10 from '../assets/KULP10.png';

const TreeOverlayComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const treeImages = [
    {
      img: KULP5,
      title: "Community Support",
      description: "Building stronger communities through local initiatives and sustainable development programs."
    },
    {
      img: KULP6,
      title: "Healthcare Access",
      description: "Providing essential healthcare services and medical support to underserved communities."
    },
    {
      img: KULP7,
      title: "Education Initiative",
      description: "Empowering through education and skill development programs for a brighter future."
    },
    {
      img: KULP8,
      title: "Women Empowerment",
      description: "Supporting women's rights and economic independence through targeted programs."
    },
    {
      img: KULP9,
      title: "Rural Development",
      description: "Fostering sustainable growth and development in rural communities."
    },
    {
      img: KULP10,
      title: "Youth Leadership",
      description: "Nurturing young leaders and creating opportunities for youth engagement."
    }
  ];
  
  const imagePositions = [
    { x: '25%', y: '20%', scale: 1, infoPosition: 'right' },
    { x: '75%', y: '25%', scale: 0.9, infoPosition: 'left' },
    { x: '15%', y: '40%', scale: 1.1, infoPosition: 'right' },
    { x: '70%', y: '45%', scale: 0.95, infoPosition: 'left' },
    { x: '45%', y: '30%', scale: 1, infoPosition: 'right' },
    { x: '55%', y: '50%', scale: 1.05, infoPosition: 'left' }
  ];

  // Info Card Component - Now smaller and more compact
  const InfoCard = ({ info, position, onClose }) => {
    const isRight = position === 'right';
    
    return (
      <motion.div
        initial={{ opacity: 0, x: isRight ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isRight ? -20 : 20 }}
        className={`fixed z-50 w-40 bg-white rounded-lg shadow-xl p-3 border border-pink-200
          ${isRight ? 'ml-2' : 'mr-2'}`}
        style={{ 
          top: '50%', 
          transform: 'translateY(-50%)',
          [isRight ? 'left' : 'right']: '100%',
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 text-white rounded-full 
            flex items-center justify-center hover:bg-pink-600 z-50"
        >
          <X size={12} />
        </button>
        
        <h3 className="font-bold text-pink-700 text-sm mb-1">{info.title}</h3>
        <p className="text-xs text-gray-600">{info.description}</p>
        
        <div className={`absolute top-1/2 ${isRight ? 'left-0' : 'right-0'} w-2 h-0.5 bg-pink-200
          transform -translate-y-1/2 ${isRight ? '-translate-x-full' : 'translate-x-full'}`} />
      </motion.div>
    );
  };

  return (
    <div className="h-auto bg-gradient-to-b from-green-50 to-pink-50 px-4 py-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <h1 className="text-3xl font-bold">
          Join the <span className="text-pink-600">Movement</span>
        </h1>
      </motion.div>

      <div className="relative w-full max-w-2xl mx-auto mt-4">
        <div className="relative aspect-[4/3] w-full">
          {/* Falling circles animation - Now behind the tree */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '20%',
                  background: i % 2 === 0 
                    ? `rgb(${219 + Math.random() * 36}, ${39 + Math.random() * 20}, ${119 + Math.random() * 20})` // Pink shades
                    : `rgb(${34 + Math.random() * 20}, ${197 + Math.random() * 58}, ${94 + Math.random() * 20})` // Green shades
                }}
                animate={{
                  y: [0, 300 + Math.random() * 100],
                  x: [0, Math.random() * 200 - 100],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>

          {/* Tree image - Now above the falling circles */}
          <motion.img
            src={TREE}
            alt="Tree"
            className="w-full h-full object-contain z-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{ 
              duration: 1,
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />

          {/* Image overlays - Highest z-index */}
          <div className="absolute inset-0 z-20">
            {imagePositions.map((position, index) => (
              <div
                key={index}
                className="absolute"
                style={{ 
                  left: position.x, 
                  top: position.y,
                  zIndex: selectedImage === index ? 40 : 20
                }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: position.scale, 
                    opacity: 1 
                  }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotateZ: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="relative"
                    style={{ zIndex: 30 }}
                    onClick={() => setSelectedImage(selectedImage === index ? null : index)}
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden 
                      border-4 border-white shadow-lg hover:border-pink-400 transition-colors duration-300
                      bg-white cursor-pointer"
                    >
                      <img
                        src={treeImages[index].img}
                        alt={treeImages[index].title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-pink-500 opacity-0"
                        whileHover={{ opacity: 0.2 }}
                      />
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-pink-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />

                    <AnimatePresence>
                      {selectedImage === index && (
                        <div className="relative z-50">
                          <InfoCard
                            info={treeImages[index]}
                            position={position.infoPosition}
                            onClose={() => setSelectedImage(null)}
                          />
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-radial from-pink-200/20 via-green-200/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 max-w-xs mx-auto relative z-30">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-pink-500 text-white py-3 px-6 rounded-full 
            font-semibold shadow-lg hover:from-green-600 hover:to-pink-600 transition-all duration-300 
            flex items-center justify-center group"
        >
          Join our team
          <motion.div
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-pink-600 py-3 px-6 rounded-full font-semibold 
            shadow-lg border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300"
        >
          Make a donation
        </motion.button>
      </div>
    </div>
  );
};

export default TreeOverlayComponent;