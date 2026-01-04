
import React from 'react';
import { GALLERY } from '../constants';
import SectionHeading from './SectionHeading';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Creative Portfolio" 
          subtitle="A visual journey through my teaching sessions, content production, and professional highlights."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-bold tracking-widest uppercase rounded text-white mb-3">
                  Portfolio
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
