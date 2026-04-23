"use client";

import { motion } from "motion/react";
import { 
  Database, 
  Cpu, 
  ChevronRight, 
  FileText, 
  Code2, 
  Layers, 
  Terminal,
  ExternalLink,
  ShieldCheck,
  Zap,
  Search,
  MessageSquare,
  Upload,
  ArrowRight,
  Globe,
  Lock
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-3" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-slate-900 font-black">T</div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-sky-400 transition-colors">Takder‑Ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <button className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-sky-500/20 active:scale-95">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl -z-10 opacity-50" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-600/10 blur-[100px] rounded-full -z-10" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-sky-400 text-[10px] uppercase font-black tracking-widest">v1.1 Now Production Ready</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            Your Knowledge, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Searchable.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Takder‑Ai turns your uploaded PDFs and notes into a private, 
            intelligent knowledge base. Ask questions in natural language and 
            get precise answers sourced directly from your documents.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-xl flex items-center justify-center gap-2 group">
              Get Started for Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Terminal size={20} className="text-sky-400" /> Watch Demo
            </button>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 relative mx-auto max-w-4xl border border-slate-800 bg-slate-900/50 rounded-3xl p-2 shadow-2xl shadow-sky-500/5 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-[22px] bg-slate-950 aspect-video flex flex-col">
              {/* Fake App UI Header */}
              <div className="h-12 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-900/40">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                <div className="mx-auto bg-slate-800/50 h-5 w-32 rounded-full" />
              </div>
              {/* Fake Content */}
              <div className="flex-1 p-8 flex gap-8">
                <div className="w-48 hidden md:block space-y-4">
                  <div className="h-4 bg-slate-900 rounded-lg w-full" />
                  <div className="h-4 bg-slate-900 rounded-lg w-3/4" />
                  <div className="pt-8 space-y-2">
                    <div className="h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl" />
                    <div className="h-12 bg-slate-900/50 border border-slate-800 rounded-xl" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex-shrink-0" />
                    <div className="h-20 bg-slate-900/50 rounded-2xl w-full p-4">
                      <div className="h-3 bg-slate-800 rounded w-full mb-3" />
                      <div className="h-3 bg-slate-800 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-500 flex-shrink-0" />
                    <div className="h-40 bg-sky-500/5 border border-sky-500/10 rounded-2xl w-full p-6">
                      <div className="h-3 bg-sky-400/20 rounded w-full mb-3" />
                      <div className="h-3 bg-sky-400/20 rounded w-full mb-3" />
                      <div className="h-3 bg-sky-400/20 rounded w-4/5 mb-3" />
                      <div className="mt-6 flex gap-2">
                        <div className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-md text-[10px] text-sky-400">source: project_proposal.pdf</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800 mt-auto bg-slate-900/40">
                <div className="bg-slate-950 border border-slate-800 rounded-full py-3 px-6 flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Ask anything about your documents...</span>
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-slate-950">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase italic">Built for Deep Understanding</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop scanning hundreds of pages manually. Let Takder-Ai index, 
            summarize, and navigate your documents for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Upload className="text-emerald-400" />, 
              title: "Seamless Ingestion", 
              desc: "Upload PDFs, Markdown, and handwritten notes. Our pipeline handles the heavy lifting of extraction." 
            },
            { 
              icon: <MessageSquare className="text-sky-400" />, 
              title: "Natural Dialogue", 
              desc: "Ask complex questions. Get grounded answers with direct citations from your own data." 
            },
            { 
              icon: <Search className="text-purple-400" />, 
              title: "Semantic Retrieval", 
              desc: "Traditional search finds keywords. We find meaning. Find exactly what you need even if the words don't match." 
            },
            { 
              icon: <Lock className="text-amber-400" />, 
              title: "Private & Secure", 
              desc: "Your data stays yours. Hosted within secure environments with full control over your knowledge base." 
            },
            { 
              icon: <Globe className="text-blue-400" />, 
              title: "Multi-Source Hub", 
              desc: "Consolidate information from various projects into a single searchable source of truth." 
            },
            { 
              icon: <Zap className="text-rose-400" />, 
              title: "Lightning Fast", 
              desc: "Built on top of Gemini 1.5 Flash for sub-second retrieval and generation speeds." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works (RAG Pipeline Visual) */}
      <section id="how-it-works" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-sky-400 text-xs font-black tracking-widest uppercase mb-4">The Engine</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1]">How RAG Transforms Your Data</h2>
              <div className="space-y-8">
                {[
                  { step: "01", label: "Upload & Parsing", desc: "Documents are split into semantic chunks using LangChain's advanced splitting logic." },
                  { step: "02", label: "Vector Embedding", desc: "Every chunk is converted into a mathematical vector representation using Google's embedding models." },
                  { step: "03", label: "Semantic Inquiry", desc: "When you ask a question, we find the most relevant chunks in the PostgreSQL vector store." },
                  { step: "04", label: "Grounded Generation", desc: "Gemini synthesizes an answer using ONLY your documents as context, ensuring accuracy." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="text-2xl font-black text-slate-800 group-hover:text-sky-500/50 transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/5 blur-[120px] rounded-full" />
              <div className="relative bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
                 <div className="grid grid-cols-1 gap-6">
                   <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-4">
                     <FileText size={24} className="text-emerald-400" />
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-black uppercase tracking-widest">Input</div>
                       <div className="text-white font-bold">Research_Paper.pdf</div>
                     </div>
                   </div>
                   <div className="flex justify-center">
                     <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-sky-400" />
                   </div>
                   <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-4">
                     <Layers size={24} className="text-sky-400" />
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-black uppercase tracking-widest">Vector Space</div>
                       <div className="text-white font-bold">pgvector Storage</div>
                     </div>
                   </div>
                   <div className="flex justify-center">
                     <div className="w-1 h-8 bg-gradient-to-b from-sky-400 to-purple-400" />
                   </div>
                   <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-4">
                     <MessageSquare size={24} className="text-purple-400" />
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-black uppercase tracking-widest">Output</div>
                       <div className="text-white font-bold">Contextual AI Insight</div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Footer Card */}
      <section id="tech" className="py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-20 rounded-[40px] border border-slate-800 relative text-center">
          <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12">
            <Code2 size={240} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-12">Built with the World's Most Powerful Stack</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" alt="Next.js" /></div>
               <span className="text-white font-bold text-xl">Next.js</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center p-2 text-emerald-950 font-black">L</div>
               <span className="text-white font-bold text-xl">LangChain</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center p-2 text-slate-950 font-black cursor-pointer"><Cpu /></div>
               <span className="text-white font-bold text-xl">Gemini Flash</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center p-2 text-white font-black whitespace-nowrap px-4 tracking-tighter font-serif">Postgres</div>
               <span className="text-white font-bold text-xl">pgvector</span>
             </div>
          </div>

          <div className="space-y-4">
            <button className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-sky-500/40">
              Start Building Your Knowledge Base
            </button>
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> No credit card required. Private document indexing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-sky-500/20">T</div>
              <span className="text-2xl font-black tracking-tighter text-white">Takder‑Ai</span>
            </div>
            <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-sky-400 transition-colors">Github</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Docs</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Pricing</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Twitter</a>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-700 tracking-[0.2em] uppercase font-bold">
            <div>© 2024 Takder‑Ai Technologies. All rights reserved.</div>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
