'use client';
import React from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Praneeth ",
    role: "CTO at TechFlow",
    content: "The team at Sammunat transformed our legacy system into a high-speed Next.js application. Our user engagement increased by 40% immediately after launch.",
    initials: "P",
    color: "bg-orange-100 text-orange-600",
    rating: 4
  },
  {
    name: "Gourav",
    role: "Founder, StartUp Inc",
    content: "Incredible attention to detail. They didn't just write code; they optimized our entire architecture for scalability. Highly recommended for complex projects.",
    initials: "G",
    color: "bg-purple-100 text-purple-600",
    rating: 5
  },
  {
    name: "Rahul",
    role: "Product Manager",
    content: "Professional, timely, and technically brilliant. The mobile responsiveness of the site is flawless, and the performance scores are perfect.",
    initials: "R",
    color: "bg-blue-100 text-blue-600",
    rating: 4.5

  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      
      if (rating >= starValue) {
        return <Star key={index} size={16} fill="currentColor" className="text-yellow-400" />;
      } else if (rating >= starValue - 0.5) {
        return (
          <div key={index} className="relative">
              <Star size={16} className="text-slate-300" />
              
              <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                <Star size={16} fill="currentColor" className="text-yellow-400" />
              </div>
            </div>
        );
      } else {
        return <Star key={index} size={16} className="text-slate-300" />;
      }
    });
  };
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Success Stories</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">Trusted by Market Leaders</h2>
          <p className="text-slate-600">
            Don't just take our word for it. Here is what our partners have to say about working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              
              {/* Quote Icon Background Decoration */}
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-100 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {renderStars(item.rating)}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">
                "{item.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;