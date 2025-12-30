'use client';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Great</h2>
            <p className="text-slate-400">Reach out to start your next project with us.</p>
          </div>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center animate-in zoom-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-300">We'll get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-blue-400 hover:text-blue-300 font-medium">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                <input required type="text" placeholder="Last Name" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
              <textarea required rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;