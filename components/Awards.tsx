
import React from 'react';
import { AWARDS } from '../constants';
import SectionHeading from './SectionHeading';
import { Award as AwardIcon } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Awards & Recognition" 
          subtitle="Honors earned through dedication to social change and educational excellence."
        />
        <div className="max-w-3xl mx-auto">
          {AWARDS.map((award, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-3xl group bg-slate-900 border border-slate-800 p-1"
            >
              <img 
                src={award.image} 
                alt={award.title} 
                className="w-full h-[400px] object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <AwardIcon className="text-yellow-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{award.title}</h3>
                </div>
                <p className="text-slate-300">Police Commissioner of RMP Recognition</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
