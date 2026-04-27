"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 transition-all duration-500"
    >
      <nav className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-2xl shadow-lg shadow-slate-900/5 py-2' 
          : 'bg-white/0 py-4'
      }`}>
        <div className="flex justify-between items-center px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 animate-gradient-shift"
              style={{ backgroundSize: "200% 200%" }}
            >
              Offshore Connections
            </motion.span>
          </Link>
          
          <div className="hidden md:flex space-x-1 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 text-slate-600 hover:text-[#0f4a8a] hover:bg-blue-50/50 group"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-2/3" />
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 group"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                isOpen ? 'bg-blue-100 text-blue-600' : 'text-slate-600 hover:text-[#0f4a8a] hover:bg-slate-100'
              } focus:outline-none`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm md:hidden -z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-white/90 backdrop-blur-2xl border border-white/60 mt-3 rounded-3xl shadow-2xl shadow-slate-900/10 mx-auto max-w-6xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3.5 rounded-2xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05, duration: 0.3, ease: "easeOut" }}
                  className="pt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 px-4 py-3.5 rounded-2xl text-base font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center shadow-lg shadow-blue-500/20"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}