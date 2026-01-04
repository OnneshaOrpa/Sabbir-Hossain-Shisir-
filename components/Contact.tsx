
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out, Sabbir! Your message has been sent (Demo).');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Whether you have a question about science or a project to discuss, I'm just a click away."
        />
        
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[40px] space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <MessageSquare className="text-blue-500" /> Direct Info
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:shabbir0629@gmail.com" 
                  className="flex items-center justify-between p-5 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email Me</p>
                      <p className="text-slate-300 font-medium text-sm md:text-base">shabbir0629@gmail.com</p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" />
                </a>
                
                <a 
                  href="tel:01753495041" 
                  className="flex items-center justify-between p-5 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600/10 text-indigo-500 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Call Me</p>
                      <p className="text-slate-300 font-medium text-sm md:text-base">01753495041</p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-slate-600 group-hover:text-indigo-500 transition-colors" />
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Based in Dhaka, available for online collaborations worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-950/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[40px] space-y-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can I help you today?" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 transform active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Send Your Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
