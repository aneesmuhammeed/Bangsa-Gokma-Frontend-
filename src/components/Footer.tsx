import React from 'react';
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-gray-400 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Bangsa Gokma Guest House provides comfortable accommodation with a touch of local hospitality in the heart of Ladakh.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Skayil Gokma</li>
              <li>Sumoor Nubra</li>
              <li>Leh Ladakh, 194401</li>
              <li>Phone: +91 123 456 7890</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@bangsagokma.com" className="hover:text-amber-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-neutral-800">
          <p className="text-sm">
            © {currentYear} Bangsa Gokma Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;