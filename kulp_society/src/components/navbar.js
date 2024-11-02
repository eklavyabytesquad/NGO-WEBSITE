import React, { useState } from 'react';
import AnnouncementMarquee from './AnnouncementMarquee';
import { 
  Home, 
  Heart, 
  Calendar, 
  Users, 
  LogIn,
  ChevronDown
} from 'lucide-react';
import logo from '../assets/LOGO.png';

const announcements = [
    "🎉 Join our upcoming Women Empowerment Workshop on November 15th!",
    "📢 New skill development program starting next month",
    "🌟 Successfully completed 100+ community programs",
    "💪 Empowering women in rural areas - Join our mission"
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

  const navItems = [
    { title: 'Home', icon: <Home className="w-5 h-5" />, href: '/' },
    { title: 'Blogs', icon: <Heart className="w-5 h-5" />, href: '/Blogs' },
    {
      title: 'Events',
      icon: <Calendar className="w-5 h-5" />,
      subItems: [
        { title: 'Upcoming Events', href: '/events/upcoming' },
        { title: 'Past Events', href: '/events/past' },
        { title: 'Annual Gatherings', href: '/events/annual' }
      ]
    },
    { title: 'Volunteer', icon: <Users className="w-5 h-5" />, href: '/volunteer' },
    { title: 'Login', icon: <LogIn className="w-5 h-5" />, href: '/login' }
  ];

  return (
    <div className="fixed w-full z-50">
      <AnnouncementMarquee announcements={announcements} />
      <nav className="bg-pink-50 text-pink-600 shadow-md border-b-2 border-pink-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo and Organization Name */}
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 relative group">
                <div className="relative transform transition-all duration-300 
                  hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  {/* Logo Container with 3D effect */}
                  <div className="relative w-auto h-16 perspective-1000">
                    <img
                      src={logo}
                      alt="KALP SOCIETY Logo"
                      className="h-full w-auto object-contain drop-shadow-xl
                        transform transition-transform duration-300 
                        group-hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                        transform: 'translateZ(20px)'
                      }}
                    />
                    {/* Subtle reflection effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t 
                      from-pink-100/30 to-transparent opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold text-2xl tracking-wider text-pink-600 
                  hover:text-pink-700 transition-colors duration-300 drop-shadow-sm 
                  leading-tight">
                  KALP SOCIETY
                </div>
                <div className="text-sm font-medium tracking-wide font-devanagari 
                  leading-snug mt-1">
                  <span className="text-gray-600">सं</span>
                  <span className="text-pink-600">कल्प</span>
                  <span className="text-gray-600"> से सशक्त नारी, सहयोग से समृद्ध </span>
                  <span className="text-pink-600">समाज</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.subItems ? (
                    <div className="flex items-center cursor-pointer group">
                      <div className="flex items-center space-x-2 py-2 transform 
                        hover:translate-y-[-2px] transition-all duration-300 hover:text-pink-800">
                        {item.icon}
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 
                          transition-transform duration-300" />
                      </div>
                      
                      {/* Dropdown for Events */}
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg 
                        shadow-lg opacity-0 invisible group-hover:opacity-100 
                        group-hover:visible transition-all duration-300 transform 
                        group-hover:translate-y-0 translate-y-[-10px] border border-pink-100">
                        <div className="py-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-pink-600 hover:bg-pink-50 
                                hover:text-pink-800 transition-colors duration-200"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 py-2 transform 
                        hover:translate-y-[-2px] transition-all duration-300 
                        hover:text-pink-800 font-medium"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`absolute h-0.5 w-6 bg-pink-600 transform transition-all duration-300 
                      ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-6 bg-pink-600 transform transition-all duration-300 
                      ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-6 bg-pink-600 transform transition-all duration-300 
                      ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-white border-b border-pink-100 shadow-lg 
            transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={toggleEvents}
                      className="w-full flex items-center px-4 py-3 rounded-md text-pink-600 
                        hover:bg-pink-50 transition-colors duration-300"
                    >
                      {item.icon}
                      <span className="ml-2 font-medium">{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 ml-auto transform transition-transform duration-300 
                          ${isEventsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`pl-4 space-y-1 transition-all duration-300 
                      ${isEventsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} 
                      overflow-hidden`}>
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-pink-600 hover:bg-pink-50 
                            rounded-md transition-colors duration-300"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-md text-pink-600 
                      hover:bg-pink-50 transition-colors duration-300"
                  >
                    {item.icon}
                    <span className="ml-2 font-medium">{item.title}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;