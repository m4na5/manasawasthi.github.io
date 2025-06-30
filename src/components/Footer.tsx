import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center justify-center md:justify-start">
              Made with{' '}
              <Heart size={16} className="text-red-500 mx-1 animate-pulse" />{' '}
              by Manas Awasthi
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved. Software Engineer | Kanpur, India
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;