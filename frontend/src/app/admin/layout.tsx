"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  MessageSquare,
  Briefcase,
  Layers,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: MessageSquare },
  { name: "CMS", href: "/admin/cms", icon: FileText },
  { name: "Widgets", href: "/admin/widgets", icon: Layers },
  { name: "Theme Settings", href: "/admin/theme", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clearingCache, setClearingCache] = useState(false);

  useEffect(() => {
    // Basic auth check
    const token = localStorage.getItem("admin_token");
    if (!token && !pathname.includes("/admin/login")) {
      router.push("/admin/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [pathname, router]);

  if (pathname.includes("/admin/login")) {
    return <>{children}</>;
  }

  if (!isLoggedIn) return null;

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--color-text-main)] transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-navy-light)] border-r border-[var(--color-border)] flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-electric text-white rounded-lg flex items-center justify-center font-bold">
              U
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-main)]">
              Uma<span className="text-electric">Admin</span>
            </span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                pathname === link.href 
                  ? "bg-electric text-white shadow-lg shadow-electric/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <link.icon size={20} />
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--color-border)] space-y-2">
          <button
            onClick={async () => {
              setClearingCache(true);
              try {
                await fetch('/api/clear-cache', { method: 'POST' });
                alert('Cache cleared successfully!');
              } catch (e) {
                alert('Failed to clear cache');
              }
              setClearingCache(false);
            }}
            disabled={clearingCache}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-electric/10 hover:text-electric transition-all disabled:opacity-50"
          >
            <RefreshCw size={20} className={clearingCache ? "animate-spin" : ""} />
            <span className="font-medium">{clearingCache ? 'Clearing...' : 'Clear Cache'}</span>
          </button>
          
          <button
            onClick={() => {
              localStorage.removeItem("admin_token");
              router.push("/admin/login");
            }}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold font-outfit">
            {sidebarLinks.find(l => l.href === pathname)?.name || "Admin"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-gray-400">admin@umatechno.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center font-bold text-electric">
              AD
            </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
