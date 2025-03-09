import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
  const logos = [
    { name: 'WHO', src: 'https://www.who.int/images/default-source/fallback/logo.who.png' },
    { name: 'UNICEF', src: 'https://www.unicef.org/sites/default/files/styles/logo/public/UNICEF_Logo_Blue.png' },
    { name: 'Mind', src: 'https://www.mind.org.uk/media/10157/mind-logo.png' },
    { name: 'BetterHelp', src: 'https://www.betterhelp.com/images/betterhelp_logo.svg' },
    { name: 'Amref Health Africa', src: 'https://amref.org/wp-content/uploads/2020/04/Amref-Logo.png' },
    { name: 'BasicNeeds Kenya', src: 'https://basicneeds.org/wp-content/uploads/2021/03/BasicNeeds-Kenya-Logo.png' },
  ];

  return (
    <div className="p-10 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Supported By</h2>
      <div className="flex justify-center mt-6 space-x-8">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;