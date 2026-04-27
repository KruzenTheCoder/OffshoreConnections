"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 mt-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 inline-block animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
              Offshore Connections
            </span>
            <p className="text-slate-400 max-w-sm mt-4 leading-relaxed">
              A powerful alternative to traditional hiring, giving UK businesses access to skilled remote talent from South Africa at a fraction of the cost, without compromising on quality, reliability, or results.
            </p>
            {/* Social proof */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                    {["DP", "JK", "SM"][i]}
                  </div>
                ))}
              </div>
              <span className="text-slate-500 text-sm">50+ happy clients</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Offshore Connections LTD. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Powered by <a href="#" className="text-blue-400 hover:text-cyan-300 transition-colors duration-200">KruzDev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}