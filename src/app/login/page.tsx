'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft,
  ShieldCheck,
  User
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Sign in failed. Check your data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <nav className="p-6 flex items-center justify-between relative z-10">
        <Link href="/" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-black uppercase tracking-widest text-[10px]">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Base
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/admin/login" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-brand-500 transition-colors">
            Admin Access
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md space-y-10"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full mb-2">
              <Sparkles size={12} className="text-brand-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">Welcome Back</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic">
              User <br/><span className="text-brand-500 underline decoration-brand-500/20 underline-offset-4">Portal.</span>
            </h1>
            <p className="text-muted-foreground font-medium">
              Access your neural clusters and personal knowledge.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" size={16} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 pl-12 rounded-2xl font-medium transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Key Cipher</label>
                  <a href="#" className="text-[10px] font-black uppercase tracking-widest text-brand-500 hover:underline">Forgot?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" size={16} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 pl-12 rounded-2xl font-medium transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold uppercase tracking-wider text-center">
                {error}
              </div>
            )}

            <button 
              disabled={isLoading}
              className="w-full py-5 bg-foreground text-background font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-500 hover:text-white transition-all transform active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className={isLoading ? 'opacity-0' : 'flex items-center gap-3'}>
                Authenticate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>
          </form>

          <div className="pt-6 border-t border-border mt-10">
            <p className="text-center text-[11px] font-black uppercase tracking-widest text-muted-foreground">
              New to the cluster? <Link href="/register" className="text-brand-500 hover:underline">Register Identity</Link>
            </p>
          </div>
        </motion.div>
      </main>

      <footer className="p-6 text-center">
        <p className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">
          Takder‑Ai Security Pulse: All connections encrypted
        </p>
      </footer>
    </div>
  );
}
