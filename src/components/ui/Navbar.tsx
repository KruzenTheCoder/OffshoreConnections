"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <div className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 transition-all duration-300">
      <nav className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="flex justify-between items-center px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-[#0f4a8a]">
              Offshore Connections
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#0f4a8a] text-sm font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#0f4a8a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0d3c73] transition-colors shadow-md shadow-[#0f4a8a]/10"
            >
              Book a Call
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0f4a8a] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border border-slate-100 mt-2 rounded-2xl shadow-xl mx-auto max-w-6xl overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-[#0f4a8a] hover:bg-[#eaf4fc]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-4 rounded-xl text-base font-bold bg-[#0f4a8a] text-white text-center shadow-md shadow-[#0f4a8a]/10"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}