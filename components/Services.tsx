
import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="What I Do" 
          subtitle="Comprehensive services designed to elevate educational experiences and brand storytelling."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:bg-slate-800 hover:border-blue-500/50 transition-all transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {service.title}
              </h3>
              <div className="w-8 h-1 bg-slate-700 group-hover:w-16 group-hover:bg-blue-500 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
