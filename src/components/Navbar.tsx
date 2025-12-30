'use client';
import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Rocket size={20} />
            </div>
            Sammunat<span className="text-blue-600">.Dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Stories</Link>
            <Link href="#contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <Link href="#features" className="text-slate-600 py-2">Services</Link>
            <Link href="#about" className="text-slate-600 py-2">About</Link>
            <Link href="#contact" className="text-blue-600 font-semibold py-2">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;