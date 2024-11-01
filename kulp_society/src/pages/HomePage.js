import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroSlider from '../components/slider';
import { Heart, Users, Globe, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ContinuousCardCarousel from '../components/CardCarousel';
import  TreeOverlayComponent from '../components/TreeComponent';

const CountUpAnimation = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(target * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const HomePage = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: 50,
      x: custom === 'left' ? -25 : custom === 'right' ? 25 : 0,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-0.5 h-32 bg-gradient-to-b from-pink-400 to-transparent"
          animate={{
            y: ["0%", "100%", "0%"],
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-0.5 h-32 bg-gradient-to-b from-pink-300 to-transparent"
          animate={{
            y: ["100%", "0%", "100%"],
            x: ["100%", "0%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Slider Section */}
      <section className="w-full h-screen relative">
        <div className="absolute inset-0 mt-16">
          <HeroSlider />
        </div>
      </section>

      {/* Enhanced Mission Statement Section */}
      <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-pink-50 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #fce7f3 25%, transparent 25%, transparent 75%, #fce7f3 75%, #fce7f3)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700"
            >
              Making a Difference Together
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We believe in the power of collective action to create lasting positive change
              in communities around the world. Together, we can build a brighter future.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                custom: "left",
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Compassion",
                description: "Supporting those in need with care and understanding, creating lasting impact in the lives of individuals and families across communities."
              },
              {
                custom: "center",
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Community",
                description: "Building stronger communities through unity and support, fostering connections that empower positive change and sustainable growth."
              },
              {
                custom: "right",
                icon: <Globe className="w-8 h-8 text-pink-500" />,
                title: "Global Impact",
                description: "Creating positive change across borders and cultures, connecting hearts and hands to build a more inclusive and sustainable world."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={card.custom}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  delay: index * 0.1,
                }}
                className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-pink-200 transform hover:-translate-y-2"
                whileHover={{
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.2)",
                }}
              >
                <motion.div 
                  className="bg-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<TreeOverlayComponent />
      {/* Impact Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, #ec4899 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: 50000, suffix: "+", label: "Lives Impacted" },
              { value: 100, suffix: "+", label: "Communities Served" },
              { value: 25, suffix: "+", label: "Countries Reached" },
              { value: 10000, suffix: "+", label: "Volunteers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
                  <CountUpAnimation target={stat.value} duration={2} />{stat.suffix}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContinuousCardCarousel />
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            x: ["-100%", "100%"],
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join us in our mission to create positive change. Every contribution matters.
          </motion.p>
          <motion.button
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-lg
              hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 group shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved Now
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;