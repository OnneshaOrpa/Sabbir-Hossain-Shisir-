
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub' }
  ];

  return (
    <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-black text-white tracking-tighter">
            SABBIR <span className="text-blue-500">HOSSAIN</span>
          </a>
          <p className="text-slate-500 mt-2 text-sm max-w-xs">
            BSc in Chemical Engineering, BUET. Turning Science into Creative Learning Experiences.
          </p>
        </div>
        
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href="#" 
              className="p-3 bg-slate-900 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Sabbir Hossain Shisir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
