'use client';
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Hiring Now: Web Development Interns
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              Crafting Digital <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Masterpieces
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build pixel-perfect, performant web applications that drive growth. 
              Join us to transform ideas into scalable reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Start Project <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-xl font-bold hover:border-slate-300 transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-linear-to-tr from-blue-600 to-indigo-700 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-900 rounded-[22px] overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center relative">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
                 <div className="text-center">
                    <div className="text-6xl mb-2">🚀</div>
                    <div className="text-slate-400 font-mono text-sm">Deployment Ready</div>
                 </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/20 blur-3xl -z-10 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;