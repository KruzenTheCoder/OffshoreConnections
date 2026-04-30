"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Calculator from "./Calculator";
import Image from "next/image";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use GPU-only transforms (translate3d, scale) — no spring wrapper for smoother perf
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -50]);

  // Character parallax
  const characterY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Image crossfade driven by scroll
  const img1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative lg:h-[250vh] w-full" style={{ position: "relative" }}>
      <div className="relative lg:sticky lg:top-0 min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden flex flex-col justify-start lg:justify-center pt-32 lg:pt-24 pb-16 will-change-transform">
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
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />
        </div>

        {/* Animated Background Orbs — simplified, GPU-composited */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <motion.div 
            style={{ y: orbY1, willChange: "transform" }}
            className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: orbY2, willChange: "transform" }}
            className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: orbY1, willChange: "transform" }}
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-200/15 rounded-full blur-2xl"
          />
        </div>

        <motion.div 
          style={{ opacity: contentOpacity, y: contentY, willChange: "transform, opacity" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
            {/* Left Column */}
            <div className="max-w-2xl relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide mb-6 lg:mb-8 shadow-lg shadow-blue-500/20 group"
              >
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>UK to South Africa Talent Pipeline</span>
                <Sparkles className="w-3.5 h-3.5 opacity-70" />
              </motion.div>
            
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.1] text-[#1e293b] w-full">
                <TypewriterTitle title="World-Class Talent." as="div" className="w-full" />
                <TypewriterTitle title="Fraction of the Cost." as="div" className="w-full bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 animate-gradient-shift mt-2" delay={0.6} />
              </h1>
            
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0"
              >
                Offshore Connections gives UK businesses direct access to skilled professionals in South Africa. Save up to 70% without compromising on quality, reliability, or results.
              </motion.p>
            
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto justify-center lg:justify-start"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full flex items-center justify-center space-x-2 group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white border-none rounded-full px-8 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                    <span className="font-semibold">Book a 15-Min Call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full flex items-center justify-center border-2 border-slate-300 text-slate-700 hover:bg-white/80 hover:text-blue-600 hover:border-blue-300 rounded-full px-8 bg-white/50 backdrop-blur-sm transition-all duration-300">
                    <span className="font-semibold">See Pricing &amp; Save</span>
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 w-full"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        {["DP", "JK", "SM", "AL"][i]}
                      </div>
                    ))}
                  </div>
                  <span className="font-medium">Trusted by 50+ UK businesses</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none">
            
              {/* Character images behind calculator — scroll crossfade */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ y: characterY, willChange: "transform" }}
                className="absolute -top-12 lg:top-auto lg:-left-8 z-10 w-[75%] lg:w-[88%] max-w-[320px] lg:max-w-[440px] pointer-events-none"
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/hero-illustration.png" alt="Character pose 1" width={440} height={440} className="object-contain drop-shadow-2xl" priority />
                  </motion.div>
                  <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/Hero3.png" alt="Character pose 2" width={440} height={440} className="object-contain drop-shadow-2xl" />
                  </motion.div>
                  <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/hero2.png" alt="Character pose 3" width={440} height={440} className="object-contain drop-shadow-2xl" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl -z-10"></div>
                </div>
              </motion.div>

              {/* Floating Calculator (Peer) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="peer relative z-20 w-full max-w-[380px] lg:max-w-[420px] lg:ml-auto lg:-mr-12 mt-32 lg:mt-0 bg-white/90 rounded-[2rem] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_-12px_rgba(59,130,246,0.2)] hover:bg-white p-6 lg:p-8 border border-white/60 backdrop-blur-xl transition-shadow duration-500 ease-out group mx-auto"
              >
                {/* Shimmer top border */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Cost Savings Calculator</h3>
                  <p className="text-sm text-slate-500">See how much you can save vs. UK hires.</p>
                </div>
                <Calculator />
              </motion.div>

              {/* Character overlay that fades on calculator hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ y: characterY, willChange: "transform" }}
                className="absolute -top-12 lg:top-auto lg:-left-8 z-30 w-[75%] lg:w-[88%] max-w-[320px] lg:max-w-[440px] pointer-events-none transition-opacity duration-500 ease-in-out peer-hover:opacity-0"
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/hero-illustration.png" alt="" width={440} height={440} className="object-contain drop-shadow-2xl" priority />
                  </motion.div>
                  <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/Hero3.png" alt="" width={440} height={440} className="object-contain drop-shadow-2xl" />
                  </motion.div>
                  <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0 flex items-center justify-center">
                    <Image src="/hero2.png" alt="" width={440} height={440} className="object-contain drop-shadow-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            
              {/* Decorative Floating Elements — CSS only, no JS animation loop */}
              <div className="absolute top-10 right-10 text-cyan-500 opacity-50 hidden lg:block z-0 animate-float">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              </div>

              <div className="absolute bottom-20 right-5 hidden lg:block z-0 animate-float-slow">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60" />
              </div>

              <div className="absolute top-32 left-0 hidden lg:block z-0 animate-float-delayed">
                <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50" />
              </div>
            </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}