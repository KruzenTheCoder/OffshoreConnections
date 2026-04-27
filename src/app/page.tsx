import Hero from "@/components/sections/Hero";
import { Globe, Users, TrendingUp, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Subtle background orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="blur" className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <TypewriterTitle 
              as="h2" 
              title="Why Offshore with Us?" 
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6" 
            />
            <p className="text-lg text-slate-600 leading-relaxed">
              We connect UK businesses with elite South African talent. Enjoy cultural alignment, matching time zones, and massive cost savings.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-7 h-7 text-white" />,
                title: "Timezone & Culture",
                desc: "South Africa shares the UK timezone and a strong cultural affinity, ensuring seamless integration into your team.",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-white" />,
                title: "Cost Efficiency",
                desc: "Reduce your staffing costs by up to 70% without sacrificing quality or experience.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: <Users className="w-7 h-7 text-white" />,
                title: "Top-Tier Talent",
                desc: "Access a highly educated, English-speaking workforce experienced in tech, sales, and administration.",
                gradient: "from-blue-600 to-indigo-500",
              },
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} variant="slideUp">
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] transition-all duration-500 h-full relative overflow-hidden">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/30 transition-all duration-500 rounded-3xl" />
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Cost Savings" },
              { value: "50+", label: "UK Clients" },
              { value: "2hrs", label: "Timezone Overlap" },
              { value: "98%", label: "Retention Rate" },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} variant="scale">
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-slate-600 font-medium text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <ScrollReveal variant="blur" className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <TypewriterTitle 
            as="h2" 
            title="Ready to scale your team?" 
            className="text-4xl md:text-5xl font-bold text-white mb-6" 
          />
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s discuss your hiring needs and find the perfect match for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white border-none rounded-full px-10 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group">
              <span className="font-semibold">Schedule a Discovery Call</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}