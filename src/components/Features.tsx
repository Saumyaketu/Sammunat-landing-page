import React from 'react';
import { Code, Layout, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: <Code size={24} />,
    title: "Clean Architecture",
    desc: "We write scalable, maintainable code using the latest React patterns."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile First",
    desc: "Every pixel is optimized for mobile, tablet, and desktop screens."
  },
  {
    icon: <Globe size={24} />,
    title: "SEO Optimized",
    desc: "Built with Next.js SSR to ensure maximum visibility on search engines."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Sammunat?</h2>
          <p className="text-slate-600">
            We don't just build websites; we build comprehensive digital solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;