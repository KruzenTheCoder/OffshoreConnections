"use client";

import { motion } from "framer-motion";
import { BookOpen, PlayCircle, FileText, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const resources = [
  {
    title: "The Ultimate Guide to Offshore Hiring",
    category: "E-Book",
    icon: BookOpen,
    desc: "Everything you need to know about building a remote team in South Africa, from compliance to onboarding.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-600"
  },
  {
    title: "Cost Comparison: UK vs South Africa",
    category: "Report",
    icon: FileText,
    desc: "A detailed breakdown of salaries, taxes, and operational costs comparing local UK hires with South African talent.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    text: "text-cyan-600"
  },
  {
    title: "Mastering Remote Team Culture",
    category: "Webinar",
    icon: PlayCircle,
    desc: "Watch our 45-minute masterclass on how to integrate offshore team members and maintain a strong company culture.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    text: "text-indigo-600"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#eaf4fc] pt-32 pb-24 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] rounded-full border-[40px] border-[#d4eefa] opacity-50"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-[#dcf1fb] rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-lg shadow-blue-500/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Hub</span>
          </motion.div>
          <TypewriterTitle
            as="h1"
            title="Knowledge Hub"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600 leading-relaxed font-medium"
          >
            Explore our library of guides, reports, and webinars designed to help you scale your business intelligently.
          </motion.p>
        </div>

        {/* Featured Resource */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden mb-20 border border-white/50 backdrop-blur-xl relative"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 w-max">
                Featured Guide
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                How to Build a High-Performing Offshore Team in 30 Days
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our comprehensive blueprint covers the exact steps, legal requirements, and best practices to seamlessly integrate South African talent into your UK operations.
              </p>
              <Link href="#" className="inline-flex items-center justify-center space-x-2 bg-[#0f4a8a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d3c73] transition-colors shadow-lg w-max group">
                <Download className="w-5 h-5" />
                <span>Download Free Guide</span>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] min-h-[300px] md:min-h-full flex items-center justify-center p-12 relative overflow-hidden">
               {/* 3D Illustration placeholder for the featured resource */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
               <div className="relative w-full max-w-[300px] aspect-[4/3] bg-white rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 flex flex-col p-6">
                 <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
                    <BookOpen size={24} />
                 </div>
                 <div className="h-4 bg-slate-100 rounded w-3/4 mb-3"></div>
                 <div className="h-4 bg-slate-100 rounded w-1/2 mb-8"></div>
                 <div className="mt-auto flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="h-8 bg-blue-50 rounded-full w-24"></div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <ScrollReveal key={resource.title} delay={0.4 + i * 0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.12)] border border-slate-100 hover:border-blue-100 transition-all duration-500 flex flex-col h-full group hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${resource.color} shadow-lg text-white`}>
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${resource.bg} ${resource.text}`}>
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {resource.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {resource.desc}
                </p>
                
                <Link href="#" className={`inline-flex items-center space-x-2 font-bold ${resource.text} group-hover:translate-x-1 transition-transform mt-auto`}>
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}