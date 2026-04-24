"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tiers = [
  {
    name: "Starter",
    desc: "Perfect for testing the waters with a single offshore team member.",
    price: "£499",
    features: [
      "1 Dedicated Professional",
      "Standard Vetting & Screening",
      "Email & Chat Support",
      "Monthly Performance Check-in",
    ],
    popular: false,
  },
  {
    name: "Growth",
    desc: "Ideal for growing teams looking to scale multiple roles efficiently.",
    price: "£1,299",
    features: [
      "Up to 3 Dedicated Professionals",
      "Advanced Vetting (Skills Tests)",
      "Priority Support (Slack/Teams)",
      "Bi-weekly Strategy Syncs",
      "Replacement Guarantee",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for companies building entire offshore departments.",
    price: "Custom",
    features: [
      "Unlimited Placements",
      "Bespoke Recruitment Process",
      "24/7 Dedicated Account Manager",
      "Full HR & Payroll Compliance",
      "Custom Onboarding & Training",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative py-32 bg-[#eaf4fc] min-h-screen overflow-hidden">
      {/* Background Soft Circles / Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full border-[60px] border-[#d4eefa] opacity-50"></div>
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-[#c1e8f9] opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#dcf1fb] rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-6 shadow-sm"
          >
            <Zap className="w-4 h-4" />
            <span>Pricing</span>
          </motion.div>
          <TypewriterTitle
            as="h1"
            title="Simple, Transparent Pricing"
            className="text-5xl sm:text-6xl font-extrabold text-[#1e293b] mb-6 tracking-tight leading-[1.1]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-600 mb-10 font-medium"
          >
            Unlike traditional Employer of Record (EoR) providers, we don&apos;t charge ongoing percentage markups on salaries. You pay a flat fee and save more.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center space-x-4 bg-white/60 backdrop-blur-md border border-white p-2 rounded-full shadow-sm max-w-fit mx-auto"
          >
            <span className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${!annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#3b82f6] transition-colors focus:outline-none shadow-inner"
            >
              <span
                className={`${
                  annual ? "translate-x-6" : "translate-x-1"
                } inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm`}
              />
            </button>
            <span className={`text-sm font-bold px-4 py-2 rounded-full transition-all flex items-center ${annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}>
              Annually <span className="text-green-600 text-xs ml-2 bg-green-100 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <ScrollReveal key={tier.name} delay={0.4 + idx * 0.1}>
              <div
                className={`relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border h-full flex flex-col ${
                  tier.popular 
                    ? "border-blue-400 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] ring-1 ring-blue-400/50" 
                    : "border-white shadow-[0_20px_50px_-12px_rgba(15,74,138,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(15,74,138,0.15)]"
                } transition-all duration-300 hover:-translate-y-2 group overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 via-[#3b82f6] to-blue-400"></div>
                )}
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 z-10">
                    <span className="bg-gradient-to-r from-[#0f4a8a] to-[#3b82f6] text-white text-xs font-black tracking-widest py-1.5 px-5 rounded-full uppercase shadow-md shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100 transition-colors duration-500"></div>

                <h3 className="text-3xl font-extrabold text-slate-900 mb-3">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-8 h-12 leading-relaxed font-medium">{tier.desc}</p>
                
                <div className="mb-10 flex items-end">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    {tier.price === "Custom" ? tier.price : annual ? `£${(parseInt(tier.price.replace(/\D/g, "")) * 0.8).toLocaleString()}` : tier.price}
                  </span>
                  {tier.price !== "Custom" && <span className="text-slate-500 font-bold mb-2 ml-1">/mo</span>}
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                      </div>
                      <span className="text-slate-700 text-sm font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full rounded-full font-bold shadow-lg transition-all mt-auto ${
                    tier.popular 
                      ? "bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-blue-500/25" 
                      : "bg-white text-slate-900 border-2 border-slate-200 hover:border-[#3b82f6] hover:text-[#3b82f6]"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}