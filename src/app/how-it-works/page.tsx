"use client";

import { motion } from "framer-motion";
import { Search, Users, Handshake, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "1. Discover & Define",
    desc: "We start with a quick discovery call to understand your business, culture, and the exact role you need to fill. We define the skills, experience, and budget.",
    details: ["15-minute discovery call", "Role profiling", "Budget alignment"],
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "2. Match & Interview",
    desc: "Our team taps into our pre-vetted South African talent pool. We present you with the top 2-3 candidates for you to interview directly.",
    details: ["Skills testing", "Background checks", "Direct interviews"],
  },
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "3. Onboard & Scale",
    desc: "Once you select your ideal candidate, we handle the HR, payroll, and compliance. Your new team member integrates directly into your workflows.",
    details: ["Equipment setup", "HR compliance", "Ongoing support"],
  },
];

export default function HowItWorks() {
  return (
    <div className="relative py-32 bg-[#eaf4fc] min-h-screen overflow-hidden">
      {/* Background Soft Circles / Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full border-[60px] border-[#d4eefa] opacity-50"></div>
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-[#c1e8f9] opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#dcf1fb] rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-6 shadow-sm"
          >
            <Rocket className="w-4 h-4" />
            <span>The Process</span>
          </motion.div>
          <TypewriterTitle
            as="h1"
            title="How It Works"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-600 font-medium"
          >
            We&apos;ve simplified offshore hiring. From discovery to onboarding, we handle the heavy lifting so you can focus on growth.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-300 via-[#3b82f6] to-blue-300 opacity-50 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <ScrollReveal
                key={step.title}
                delay={0.2}
                className={`relative flex items-center md:justify-between mb-24 last:mb-0 group ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#0f4a8a] rounded-full border-[6px] border-[#eaf4fc] shadow-xl flex items-center justify-center -translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-28 md:pl-0 ${idx % 2 !== 0 ? "md:pr-24 text-left md:text-right" : "md:pl-24 text-left"}`}>
                  <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] border border-white shadow-[0_20px_50px_-12px_rgba(15,74,138,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(15,74,138,0.2)] transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100 transition-colors duration-500"></div>
                    
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">{step.desc}</p>
                    
                    <ul className={`space-y-3 ${idx % 2 !== 0 ? "md:inline-flex flex-col items-start md:items-end text-left" : ""}`}>
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center text-base font-semibold text-slate-700 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-green-100 ${idx % 2 !== 0 ? "md:ml-3 mr-3 md:mr-0" : "mr-3"}`}>
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-[#0f4a8a] to-[#3b82f6] rounded-[3rem] p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-50%] right-[-10%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Ready to build your team?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Skip the traditional hiring headaches. Let us match you with world-class talent at a fraction of the cost.
            </p>
            <Link href="/contact" className="relative z-10 inline-block">
              <Button size="lg" className="bg-white text-[#0f4a8a] hover:bg-slate-50 border-none rounded-full px-10 py-6 text-lg shadow-xl group flex items-center space-x-2 font-bold">
                <span>Start Your Hiring Process</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}