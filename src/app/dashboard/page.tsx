'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  History, 
  CreditCard, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  ChevronRight,
  Zap,
  Clock,
  Shapes,
  User as UserIcon,
  LogOut,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

export default function UserDashboard() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const items = [
    { label: 'Neural Signals', value: '12', icon: Zap, color: 'text-brand-500' },
    { label: 'Cloud Buffer', value: '2.4 GB', icon: Shapes, color: 'text-emerald-500' },
    { label: 'Credits', value: '840', icon: CreditCard, color: 'text-blue-500' },
    { label: 'Active Tasks', value: '3', icon: Clock, color: 'text-purple-500' },
  ];

  const sidebarLinks = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'history', label: 'Pulse History', icon: History },
    { id: 'billing', label: 'Matrix Credits', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col p-6 space-y-10 fixed h-full bg-card/30 backdrop-blur-xl z-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center group-hover:bg-brand-500 transition-colors">
            <Shapes size={20} className="text-background" />
          </div>
          <span className="font-black text-xl italic tracking-tighter uppercase">Takder<span className="text-brand-500">.</span></span>
        </Link>

        <nav className="flex-1 space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                activeTab === link.id 
                  ? 'bg-foreground text-background shadow-xl' 
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <link.icon size={16} />
              {link.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-border space-y-4">
           <button 
             onClick={() => setActiveTab('settings')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-brand-500'}`}
           >
              <Settings size={16} /> Settings
           </button>
           <button 
             onClick={() => signOut()}
             className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-red-500/70 hover:text-red-500 hover:bg-red-500/5 transition-all"
           >
              <LogOut size={16} /> Terminate Session
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10 space-y-10 relative">
        {/* Header */}
        <header className="flex justify-between items-center bg-card/10 backdrop-blur-md p-4 rounded-3xl border border-border/50">
          <div className="flex items-center gap-4 px-2">
             <div className="relative group">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Scan nodes..." 
                  className="bg-transparent border-none p-1 pl-8 text-xs font-medium focus:ring-0 outline-none w-48"
                />
             </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-muted-foreground hover:text-brand-500 transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-500 rounded-full" />
             </button>
             <div className="h-8 w-px bg-border mx-2" />
             <div className="flex items-center gap-3 px-2">
                <div className="text-right hidden sm:block">
                   <p className="text-[10px] font-black uppercase tracking-tighter leading-none">{user.user_metadata?.first_name || 'User'}</p>
                   <p className="text-[8px] text-muted-foreground font-bold uppercase">Standard Node</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                   <UserIcon size={14} className="text-brand-500" />
                </div>
             </div>
          </div>
        </header>

        {/* Hero Welcome */}
        <section className="space-y-2">
           <h2 className="text-4xl font-black italic tracking-tighter uppercase">Welcome, <span className="text-brand-500 underline decoration-brand-500/20 underline-offset-4">{user.user_metadata?.first_name || 'Pilot'}.</span></h2>
           <p className="text-muted-foreground text-sm font-medium">Initialization successful. All systems are operational.</p>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {items.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-6 bg-card border border-border rounded-[28px] space-y-4 hover:shadow-xl hover:shadow-brand-500/5 transition-all group cursor-default"
             >
               <div className={`p-3 w-fit rounded-2xl bg-muted/50 ${item.color} group-hover:bg-brand-500/10 transition-colors`}>
                  <item.icon size={20} />
               </div>
               <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <h4 className="text-2xl font-black tracking-tight">{item.value}</h4>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Recent Projects */}
           <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                 <h3 className="text-xl font-black uppercase tracking-tight italic">Active Signals</h3>
                 <button className="text-[10px] font-black uppercase tracking-widest text-brand-500 hover:underline">View File System</button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                 {[
                   { name: 'Financial_Analysis_Q1.pdf', type: 'PDF', size: '2.4MB', time: '2h ago' },
                   { name: 'Neural_Network_Specs.doc', type: 'DOC', size: '1.1MB', time: '5h ago' },
                   { name: 'Takder_UI_v2_Final.zip', type: 'ZIP', size: '42MB', time: '1d ago' },
                 ].map((file, i) => (
                   <div key={i} className="p-5 bg-card border border-border rounded-2xl flex items-center justify-between group hover:border-brand-500/30 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-brand-500 transition-colors">
                            <FileText size={20} />
                         </div>
                         <div>
                            <p className="font-black italic uppercase tracking-tighter text-sm mb-0.5">{file.name}</p>
                            <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{file.size} • {file.type}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <span className="text-[9px] font-black text-muted-foreground/50 italic">{file.time}</span>
                         <ChevronRight size={16} className="text-muted-foreground group-hover:text-brand-500 transition-colors" />
                      </div>
                   </div>
                 ))}
                 
                 <button className="w-full py-8 border-2 border-dashed border-border rounded-[32px] flex flex-col items-center justify-center gap-3 text-muted-foreground hover:border-brand-500/50 hover:text-brand-500 transition-all group group-hover:bg-brand-500/5">
                    <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Plus size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Initialize New Signal</span>
                 </button>
              </div>
           </div>

           {/* Activity Feed */}
           <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight italic">Pulse Feed</h3>
              <div className="bg-card border border-border rounded-[32px] p-8 space-y-8 min-h-[400px] flex flex-col">
                 <div className="flex-1 space-y-6">
                    {[
                      { action: 'Upload Success', target: 'Dataset_Alpha', time: '12m', status: 'success' },
                      { action: 'Parsing Signal', target: 'Report_Final', time: '45m', status: 'idle' },
                      { action: 'Auth Update', target: 'Access Key', time: '3h', status: 'success' },
                      { action: 'System Sync', target: 'Global Node', time: '1d', status: 'success' },
                    ].map((act, i) => (
                      <div key={i} className="flex gap-4">
                         <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${act.status === 'success' ? 'bg-brand-500' : 'bg-orange-500'} shadow-lg shadow-brand-500/20`} />
                         <div className="space-y-0.5">
                            <p className="text-xs font-black uppercase tracking-tight">{act.action}</p>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase">{act.target} • {act.time} ago</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <Link 
                   href="/pulse"
                   className="w-full py-4 bg-muted/20 hover:bg-muted/40 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-2"
                 >
                    Full Pulse Log <ChevronRight size={12} />
                 </Link>
              </div>
           </div>
        </div>
      </main>

      {/* Decorative Matrix Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
