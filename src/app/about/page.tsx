"use client";

import { motion, useInView } from "framer-motion";
import { Shield, Target, Users2, Zap } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-lg shadow-blue-500/20"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span>Our Mission</span>
            </motion.div>
            <TypewriterTitle
              as="h1"
              title="Connecting the UK with South Africa's Finest"
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              Offshore Connections was born out of a simple realization: UK businesses need highly skilled talent to grow, but local hiring costs are often prohibitive.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section ref={storyRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-4xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={storyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                    Our Story
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Founded by Daniel Prince, a recruitment veteran with years of experience navigating the complexities of global hiring. Daniel saw a unique opportunity in the South African market—a workforce that shares the UK&apos;s timezone, language, and cultural nuances, yet operates at a significantly lower cost basis.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Backed by investors who share our vision, Offshore Connections is an agile, transparent alternative to traditional EoR models. We eliminate the hidden markups and focus entirely on connecting you with the right people to drive your business forward.
                    </p>
                  </div>
                  <div className="mt-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">DP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Daniel Prince</p>
                      <p className="text-slate-500">Founder & CEO</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 min-h-[400px] lg:min-h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Daniel Prince</h3>
                    <p className="text-blue-100">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <TypewriterTitle
              as="h2"
              title="Our Core Values"
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by these principles. They shape our culture and drive our commitment to excellence.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Transparency", desc: "No hidden fees, no percentage markups. Just clear, honest pricing that builds trust." },
              { icon: Target, title: "Quality First", desc: "We do not compromise. Every candidate is rigorously vetted to ensure excellence." },
              { icon: Users2, title: "Partnership", desc: "We act as an extension of your team, dedicated to your long-term success." },
              { icon: Zap, title: "Agility", desc: "We move fast because we know that in business, timing is everything." },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] hover:border-blue-100 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-500">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TypewriterTitle
            as="h2"
            title="Ready to Transform Your Team?"
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          />
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let&apos;s discuss how we can help you build a world-class team while reducing costs by up to 70%.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 group inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.button>
        </ScrollReveal>
      </section>
    </div>
  );
}