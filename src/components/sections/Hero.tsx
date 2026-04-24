"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Calculator from "./Calculator";
import Image from "next/image";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";

export default function Hero() {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/Hero-background-1.jpeg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="max-w-2xl relative z-20">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="inline-flex items-center space-x-2 bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8 shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span>UK to South Africa Talent Pipeline</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#1e293b]">
              <TypewriterTitle title="World-Class Talent." as="div" />
              <TypewriterTitle title="Fraction of the Cost." as="div" className="text-[#3b82f6] mt-2" delay={0.6} />
            </h1>
            
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium"
            >
              Offshore Connections gives UK businesses direct access to skilled professionals in South Africa. Save up to 70% without compromising on quality, reliability, or results.
            </motion.p>
            
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full flex items-center justify-center space-x-2 group bg-[#3b82f6] hover:bg-[#2563eb] text-white border-none rounded-full px-8 shadow-lg shadow-[#3b82f6]/20">
                  <span className="font-semibold">Book a 15-Min Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full flex items-center justify-center border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-[#0f4a8a] hover:border-[#0f4a8a] rounded-full px-8 bg-transparent transition-colors">
                  <span className="font-semibold">See Pricing & Save</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Man A (Behind Calculator) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
                scale: { duration: 1, ease: "easeOut", delay: 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              }}
              className="absolute lg:-left-8 z-10 w-[88%] max-w-[440px] pointer-events-none"
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                 <Image 
                   src="/hero-illustration.png?v=2" 
                   alt="3D character working on laptop" 
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                   className="object-contain drop-shadow-2xl z-10"
                   priority
                   unoptimized
                 />
                 <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
              </div>
            </motion.div>

            {/* Floating Calculator (Peer) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="peer relative z-20 w-full max-w-[420px] lg:ml-auto lg:-mr-12 mt-40 lg:mt-0 bg-white/90 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(15,74,138,0.15)] hover:bg-white p-8 border border-white/60 backdrop-blur-xl transition-all duration-500 ease-out"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Cost Savings Calculator</h3>
                <p className="text-sm text-slate-500">See how much you can save vs. UK hires.</p>
              </div>
              <Calculator />
            </motion.div>

            {/* Man B (In Front of Calculator - Fades on Hover) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
                scale: { duration: 1, ease: "easeOut", delay: 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              }}
              className="absolute lg:-left-8 z-30 w-[88%] max-w-[440px] pointer-events-none transition-opacity duration-500 ease-in-out peer-hover:opacity-0"
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                 <Image 
                   src="/hero-illustration.png?v=2" 
                   alt="3D character working on laptop" 
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                   className="object-contain drop-shadow-2xl z-10"
                   priority
                   unoptimized
                 />
              </div>
            </motion.div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 text-cyan-500 opacity-60 hidden lg:block z-0"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}