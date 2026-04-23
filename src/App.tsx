/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  Zap
} from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 md:p-8 flex flex-col gap-6 selection:bg-sky-500/30">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-700 pb-8 gap-6"
      >
        <div id="header-main-title">
          <div className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-3 underline decoration-sky-500/30 underline-offset-8">
            Source of Truth v1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-2">
            Takder‑Ai
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Next-generation RAG pipeline turning static PDFs and handwritten notes 
            into dynamic, searchable knowledge ecosystems.
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto" id="header-metrics">
          <div className="flex-1 md:flex-none bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm">
            <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1 tracking-widest flex items-center gap-2">
              <Cpu size={12} className="text-sky-500" /> Engine
            </span>
            <span className="text-white font-medium">Gemini 1.5 Flash</span>
          </div>
          <div className="flex-1 md:flex-none bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm">
            <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1 tracking-widest flex items-center gap-2">
              <Database size={12} className="text-sky-500" /> Database
            </span>
            <span className="text-white font-medium whitespace-nowrap">PGVector / PostgreSQL</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content Grid */}
      <motion.main 
        id="main-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1"
      >
        {/* Left Column: Architecture & Tech Stack */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Architecture */}
          <motion.section 
            variants={itemVariants}
            id="architecture-overview"
            className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors duration-500 shadow-xl shadow-black/20"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-6 flex items-center gap-2">
              <Layers size={14} /> Architecture Overview
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { step: "01", label: "Ingestion", desc: "PDF/Notes Parsing" },
                { step: "02", label: "Embedding", desc: "Google Text-004" },
                { step: "03", label: "Retrieval", desc: "Similarity Search" },
                { step: "04", label: "Generation", desc: "Augmented Response" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm group-hover/item:bg-sky-500 group-hover/item:text-slate-900 transition-all">
                    {item.step}
                  </div>
                  <div className="flex-1 border-b border-slate-700/50 pb-2">
                    <span className="text-white font-semibold group-hover/item:text-sky-400 transition-colors tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-slate-500 text-xs ml-3 font-medium">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section 
            variants={itemVariants}
            id="tech-stack"
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex-1 flex flex-col"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-6 flex items-center gap-2">
              <Code2 size={14} /> Tech Stack Breakdown
            </h2>
            <div className="space-y-6 flex-1">
              {[
                { title: "Frontend & Core", tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Motion"] },
                { title: "AI Orchestration", tags: ["LangChain.js", "Google Gemini API", "Vector Embeddings"] },
                { title: "Persistence", tags: ["Prisma ORM", "PostgreSQL", "pgvector"] }
              ].map((group, idx) => (
                <div key={idx} id={`stack-group-${idx}`}>
                  <span className="text-[10px] text-slate-500 uppercase block mb-3 font-black tracking-widest">
                    {group.title}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-xs text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Roadmap & Setup */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* 21-Day Roadmap */}
          <motion.section 
            variants={itemVariants}
            id="roadmap"
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl shadow-black/20"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-8 flex items-center gap-2">
               The 21-Day Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { week: "01", title: "The Core", items: ["Setup Next.js & DB", "PDF Ingestion Logic", "Embedding Pipeline"] },
                { week: "02", title: "Intelligence", items: ["Gemini Integration", "Chat Interface UI", "Vector Refinement"] },
                { week: "03", title: "Stability", items: ["Authentication layer", "Edge Optimizations", "Production Ready"] }
              ].map((week, idx) => (
                <div key={idx} className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 hover:border-sky-500/30 transition-all flex flex-col h-full">
                  <div className="text-sky-500 font-black text-xl mb-1">W{week.week}</div>
                  <div className="text-[10px] font-black text-white mb-4 uppercase tracking-[0.15em] border-b border-sky-500/20 pb-2">
                    {week.title}
                  </div>
                  <ul className="text-xs space-y-3 text-slate-400 flex-1">
                    {week.items.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start gap-2 leading-snug">
                        <ChevronRight size={14} className="text-sky-500 shrink-0 mt-0.5" /> 
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-slate-900/30 border border-dashed border-slate-600/50 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <FileText size={48} />
              </div>
              <p className="text-[13px] text-slate-400 italic font-serif leading-relaxed relative z-10">
                "Current Progress: 64% completion. System core finalized. 
                Focusing on fine-tuning the retrieval engine to minimize latency 
                and enhance context window utilization for large document sets."
              </p>
            </div>
          </motion.section>

          {/* Setup & Env */}
          <motion.section 
            variants={itemVariants}
            id="setup-environment"
            className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex-1 flex flex-col md:grid md:grid-cols-2 gap-8 overflow-hidden"
          >
            <div className="flex flex-col">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2">
                <Terminal size={14} /> Environment Template
              </h2>
              <div className="flex-1 bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-[11px] text-sky-300 leading-loose group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-slate-600 font-sans">.env.example</span>
                  <Code2 size={12} className="text-slate-700" />
                </div>
                <div className="opacity-80">
                  DATABASE_URL="postgresql://..."<br/>
                  GEMINI_API_KEY="AIza..."<br/>
                  NEXT_PUBLIC_SITE_URL="http://..."<br/>
                  LANGCHAIN_TRACING_V2=true
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2">
                <Zap size={14} /> Quick Installation
              </h2>
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {[
                  { cmd: "git clone takder-ai", status: "completed" },
                  { cmd: "npm install && prisma migrate", status: "completed" },
                  { cmd: "npm run dev", status: "active" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex items-center justify-between group hover:border-slate-600 transition-colors">
                    <code className="text-xs text-emerald-400/90 font-mono md:text-[11px]">
                      <span className="text-slate-600 mr-2">$</span>{item.cmd}
                    </code>
                    <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : item.status === 'active' ? 'bg-sky-500 animate-pulse' : 'bg-slate-700'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </motion.main>

      {/* Footer Bar */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        id="app-footer"
        className="flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 pt-6 border-t border-slate-800 italic uppercase tracking-widest gap-4"
      >
        <div className="flex items-center gap-2">
          <ExternalLink size={12} /> PROJECT SOURCE: GITHUB.COM/TAKDER/TAKDER-AI
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <span>MIT License</span>
          <span>Build: 489c-2024.04</span>
          <span className="text-sky-500 font-bold flex items-center gap-2">
            <ShieldCheck size={12} /> System Status: Operational
          </span>
        </div>
      </motion.footer>
    </div>
  );
}
