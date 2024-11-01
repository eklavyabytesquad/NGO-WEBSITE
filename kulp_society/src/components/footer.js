import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Globe,
  HandHeart,
  Users,
  Newspaper,
  ChevronDown,
  SendHorizontal,
  Sparkles,
  Star
} from 'lucide-react';

const BackgroundSVG = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg width="100%" height="100%" className="absolute opacity-10">
      <motion.circle 
        cx="10%" 
        cy="20%" 
        r="50" 
        fill="none" 
        stroke="currentColor" 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0,50 Q200,150 400,50 T800,50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1,
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  </div>
);

const Footer = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoverEffect, setHoverEffect] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "hover:bg-pink-400", hoverLabel: "Join our community" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:bg-pink-400", hoverLabel: "Follow our updates" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-pink-400", hoverLabel: "See our moments" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-pink-400", hoverLabel: "Connect with us" }
  ];

  const quickLinks = [
    { icon: <Globe className="w-4 h-4" />, label: "About Us", href: "#" },
    { icon: <HandHeart className="w-4 h-4" />, label: "Our Mission", href: "#" },
    { icon: <Users className="w-4 h-4" />, label: "Programs", href: "#" },
    { icon: <Newspaper className="w-4 h-4" />, label: "News & Updates", href: "#" }
  ];

  const AccordionHeader = ({ title, section }) => (
    <motion.button
      onClick={() => setActiveSection(activeSection === section ? '' : section)}
      className="w-full flex items-center justify-between py-4 text-left md:hidden"
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-xl font-semibold">{title}</span>
      <motion.div
        animate={{ rotate: activeSection === section ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5 text-pink-300" />
      </motion.div>
    </motion.button>
  );

  return (
    <footer className="relative bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 overflow-hidden">
      <BackgroundSVG />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
                KULP SOCIETY
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Star className="w-6 h-6 text-pink-400" />
                </motion.div>
              </h3>
            </motion.div>
            <p className="text-gray-600 leading-relaxed">
            महिला शक्ति का हर एक कदम, समाज में बदलाव की लहर बन जाए,
            जहाँ एकजुटता और सहानुभूति का संदेश हर दिल तक पहुँच जाए।
            </p>
            <motion.div 
              className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600">50K+ Lives Impacted</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <AccordionHeader title="Quick Links" section="links" />
            <AnimatePresence>
              <motion.div
                initial={{ height: 'auto' }}
                className={`space-y-4 ${activeSection !== 'links' ? 'hidden md:block' : ''}`}
              >
                <h4 className="text-xl font-semibold text-pink-600 hidden md:block">Quick Links</h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <a href={link.href} className="group flex items-center text-gray-600 hover:text-pink-600 transition-colors">
                        <span className="mr-2 text-pink-400 group-hover:text-pink-500">{link.icon}</span>
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <AccordionHeader title="Contact Us" section="contact" />
            <AnimatePresence>
              <motion.div
                initial={{ height: 'auto' }}
                className={`space-y-4 ${activeSection !== 'contact' ? 'hidden md:block' : ''}`}
              >
                <h4 className="text-xl font-semibold text-pink-600 hidden md:block">Contact Us</h4>
                <ul className="space-y-4">
                  {[
                    { icon: <Phone />, text: "+91-9557173600" },
                    { icon: <Mail />, text: "eklavyasingh9870@gmail.com" },
                    { icon: <MapPin />, text: "Kulp Society Aligarh - 202001,UTTAR PRADESH" }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      <span className="text-pink-400">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-semibold text-pink-600">Stay Updated</h4>
            <p className="text-gray-600">Join our newsletter for updates on our impact and initiatives.</p>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <input 
                  type="email" 
                  placeholder="Enter your number" 
                  className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-600"
                >
                  <SendHorizontal className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-pink-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  onHoverStart={() => setHoverEffect(index)}
                  onHoverEnd={() => setHoverEffect(null)}
                >
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`block bg-white/50 backdrop-blur-sm p-3 rounded-full text-pink-400 hover:text-white transition-colors ${social.color} shadow-sm`}
                  >
                    {social.icon}
                  </motion.a>
                  <AnimatePresence>
                    {hoverEffect === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm text-pink-600 whitespace-nowrap"
                      >
                        {social.hoverLabel}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <motion.p className="text-gray-600 text-sm text-center md:text-right">
              ©Kulp Society. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Wave */}
      <div className="relative">
        <svg 
          viewBox="0 0 1440 100" 
          className="w-full h-12 md:h-16 fill-white"
          preserveAspectRatio="none"
        >
          <motion.path 
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;