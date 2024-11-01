import React from 'react';

const AnnouncementMarquee = ({ announcements = [] }) => {
  const defaultAnnouncements = [
    "🎉 Join our upcoming Women Empowerment Workshop on November 15th!",
    "📢 New skill development program starting next month",
    "🌟 Successfully completed 100+ community programs",
    "💪 Empowering women in rural areas - Join our mission",
    "📚 Free education workshops every Sunday",
    "🤝 Partnership with 50+ NGOs across India"
  ];

  const displayAnnouncements = announcements.length > 0 ? announcements : defaultAnnouncements;

  return (
    <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-white">
      <div className="relative flex items-center h-10 overflow-hidden">
        {/* First Marquee */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee-fast whitespace-nowrap flex gap-6">
            {displayAnnouncements.map((text, index) => (
              <span
                key={index}
                className="inline-block px-4 py-1 rounded-full bg-pink-400/30 
                  hover:bg-pink-300/40 transition-colors duration-300 cursor-pointer 
                  text-sm font-medium hover:scale-105 transform"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Second Marquee (for seamless loop) */}
        <div className="flex-1 overflow-hidden absolute left-full">
          <div className="animate-marquee-fast whitespace-nowrap flex gap-6">
            {displayAnnouncements.map((text, index) => (
              <span
                key={index}
                className="inline-block px-4 py-1 rounded-full bg-pink-400/30 
                  hover:bg-pink-300/40 transition-colors duration-300 cursor-pointer 
                  text-sm font-medium hover:scale-105 transform"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AnnouncementMarquee;