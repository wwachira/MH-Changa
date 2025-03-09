import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
  const logos = ["logo1.png", "logo2.png", "logo3.png"]; // Add your logo paths here

  return (
    <div className="p-10 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Supported By</h2>
      <div className="flex justify-center mt-6 space-x-8">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Logo"
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