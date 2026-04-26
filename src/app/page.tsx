"use client";

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Upload, 
  Lock, 
  Layers, 
  Cpu, 
  Database, 
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  FileText,
  ShieldCheck,
  Workflow,
  Github,
  Linkedin,
  Mail,
  Send,
  User,
  Info
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuth } from "@/context/auth-context";
import { LogOut, User as UserIcon, LayoutDashboard, LogIn } from "lucide-react";

export default function Home() {
  const { user, isLoading, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-500/30 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 1. Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-brand-500/20">
               <span className="text-white font-black text-2xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">Takder‑Ai</span>
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Neural Intelligence</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
             <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                <a href="#home" className="hover:text-brand-500 transition-colors">Home</a>
                <a href="#features" className="hover:text-brand-500 transition-colors">Features</a>
                <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
                <a href="#developer" className="hover:text-brand-500 transition-colors">Developer</a>
                <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
             </div>
              <div className="flex items-center gap-4">
                <ModeToggle />
                {isLoading ? (
                  <div className="w-20 h-8 bg-muted animate-pulse rounded-full" />
                ) : !user ? (
                  <Link 
                    href="/login"
                    className="px-6 py-2.5 bg-foreground text-background rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-foreground/5 flex items-center gap-2"
                  >
                    <LogIn size={14} /> Login
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link 
                      href="/dashboard"
                      className="px-6 py-2.5 bg-foreground text-background rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-foreground/5 flex items-center gap-2"
                    >
                      <LayoutDashboard size={14} /> Dashboard
                    </Link>
                    <button 
                      onClick={() => signOut()}
                      className="p-2.5 bg-card border border-border rounded-full text-muted-foreground hover:text-brand-500 transition-colors shadow-sm"
                      title="Logout"
                    >
                      <LogOut size={16} />
                    </button>
                  </div>
                )}
              </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative pt-44 pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full"
              >
                 <Sparkles size={16} className="text-brand-500 animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">Enterprise Contextual RAG v2.0</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.8] uppercase"
                >
                  Turn Raw Data <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-primary to-emerald-500">
                    Into Wisdom.
                  </span>
                </motion.h1>
              </div>

              <motion.p 
                {...fadeInUp}
                className="text-muted-foreground text-xl md:text-2xl max-w-xl font-medium leading-relaxed"
              >
                Takder‑Ai is the specialized intelligence engine for your corporate knowledge. Transform fragmented PDFs and notes into a private, searchable ecosystem. 
              </motion.p>

              <motion.div {...fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <Link 
                  href="/dashboard"
                  className="px-10 py-5 bg-brand-500 text-white rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-brand-600 transition-all shadow-[0_20px_50px_rgba(14,165,233,0.3)] flex items-center gap-3 group"
                >
                  Launch Engine <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="px-10 py-5 bg-accent/50 backdrop-blur-sm border border-border rounded-2xl font-black text-lg text-foreground hover:bg-accent transition-all flex items-center gap-3"
                >
                   Learn More
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
               {/* "Specialist Tool" Widget Mockup */}
               <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-[40px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                  <div className="relative bg-card/80 backdrop-blur-2xl border border-border rounded-[40px] p-8 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                     <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-border pb-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                 <Cpu size={24} />
                              </div>
                              <div>
                                 <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Neural Link</div>
                                 <div className="text-foreground font-black">active_session_42</div>
                              </div>
                           </div>
                           <div className="flex gap-1.5 focus:outline-none">
                              <div className="w-3 h-3 rounded-full bg-muted" />
                              <div className="w-3 h-3 rounded-full bg-muted" />
                              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="p-4 bg-background/50 rounded-2xl border border-border">
                              <div className="flex justify-between items-center mb-3">
                                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Retrieval Density</span>
                                 <span className="text-xs font-mono text-brand-600 dark:text-brand-400 opacity-60">98.4% Match</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "94%" }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className="h-full bg-brand-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                                 />
                              </div>
                           </div>

                           <div className="p-5 bg-accent/30 rounded-2xl border border-border space-y-4 relative overflow-hidden group/card shadow-sm">
                              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover/card:opacity-10 transition-opacity">
                                 <FileText size={40} />
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                    <Database size={16} />
                                 </div>
                                 <span className="text-[10px] font-black uppercase text-foreground tracking-widest">Grounding Source</span>
                              </div>
                              <p className="text-muted-foreground text-sm leading-relaxed italic">
                                &quot;The architectural blue print specifically mentions that the neural weights are stored in...&quot;
                              </p>
                              <div className="flex items-center gap-2 pt-2">
                                 <div className="px-2 py-1 bg-brand-500/10 rounded text-[8px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest border border-brand-500/20">doc_v2.pdf</div>
                                 <div className="px-2 py-1 bg-muted rounded text-[8px] font-black text-muted-foreground uppercase tracking-widest border border-border">p. 15</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Feature Section */}
      <section id="features" className="py-32 px-6 bg-accent/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-[12px] font-black text-brand-500 uppercase tracking-[0.5em] block">Core Capabilities</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85] uppercase italic">
                Beyond <br/> <span className="text-muted-foreground/40">Knowledge.</span>
              </h2>
            </motion.div>
            <p className="text-muted-foreground max-w-sm text-lg font-medium leading-relaxed">
              Classical search finds words. Takder‑Ai finds concepts, relationships, and nuanced meaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Upload className="text-emerald-500" />, title: "Elastic Ingestion", desc: "Our RAG pipeline handles messy PDFs and notes, extracting high-value semantic nodes automatically." },
              { icon: <Search className="text-brand-500" />, title: "Neural Retrieval", desc: "Leverage advanced vector similarity to find data even when keywords don't match exactly." },
              { icon: <Lock className="text-purple-500" />, title: "Sovereign Privacy", desc: "Enterprise-grade isolation for your documents. Your data stays private and never trains public models." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-background shadow-[0_0_30px_rgba(0,0,0,0.02)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-10 bg-card border border-border rounded-[32px] h-full hover:border-brand-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:-translate-y-2 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed transition-colors group-hover:text-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-brand-500/10 rounded-[60px] blur-3xl opacity-50 transition-all duration-1000 group-hover:opacity-100" />
               <div className="relative overflow-hidden rounded-[48px] border border-border aspect-square lg:aspect-video shadow-2xl">
                  <Image 
                    src="https://picsum.photos/seed/intelligence/1200/800" 
                    alt="Intelligence" 
                    fill 
                    className="object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="glass p-6 rounded-2xl border-white/5 backdrop-blur-xl">
                       <p className="text-white font-black italic text-lg leading-tight uppercase tracking-tighter">
                          &quot;The next evolution of AI isn&apos;t general; it&apos;s specific. It&apos;s about grounding intelligence in your reality.&quot;
                       </p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-10">
               <motion.div {...fadeInUp} className="space-y-6">
                 <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full">
                    <Info size={14} className="text-brand-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">The Context Era</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85] uppercase">Built for <br/><span className="text-brand-500 underline decoration-brand-500/20 underline-offset-8">Precision.</span></h2>
                 <p className="text-muted-foreground text-xl font-medium leading-relaxed">
                   Takder‑Ai was born out of the need for AI that actually knows what it&apos;s talking about. By combining Frontier LLMs with custom Vector storage, we provide a zero-hallucination environment for your most sensitive projects.
                 </p>
               </motion.div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <div className="text-4xl font-black text-foreground">0.0%</div>
                     <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Hallucination Rate</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-4xl font-black text-foreground">10X</div>
                     <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Retrieval Speed</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Developer Section */}
      <section id="developer" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
             <span className="text-[12px] font-black text-brand-500 uppercase tracking-[0.5em] block">The Architect</span>
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Curated by <br/><span className="text-muted-foreground/30">Intelligence.</span></h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
             <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                   <Image 
                    src="https://picsum.photos/seed/developer/400/400" 
                    alt="Developer" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                   />
                </div>
             </div>
             <div className="space-y-4">
                <div className="space-y-1">
                   <h3 className="text-3xl font-black tracking-tight text-foreground uppercase">Abdullah Mughni</h3>
                   <p className="text-muted-foreground font-black text-[10px] uppercase tracking-widest">Lead Engineer & Neural Architect</p>
                </div>
                <div className="flex justify-center gap-4">
                   <a 
                    href="https://github.com/abdullah-mughni" 
                    target="_blank" 
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-brand-500 transition-all active:scale-95 shadow-sm"
                   >
                     <Github size={20} />
                   </a>
                   <a 
                    href="https://linkedin.com/in/abdullah-mughni" 
                    target="_blank" 
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-brand-500 transition-all active:scale-95 shadow-sm"
                   >
                     <Linkedin size={20} />
                   </a>
                   <a 
                    href="mailto:contact@abdullah.me" 
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-brand-500 transition-all active:scale-95 shadow-sm"
                   >
                     <Mail size={20} />
                   </a>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Contact Us Section */}
      <section id="contact" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4">
             <span className="text-[12px] font-black text-brand-500 uppercase tracking-[0.5em] block hover:animate-pulse cursor-default">Establish Link</span>
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Get in <br/><span className="text-emerald-500 italic">Touch.</span></h2>
             <p className="text-muted-foreground font-medium text-lg pt-4">
               Ready to integrate neural intelligence into your workflow? Drop a signal below and our team will reach out.
             </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message intercepted. Protocol initialized.");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                 <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      placeholder="Neural Unit #1"
                      className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 pl-12 rounded-2xl font-medium transition-all shadow-sm"
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                 <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" size={16} />
                    <input 
                      type="email" 
                      placeholder="unit@network.com"
                      className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 pl-12 rounded-2xl font-medium transition-all shadow-sm"
                    />
                 </div>
              </div>
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Protocol Message</label>
               <textarea 
                  rows={4}
                  placeholder="How can we help you wisdom-ify your data?"
                  className="w-full bg-card border border-border focus:border-brand-500 outline-none p-5 rounded-3xl font-medium resize-none transition-all shadow-sm"
               />
            </div>
            <button className="w-full py-5 bg-foreground text-background font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-500 hover:text-white transition-all transform active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 group">
               Transmit Signal <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-32 px-6 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-16 text-center">
             <Link href="/" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-500/20 group-hover:rotate-12 transition-transform">
                   <span className="text-white font-black text-4xl italic">T</span>
                </div>
                <div className="space-y-1">
                   <span className="text-3xl font-black tracking-tighter text-foreground italic uppercase">Takder‑Ai</span>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">Neural Intelligence Engine</p>
                </div>
             </Link>

             <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                <a href="#home" className="hover:text-brand-500 transition-colors">Home</a>
                <a href="#features" className="hover:text-brand-500 transition-colors">Features</a>
                <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
                <a href="#developer" className="hover:text-brand-500 transition-colors">Developer</a>
                <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
             </div>

             <div className="w-full max-w-sm pt-8 border-t border-border mt-8">
                <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest leading-loose">
                   © 2024 Takder‑Ai Technologies Corp. <br/>
                   Crafted with precision for the era of context. <br/>
                   All rights reserved within the neural cluster.
                </p>
             </div>
          </div>
        </div>
      </footer>

      {/* SVG Filters & Utilities */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px hsl(var(--foreground) / 0.1);
          color: transparent;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .dark .glass {
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.02);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
