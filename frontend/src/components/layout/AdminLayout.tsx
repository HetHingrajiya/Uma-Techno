import { useEffect, useState, Suspense } from "react";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  MessageSquare,
  Briefcase,
  Layers,
  RefreshCw,
  Menu,
  X,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: MessageSquare },
  { name: "Services", href: "/admin/cms/services", icon: Briefcase },
  { name: "Portfolio", href: "/admin/cms/portfolio", icon: FileText },
  { name: "Testimonials", href: "/admin/cms/testimonials", icon: Users },
  { name: "SEO Manager", href: "/admin/seo", icon: Globe },
  { name: "Widgets", href: "/admin/widgets", icon: Layers },
  { name: "Theme Settings", href: "/admin/theme", icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clearingCache, setClearingCache] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token && !pathname.includes("/admin/login")) {
      navigate("/admin/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [pathname, navigate]);

  if (pathname.includes("/admin/login")) {
    return <Outlet />;
  }

  if (!isLoggedIn && !pathname.includes("/admin/login")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <RefreshCw className="animate-spin text-electric" size={40} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--color-text-main)] transition-colors duration-300">
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--color-navy-light)] border-b border-[var(--color-border)] flex items-center justify-between px-4 z-50">
        <Link to="/admin/dashboard" className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-lg font-black tracking-tight text-[var(--color-text-main)] uppercase">
            Uma<span className="text-electric">Admin</span>
          </span>
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-[var(--color-text-main)] hover:bg-white/5 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={cn(
        "w-64 bg-[var(--color-navy-light)] border-r border-[var(--color-border)] flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="text-lg font-black tracking-tight text-[var(--color-text-main)] uppercase">
              Uma<span className="text-electric">Admin</span>
            </span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-[var(--color-text-main)] opacity-50 hover:opacity-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
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
                const baseUrl = import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app';
                await fetch(`${baseUrl}/api/v1/clear-cache`, { method: 'POST' });
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
              navigate("/admin/login");
            }}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-grow lg:ml-64 px-4 md:px-8 py-6 md:py-10 mt-16 lg:mt-0 transition-all duration-300 w-full overflow-x-hidden">
        <header className="flex flex-col md:flex-row md:justify-between md:items-start lg:items-center mb-6 md:mb-10 gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-bold font-outfit">
              {sidebarLinks.find(l => l.href === pathname)?.name || "Admin"}
            </h1>
            <p className="text-xs text-gray-400 lg:hidden mt-1">admin@umatechno.com</p>
          </div>
          <div className="flex items-center gap-4 bg-[var(--color-navy-light)] p-2 pr-4 rounded-2xl border border-[var(--color-border)] md:bg-transparent md:p-0 md:border-0">
            <div className="w-10 h-10 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center font-bold text-electric shrink-0">
              AD
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-gray-400 hidden lg:block">admin@umatechno.com</p>
            </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Suspense fallback={
            <div className="min-h-[400px] flex flex-col items-center justify-center opacity-50">
              <RefreshCw className="animate-spin text-electric mb-4" size={32} />
              <p className="font-bold text-sm uppercase tracking-widest">Loading Module...</p>
            </div>
          }>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
