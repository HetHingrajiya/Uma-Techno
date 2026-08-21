import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as J } from "../_libs/next-themes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BxLVS1SV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C-ZQdeEb.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function ThemeProvider$1({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, {
		...props,
		children
	});
}
function SmoothScroll({ children }) {
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: "vertical",
			gestureDirection: "vertical",
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-electric)]/10 rounded-full blur-[150px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center relative z-10 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-8xl lg:text-9xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--color-electric)]",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl lg:text-3xl font-bold text-[var(--color-text-main)] font-outfit",
						children: "Lost in Cyberspace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-70",
						children: "The page you're looking for doesn't exist or has been moved to another dimension."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all shadow-[0_0_20px_var(--color-electric)] hover:shadow-none hover:-translate-y-1",
						children: "Return Home"
					})
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center relative z-10 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl lg:text-4xl font-bold font-outfit text-white",
					children: ["System ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-500",
						children: "Error"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--color-text-main)] opacity-70",
					children: "A critical failure occurred in the matrix. Our engineers have been notified."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 flex flex-col sm:flex-row justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-[var(--color-electric)] px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:bg-[var(--color-electric)]/90 hover:-translate-y-1 shadow-[0_0_20px_var(--color-electric)]",
						children: "Reboot System"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-8 py-4 text-sm font-bold tracking-widest uppercase text-[var(--color-text-main)] transition-all hover:bg-[var(--color-electric)]/10 hover:border-[var(--color-electric)]/30 hover:-translate-y-1",
						children: "Return Home"
					})]
				})
			]
		})]
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Uma Techno | Premium Software Engineering Agency" },
			{
				name: "description",
				content: "World-class web and app development agency based in Rajkot, Gujarat. We build premium, scalable, and futuristic digital products."
			},
			{
				name: "author",
				content: "Uma Techno"
			},
			{
				property: "og:title",
				content: "Uma Techno | Premium Digital Agency"
			},
			{
				property: "og:description",
				content: "We engineer digital perfection. Contact us to build your next enterprise product."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@UmaTechno"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider$1, {
			attribute: "class",
			defaultTheme: "dark",
			enableSystem: true,
			disableTransitionOnChange: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
		})
	});
}
var $$splitComponentImporter$1 = () => import("../_-DJzZTHlM.mjs");
var Route$1 = createFileRoute("/$")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-7t15aEJU.mjs");
var Route = createFileRoute("/")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SplatRoute = Route$1.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	SplatRoute
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
