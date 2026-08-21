import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/layout/ThemeProvider";
import { SmoothScroll } from "../components/layout/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-electric)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-md text-center relative z-10 space-y-6">
        <h1 className="text-8xl lg:text-9xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--color-electric)]">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-main)] font-outfit">Lost in Cyberspace</h2>
          <p className="text-[var(--color-text-main)] opacity-70">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all shadow-[0_0_20px_var(--color-electric)] hover:shadow-none hover:-translate-y-1"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-md text-center relative z-10 space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold font-outfit text-white">
          System <span className="text-red-500">Error</span>
        </h1>
        <p className="text-[var(--color-text-main)] opacity-70">
          A critical failure occurred in the matrix. Our engineers have been notified.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-electric)] px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:bg-[var(--color-electric)]/90 hover:-translate-y-1 shadow-[0_0_20px_var(--color-electric)]"
          >
            Reboot System
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-8 py-4 text-sm font-bold tracking-widest uppercase text-[var(--color-text-main)] transition-all hover:bg-[var(--color-electric)]/10 hover:border-[var(--color-electric)]/30 hover:-translate-y-1"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Uma Techno | Premium Software Engineering Agency" },
      { name: "description", content: "World-class web and app development agency based in Rajkot, Gujarat. We build premium, scalable, and futuristic digital products." },
      { name: "author", content: "Uma Techno" },
      { property: "og:title", content: "Uma Techno | Premium Digital Agency" },
      { property: "og:description", content: "We engineer digital perfection. Contact us to build your next enterprise product." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@UmaTechno" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <SmoothScroll>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </SmoothScroll>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
