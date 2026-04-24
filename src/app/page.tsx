import Hero from "@/components/sections/Hero";
import { Globe, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <TypewriterTitle 
              as="h2" 
              title="Why Offshore with Us?" 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" 
            />
            <p className="text-lg text-slate-600">
              We connect UK businesses with elite South African talent. Enjoy cultural alignment, matching time zones, and massive cost savings.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Timezone & Culture",
                desc: "South Africa shares the UK timezone and a strong cultural affinity, ensuring seamless integration into your team.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Cost Efficiency",
                desc: "Reduce your staffing costs by up to 70% without sacrificing quality or experience.",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Top-Tier Talent",
                desc: "Access a highly educated, English-speaking workforce experienced in tech, sales, and administration.",
              },
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <ScrollReveal className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <TypewriterTitle 
            as="h2" 
            title="Ready to scale your team?" 
            className="text-4xl font-bold text-white mb-6" 
          />
          <p className="text-xl text-slate-300 mb-10">
            Let&apos;s discuss your hiring needs and find the perfect match for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 border-none">
              Schedule a Discovery Call
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}