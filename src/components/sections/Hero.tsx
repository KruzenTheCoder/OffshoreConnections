"use client";

import { motion, Variants, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Calculator from "./Calculator";
import Image from "next/image";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 200,
    mass: 0.2,
    restDelta: 0.0001
  });

  // Parallax transforms for background orbs
  const orbY1 = useTransform(smoothProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(smoothProgress, [0, 1], [0, -80]);
  const orbScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 1.3]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.6, 1], [0, 0, -50]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRefA.current && videoRefA.current.duration) {
      videoRefA.current.currentTime = latest * videoRefA.current.duration;
    }
    if (videoRefB.current && videoRefB.current.duration) {
      videoRefB.current.currentTime = latest * videoRefB.current.duration;
    }
  });

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center pt-24 pb-16">
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

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <motion.div 
            style={{ y: orbY1, scale: orbScale }}
            className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-glow-pulse"
          />
          <motion.div 
            style={{ y: orbY2 }}
            className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-glow-pulse animation-delay-2000"
          />
          <motion.div 
            style={{ y: orbY1 }}
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-200/15 rounded-full blur-2xl animate-float"
          />
        </div>

        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          
            {/* Left Column */}
            <div className="max-w-2xl relative z-20">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide mb-8 shadow-lg shadow-blue-500/20 group"
              >
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>UK to South Africa Talent Pipeline</span>
                <Sparkles className="w-3.5 h-3.5 opacity-70" />
              </motion.div>
            
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#1e293b]">
                <TypewriterTitle title="World-Class Talent." as="div" />
                <TypewriterTitle title="Fraction of the Cost." as="div" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 animate-gradient-shift mt-2" delay={0.6} />
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
                  <Button size="lg" className="w-full flex items-center justify-center space-x-2 group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white border-none rounded-full px-8 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                    <span className="font-semibold">Book a 15-Min Call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full flex items-center justify-center border-2 border-slate-300 text-slate-700 hover:bg-white/80 hover:text-blue-600 hover:border-blue-300 rounded-full px-8 bg-white/50 backdrop-blur-sm transition-all duration-300">
                    <span className="font-semibold">See Pricing & Save</span>
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="mt-12 flex items-center space-x-6 text-sm text-slate-500"
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
                  <video 
                    ref={videoRefA}
                    src="/heroanimatedclean.webm" 
                    className="w-full h-full object-contain drop-shadow-2xl z-10"
                    muted 
                    playsInline 
                    preload="auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl -z-10 animate-glow-pulse"></div>
                </div>
              </motion.div>

              {/* Floating Calculator (Peer) */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="peer relative z-20 w-full max-w-[420px] lg:ml-auto lg:-mr-12 mt-40 lg:mt-0 bg-white/90 rounded-[2rem] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_-12px_rgba(59,130,246,0.2)] hover:bg-white p-8 border border-white/60 backdrop-blur-xl transition-all duration-500 ease-out group"
              >
                {/* Shimmer top border */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />
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
                  <video 
                    ref={videoRefB}
                    src="/heroanimatedclean.webm" 
                    className="w-full h-full object-contain drop-shadow-2xl z-10"
                    muted 
                    playsInline 
                    preload="auto"
                  />
                </div>
              </motion.div>
            
              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 text-cyan-500 opacity-50 hidden lg:block z-0"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-5 hidden lg:block z-0"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-32 left-0 hidden lg:block z-0"
              >
                <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50" />
              </motion.div>
            </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}