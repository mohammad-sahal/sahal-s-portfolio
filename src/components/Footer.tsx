import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © {currentYear} Mohammad Sahal. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500" />
            <span>and</span>
            <Code size={16} className="ml-2 mr-1 text-blue-400" />
            <span>by Mohammad Sahal</span>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 pt-6 text-center">
          <p className="text-sm text-slate-400">
            Building innovative solutions with modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;