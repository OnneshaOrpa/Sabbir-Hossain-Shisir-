
import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <img 
                src="https://sirchem.my.canva.site/_assets/media/816b7bede00439561c2bcb179415414c.jpg" 
                alt="Sabbir Hossain Shisir Teaching" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="lg:col-span-7">
            <SectionHeading 
              title="A Creative Path in Science" 
              subtitle="Online Teacher & Creative Content Developer based in Dhaka, Bangladesh."
              centered={false}
            />
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
                Sabbir Hossain Shisir is an online educator, science communicator, and creative content developer with a strong academic background in Chemical Engineering from BUET. 
              </p>
              <p>
                He specializes in simplifying complex scientific concepts through engaging videos, live classes, reels, and motivational content. His work blends education, creativity, and digital storytelling to inspire students nationwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-slate-800">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-600/20">
                    <span className="text-blue-500 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">BUET Excellence</h4>
                    <p className="text-sm">BSc in Chemical Engineering academic rigor applied to online content.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-600/20">
                    <span className="text-indigo-500 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Nationwide Impact</h4>
                    <p className="text-sm">Inspiring thousands of students through simplified digital storytelling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
