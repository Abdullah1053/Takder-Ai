'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Database, 
  Activity, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronLeft,
  Search,
  Bell,
  Cpu,
  Globe,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user, role, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isLoading && (!user || role !== 'admin')) {
      router.push('/');
    }
  }, [user, role, isLoading, router]);

  if (isLoading || !user || role !== 'admin') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="space-y-6 text-center">
           <Cpu size={48} className="text-brand-500 animate-spin mx-auto opacity-20" />
           <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground animate-pulse">Decrypting Admin Secure Node...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Active Clusters', value: '1,284', trend: '+12%', icon: Globe, up: true },
    { label: 'Neural Throughput', value: '84.2 GB/s', trend: '+5.4%', icon: Activity, up: true },
    { label: 'Identity Matrix', value: '42,092', trend: '-2.1%', icon: Users, up: false },
    { label: 'System Latency', value: '14ms', trend: '-4ms', icon: Cpu, up: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-border flex flex-col p-6 space-y-10 fixed h-full bg-card/30 backdrop-blur-3xl z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <span className="font-black text-xl italic tracking-tighter uppercase">Admin<span className="text-brand-500">.</span></span>
        </div>

        <nav className="flex-1 space-y-2">
          {['overview', 'users', 'analytics', 'security', 'settings'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                activeTab === item 
                  ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/20 translate-x-2' 
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              {item === 'overview' && <LayoutDashboard size={16} />}
              {item === 'users' && <Users size={16} />}
              {item === 'analytics' && <Activity size={16} />}
              {item === 'security' && <ShieldCheck size={16} />}
              {item === 'settings' && <Settings size={16} />}
              {item}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-border mt-auto">
           <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-brand-500 transition-colors font-black text-[10px] uppercase tracking-widest">
             <ChevronLeft size={16} /> Exit to Matrix
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-10 space-y-10 relative">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase">System <span className="text-brand-500 underline decoration-brand-500/20 underline-offset-4">Pulse.</span></h1>
            <p className="text-muted-foreground text-xs font-medium tracking-tight">Node: US-WEST-ROOT-01 | Encrypted Link: Active</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative group">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Query system..." 
                  className="bg-card border border-border p-3 pl-12 rounded-2xl text-xs font-medium focus:border-brand-500 outline-none w-64 transition-all"
                />
             </div>
             <button className="p-3 bg-card border border-border rounded-2xl text-muted-foreground hover:text-brand-500 transition-colors shadow-sm relative">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-brand-500 rounded-full border-2 border-card" />
             </button>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-emerald-500 p-0.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center font-black text-[10px]">AD</div>
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-card border border-border rounded-[32px] space-y-4 hover:border-brand-500/30 transition-all group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-muted/50 rounded-2xl text-muted-foreground group-hover:text-brand-500 transition-colors group-hover:bg-brand-500/5">
                  <stat.icon size={20} />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                  {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {stat.trend}
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                <h3 className="text-3xl font-black tracking-tight">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Section: Overview Charts Placeholder & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Chart Column */}
           <div className="lg:col-span-2 p-8 bg-card border border-border rounded-[40px] space-y-6 shadow-sm overflow-hidden relative">
              <div className="flex justify-between items-center">
                 <h2 className="text-xl font-black uppercase tracking-tight italic">Global Traffice Overload</h2>
                 <div className="flex gap-2">
                    <div className="px-3 py-1 bg-brand-500/10 text-brand-500 rounded-full text-[9px] font-black uppercase">Live Wave</div>
                 </div>
              </div>
              <div className="h-64 w-full bg-muted/20 rounded-3xl relative overflow-hidden flex items-end p-6 gap-2">
                 {/* Fake Chart Bars */}
                 {[40, 70, 45, 90, 65, 80, 50, 40, 70, 55, 75, 45, 85].map((h, i) => (
                   <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-brand-500/20 rounded-full group relative"
                   >
                     <div className="absolute inset-x-0 bottom-0 bg-brand-500 rounded-full h-1/3 group-hover:h-full transition-all duration-300 shadow-lg shadow-brand-500/20" />
                   </motion.div>
                 ))}
                 <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
              </div>
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground pt-4">
                 <span>00:00:00</span>
                 <span>06:00:00</span>
                 <span>12:00:00</span>
                 <span>18:00:00</span>
                 <span>23:59:59</span>
              </div>
           </div>

           {/* Activity Column */}
           <div className="p-8 bg-card border border-border rounded-[40px] space-y-8 flex flex-col h-full shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight italic">Matrix logs</h3>
              <div className="flex-1 space-y-6">
                 {[
                   { user: 'root_sys', action: 'Identity Sync', time: '2m ago', color: 'text-brand-500' },
                   { user: 'abdullah_m', action: 'Admin Logon', time: '12m ago', color: 'text-emerald-500' },
                   { user: 'unknown_ip', action: 'Blocked Attempt', time: '24m ago', color: 'text-red-500' },
                   { user: 'node_42', action: 'Cache Flush', time: '1h ago', color: 'text-brand-500' },
                 ].map((log, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-border/50 pb-4">
                      <div className="flex items-center gap-3">
                         <div className={`w-2 h-2 rounded-full ${log.color.replace('text-', 'bg-')} shadow-sm`} />
                         <div>
                            <p className="text-xs font-black uppercase tracking-tight">{log.user}</p>
                            <p className="text-muted-foreground text-[10px] uppercase font-bold">{log.action}</p>
                         </div>
                      </div>
                      <span className="text-[9px] font-black text-muted-foreground italic">{log.time}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full py-4 border border-border bg-muted/20 hover:bg-muted/40 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all">
                 View All System Logs
              </button>
           </div>
        </div>

        {/* User Management Section (Simplified) */}
        <section className="p-10 bg-card border border-border rounded-[40px] space-y-10 shadow-sm relative overflow-hidden group">
           {/* Decor */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/5 blur-[120px] pointer-events-none group-hover:bg-brand-500/10 transition-all duration-700" />
           
           <div className="flex justify-between items-center relative">
              <h2 className="text-2xl font-black uppercase tracking-tight italic">User Management Matrix</h2>
              <div className="flex gap-4">
                 <button className="px-6 py-3 bg-brand-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all">Invite Node</button>
              </div>
           </div>

           <div className="overflow-x-auto relative">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                       <th className="pb-6">Identity</th>
                       <th className="pb-6">Access Level</th>
                       <th className="pb-6">Status</th>
                       <th className="pb-6 text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm font-medium">
                    {[
                      { name: 'Abdullah Mughni', email: 'abdullah.m@gmail.com', role: 'Admin', status: 'Active' },
                      { name: 'Root System', email: 'system@takder.ai', role: 'System', status: 'Online' },
                      { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Idle' },
                      { name: 'Sarah Wilson', email: 'sarah.w@node.net', role: 'Moderator', status: 'Active' },
                    ].map((user, i) => (
                      <tr key={i} className="group border-b border-border hover:bg-muted/30 transition-colors">
                         <td className="py-6">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center font-black text-[9px] uppercase">{user.name[0]}</div>
                               <div>
                                  <p className="font-black italic uppercase tracking-tighter">{user.name}</p>
                                  <p className="text-[10px] text-muted-foreground font-bold">{user.email}</p>
                               </div>
                            </div>
                         </td>
                         <td className="py-6">
                            <span className="px-3 py-1 bg-muted rounded-full text-[9px] font-black uppercase">{user.role}</span>
                         </td>
                         <td className="py-6">
                            <div className="flex items-center gap-2">
                               <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' || user.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-orange-500'}`} />
                               <span className="text-[10px] font-bold uppercase tracking-widest">{user.status}</span>
                            </div>
                         </td>
                         <td className="py-6 text-right">
                            <button className="p-2 hover:text-brand-500 transition-colors"><Settings size={14} /></button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>
      </main>
      
      {/* Absolute Bottom Decor Layer */}
      <div className="fixed bottom-0 right-0 p-10 font-mono text-[8px] text-muted-foreground/30 pointer-events-none uppercase tracking-[0.5em] z-30">
         Admin Protocol Build 5.10.4-Stable
      </div>
    </div>
  );
}
