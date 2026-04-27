"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service_interest: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call to Supabase Edge Function
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="relative pt-32 pb-24 bg-[#eaf4fc] min-h-screen overflow-hidden">
      {/* Background Orbs/Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full border-[60px] border-[#d4eefa] opacity-50"></div>
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-[#c1e8f9] opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#dcf1fb] rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide mb-8 shadow-lg shadow-blue-500/20">
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>

            <TypewriterTitle
              as="h1"
              title="Let's Build Your Offshore Team"
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
              Whether you need a single dedicated professional or are looking to scale an entire department, we&apos;re here to help. Reach out and our team will be in touch within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 bg-white/60 p-4 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Call Us</p>
                  <p className="text-lg font-bold text-slate-800">+44 20 7123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/60 p-4 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-slate-800">hello@offshoreconnections.co.uk</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/60 p-4 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-lg font-bold text-slate-800">London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f4a8a] to-[#1e3a8a] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
              <Calendar className="w-8 h-8 mb-4 text-blue-300" />
              <h3 className="text-2xl font-bold mb-2">Prefer to jump straight in?</h3>
              <p className="text-blue-100 mb-6 text-sm font-medium">
                Skip the form and book a 15-minute discovery call directly on our calendar.
              </p>
              <Button className="w-full sm:w-auto bg-white text-[#0f4a8a] hover:bg-slate-50 rounded-full font-bold border-none group-hover:shadow-lg transition-all flex items-center space-x-2">
                <span>Book via Calendly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(15,74,138,0.15)] border border-white relative overflow-hidden"
          >
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 relative z-10"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
                    <p className="text-slate-500 text-sm">Fill out the details below and we&apos;ll get back to you shortly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Work Email *</label>
                      <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300"
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300"
                        placeholder="+44 20 7123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company Name *</label>
                      <input
                        {...register("company", { required: "Company is required" })}
                        className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300"
                        placeholder="Acme Corp"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">I&apos;m interested in hiring for:</label>
                    <select
                      {...register("service_interest")}
                      className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300 appearance-none"
                    >
                      <option value="Customer Support">Customer Support</option>
                      <option value="Admin & Data Entry">Admin & Data Entry</option>
                      <option value="Sales & SDR">Sales & SDR</option>
                      <option value="Recruitment">Recruitment</option>
                      <option value="Other">Other / Unsure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all hover:border-slate-300 resize-none"
                      placeholder="Tell us a bit about your current challenges and goals..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full flex items-center justify-center space-x-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full font-bold shadow-lg shadow-blue-500/25 transition-all group"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 relative"
                  >
                    <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-20"></div>
                    <CheckCircle2 className="w-12 h-12 text-green-500 relative z-10" />
                  </motion.div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-lg text-slate-600 mb-8 max-w-sm font-medium">
                    Thank you for reaching out. A member of our team will be in touch within 24 hours to discuss your hiring needs.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline"
                    className="rounded-full font-bold border-2 border-slate-200 hover:border-slate-300 text-slate-700"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
}