'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft,
  ShieldCheck
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signUp({
        email: emailAddress,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          }
        }
      });

      if (error) throw error;
      
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <nav className="p-6 flex items-center justify-between relative z-10">
        <Link href="/" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-black uppercase tracking-widest text-[10px]">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Base
        </Link>
        <ModeToggle />
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
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">Join the Cluster</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic">
              Create <br/><span className="text-brand-500 underline decoration-brand-500/20 underline-offset-4">Identity.</span>
            </h1>
            <p className="text-muted-foreground font-medium">
              Initialize your neural node and join the network.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">First Name</label>
                  <input 
                    type="text" 
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 rounded-2xl font-medium transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Last Name</label>
                  <input 
                    type="text" 
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 rounded-2xl font-medium transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" size={16} />
                  <input 
                    type="email" 
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-card border border-border focus:border-brand-500 outline-none p-4 pl-12 rounded-2xl font-medium transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Secret Key</label>
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
                  Register Cluster <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 text-center py-10">
              <div className="w-20 h-20 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto text-brand-500 border border-brand-500/20 shadow-xl">
                <ShieldCheck size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight">Identity Initiated</h3>
                <p className="text-muted-foreground font-medium">
                  We&apos;ve sent a verification signal to your portal. Please check your matrix inbox to activate your node.
                </p>
              </div>
              <Link 
                href="/login"
                className="inline-flex items-center gap-2 text-brand-500 font-black uppercase tracking-widest text-[10px] bg-brand-500/10 px-6 py-3 rounded-xl border border-brand-500/20 hover:bg-brand-500 hover:text-white transition-all shadow-lg"
              >
                Proceed to Logon <ArrowRight size={14} />
              </Link>
            </div>
          )}

          <div className="pt-6 border-t border-border mt-10">
            <p className="text-center text-[11px] font-black uppercase tracking-widest text-muted-foreground">
              Already in the cluster? <Link href="/login" className="text-brand-500 hover:underline">Signal Logon</Link>
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
