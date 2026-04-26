'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Key, 
  Activity,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [accessId, setAccessId] = useState('');
  const [passkey, setPasskey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: accessId,
        password: passkey,
      });

      if (authError) throw authError;
      
      // Verification logic for admin role would typically go here 
      // (e.g., checking a profiles table or user metadata)
      
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Authorization failed. Credentials purged.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Admin Background Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <nav className="p-6 flex items-center justify-between relative z-10">
        <Link href="/" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-black uppercase tracking-widest text-[10px]">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Exit System
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 animate-pulse">
            <Activity size={12} /> Restricted Node
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          <div className="relative group p-10 bg-card/80 backdrop-blur-3xl border border-border rounded-[40px] shadow-2xl space-y-10 overflow-hidden">
            {/* Corner Decor */}
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
               <ShieldAlert size={120} />
            </div>

            <div className="space-y-6 relative">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 border border-red-500/20 shadow-inner">
                <Terminal size={32} />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tighter uppercase italic text-foreground">
                  System <br/><span className="text-red-500">Logon.</span>
                </h1>
                <p className="text-muted-foreground text-sm font-medium tracking-tight">
                  Authorized personnel only. Access attempted from persistent node root.
                </p>
              </div>
            </div>

            <form onSubmit={handleAdminAuth} className="space-y-6 relative">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Access ID</label>
                  <div className="relative group/input">
                    <Cpu className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-red-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      required
                      value={accessId}
                      onChange={(e) => setAccessId(e.target.value)}
                      placeholder="ADM-ROOT-01"
                      className="w-full bg-background/50 border border-border focus:border-red-500/50 outline-none p-4 pl-12 rounded-2xl font-mono text-sm tracking-tight transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Secure Passkey</label>
                  <div className="relative group/input">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-red-500 transition-colors" size={16} />
                    <input 
                      type="password" 
                      required
                      value={passkey}
                      onChange={(e) => setPasskey(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-background/50 border border-border focus:border-red-500/50 outline-none p-4 pl-12 rounded-2xl font-mono text-sm tracking-tight transition-all"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-black uppercase tracking-widest text-center">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button 
                  disabled={isLoading}
                  className="w-full py-5 bg-red-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-red-500 transition-all transform active:scale-[0.98] shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className={isLoading ? 'opacity-0' : 'flex items-center gap-3'}>
                    Execute Authorization <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </button>
              </div>
            </form>

            <div className="pt-6 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground relative">
              <span className="flex items-center gap-2 italic"><ShieldAlert size={10}/> IP Logged</span>
              <span className="opacity-40">Build 2.0.4-Rev</span>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="p-10 flex justify-center opacity-30 grayscale pointer-events-none">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-black text-xl italic leading-none">T</span>
             </div>
             <span className="text-xl font-black tracking-tighter text-foreground uppercase italic">Takder‑Ai</span>
          </div>
      </footer>
    </div>
  );
}
