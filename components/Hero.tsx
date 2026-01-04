
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800/50 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            BSc in Chemical Engineering, BUET
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
            SABBIR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">HOSSAIN</span> <br />
            SHISIR
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Online Teacher & Creative Content Developer.
            <span className="block mt-4 text-white font-bold italic border-l-4 border-blue-600 pl-4">
              "Turning Science into Creative Learning Experiences"
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <a 
              href="#showcase" 
              className="group flex items-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/30"
            >
              Explore Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-5 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-white rounded-2xl font-bold transition-all border border-slate-800 hover:border-slate-700"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Visual Frame */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-[40px] blur-xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 p-2 bg-slate-900/50 backdrop-blur-2xl border border-slate-800 rounded-[42px] shadow-2xl overflow-hidden animate-float">
              <img 
                src={PROFILE_IMAGE} 
                alt="Sabbir Hossain Shisir" 
                className="w-[320px] h-[400px] md:w-[450px] md:h-[560px] object-cover rounded-[32px] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-slate-950/90 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-[32px] shadow-2xl z-20 border-b-4 border-b-blue-600 animate-in slide-in-from-left-8 duration-1000">
              <p className="text-blue-500 font-black text-3xl md:text-5xl tracking-tighter">7+</p>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">Years of Teaching</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block opacity-50">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
