import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="p-10 bg-gray-800 text-white text-center">
      <div className="flex justify-center space-x-6">
        <a href="https://twitter.com" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://facebook.com" className="hover:text-blue-600">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://instagram.com" className="hover:text-pink-500">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p className="mt-4">© 2023 MH-Changa. All rights reserved.</p>
    </div>
  );
};

export default Footer;