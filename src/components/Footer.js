import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 text-xs text-gray-400 flex justify-between items-center">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>© Village AI, Inc 2024</span>
        <span className="ml-2">CalDRE# 02247723</span>
      </div>
      <div>
        <a href="mailto:team@usebramble.com" className="hover:underline">team@usebramble.com</a>
        <span className="mx-1">·</span>
        <a href="#" className="hover:underline">Terms of Use</a>
        <span className="mx-1">·</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span className="mx-1">·</span>
        <a href="#" className="hover:underline">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
