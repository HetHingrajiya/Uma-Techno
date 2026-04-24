"use client";

import React from "react";
import { 
  Users, 
  MessageSquare, 
  FileText, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const stats = [
  { name: "Total Leads", value: "128", change: "+12%", trendingUp: true, icon: MessageSquare },
  { name: "Active Projects", value: "12", change: "-2%", trendingUp: false, icon: TrendingUp },
  { name: "Site Visits", value: "12.4k", change: "+18%", trendingUp: true, icon: Users },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="glass-card p-6 rounded-2xl border-[var(--color-border)]">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric">
                <stat.icon size={24} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-lg",
                stat.trendingUp ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
              )}>
                {stat.change}
                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <h3 className="text-[var(--color-text-main)] opacity-70 text-sm font-medium">{stat.name}</h3>
            <p className="text-3xl font-bold font-outfit mt-1 text-[var(--color-text-main)]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <div className="glass-card p-8 rounded-[2rem] border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">Recent Leads</h3>
            <button className="text-electric text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] hover:border-electric/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric/20 to-accent/20 flex items-center justify-center font-bold text-xs">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-text-main)]">John Doe</p>
                    <p className="text-xs text-[var(--color-text-main)] opacity-60">Web Development Inquiry</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[var(--color-text-main)] opacity-60 mb-1">2 hours ago</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric/20 text-electric font-bold uppercase">New</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Activity */}
        <div className="glass-card p-8 rounded-[2rem] border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">System Activity</h3>
            <button className="text-electric text-sm font-bold hover:underline">Clear Logs</button>
          </div>
          <div className="space-y-6">
            {[
              { text: "Admin logged in", time: "5 mins ago", icon: Users },
              { text: "Lead status updated to 'Replied'", time: "3 hours ago", icon: MessageSquare },
              { text: "Portfolio project 'E-commerce' updated", time: "5 hours ago", icon: TrendingUp },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] opacity-70 shrink-0">
                  <activity.icon size={16} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-main)]">{activity.text}</p>
                  <p className="text-xs text-[var(--color-text-main)] opacity-60">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for class merging since I can't use @/lib/utils in this thought easily
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
