
import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Student Feedback" 
          subtitle="Success stories from students who have experienced my unique teaching methodology."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-[32px] border border-slate-800 relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-600/10 group-hover:text-blue-600/20 transition-colors" />
              <div className="flex items-center gap-4 mb-8">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full bg-slate-800 border-2 border-blue-600/30" />
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <p className="text-blue-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed italic">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
