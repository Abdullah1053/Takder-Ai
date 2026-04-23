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
  LineChart,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  FileText,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="relative min-h-screen selection:bg-brand-500/30 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-brand-500/20">
               <span className="text-slate-950 font-black text-2xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">Takder‑Ai</span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Neural Intelligence</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
             <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
                <a href="#tech" className="hover:text-white transition-colors">Architecture</a>
             </div>
             <Link 
              href="/dashboard"
              className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-400 transition-all active:scale-95 shadow-xl shadow-white/5"
             >
                Launch App
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="relative pt-44 pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full"
              >
                 <Sparkles size={16} className="text-brand-400 animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-300">Enterprise Contextual RAG v2.0</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[9rem] font-black tracking-tighter text-white leading-[0.8] uppercase"
              >
                Turn Data <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-white to-emerald-400 underline decoration-brand-500/20 underline-offset-[20px]">
                  Into Wisdom.
                </span>
              </motion.h1>

              <motion.p 
                {...fadeInUp}
                className="text-slate-400 text-xl md:text-2xl max-w-xl font-medium leading-relaxed"
              >
                Takder‑Ai is a specialized intelligence engine that transforms fragmented PDFs and notes into a private, searchable knowledge ecosystem. 
              </motion.p>

              <motion.div {...fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <Link 
                  href="/dashboard"
                  className="px-10 py-5 bg-brand-500 text-slate-950 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-brand-400 transition-all shadow-[0_20px_50px_rgba(14,165,233,0.2)] flex items-center gap-3 group"
                >
                  Start Building <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <button className="px-10 py-5 glass rounded-2xl font-black text-lg text-white hover:bg-slate-900 transition-all flex items-center gap-3">
                   <Terminal size={20} className="text-brand-400" /> System Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, rotateY: 20 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
               {/* "Specialist Tool" Widget Mockup */}
               <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                     <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-white/5 pb-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                                 <Cpu size={24} />
                              </div>
                              <div>
                                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Processing Node</div>
                                 <div className="text-white font-black">takder-node-01</div>
                              </div>
                           </div>
                           <div className="flex gap-1.5 focus:outline-none">
                              <div className="w-3 h-3 rounded-full bg-slate-800" />
                              <div className="w-3 h-3 rounded-full bg-slate-800" />
                              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                              <div className="flex justify-between items-center mb-3">
                                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Query</span>
                                 <span className="text-xs font-mono text-brand-400 opacity-60">Confidence 0.992</span>
                              </div>
                              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "88%" }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className="h-full bg-brand-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                                 />
                              </div>
                           </div>

                           <div className="p-5 glass rounded-2xl border-white/5 space-y-4 relative overflow-hidden group/card">
                              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover/card:opacity-10 transition-opacity">
                                 <FileText size={40} />
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Database size={16} />
                                 </div>
                                 <span className="text-[10px] font-black uppercase text-white tracking-widest">Vector Source Link</span>
                              </div>
                              <p className="text-slate-400 text-sm leading-relaxed italic">
                                "According to page 43 of the engineering doc, the neural weight adjustment is calibrated at..."
                              </p>
                              <div className="flex items-center gap-2 pt-2">
                                 <div className="px-2 py-1 bg-brand-500/10 rounded text-[8px] font-black text-brand-400 uppercase tracking-widest border border-brand-500/20">citation.pdf</div>
                                 <div className="px-2 py-1 bg-slate-800 rounded text-[8px] font-black text-slate-400 uppercase tracking-widest border border-white/5">ts_172.4s</div>
                              </div>
                           </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] font-mono">
                           <span>Latency: 42ms</span>
                           <span>Gemini-1.5-Flash</span>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Impactful Typography */}
      <section id="features" className="py-32 px-6 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-[12px] font-black text-brand-500 uppercase tracking-[0.5em] block">Capabilities</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                Engineered for <br/> <span className="text-slate-600">Context.</span>
              </h2>
            </motion.div>
            <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
              Classical search finds words. Takder‑Ai finds concepts, relationships, and nuanced meaning within your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Upload className="text-emerald-400" />, title: "Elastic Ingestion", desc: "Our pipeline handles messy PDFs, sprawling notes, and multi-format research data with ease." },
              { icon: <Search className="text-brand-400" />, title: "Neural Retrieval", desc: "Leverage advanced vector similarity search to find exactly what you need, even if the keywords don't match." },
              { icon: <Lock className="text-purple-400" />, title: "Sovereign Privacy", desc: "Your data is handled within a secure cluster. We prioritize confidentiality with enterprise-grade isolation." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white shadow-[0_0_30px_rgba(255,255,255,0.02)] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-10 glass rounded-[32px] h-full border-white/5 hover:border-brand-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 shadow-inner ring-1 ring-white/5 transition-transform group-hover:-translate-y-2 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed transition-colors group-hover:text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RAG Workflow Section - Technical Simulation */}
      <section id="workflow" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-dark rounded-[48px] p-6 md:p-12 border-slate-800 relative z-10">
                 <div className="space-y-12">
                    {[
                      { step: "01", icon: <Upload />, color: "emerald", label: "Ingestion & Parse", desc: "Data is normalized, cleaned, and semantically partitioned into high-entropy chunks." },
                      { step: "02", icon: <Layers />, color: "brand", label: "Vector Forge", desc: "Chunks are embedded into 1536-dimensional space using Google's frontier embedding models." },
                      { step: "03", icon: <Zap />, color: "purple", label: "Neural Retrieval", desc: "Semantic queries find context across millions of vectors in sub-20ms." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="relative flex flex-col items-center">
                            <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 ring-1 ring-${item.color}-400/20 group-hover:scale-110 transition-transform`}>
                               {item.icon}
                            </div>
                            {i !== 2 && <div className="w-px flex-1 bg-gradient-to-b from-slate-800 to-transparent my-4" />}
                         </div>
                         <div className="space-y-2 pb-6">
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em]">{item.step}</span>
                              <h4 className="text-xl font-black text-white uppercase italic tracking-tight">{item.label}</h4>
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
               <motion.div {...fadeInUp} className="space-y-6">
                 <span className="text-[12px] font-black text-brand-500 uppercase tracking-[0.5em] block">Architecture</span>
                 <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase">The <br/> Neural <br/> <span className="text-emerald-500 italic">Engine.</span></h2>
                 <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">
                   Our RAG pipeline is optimized for speed and semantic grounding, ensuring every AI response is verified against your source documents.
                 </p>
               </motion.div>
               <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-4 group"
               >
                 View Infrastructure <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner - Marquee Style */}
      <section id="tech" className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-white/5">
        <div className="absolute inset-0 bg-noise opacity-5 grayscale" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-around items-center gap-x-12 gap-y-16 opacity-40 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" alt="Next.js" /></div>
               <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Next.js 15+</span>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-400/20"><Workflow size={24} /></div>
               <span className="text-2xl font-black tracking-tighter text-white uppercase italic">LangChain OS</span>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400 border border-brand-400/20"><Zap size={24} /></div>
               <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Gemini Flash</span>
             </div>
             <div className="flex items-center gap-4 text-blue-400">
               <DatabaseZap size={28} />
               <span className="text-2xl font-black tracking-tighter text-white uppercase italic">pgVector DB</span>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Aggressive Impact */}
      <section className="py-44 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-none uppercase"
          >
            Ready for <br/> <span className="text-brand-400 stroke-text">Clarity?</span>
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <Link 
              href="/dashboard"
              className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 rounded-3xl font-black text-2xl uppercase tracking-tighter hover:bg-brand-500 transition-all shadow-[0_30px_70px_rgba(255,255,255,0.05)] active:scale-95 group"
            >
              Access Engine <ChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            <span className="flex items-center gap-2 underline decoration-brand-500/20 underline-offset-4"><Globe size={12}/> Global Cloud</span>
            <span className="flex items-center gap-2 underline decoration-brand-500/20 underline-offset-4"><ShieldCheck size={12}/> SOC2 Ready</span>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-24 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                   <span className="text-slate-950 font-black text-2xl">T</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-white italic uppercase">Takder‑Ai</span>
              </div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                The leading neural architecture for high-precision knowledge retrieval. Secure, private, and precise.
              </p>
            </div>
            
            <div className="space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">System</h5>
               <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-600">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Neural Search</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Cloud Ingest</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">API Protocols</a></li>
               </ul>
            </div>

            <div className="space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Organization</h5>
               <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-600">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Safety Board</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Research</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Global Ops</a></li>
               </ul>
            </div>

            <div className="space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Status</h5>
               <div className="px-4 py-3 glass rounded-xl border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">All Systems Nominal</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse transition-all ring-4 ring-emerald-500/10" />
               </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-slate-800">
             <div>© 2024 Takder‑Ai Technologies Corp. All Global Rights Reserved.</div>
             <div className="flex gap-10">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy.Protocol</span>
                <span className="hover:text-white cursor-pointer transition-colors">Security.Log</span>
             </div>
          </div>
        </div>
      </footer>

      {/* SVG Filters & Utilities */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        ::selection {
          background-color: #0ea5e9;
          color: white;
        }
      `}</style>
    </div>
  );
}

function DatabaseZap({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-database-zap"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/>
    </svg>
  );
}
