
import React from 'react';
import { COMPANIES } from '../constants';
import SectionHeading from './SectionHeading';

const Companies: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Industry Impact" 
          subtitle="Collaborating with leading educational technology companies to redefine online learning."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {COMPANIES.map((company) => (
            <div 
              key={company.name} 
              className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl transition-all hover:border-blue-500/50 hover:bg-slate-800/80"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white p-2 flex-shrink-0">
                  <img src={company.image} alt={company.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">{company.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
