"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Users, 
  MessageSquare, 
  Layers,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  RotateCcw,
  Loader2,
  Calendar,
  Zap,
  CheckCircle,
  Clock
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export default function DashboardDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/dashboard/stats`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard stats", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-electric" size={40} />
        <p className="text-[var(--color-text-main)] opacity-50 font-bold animate-pulse">Loading real-time data...</p>
      </div>
    );
  }

  const stats = data?.stats || [
    { name: "Total Leads", value: "0", change: "0%", trendingUp: true, icon: MessageSquare },
    { name: "Active Projects", value: "0", change: "0%", trendingUp: true, icon: TrendingUp },
    { name: "Total Services", value: "0", change: "0%", trendingUp: true, icon: Layers },
  ];

  const getIcon = (name: string) => {
    if (name.includes("Leads")) return <MessageSquare size={24} />;
    if (name.includes("Projects")) return <TrendingUp size={24} />;
    if (name.includes("Visits")) return <Users size={24} />;
    return <Layers size={24} />;
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
           <h1 className="text-xl md:text-2xl font-bold font-outfit text-[var(--color-text-main)]">Dashboard Overview</h1>
           <p className="text-xs text-[var(--color-text-main)] opacity-50 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
             <Calendar size={12} /> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
           </p>
        </div>
        <button 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-xl font-bold text-sm hover:bg-[var(--color-electric)] hover:text-white transition-all shadow-sm w-full sm:w-auto"
          onClick={() => {
            setLoading(true);
            fetchStats();
          }}
        >
          <RotateCcw size={16} /> Refresh Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat: any) => (
          <div key={stat.name} className="glass-card p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric">
                {getIcon(stat.name)}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter ${
                stat.trendingUp ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"
              }`}>
                {stat.change}
                {stat.trendingUp ? <ArrowUpRight size={14} className="hover-arrow" /> : <ArrowDownRight size={14} className="hover-arrow" />}
              </div>
            </div>
            <h3 className="text-[var(--color-text-main)] opacity-70 text-sm font-bold uppercase tracking-tight">{stat.name}</h3>
            <p className="text-3xl font-black font-outfit mt-1 text-[var(--color-text-main)]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Analytics Graph */}
      <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 relative z-10">
          <div>
            <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)] flex items-center gap-2">
               <Zap size={20} className="text-electric" /> Lead Growth Trend
            </h3>
            <p className="text-sm text-[var(--color-text-main)] opacity-50 font-medium">Monthly acquisition analytics for your business.</p>
          </div>
          <div className="flex gap-2">
             <span className="px-4 py-1.5 bg-[var(--color-navy)] rounded-full text-[10px] font-bold text-[var(--color-text-main)] opacity-70 uppercase tracking-widest border border-[var(--color-border)]">Last 7 Months</span>
          </div>
        </div>

        <div className="h-[250px] sm:h-[350px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data?.graphData || []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-electric)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-electric)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(15, 23, 42, 0.05)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-main)', opacity: 0.5, fontSize: 12, fontWeight: 'bold' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-main)', opacity: 0.5, fontSize: 12, fontWeight: 'bold' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '16px', 
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  fontWeight: 'bold'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="visits" 
                stroke="var(--color-accent)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={1} 
                fill="url(#colorVisits)" 
              />
              <Area 
                type="monotone" 
                dataKey="leads" 
                stroke="var(--color-electric)" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorLeads)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)] flex items-center gap-2">
               <CheckCircle size={20} className="text-electric" /> Recent Inquiries
            </h3>
            <Link href="/admin/leads" className="text-electric text-sm font-bold hover:underline bg-electric/5 px-4 py-2 rounded-xl transition-all flex items-center gap-1 group">
              View All <ArrowRight size={14} className="hover-arrow" />
            </Link>
          </div>
          <div className="space-y-4">
            {data?.recentLeads?.length > 0 ? (
              data.recentLeads.map((lead: any) => (
                <div key={lead.id} className="flex items-center justify-between p-5 rounded-2xl bg-[var(--color-navy-light)] border border-[var(--color-border)] hover:border-electric/30 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-premium flex items-center justify-center font-black text-white text-xs shadow-lg group-hover:scale-110 transition-transform">
                      {lead.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text-main)] text-base">{lead.name}</p>
                      <p className="text-xs text-[var(--color-text-main)] opacity-60 font-medium">{lead.subject || "General Inquiry"}</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="text-[10px] text-[var(--color-text-main)] opacity-40 font-bold uppercase tracking-widest flex items-center gap-1">
                       <Clock size={10} /> {new Date(lead.createdAt).toLocaleDateString()}
                    </p>
                    <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                      lead.status === 'NEW' ? 'bg-electric/20 text-electric' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center p-10 opacity-50 font-bold">No recent inquiries found.</p>
            )}
          </div>
        </div>

        {/* System Health / Quick Actions */}
        <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">System Health</h3>
            <span className="flex items-center gap-2 text-[10px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Operational
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Site Performance", value: "98/100", status: "Optimal" },
              { label: "SEO Index Score", value: "85%", status: "Good" },
              { label: "Database Health", value: "100%", status: "Stable" },
              { label: "Server Latency", value: "24ms", status: "Low" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[var(--color-navy)] border border-[var(--color-border)]">
                 <p className="text-[10px] font-black text-[var(--color-text-main)] opacity-40 uppercase tracking-widest mb-1">{item.label}</p>
                 <p className="text-xl font-black text-[var(--color-text-main)]">{item.value}</p>
                 <p className="text-[10px] font-bold text-green-500 mt-1 uppercase tracking-tighter">{item.status}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 space-y-4">
             <button className="w-full py-4 bg-[var(--color-navy)] border border-[var(--color-border)] rounded-2xl font-bold text-sm text-[var(--color-text-main)] hover:bg-electric/5 hover:border-electric transition-all flex items-center justify-center gap-3">
                <RotateCcw size={16} className="text-electric" /> Run System Audit
             </button>
             <button className="w-full py-4 bg-gradient-premium text-white rounded-2xl font-bold text-sm shadow-xl hover:scale-[1.02] transition-all">
                Export Analytics Report (PDF)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
