"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Database, 
  Cpu, 
  FileText, 
  Code2, 
  Layers, 
  Terminal,
  ShieldCheck,
  Zap,
  Search,
  MessageSquare,
  Upload,
  ArrowRight,
  Globe,
  Lock,
  ArrowUpRight,
  Activity,
  History,
  Workflow,
  Sparkles,
  Command,
  DatabaseZap,
  Network
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const skewX = useTransform(springScroll, [0, 0.5], [0, -2]);
  const rotateY = useTransform(springScroll, [0, 0.5], [0, 5]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  } as const;

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-sky-500/30 overflow-x-hidden" ref={containerRef}>
      {/* Immersive Background System */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-40" />
      </div>

      {/* Navigation - High Precision */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-4 md:px-8 ${scrolled ? "pt-4" : "pt-10"}`}>
        <div className={`max-w-[1400px] mx-auto flex justify-between items-center px-8 py-4 rounded-[28px] transition-all duration-700 glass-card ${
          scrolled ? "bg-black/60 border-white/10" : "bg-transparent border-transparent"
        }`}>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-1000">
               <div className="absolute inset-0 bg-white rounded-2xl rotate-12 group-hover:rotate-0 transition-transform" />
               <span className="relative text-black font-black text-2xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">TAKDER</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-sky-500 uppercase mt-1">Intelligence v16.2.4</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              <a href="#workflow" className="hover:text-white transition-colors">Neural Logic</a>
              <a href="#assets" className="hover:text-white transition-colors">Proprietary Assets</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Expansion</a>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <a href="/dashboard" className="px-8 py-3 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-sky-400 transition-all active:scale-95 shadow-lg shadow-white/5">
              Access Pipeline
            </a>
          </div>
          
          <button className="lg:hidden w-10 h-10 rounded-xl glass flex flex-col gap-1.5 items-center justify-center">
            <div className="w-5 h-px bg-white" />
            <div className="w-5 h-px bg-white" />
          </button>
        </div>
      </nav>

      {/* Hero Section - Heavy Editorial Impact */}
      <section className="relative pt-64 pb-40 px-6">
        <motion.div 
          style={{ skewX, rotateY }}
          className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-24 items-start"
        >
          <div className="xl:col-span-12 2xl:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-emerald-400"
            >
               <DatabaseZap size={20} className="animate-pulse" />
               <span className="text-[11px] font-black uppercase tracking-[0.5em] border-b border-emerald-400/30 pb-1">Fully Sovereign Indexing</span>
            </motion.div>

            <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter text-white leading-[0.75] uppercase">
              Decode <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-emerald-400">Chaos.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-20">
               <p className="text-slate-400 text-xl font-medium leading-[1.6] border-l-2 border-sky-500/30 pl-8">
                 Takder‑Ai standardizes proprietary knowledge into accessible neural ecosystems. 
                 Upload fragmented PDFs and notes; retrieve mathematically grounded insights.
               </p>
               <div className="space-y-8">
                  <div className="flex gap-10">
                     <div className="flex flex-col">
                        <span className="text-3xl font-black text-white font-mono tracking-tighter italic">25.4k</span>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-2">Pages/Sec Peak</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-3xl font-black text-white font-mono tracking-tighter italic">Zero</span>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-2">External Training</span>
                     </div>
                  </div>
                  <button className="w-full py-5 bg-gradient-to-r from-white to-slate-300 text-black rounded-2xl font-black text-lg uppercase tracking-tighter flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.05)] group">
                    Initialize System <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Row */}
        <div className="mt-40 border-y border-white/5 py-10 bg-white/[0.01] overflow-hidden whitespace-nowrap">
           <div className="flex animate-marquee gap-20 items-center min-w-full italic font-black text-3xl text-slate-800 uppercase tracking-tighter">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex gap-20">
                  <span>Next.js 16.2.4</span>
                  <span className="text-sky-500/20">—</span>
                  <span>Google Gemini Flash</span>
                  <span className="text-sky-500/20">—</span>
                  <span>LangChain AI</span>
                  <span className="text-sky-500/20">—</span>
                  <span>Vector Indexing</span>
                  <span className="text-sky-500/20">—</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Feature Architecture - High Tech Bento */}
      <section id="assets" className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-24 gap-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3 text-sky-500">
                   <Command size={18} />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em]">Core Protocols</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic">Digital <br/> Sovereignty.</h2>
             </div>
             <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed hidden md:block">
               We don't just store data; we calculate its structural essence to provide sub-second retrieval across petabytes of local knowledge.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[900px]">
            {/* Main Feature - Neural Visual */}
            <div className="md:col-span-7 glass-card rounded-[48px] p-12 overflow-hidden relative group h-full flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-16 opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-1000 rotate-12 group-hover:rotate-0">
                  <Network size={400} />
               </div>
               <div className="space-y-10 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black">
                     <Cpu size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-white leading-none uppercase italic">Elastic <br/> Semantic Maps.</h3>
                  <p className="text-slate-400 text-xl max-w-md">Our proprietary indexing logic creates dynamic semantic relationships between isolated document fragments for 99.8% precision.</p>
               </div>
               <div className="mt-20 pt-10 border-t border-white/5 flex items-center gap-8 relative z-10">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800" />)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Active Pipeline Monitoring Integrated</span>
               </div>
            </div>

            {/* Side Column Bento */}
            <div className="md:col-span-5 flex flex-col gap-8 h-full">
               <div className="flex-1 glass-card rounded-[48px] p-10 flex flex-col justify-between group hover:bg-white/[0.03] transition-all">
                  <div className="flex justify-between items-start">
                     <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 border border-sky-500/20">
                        <ShieldCheck size={28} />
                     </div>
                     <ArrowUpRight className="text-slate-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div>
                     <h3 className="text-3xl font-black text-white mb-4 uppercase italic">Immutable Privacy.</h3>
                     <p className="text-slate-500 text-lg font-medium leading-relaxed">Enterprise-grade isolation. Your knowledge stays within your neural cluster. No leakage. Guaranteed.</p>
                  </div>
               </div>
               <div className="flex-1 bg-gradient-to-br from-emerald-500 to-emerald-800 rounded-[48px] p-10 flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-emerald-500/20">
                  <div className="absolute inset-0 bg-noise opacity-10 mix-blend-soft-light" />
                  <div className="flex justify-between items-start relative z-10">
                     <div className="w-14 h-14 bg-black/20 rounded-2xl flex items-center justify-center text-white border border-white/20">
                        <Zap size={28} />
                     </div>
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-3xl font-black text-white mb-4 uppercase italic leading-none">Instant <br/> Inference.</h3>
                     <p className="text-emerald-100/70 text-lg font-medium leading-relaxed">Sub-second generation latency powered by specialized quantized model orchestration.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow Engine - Visual Simulation */}
      <section id="workflow" className="py-40 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
              <div className="lg:col-span-5 space-y-12">
                 <div className="space-y-6">
                    <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.5em]">The Neural Engine</span>
                    <h2 className="text-7xl font-black tracking-tighter text-white leading-none uppercase">Optimized <br/> RAG Flow.</h2>
                 </div>
                 <div className="space-y-10">
                    {[
                      { icon: <Upload size={18}/>, title: "Deep Ingestion", desc: "Automated OCR and parsing of high-entropy document sources." },
                      { icon: <Layers size={18}/>, title: "Vector Forge", desc: "Conversion to high-dimensional tensors using specialized models." },
                      { icon: <Search size={18}/>, title: "Neural Retrieval", desc: "Similarity calculation via optimized PGVector operations." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 group-hover:text-sky-500 transition-colors shrink-0">{item.icon}</div>
                         <div className="space-y-2">
                            <h4 className="text-xl font-black text-white uppercase italic">{item.title}</h4>
                            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-7 relative">
                 <div className="absolute -inset-10 bg-sky-500/5 blur-[150px] rounded-full" />
                 {/* Visual Mockup - Very High Fidelity */}
                 <div className="relative glass-card rounded-[48px] p-2 rotate-1 shadow-2xl">
                    <div className="bg-black rounded-[44px] overflow-hidden border border-white/5 aspect-[16/10] flex flex-col">
                       <div className="h-16 border-b border-white/5 bg-white/[0.02] px-8 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                                <div className="w-3 h-3 rounded-full bg-slate-800" />
                             </div>
                             <div className="h-5 w-40 bg-slate-900 rounded-full flex items-center px-4 border border-white/5">
                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">Session_Active.log</span>
                             </div>
                          </div>
                          <div className="flex gap-2 text-sky-500 animate-pulse">
                             <Activity size={16} />
                          </div>
                       </div>
                       
                       <div className="flex-1 p-10 grid grid-cols-12 gap-10 overflow-hidden">
                          <div className="col-span-4 h-full border-r border-white/5 pr-10 space-y-6">
                             <div className="space-y-2">
                                <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest leading-loose">Source Assets</span>
                                <div className="p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl flex items-center gap-3">
                                   <FileText size={16} className="text-sky-400" />
                                   <div className="h-1.5 w-full bg-sky-400/20 rounded capitalize" />
                                </div>
                                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-3 opacity-30">
                                   <FileText size={16} />
                                   <div className="h-1.5 w-full bg-slate-800 rounded" />
                                </div>
                             </div>
                          </div>
                          <div className="col-span-8 space-y-8">
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 shrink-0" />
                                <div className="flex-1 p-5 bg-white/[0.02] border border-white/5 rounded-[24px] space-y-3">
                                   <div className="h-1.5 bg-slate-800 rounded-full w-full" />
                                   <div className="h-1.5 bg-slate-800 rounded-full w-2/3" />
                                </div>
                             </div>
                             <div className="flex gap-4 translate-y-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500 shrink-0 shadow-lg shadow-sky-500/20 overflow-hidden relative">
                                   <div className="absolute inset-0 bg-noise opacity-30" />
                                </div>
                                <div className="flex-1 p-8 glass border-sky-500/30 rounded-[32px] space-y-5 relative">
                                   <div className="space-y-3">
                                      <div className="h-1.5 bg-white/70 rounded-full w-full" />
                                      <div className="h-1.5 bg-white/70 rounded-full w-full" />
                                      <div className="h-1.5 bg-white/30 rounded-full w-4/5" />
                                   </div>
                                   <div className="pt-4 flex items-center justify-between">
                                      <div className="flex gap-2">
                                         <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[8px] font-black text-emerald-400 uppercase">Cit_01</div>
                                         <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[8px] font-black text-emerald-400 uppercase">Cit_04</div>
                                      </div>
                                      <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">Conf: 99.8%</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                       <div className="p-8 border-t border-white/5 mt-auto flex gap-4 items-center bg-white/[0.01]">
                          <div className="flex-1 h-14 bg-slate-900 border border-white/5 rounded-2xl flex items-center px-8 text-[11px] text-slate-500 font-medium">
                             Initialize query regarding proprietary infrastructure...
                          </div>
                          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black">
                             <ArrowRight size={24} />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing / Tiers Section */}
      <section id="roadmap" className="py-40 px-6">
        <div className="max-w-6xl mx-auto text-center mb-32 space-y-8">
           <span className="text-sky-500 font-black text-xs uppercase tracking-[0.6em]">System Scalability</span>
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic">Built to Grow.</h2>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { name: "Node", price: "$0", features: ["1,000 Page Index", "Standard Retrieval", "Community Support"], accent: "slate" },
             { name: "Cluster", price: "$299", features: ["50,000 Page Index", "Neural Routing", "Dedicated Database", "24/7 Support"], accent: "sky", popular: true },
             { name: "Sovereign", price: "Custom", features: ["Unlimited Indexing", "On-Prem Deployment", "Custom Model Tuning", "Whitelist Support"], accent: "emerald" }
           ].map((tier, i) => (
             <div key={i} className={`glass-card rounded-[48px] p-12 transition-all hover:scale-[1.02] h-full flex flex-col justify-between relative ${tier.popular ? "border-sky-500/40 ring-4 ring-sky-500/10" : ""}`}>
                {tier.popular && <div className="absolute top-0 right-10 -translate-y-1/2 px-6 py-2 bg-sky-500 rounded-full text-black font-black text-[10px] uppercase tracking-widest shadow-xl shadow-sky-500/20">Most Deployed</div>}
                <div className="space-y-10">
                   <div className="space-y-2 text-left">
                      <h4 className="text-4xl font-black text-white italic uppercase">{tier.name}</h4>
                      <div className="text-5xl font-black text-white tracking-tighter">
                         <span className="text-2xl font-medium text-slate-600 mr-1">{tier.price.startsWith('$') ? '' : ''}</span>{tier.price}
                      </div>
                   </div>
                   <div className="space-y-6 text-left border-t border-white/5 pt-10">
                      {tier.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-slate-400 font-medium">
                           <div className={`w-1.5 h-1.5 rounded-full bg-${tier.accent === 'slate' ? 'slate-700' : tier.accent === 'sky' ? 'sky-500' : 'emerald-500'}`} />
                           {f}
                        </div>
                      ))}
                   </div>
                </div>
                <button className={`mt-20 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${tier.accent === 'sky' ? 'bg-sky-500 text-black shadow-lg shadow-sky-500/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                   Initialize {tier.name}
                </button>
             </div>
           ))}
        </div>
      </section>

      {/* Footer - Final Polish */}
      <footer className="py-32 px-6 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
           <div className="lg:col-span-6 space-y-12">
              <div className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center text-black font-black text-3xl shadow-2xl shadow-white/5 transform rotate-3 group-hover:rotate-0 transition-all duration-500">T</div>
                <span className="text-4xl font-black tracking-tighter text-white uppercase italic">Takder‑Ai</span>
              </div>
              <p className="text-slate-500 text-2xl font-medium leading-relaxed max-w-lg">
                The standard for high-fidelity proprietary knowledge indexing and retrieval.
              </p>
              <div className="flex gap-4">
                 {[Globe, History, Database, ShieldCheck].map((Icon, i) => (
                   <div key={i} className="w-14 h-14 rounded-full glass flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer border-white/5 hover:border-sky-500/30">
                      <Icon size={24} />
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-8 text-left uppercase">
                 <h5 className="text-[10px] font-black tracking-[0.4em] text-slate-700">Protocols</h5>
                 <ul className="space-y-4 text-xs font-black text-slate-500">
                    <li><a href="#" className="hover:text-sky-500 transition-all">Neural Indexing</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">Privacy Shield</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">Direct Inference</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">pgvector 2.0</a></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left uppercase">
                 <h5 className="text-[10px] font-black tracking-[0.4em] text-slate-700">Company</h5>
                 <ul className="space-y-4 text-xs font-black text-slate-500">
                    <li><a href="#" className="hover:text-sky-500 transition-all">Network Status</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">Security Audit</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">Ethics Board</a></li>
                    <li><a href="#" className="hover:text-sky-500 transition-all">Press Assets</a></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left uppercase col-span-2 md:col-span-1">
                 <h5 className="text-[10px] font-black tracking-[0.4em] text-slate-700">Intelligence</h5>
                 <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="news@takder.ai" 
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-[10px] uppercase font-black tracking-widest outline-none focus:border-sky-500/50 transition-all"
                    />
                    <button className="absolute right-3 top-3 bottom-3 bg-white text-black px-5 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-sky-500 transition-all">Sync</button>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.5em] text-slate-800">
           <div>© 1999—2026 Takder‑Ai Technologies Corp. All Global Rights Reserved.</div>
           <div className="flex gap-12">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy.Protocol</span>
              <span className="hover:text-white cursor-pointer transition-colors">Security.Log</span>
              <span className="hover:text-white cursor-pointer transition-colors">Legal.Encrypted</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
