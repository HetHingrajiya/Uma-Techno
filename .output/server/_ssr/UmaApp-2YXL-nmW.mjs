import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Route, c as useNavigate, i as Outlet, n as Link, o as Routes, r as Navigate, s as useLocation, t as BrowserRouter } from "../_libs/react-router.mjs";
import { A as MessageSquare, B as LayoutDashboard, C as Phone, E as PanelsTopLeft, F as Mail, G as Globe, H as Image, I as LogOut, L as Lock, M as Menu, P as MapPin, R as LoaderCircle, S as Plus, V as Layers, W as Hash, X as EyeOff, Y as Eye, Z as Download, a as Type, at as ChevronDown, ct as Calendar, et as Clock, ft as ArrowUpRight, g as Search, ht as ArrowDownRight, i as User, it as ChevronUp, j as MessageCircle, l as Tag, lt as Building2, mt as ArrowLeft, n as X, nt as CircleCheckBig, o as TrendingUp, ot as Check, pt as ArrowRight, q as FileText, r as Users, s as Trash2, t as Zap, u as Star, ut as Briefcase, v as Save, w as Pen, x as RefreshCw, y as RotateCcw } from "../_libs/lucide-react.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as Tooltip, r as XAxis, s as ResponsiveContainer, t as AreaChart } from "../_libs/recharts+victory-vendor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/UmaApp-2YXL-nmW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultTheme = {
	primaryColor: "#22D3EE",
	secondaryColor: "#0891B2",
	accentColor: "#6366F1",
	textColor: "#F8FAFC",
	backgroundColor: "#05070F",
	borderColor: "#1E2A44",
	cardColor: "#0B1224",
	headerColor: "#05070F",
	footerColor: "#03050B",
	fontFamily: "Inter, Outfit, sans-serif",
	logoUrl: null,
	heroImageUrl: null,
	aboutImageUrl: null
};
var ThemeContext = (0, import_react.createContext)(void 0);
/**
* ThemeProvider:
* The root-level context provider that handles static CSS variable injection.
*/
function ThemeProvider({ children }) {
	const theme = defaultTheme;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeContext.Provider, {
		value: { theme },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
          :root {
            ${(() => {
			const hexToRgb = (hex) => {
				try {
					const h = hex.startsWith("#") ? hex : "#FFFFFF";
					return `${parseInt(h.slice(1, 3), 16)}, ${parseInt(h.slice(3, 5), 16)}, ${parseInt(h.slice(5, 7), 16)}`;
				} catch (e) {
					return "255, 255, 255";
				}
			};
			const getLuminance = (hex) => {
				try {
					const h = hex.startsWith("#") ? hex : "#FFFFFF";
					const r = parseInt(h.slice(1, 3), 16);
					const g = parseInt(h.slice(3, 5), 16);
					const b = parseInt(h.slice(5, 7), 16);
					return (.299 * r + .587 * g + .114 * b) / 255;
				} catch (e) {
					return 1;
				}
			};
			const isMainDark = getLuminance(theme.backgroundColor || "#FFFFFF") < .5;
			const navBg = isMainDark ? "#FFFFFF" : "#0F172A";
			const footerBg = isMainDark ? "#F8FAFC" : "#0F172A";
			const navText = isMainDark ? "#0F172A" : "#FFFFFF";
			const footerText = isMainDark ? "#0F172A" : "#FFFFFF";
			return `
                --color-electric: ${theme.primaryColor};
                --color-secondary: ${theme.secondaryColor};
                --color-accent: ${theme.accentColor};
                --color-text-main: ${theme.textColor};
                --color-background: ${theme.backgroundColor};
                --background: ${theme.backgroundColor};
                --foreground: ${theme.textColor};
                --color-border: ${theme.borderColor};
                --color-card: ${theme.cardColor};
                --font-sans: ${theme.fontFamily || "'Inter', 'Outfit', sans-serif"};
                --font-outfit: ${theme.fontFamily || "'Outfit', sans-serif"};
                
                --color-header: ${navBg};
                --color-footer: ${footerBg};
                --color-nav-text: ${navText};
                --color-footer-text: ${footerText};
                --color-header-rgb: ${hexToRgb(navBg)};
                --color-footer-rgb: ${hexToRgb(footerBg)};
              `;
		})()}
          }
        ` } }), children]
	});
}
/**
* useTheme Hook:
* Safe access to the current theme tokens from any component.
*/
function useTheme() {
	const context = (0, import_react.useContext)(ThemeContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
/**
* Logo Component:
* The primary brand identifier.
* Features a smart fallback system: if the dynamic logo fails to load, 
* it renders a premium modern SVG icon.
*/
function Logo({ className = "w-10 h-10" }) {
	const { theme } = useTheme();
	const [error, setError] = (0, import_react.useState)(false);
	if (error || !theme.logoUrl) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative flex items-center justify-center shrink-0 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: theme.logoUrl,
			alt: "Uma Techno Logo",
			width: 100,
			height: 100,
			loading: "eager",
			className: "w-full h-full object-contain transition-opacity duration-300",
			onError: () => setError(true)
		})
	});
}
var navLinks = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "About",
		href: "/about"
	},
	{
		name: "Services",
		href: "/services",
		submenu: [
			{
				name: "Web Development",
				href: "/services/web-development"
			},
			{
				name: "Mobile App Development",
				href: "/services/app-development"
			},
			{
				name: "UI/UX Design",
				href: "/services/ui-ux"
			},
			{
				name: "SEO Services",
				href: "/services/seo"
			},
			{
				name: "Custom Software",
				href: "/services/custom-software"
			},
			{
				name: "Digital Branding",
				href: "/services/branding"
			}
		]
	},
	{
		name: "Portfolio",
		href: "/portfolio"
	},
	{
		name: "Blog",
		href: "/blog"
	},
	{
		name: "Contact",
		href: "/contact"
	}
];
function Navbar() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [activeSubmenu, setActiveSubmenu] = (0, import_react.useState)(null);
	const pathname = useLocation().pathname;
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		setIsOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: cn("fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-[1000] transition-all duration-500 rounded-full", "bg-[#0B1120]/95 backdrop-blur-xl py-3 shadow-2xl border border-[#1E293B]/50"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-10 h-10 transition-transform group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-black tracking-tighter uppercase transition-colors text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--color-electric)]",
								children: "Uma"
							}), " Techno"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[8px] font-bold tracking-[0.3em] uppercase mt-0.5 transition-colors text-white/70",
							children: ["Innovate. Create. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--color-electric)]",
								children: "Elevate."
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-10",
					children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.href,
								className: cn("text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-electric)]", pathname === link.href ? "text-[var(--color-electric)]" : "text-white/90"),
								children: link.name
							}),
							link.submenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[var(--color-header)] border border-[var(--color-border)]/50 shadow-2xl rounded-3xl p-4 min-w-[300px] grid gap-2",
									children: link.submenu.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: sub.href,
										className: "p-3 rounded-xl hover:bg-[var(--color-nav-text)]/5 text-sm font-bold text-[var(--color-nav-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-electric)] transition-all flex items-center justify-between group/sub",
										children: [sub.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 14,
											className: "opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all"
										})]
									}, sub.name))
								})
							}),
							pathname === link.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layoutId: "nav-underline",
								className: "absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-electric)]"
							})
						]
					}, link.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "px-6 py-2.5 bg-gradient-premium text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all",
						children: "Get a Quote"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden p-2 backdrop-blur-md rounded-xl shadow-sm border transition-colors text-white bg-[#0B1120]/50 border-white/10",
					onClick: () => setIsOpen(!isOpen),
					"aria-label": "Toggle Menu",
					children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 28 })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] md:hidden",
		onClick: () => setIsOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { x: "-100%" },
		animate: { x: 0 },
		exit: { x: "-100%" },
		transition: {
			type: "tween",
			duration: .4,
			ease: "circOut"
		},
		className: "fixed inset-y-0 left-0 w-[85%] max-w-[320px] h-full z-[9999] md:hidden flex flex-col shadow-2xl bg-[var(--color-header)] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col h-full bg-[var(--color-header)] relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 flex justify-between items-center border-b border-[var(--color-nav-text)]/10 bg-[var(--color-header)] shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: () => setIsOpen(false),
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-8 h-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl font-black tracking-tighter uppercase text-[var(--color-nav-text)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--color-electric)]",
									children: "Uma"
								}), " Techno"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[7px] font-bold tracking-[0.2em] uppercase mt-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--color-nav-text)] opacity-60",
									children: "Innovate. Create. "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--color-electric)]",
									children: "Elevate."
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsOpen(false),
						className: "w-10 h-10 rounded-full bg-[var(--color-nav-text)]/5 flex items-center justify-center text-[var(--color-nav-text)] border border-[var(--color-nav-text)]/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 px-6 py-8 space-y-4 bg-transparent overflow-y-auto",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-center justify-between px-4 py-3 rounded-xl transition-all", pathname === link.href ? "bg-[var(--color-electric)] text-white shadow-md shadow-[var(--color-electric)]/20" : "hover:bg-[var(--color-nav-text)]/5 text-[var(--color-nav-text)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.href,
								className: "text-lg font-bold font-outfit flex-1",
								onClick: () => !link.submenu && setIsOpen(false),
								children: link.name
							}), link.submenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => {
									e.preventDefault();
									setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
								},
								className: cn("p-1", pathname === link.href ? "text-white" : "text-[var(--color-nav-text)]/40"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									size: 20,
									className: cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")
								})
							})]
						}), link.submenu && activeSubmenu === link.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pl-4 flex flex-col gap-4 border-l-2 border-[var(--color-electric)]/20 mb-2",
							children: link.submenu.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: sub.href,
								className: "text-base font-bold",
								style: {
									color: "var(--color-nav-text)",
									opacity: .6
								},
								onClick: () => setIsOpen(false),
								children: sub.name
							}, sub.name))
						})]
					}, link.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 bg-[var(--color-nav-text)]/5 border-t border-[var(--color-nav-text)]/10 space-y-6 shrink-0 mt-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "block w-full bg-[var(--color-electric)] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg",
						onClick: () => setIsOpen(false),
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center text-[10px] text-[var(--color-nav-text)] opacity-40 uppercase tracking-widest font-bold",
						children: [
							"© 2026 UMA TECHNO. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							" SOLUTIONS FOR THE FUTURE."
						]
					})]
				})
			]
		})
	})] }) })] });
}
var Facebook = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...props,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
});
var Twitter = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...props,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
});
var Instagram = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...props,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "20",
			height: "20",
			x: "2",
			y: "2",
			rx: "5",
			ry: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "17.5",
			x2: "17.51",
			y1: "6.5",
			y2: "6.5"
		})
	]
});
var Linkedin = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...props,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "4",
			height: "12",
			x: "2",
			y: "9"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "4",
			cy: "4",
			r: "2"
		})
	]
});
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative pt-32 pb-24 lg:pb-12 overflow-hidden border-t border-white/5",
		style: { backgroundColor: "var(--color-footer)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none opacity-30 [mask-image:linear-gradient(180deg,black,transparent_80%)]",
				style: { backgroundImage: "url('/grid.svg')" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-[var(--color-electric)]/20 via-[var(--color-violet)]/20 to-[var(--color-electric)]/20 blur-[120px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[var(--color-footer-text)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex flex-col mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xl font-black font-outfit tracking-tighter uppercase leading-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--color-electric)]",
											children: "UMA"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: "TECHNO"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[8px] font-bold tracking-[0.2em] uppercase mt-1.5 leading-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/60",
										children: "INNOVATE. CREATE. "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-electric)]",
										children: "ELEVATE."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-footer-text)] opacity-60 text-sm leading-relaxed",
								children: "A premium digital agency dedicated to engineering high-performance websites, mobile applications, and custom business software that drive real growth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-4",
								children: [
									{
										Icon: Facebook,
										href: "#"
									},
									{
										Icon: Twitter,
										href: "#"
									},
									{
										Icon: Instagram,
										href: "https://www.instagram.com/uma.techno/"
									},
									{
										Icon: Linkedin,
										href: "https://www.linkedin.com/company/uma-techno"
									}
								].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: href !== "#" ? "_blank" : void 0,
									rel: href !== "#" ? "noopener noreferrer" : void 0,
									"data-cursor": "link",
									className: "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--color-electric)]/60 hover:bg-[var(--color-electric)]/15 hover:shadow-[0_0_25px_-5px_var(--color-blue-glow)] transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[var(--color-footer-text)] font-bold mb-6 text-lg",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: [
							{
								name: "About Us",
								href: "/about"
							},
							{
								name: "Our Services",
								href: "/services"
							},
							{
								name: "Portfolio",
								href: "/portfolio"
							},
							{
								name: "Contact Us",
								href: "/contact"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "text-[var(--color-footer-text)] opacity-60 hover:text-[var(--color-electric)] transition-colors",
							children: item.name
						}) }, item.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[var(--color-footer-text)] font-bold mb-6 text-lg",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: [
							{
								name: "Web Development",
								href: "/web-development"
							},
							{
								name: "SEO Services",
								href: "/seo-services"
							},
							{
								name: "Digital Marketing",
								href: "/digital-marketing"
							},
							{
								name: "App Development",
								href: "/services/app-development"
							},
							{
								name: "UI/UX Design",
								href: "/services/ui-ux"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "text-[var(--color-footer-text)] opacity-60 hover:text-[var(--color-electric)] transition-colors",
							children: item.name
						}) }, item.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[var(--color-footer-text)] font-bold mb-6 text-lg",
						children: "Contact Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-[var(--color-footer-text)] opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "text-[var(--color-electric)] shrink-0",
									size: 20
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rajkot, Gujarat, India" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-[var(--color-footer-text)] opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "text-[var(--color-electric)] shrink-0",
									size: 20
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 92743 50728" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-[var(--color-footer-text)] opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "text-[var(--color-electric)] shrink-0",
									size: 20
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "uma.techno585@gmail.com" })]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[var(--color-footer-text)] opacity-40 text-sm",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Uma Techno. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "text-[var(--color-footer-text)] opacity-40 hover:text-[var(--color-electric)] transition-colors",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "text-[var(--color-footer-text)] opacity-40 hover:text-[var(--color-electric)] transition-colors",
						children: "Terms of Service"
					})]
				})]
			})
		]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		drag: true,
		dragConstraints: {
			left: -300,
			right: 0,
			top: -500,
			bottom: 0
		},
		href: "https://wa.me/919274350728?text=Hi%20Uma%20Techno,%20I'm%20interested%20in%20your%20services.",
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-24 lg:bottom-8 left-6 lg:left-auto lg:right-8 z-[999] bg-[#25D366] text-white p-3 lg:p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center animate-bounce-slight cursor-move",
		"aria-label": "Chat on WhatsApp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				size: 24,
				className: "lg:hidden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				size: 28,
				className: "hidden lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute -top-2 -right-2 flex h-4 w-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-4 w-4 bg-red-500" })]
			})
		]
	});
}
function VisitTracker() {
	const pathname = useLocation().pathname;
	(0, import_react.useEffect)(() => {
		const trackVisit = async () => {
			if (pathname.includes("/admin")) return;
			try {
				await fetch(`https://uma-techno-phrb.vercel.app/api/v1/analytics/track`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ path: pathname })
				});
			} catch (err) {}
		};
		trackVisit();
	}, [pathname]);
	return null;
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
function Cursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(hover: none)").matches) return;
		document.documentElement.classList.add("cursor-none-app");
		let mx = window.innerWidth / 2;
		let my = window.innerHeight / 2;
		let rx = mx;
		let ry = my;
		let raf = 0;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
		};
		const tick = () => {
			rx += (mx - rx) * .15;
			ry += (my - ry) * .15;
			if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(var(--s, 1))`;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		const enter = () => ring.current?.style.setProperty("--s", "2.2");
		const leave = () => ring.current?.style.setProperty("--s", "1");
		const targets = "a, button, [role=\"button\"], [data-cursor], input, textarea, select";
		const bind = () => {
			document.querySelectorAll(targets).forEach((el) => {
				el.addEventListener("mouseenter", enter);
				el.addEventListener("mouseleave", leave);
			});
		};
		const mo = new MutationObserver(bind);
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
		bind();
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			mo.disconnect();
			document.documentElement.classList.remove("cursor-none-app");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-[var(--color-electric)]/70 mix-blend-difference transition-[width,height,border-color] duration-300 hidden md:block",
		style: { transform: "translate3d(-100px,-100px,0)" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[var(--color-electric)] hidden md:block",
		style: { transform: "translate3d(-100px,-100px,0)" }
	})] });
}
function SiteLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen mesh-bg noise relative text-[var(--color-text-main)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitTracker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-grow flex flex-col w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
var sidebarLinks = [
	{
		name: "Dashboard",
		href: "/admin/dashboard",
		icon: LayoutDashboard
	},
	{
		name: "Leads",
		href: "/admin/leads",
		icon: MessageSquare
	},
	{
		name: "Services",
		href: "/admin/cms/services",
		icon: Briefcase
	},
	{
		name: "Portfolio",
		href: "/admin/cms/portfolio",
		icon: FileText
	},
	{
		name: "Testimonials",
		href: "/admin/cms/testimonials",
		icon: Users
	},
	{
		name: "SEO Manager",
		href: "/admin/seo",
		icon: Globe
	},
	{
		name: "Widgets",
		href: "/admin/widgets",
		icon: Layers
	}
];
function AdminLayout() {
	const navigate = useNavigate();
	const pathname = useLocation().pathname;
	const [clearingCache, setClearingCache] = (0, import_react.useState)(false);
	const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsSidebarOpen(false);
	}, [pathname]);
	if (pathname.includes("/admin/login")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-[var(--color-background)] text-[var(--color-text-main)] transition-colors duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "lg:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--color-navy-light)] border-b border-[var(--color-border)] flex items-center justify-between px-4 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/dashboard",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-10 h-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-black tracking-tight text-[var(--color-text-main)] uppercase",
						children: ["Uma", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-electric",
							children: "Admin"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsSidebarOpen(!isSidebarOpen),
					className: "p-2 text-[var(--color-text-main)] hover:bg-white/5 rounded-lg transition-colors",
					children: isSidebarOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 24 })
				})]
			}),
			isSidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
				onClick: () => setIsSidebarOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("w-64 bg-[var(--color-navy-light)] border-r border-[var(--color-border)] flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:translate-x-0", isSidebarOpen ? "translate-x-0" : "-translate-x-full"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/dashboard",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-10 h-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-black tracking-tight text-[var(--color-text-main)] uppercase",
								children: ["Uma", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-electric",
									children: "Admin"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsSidebarOpen(false),
							className: "lg:hidden p-2 text-[var(--color-text-main)] opacity-50 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-grow px-4 space-y-2 mt-4 overflow-y-auto",
						children: sidebarLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: link.href,
							className: cn("flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200", pathname === link.href ? "bg-electric text-white shadow-lg shadow-electric/20" : "text-gray-400 hover:bg-white/5 hover:text-white"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.icon, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: link.name
							})]
						}, link.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-t border-[var(--color-border)] space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: async () => {
								setClearingCache(true);
								try {
									await fetch(`https://uma-techno-phrb.vercel.app/api/v1/clear-cache`, { method: "POST" });
									alert("Cache cleared successfully!");
								} catch (e) {
									alert("Failed to clear cache");
								}
								setClearingCache(false);
							},
							disabled: clearingCache,
							className: "flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-electric/10 hover:text-electric transition-all disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								size: 20,
								className: clearingCache ? "animate-spin" : ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: clearingCache ? "Clearing..." : "Clear Cache"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								localStorage.removeItem("admin_token");
								navigate("/admin/login");
							},
							className: "flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Logout"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-grow lg:ml-64 px-4 md:px-8 py-6 md:py-10 mt-16 lg:mt-0 transition-all duration-300 w-full overflow-x-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-col md:flex-row md:justify-between md:items-start lg:items-center mb-6 md:mb-10 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl md:text-3xl font-bold font-outfit",
						children: sidebarLinks.find((l) => l.href === pathname)?.name || "Admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-400 lg:hidden mt-1",
						children: "admin@umatechno.com"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 bg-[var(--color-navy-light)] p-2 pr-4 rounded-2xl border border-[var(--color-border)] md:bg-transparent md:p-0 md:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center font-bold text-electric shrink-0",
							children: "AD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left md:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: "Admin User"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gray-400 hidden lg:block",
								children: "admin@umatechno.com"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[400px] flex flex-col items-center justify-center opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								className: "animate-spin text-electric mb-4",
								size: 32
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-sm uppercase tracking-widest",
								children: "Loading Module..."
							})]
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})
				})]
			})
		]
	});
}
/**
* ProtectedRoute Component:
* Enforces authentication by checking for the admin_token in localStorage.
* If the user is unauthenticated, they are redirected to the login page.
*/
function ProtectedRoute({ children }) {
	const [isChecking, setIsChecking] = (0, import_react.useState)(true);
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const token = localStorage.getItem("admin_token");
		setIsAuthenticated(!!token);
		setIsChecking(false);
	}, []);
	if (isChecking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-[var(--color-background)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-16 border-4 border-electric border-t-transparent rounded-full animate-spin" })
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		state: { from: location },
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function AdminLogin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const navigate = useNavigate();
	import_react.useEffect(() => {
		if (localStorage.getItem("admin_token")) navigate("/admin/dashboard");
	}, [navigate]);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			if (email === "admin@umatechno.com" && password === "admin123") {
				localStorage.setItem("admin_token", "mock_token");
				navigate("/admin/dashboard");
			} else setError("Invalid credentials. Please try again.");
		} catch (err) {
			setError("Something went wrong. Please try again later.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center bg-navy px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-0 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/20 rounded-full blur-[120px]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md glass-card p-10 rounded-[2.5rem] relative z-10 border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-2 mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 bg-gradient-to-br from-electric to-accent rounded-2xl flex items-center justify-center font-bold text-white text-3xl mx-auto shadow-lg shadow-electric/20 mb-4",
						children: "U"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold font-outfit",
						children: "Admin Panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gray-400",
						children: "Welcome back! Please login to your account."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium text-gray-300 ml-1",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "admin@umatechno.com",
								className: "w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-electric focus:ring-1 focus:ring-electric transition-all outline-none"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium text-gray-300 ml-1",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								placeholder: "••••••••",
								className: "w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-electric focus:ring-1 focus:ring-electric transition-all outline-none"
							})]
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-400 text-sm text-center font-medium bg-red-400/10 py-2 rounded-lg border border-red-400/20",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "w-full bg-electric hover:bg-electric/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-electric/20 flex items-center justify-center gap-2 active:scale-[0.98]",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin",
							size: 20
						}) : "Login to Dashboard"
					})
				]
			})]
		})]
	});
}
/**
* DashboardDashboard:
* The primary administrative landing page.
* Orchestrates real-time analytics fetching, lead monitoring, and system status tracking.
*/
function DashboardDashboard() {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		fetchStats();
	}, []);
	/**
	* fetchStats:
	* Communicates with the CMS backend to retrieve lead counts, visit trends, 
	* and recent activity.
	*/
	const fetchStats = async () => {
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/dashboard/stats`);
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
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[60vh] flex flex-col items-center justify-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "animate-spin text-electric",
			size: 40
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[var(--color-text-main)] opacity-50 font-bold animate-pulse",
			children: "Loading real-time data..."
		})]
	});
	const stats = Array.isArray(data?.stats) ? data.stats : [
		{
			name: "Total Leads",
			value: "0",
			change: "0%",
			trendingUp: true,
			icon: MessageSquare
		},
		{
			name: "Active Projects",
			value: "0",
			change: "0%",
			trendingUp: true,
			icon: TrendingUp
		},
		{
			name: "Total Services",
			value: "0",
			change: "0%",
			trendingUp: true,
			icon: Layers
		}
	];
	const getIcon = (name) => {
		const n = name || "";
		if (n.includes("Leads")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 24 });
		if (n.includes("Projects")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 24 });
		if (n.includes("Visits")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 24 });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 24 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 md:space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl md:text-2xl font-bold font-outfit text-[var(--color-text-main)]",
					children: "Dashboard Overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-[var(--color-text-main)] opacity-50 font-bold uppercase tracking-widest mt-1 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
						" ",
						mounted ? (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
							month: "long",
							day: "numeric",
							year: "numeric"
						}) : "Loading date..."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center justify-center gap-2 px-4 py-2 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-xl font-bold text-sm hover:bg-[var(--color-electric)] hover:text-white transition-all shadow-sm w-full sm:w-auto",
					onClick: () => {
						setLoading(true);
						fetchStats();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 }), " Refresh Data"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: stats.length > 0 ? stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric",
								children: getIcon(stat.name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter ${stat.trendingUp ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"}`,
								children: [stat.change || "Live", stat.trendingUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 14,
									className: "hover-arrow"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
									size: 14,
									className: "hover-arrow"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[var(--color-text-main)] opacity-70 text-sm font-bold uppercase tracking-tight",
							children: stat.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-black font-outfit mt-1 text-[var(--color-text-main)]",
							children: stat.value || "0"
						})
					]
				}, stat.name)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full p-12 text-center glass-card rounded-2xl opacity-50 font-bold",
					children: "No statistics available yet."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm overflow-hidden relative group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-electric/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xl font-bold font-outfit text-[var(--color-text-main)] flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
								size: 20,
								className: "text-electric"
							}), " Lead Growth Trend"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-text-main)] opacity-50 font-medium",
							children: "Monthly acquisition analytics for your business."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-4 py-1.5 bg-[var(--color-navy-light)] rounded-full text-[10px] font-bold text-[var(--color-text-main)] opacity-70 uppercase tracking-widest border border-[var(--color-border)]",
								children: "Last 7 Months"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[250px] sm:h-[350px] w-full relative z-10",
						children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: data?.graphData || [],
								margin: {
									top: 10,
									right: 10,
									left: -20,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "colorLeads",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "5%",
											stopColor: "var(--color-electric)",
											stopOpacity: .3
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "95%",
											stopColor: "var(--color-electric)",
											stopOpacity: 0
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "colorVisits",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "5%",
											stopColor: "var(--color-accent)",
											stopOpacity: .1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "95%",
											stopColor: "var(--color-accent)",
											stopOpacity: 0
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										vertical: false,
										stroke: "rgba(15, 23, 42, 0.05)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										axisLine: false,
										tickLine: false,
										tick: {
											fill: "var(--color-text-main)",
											opacity: .5,
											fontSize: 12,
											fontWeight: "bold"
										},
										dy: 10
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										axisLine: false,
										tickLine: false,
										tick: {
											fill: "var(--color-text-main)",
											opacity: .5,
											fontSize: 12,
											fontWeight: "bold"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										backgroundColor: "var(--color-card)",
										borderRadius: "16px",
										border: "1px solid var(--color-border)",
										boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
										color: "var(--color-text-main)",
										fontWeight: "bold"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "visits",
										stroke: "var(--color-accent)",
										strokeWidth: 2,
										strokeDasharray: "5 5",
										fillOpacity: 1,
										fill: "url(#colorVisits)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "leads",
										stroke: "var(--color-electric)",
										strokeWidth: 4,
										fillOpacity: 1,
										fill: "url(#colorLeads)"
									})
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full flex items-center justify-center opacity-20",
							children: "Initializing analytics..."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 xl:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xl font-bold font-outfit text-[var(--color-text-main)] flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
								size: 20,
								className: "text-electric"
							}), " Recent Inquiries"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/leads",
							className: "text-electric text-sm font-bold hover:underline bg-electric/5 px-4 py-2 rounded-xl transition-all flex items-center gap-1 group",
							children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "hover-arrow"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: data?.recentLeads?.length > 0 ? data.recentLeads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-5 rounded-2xl bg-[var(--color-navy-light)] border border-[var(--color-border)] hover:border-electric/30 transition-all cursor-pointer group shadow-sm hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-2xl bg-gradient-premium flex items-center justify-center font-black text-white text-xs shadow-lg group-hover:scale-110 transition-transform",
									children: (lead.name || "UN").split(" ").filter(Boolean).map((n) => n[0]).join("").toUpperCase().substring(0, 2)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-[var(--color-text-main)] text-base",
									children: lead.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[var(--color-text-main)] opacity-60 font-medium",
									children: lead.subject || "General Inquiry"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right flex flex-col items-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-[var(--color-text-main)] opacity-40 font-bold uppercase tracking-widest flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 10 }),
										" ",
										new Date(lead.createdAt).toLocaleDateString()
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${lead.status === "NEW" ? "bg-electric/20 text-electric" : "bg-slate-200 text-slate-600"}`,
									children: lead.status
								})]
							})]
						}, lead.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center p-10 opacity-50 font-bold",
							children: "No recent inquiries found."
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6 md:p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold font-outfit text-[var(--color-text-main)]",
								children: "System Health"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-[10px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }), " Operational"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								{
									label: "Site Performance",
									value: "98/100",
									status: "Optimal"
								},
								{
									label: "SEO Index Score",
									value: "85%",
									status: "Good"
								},
								{
									label: "Database Health",
									value: "100%",
									status: "Stable"
								},
								{
									label: "Server Latency",
									value: "24ms",
									status: "Low"
								}
							].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-2xl bg-[var(--color-navy-light)] border border-[var(--color-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black text-[var(--color-text-main)] opacity-40 uppercase tracking-widest mb-1",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-[var(--color-text-main)]",
										children: item.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold text-green-500 mt-1 uppercase tracking-tighter",
										children: item.status
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "w-full py-4 bg-white border border-[var(--color-border)] rounded-2xl font-bold text-sm text-[var(--color-text-main)] hover:bg-electric/5 hover:border-electric transition-all flex items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
									size: 16,
									className: "text-electric"
								}), " Run System Audit"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full py-4 bg-gradient-premium text-white rounded-2xl font-bold text-sm shadow-xl hover:scale-[1.02] transition-all",
								children: "Export Analytics Report (PDF)"
							})]
						})
					]
				})]
			})
		]
	});
}
function LeadsDashboard() {
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const fetchLeads = async () => {
			try {
				const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/contacts`);
				if (res.ok) {
					const result = await res.json();
					if (result.success && Array.isArray(result.data)) setLeads(result.data);
					else if (Array.isArray(result)) setLeads(result);
				}
			} catch (err) {
				console.error("Failed to fetch leads", err);
			} finally {
				setLoading(false);
			}
		};
		fetchLeads();
	}, []);
	const handleExport = () => {
		const csvContent = [[
			"Name",
			"Email",
			"Phone",
			"Service",
			"Message",
			"Date"
		].join(","), ...leads.map((l) => `"${l.name}","${l.email}","${l.phone || ""}","${l.service || ""}","${l.message.replace(/"/g, "\"\"")}","${new Date(l.createdAt).toLocaleDateString()}"`)].join("\n");
		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = `uma-techno-leads-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
		link.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[var(--color-navy-light)] p-4 md:p-6 rounded-2xl border border-[var(--color-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-lg md:text-xl font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
					size: 20,
					className: "text-electric"
				}), " Lead Generation"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[var(--color-text-main)] opacity-70 text-sm mt-1",
				children: "Manage and export your incoming client inquiries."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleExport,
				disabled: leads.length === 0,
				className: "flex items-center justify-center gap-2 bg-electric text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-electric/90 transition-colors disabled:opacity-50 w-full sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Export CSV"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 border-b border-[var(--color-border)] flex gap-4 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
						size: 16
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search by name, email, or service...",
						className: "w-full bg-transparent border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-electric"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-0 overflow-x-auto",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-[var(--color-text-main)] opacity-50",
					children: "Loading leads..."
				}) : leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-12 text-center flex flex-col items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-[var(--color-navy-light)] rounded-full flex items-center justify-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 24,
								className: "text-[var(--color-text-main)] opacity-30"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold text-[var(--color-text-main)] mb-2",
							children: "No leads yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-60 max-w-sm",
							children: "When visitors fill out your contact form, their inquiries will appear here."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-[800px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-[var(--color-navy-light)] border-b border-[var(--color-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60",
									children: "Client Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60",
									children: "Interested In"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60",
									children: "Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60 text-right",
									children: "Date"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Array.isArray(leads) && leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-bold text-[var(--color-text-main)]",
											children: lead.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm text-[var(--color-text-main)] opacity-70 flex items-center gap-1 mt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 12 }),
												" ",
												lead.email
											]
										}),
										lead.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm text-[var(--color-text-main)] opacity-70 flex items-center gap-1 mt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 12 }),
												" ",
												lead.phone
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 bg-electric/10 text-electric rounded-full text-xs font-bold",
										children: lead.service || "General Inquiry"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-text-main)] opacity-80 max-w-md truncate",
										title: lead.message,
										children: lead.message
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4 text-right text-sm text-[var(--color-text-main)] opacity-70 whitespace-nowrap",
									children: new Date(lead.createdAt).toLocaleDateString()
								})
							]
						}, lead.id)) })]
					})
				})
			})]
		})]
	});
}
function ServicesManager() {
	const [services, setServices] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [currentService, setCurrentService] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		slug: "",
		description: "",
		content: "",
		icon: "Layout",
		published: true,
		features: [],
		benefits: []
	});
	(0, import_react.useEffect)(() => {
		fetchServices();
	}, []);
	const fetchServices = async () => {
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/services`);
			if (res.ok) {
				const result = await res.json();
				setServices(result.success ? result.data : result);
			}
		} catch (err) {
			console.error("Failed to fetch services", err);
		} finally {
			setLoading(false);
		}
	};
	const handleOpenModal = (service = null) => {
		if (service) {
			setCurrentService(service);
			setFormData({
				title: service.title,
				slug: service.slug,
				description: service.description,
				content: service.content,
				icon: service.icon || "Layout",
				published: service.published,
				features: service.features || [],
				benefits: service.benefits || []
			});
		} else {
			setCurrentService(null);
			setFormData({
				title: "",
				slug: "",
				description: "",
				content: "",
				icon: "Layout",
				published: true,
				features: [],
				benefits: []
			});
		}
		setIsModalOpen(true);
	};
	const handleTitleChange = (e) => {
		const title = e.target.value;
		const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
		setFormData({
			...formData,
			title,
			slug
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);
		try {
			const url = currentService ? `https://uma-techno-phrb.vercel.app/api/v1/services/${currentService.id}` : `https://uma-techno-phrb.vercel.app/api/v1/services`;
			const res = await fetch(url, {
				method: currentService ? "PUT" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			if (res.ok) {
				setIsModalOpen(false);
				fetchServices();
			} else {
				const err = await res.json();
				alert(err.message || "Failed to save service");
			}
		} catch (err) {
			alert("Network error. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this service?")) return;
		try {
			if ((await fetch(`https://uma-techno-phrb.vercel.app/api/v1/services/${id}`, { method: "DELETE" })).ok) fetchServices();
		} catch (err) {
			alert("Failed to delete service");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/cms",
					className: "w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-[var(--color-text-main)]",
					children: "Manage Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-text-main)] opacity-60",
					children: "Add, edit, or remove your service offerings."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-bold text-[var(--color-text-main)]",
						children: [
							"Service Inventory (",
							services.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleOpenModal(),
						className: "flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), " Add New Service"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-0 overflow-x-auto",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin text-electric",
							size: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-50 font-medium",
							children: "Fetching services..."
						})]
					}) : services.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 bg-[var(--color-navy-light)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, {
									size: 32,
									className: "text-[var(--color-text-main)] opacity-20"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl font-bold text-[var(--color-text-main)] mb-2",
								children: "No services yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 max-w-sm mb-8",
								children: "Start growing your agency by listing your expert services here."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleOpenModal(),
								className: "bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all",
								children: "Create Your First Service"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-[800px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[var(--color-navy-light)] border-b border-[var(--color-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Service Title"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Route URL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-10 h-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center font-bold",
												children: service.title.charAt(0)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors",
												children: service.title
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-6 text-sm font-mono text-[var(--color-text-main)] opacity-60",
										children: ["/services/", service.slug]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-3 py-1 text-[10px] uppercase tracking-widest font-black rounded-lg ${service.published ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-orange-500/10 text-orange-500 border border-orange-500/20"}`,
											children: service.published ? "Published" : "Draft"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleOpenModal(service),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all",
												title: "Edit Service",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDelete(service.id),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all",
												title: "Delete Service",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
											})]
										})
									})
								]
							}, service.id)) })]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setIsModalOpen(false),
					className: "absolute inset-0 bg-slate-900/60 backdrop-blur-md"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					animate: {
						scale: 1,
						opacity: 1,
						y: 0
					},
					exit: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					className: "relative w-full max-w-4xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]",
							children: currentService ? "Edit Service" : "Add New Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium",
							children: "Configure your service details below."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(false),
							className: "w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] hover:border-slate-300 transition-all shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex-1 overflow-y-auto p-6 md:p-10 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, {
												size: 14,
												className: "text-electric"
											}), " Service Title"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											value: formData.title,
											onChange: handleTitleChange,
											placeholder: "e.g. Web Development",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, {
												size: 14,
												className: "text-electric"
											}), " URL Slug"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											value: formData.slug,
											onChange: (e) => setFormData({
												...formData,
												slug: e.target.value
											}),
											placeholder: "web-development",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-sm text-[var(--color-text-main)] opacity-60 transition-colors"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, {
												size: 14,
												className: "text-electric"
											}), " Icon Identifier"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: formData.icon,
											onChange: (e) => setFormData({
												...formData,
												icon: e.target.value
											}),
											placeholder: "e.g. Code, Database, Layout",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-4 bg-[var(--color-navy-light)] rounded-2xl border border-slate-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-[var(--color-text-main)]",
											children: "Publish Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[var(--color-text-main)] opacity-60",
											children: "Enable to show on live site"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setFormData({
												...formData,
												published: !formData.published
											}),
											className: `w-14 h-8 rounded-full transition-all relative flex items-center px-1 ${formData.published ? "bg-electric" : "bg-slate-300"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-6 h-6 bg-[var(--color-card)] rounded-full shadow-md transition-all transform ${formData.published ? "translate-x-6" : "translate-x-0"}` })
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											size: 14,
											className: "text-electric"
										}), " Short Description"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										value: formData.description,
										onChange: (e) => setFormData({
											...formData,
											description: e.target.value
										}),
										placeholder: "A brief summary for cards...",
										rows: 3,
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											size: 14,
											className: "text-electric"
										}), " Detailed Content"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										value: formData.content,
										onChange: (e) => setFormData({
											...formData,
											content: e.target.value
										}),
										placeholder: "Explain your service in detail...",
										rows: 7,
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsModalOpen(false),
								className: "flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm",
								children: "Cancel Changes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: isProcessing,
								className: "flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50",
								children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									size: 20,
									className: "animate-spin"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 20 }), currentService ? "Update Service" : "Create Service"]
							})]
						})]
					})]
				})]
			}) })
		]
	});
}
function PortfolioManager() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [currentProject, setCurrentProject] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		slug: "",
		clientName: "",
		category: "Web Development",
		description: "",
		content: "",
		liveUrl: "",
		featuredImage: "",
		published: true
	});
	(0, import_react.useEffect)(() => {
		fetchProjects();
	}, []);
	const fetchProjects = async () => {
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/projects`);
			if (res.ok) {
				const result = await res.json();
				setProjects(result.success ? result.data : result);
			}
		} catch (err) {
			console.error("Failed to fetch projects", err);
		} finally {
			setLoading(false);
		}
	};
	const handleOpenModal = (project = null) => {
		if (project) {
			setCurrentProject(project);
			setFormData({
				title: project.title,
				slug: project.slug,
				clientName: project.clientName || "",
				category: project.category,
				description: project.description,
				content: project.content,
				liveUrl: project.liveUrl || "",
				featuredImage: project.featuredImage || "",
				published: project.published
			});
		} else {
			setCurrentProject(null);
			setFormData({
				title: "",
				slug: "",
				clientName: "",
				category: "Web Development",
				description: "",
				content: "",
				liveUrl: "",
				featuredImage: "",
				published: true
			});
		}
		setIsModalOpen(true);
	};
	const handleTitleChange = (e) => {
		const title = e.target.value;
		const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
		setFormData({
			...formData,
			title,
			slug
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);
		try {
			const url = currentProject ? `https://uma-techno-phrb.vercel.app/api/v1/projects/${currentProject.id}` : `https://uma-techno-phrb.vercel.app/api/v1/projects`;
			const res = await fetch(url, {
				method: currentProject ? "PUT" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			if (res.ok) {
				setIsModalOpen(false);
				fetchProjects();
			} else {
				const err = await res.json();
				alert(err.message || "Failed to save project");
			}
		} catch (err) {
			alert("Network error. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this project?")) return;
		try {
			if ((await fetch(`https://uma-techno-phrb.vercel.app/api/v1/projects/${id}`, { method: "DELETE" })).ok) fetchProjects();
		} catch (err) {
			alert("Failed to delete project");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/cms",
					className: "w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-[var(--color-text-main)]",
					children: "Manage Portfolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-text-main)] opacity-60",
					children: "Showcase your best projects and case studies."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-bold text-[var(--color-text-main)]",
						children: [
							"Project Gallery (",
							projects.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleOpenModal(),
						className: "flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), " Add New Project"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-0 overflow-x-auto",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin text-electric",
							size: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-50 font-medium",
							children: "Fetching projects..."
						})]
					}) : projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 bg-[var(--color-navy-light)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
									size: 32,
									className: "text-[var(--color-text-main)] opacity-20"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl font-bold text-[var(--color-text-main)] mb-2",
								children: "No projects yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 max-w-sm mb-8",
								children: "Your portfolio is empty. Click the button above to showcase your first masterpiece."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleOpenModal(),
								className: "bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all",
								children: "Create Your First Project"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-[800px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[var(--color-navy-light)] border-b border-[var(--color-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Project Info"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Client"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-slate-200 overflow-hidden flex items-center justify-center border border-[var(--color-border)]",
												children: project.featuredImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: project.featuredImage,
													alt: "",
													className: "w-full h-full object-cover"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
													size: 20,
													className: "opacity-30"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors block",
												children: project.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs opacity-50 font-mono",
												children: ["/portfolio/", project.slug]
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-sm text-[var(--color-text-main)] opacity-70",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-3 py-1 bg-[var(--color-navy)] border border-[var(--color-border)] rounded-full text-[10px] font-bold",
											children: project.category
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-sm text-[var(--color-text-main)] opacity-60 font-medium",
										children: project.clientName || "Internal Project"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleOpenModal(project),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all",
												title: "Edit Project",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDelete(project.id),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all",
												title: "Delete Project",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
											})]
										})
									})
								]
							}, project.id)) })]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setIsModalOpen(false),
					className: "absolute inset-0 bg-slate-900/60 backdrop-blur-md"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					animate: {
						scale: 1,
						opacity: 1,
						y: 0
					},
					exit: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					className: "relative w-full max-w-4xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]",
							children: currentProject ? "Edit Project" : "Add New Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium",
							children: "Capture the essence of your project showcase."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(false),
							className: "w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] transition-all shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex-1 overflow-y-auto p-6 md:p-10 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
												size: 14,
												className: "text-electric"
											}), " Project Title"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											value: formData.title,
											onChange: handleTitleChange,
											placeholder: "e.g. E-commerce Platform",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
													size: 14,
													className: "text-electric"
												}), " Client Name"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: formData.clientName,
												onChange: (e) => setFormData({
													...formData,
													clientName: e.target.value
												}),
												placeholder: "Client name...",
												className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)]"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-black text-slate-400 uppercase tracking-widest",
												children: "Category"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: formData.category,
												onChange: (e) => setFormData({
													...formData,
													category: e.target.value
												}),
												className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] appearance-none",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Web Development" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mobile App" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UI/UX Design" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "E-commerce" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Branding" })
												]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
												size: 14,
												className: "text-electric"
											}), " Live URL"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "url",
											value: formData.liveUrl,
											onChange: (e) => setFormData({
												...formData,
												liveUrl: e.target.value
											}),
											placeholder: "https://example.com",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-600"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
												size: 14,
												className: "text-electric"
											}), " Featured Image URL"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: formData.featuredImage,
											onChange: (e) => setFormData({
												...formData,
												featuredImage: e.target.value
											}),
											placeholder: "/images/portfolio/project1.png",
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-[var(--color-text-main)] opacity-60"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest",
										children: "Short Summary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										value: formData.description,
										onChange: (e) => setFormData({
											...formData,
											description: e.target.value
										}),
										placeholder: "Brief overview for cards...",
										rows: 3,
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest",
										children: "Full Case Study Content"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										value: formData.content,
										onChange: (e) => setFormData({
											...formData,
											content: e.target.value
										}),
										placeholder: "Detailed technical information, process, and results...",
										rows: 10,
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsModalOpen(false),
								className: "flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: isProcessing,
								className: "flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50",
								children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									size: 20,
									className: "animate-spin"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 20 }), currentProject ? "Update Showcase" : "Publish Showcase"]
							})]
						})]
					})]
				})]
			}) })
		]
	});
}
function TestimonialsManager() {
	const [testimonials, setTestimonials] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [currentTestimonial, setCurrentTestimonial] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		role: "",
		company: "",
		content: "",
		rating: 5,
		image: "",
		active: true
	});
	(0, import_react.useEffect)(() => {
		fetchTestimonials();
	}, []);
	const fetchTestimonials = async () => {
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/testimonials?all=true`);
			if (res.ok) {
				const data = await res.json();
				setTestimonials(data);
			}
		} catch (err) {
			console.error("Failed to fetch testimonials", err);
		} finally {
			setLoading(false);
		}
	};
	const handleOpenModal = (t = null) => {
		if (t) {
			setCurrentTestimonial(t);
			setFormData({
				name: t.name,
				role: t.role,
				company: t.company || "",
				content: t.content,
				rating: t.rating || 5,
				image: t.image || "",
				active: t.active
			});
		} else {
			setCurrentTestimonial(null);
			setFormData({
				name: "",
				role: "",
				company: "",
				content: "",
				rating: 5,
				image: "",
				active: true
			});
		}
		setIsModalOpen(true);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);
		try {
			const url = currentTestimonial ? `https://uma-techno-phrb.vercel.app/api/v1/testimonials/${currentTestimonial.id}` : `https://uma-techno-phrb.vercel.app/api/v1/testimonials`;
			const res = await fetch(url, {
				method: currentTestimonial ? "PUT" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			if (res.ok) {
				setIsModalOpen(false);
				fetchTestimonials();
			} else {
				const err = await res.json();
				alert(err.message || "Failed to save testimonial");
			}
		} catch (err) {
			alert("Network error. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this testimonial?")) return;
		try {
			if ((await fetch(`https://uma-techno-phrb.vercel.app/api/v1/testimonials/${id}`, { method: "DELETE" })).ok) fetchTestimonials();
		} catch (err) {
			alert("Failed to delete testimonial");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/cms",
					className: "w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-[var(--color-text-main)]",
					children: "Manage Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-text-main)] opacity-60",
					children: "Display proof of your excellence to build trust."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-bold text-[var(--color-text-main)]",
						children: [
							"Client Reviews (",
							testimonials.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleOpenModal(),
						className: "flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), " Add New Review"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-0 overflow-x-auto",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin text-electric",
							size: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-50 font-medium",
							children: "Fetching testimonials..."
						})]
					}) : testimonials.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 bg-[var(--color-navy-light)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 32,
									className: "text-[var(--color-text-main)] opacity-20"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl font-bold text-[var(--color-text-main)] mb-2",
								children: "No testimonials yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 max-w-sm mb-8",
								children: "You haven't added any client feedback yet. Click the button above to feature your first review."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleOpenModal(),
								className: "bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all",
								children: "Add Your First Testimonial"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-[800px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[var(--color-navy-light)] border-b border-[var(--color-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Client Info"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Review Content"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-slate-200 overflow-hidden flex items-center justify-center border border-[var(--color-border)]",
												children: t.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: t.image,
													alt: "",
													className: "w-full h-full object-cover"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
													size: 20,
													className: "opacity-30"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors block",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs opacity-50",
												children: [t.role, t.company ? ` at ${t.company}` : ""]
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-0.5 mb-2",
											children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 12,
												className: "text-amber-400 fill-amber-400"
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-[var(--color-text-main)] opacity-70 max-w-xs line-clamp-2 italic",
											children: [
												"\"",
												t.content,
												"\""
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`,
											children: t.active ? "Visible" : "Hidden"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleOpenModal(t),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all",
												title: "Edit Review",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDelete(t.id),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all",
												title: "Delete Review",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
											})]
										})
									})
								]
							}, t.id)) })]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setIsModalOpen(false),
					className: "absolute inset-0 bg-slate-900/60 backdrop-blur-md"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					animate: {
						scale: 1,
						opacity: 1,
						y: 0
					},
					exit: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					className: "relative w-full max-w-2xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]",
							children: currentTestimonial ? "Edit Review" : "Add Review"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium",
							children: "Feature your best client success stories."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(false),
							className: "w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] transition-all shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex-1 overflow-y-auto p-6 md:p-10 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
											size: 14,
											className: "text-electric"
										}), " Client Name"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: formData.name,
										onChange: (e) => setFormData({
											...formData,
											name: e.target.value
										}),
										placeholder: "e.g. John Doe",
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
											size: 14,
											className: "text-electric"
										}), " Designation / Company"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: formData.role,
										onChange: (e) => setFormData({
											...formData,
											role: e.target.value
										}),
										placeholder: "e.g. CEO, Tech Innovators",
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 14,
										className: "text-electric"
									}), " Rating"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4 items-center bg-[var(--color-navy-light)] p-4 rounded-2xl border border-[var(--color-border)]",
									children: [[
										1,
										2,
										3,
										4,
										5
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setFormData({
											...formData,
											rating: s
										}),
										className: `transition-all ${formData.rating >= s ? "scale-125" : "opacity-30"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 24,
											className: `${formData.rating >= s ? "text-amber-400 fill-amber-400" : "text-slate-400"}`
										})
									}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-auto font-black text-[var(--color-text-main)]",
										children: [formData.rating, " Stars"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
										size: 14,
										className: "text-electric"
									}), " Review Content"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									value: formData.content,
									onChange: (e) => setFormData({
										...formData,
										content: e.target.value
									}),
									placeholder: "What did they say about your work?",
									rows: 4,
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
										size: 14,
										className: "text-electric"
									}), " Client Photo URL (Optional)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: formData.image,
									onChange: (e) => setFormData({
										...formData,
										image: e.target.value
									}),
									placeholder: "https://example.com/photo.jpg",
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-[var(--color-text-main)] opacity-60"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-4 bg-[var(--color-navy-light)] rounded-2xl border border-[var(--color-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									id: "active",
									checked: formData.active,
									onChange: (e) => setFormData({
										...formData,
										active: e.target.checked
									}),
									className: "w-5 h-5 accent-electric"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "active",
									className: "text-sm font-bold text-[var(--color-text-main)] cursor-pointer",
									children: "Show this testimonial on the website"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsModalOpen(false),
									className: "flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: isProcessing,
									className: "flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50",
									children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 20,
										className: "animate-spin"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 20 }), currentTestimonial ? "Update Review" : "Publish Review"]
								})]
							})
						]
					})]
				})]
			}) })
		]
	});
}
function SEODashboard() {
	const [seoPages, setSeoPages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [currentSEO, setCurrentSEO] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		pagePath: "",
		title: "",
		description: "",
		keywords: [],
		ogImage: ""
	});
	(0, import_react.useEffect)(() => {
		fetchSEO();
	}, []);
	const fetchSEO = async () => {
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/seo`);
			if (res.ok) {
				const data = await res.json();
				setSeoPages(Array.isArray(data) ? data : data.data || []);
			}
		} catch (err) {
			console.error("Failed to fetch SEO pages", err);
		} finally {
			setLoading(false);
		}
	};
	const handleOpenModal = (seo = null) => {
		if (seo) {
			setCurrentSEO(seo);
			setFormData({
				pagePath: seo.pagePath,
				title: seo.title,
				description: seo.description,
				keywords: seo.keywords || [],
				ogImage: seo.ogImage || ""
			});
		} else {
			setCurrentSEO(null);
			setFormData({
				pagePath: "/",
				title: "",
				description: "",
				keywords: [],
				ogImage: ""
			});
		}
		setIsModalOpen(true);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/seo`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			if (res.ok) {
				setIsModalOpen(false);
				fetchSEO();
			} else {
				const err = await res.json();
				alert(err.message || "Failed to save SEO metadata");
			}
		} catch (err) {
			alert("Network error. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this SEO configuration?")) return;
		try {
			if ((await fetch(`https://uma-techno-phrb.vercel.app/api/v1/seo/${id}`, { method: "DELETE" })).ok) fetchSEO();
		} catch (err) {
			alert("Failed to delete SEO metadata");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)] shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-bold flex items-center gap-2 text-[var(--color-text-main)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
						size: 20,
						className: "text-electric"
					}), " SEO Manager"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--color-text-main)] opacity-70 text-sm mt-1",
					children: "Manage titles, meta descriptions, and keywords to rank higher on Google."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleOpenModal(),
					className: "flex items-center justify-center gap-2 bg-electric text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), " Add SEO Page"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 border-b border-[var(--color-border)] flex gap-4 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
							size: 16
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search by path...",
							className: "w-full bg-transparent border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-electric transition-colors"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-0 overflow-x-auto",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin text-electric",
							size: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-50 font-medium",
							children: "Fetching SEO data..."
						})]
					}) : seoPages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-20 text-center flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 bg-[var(--color-navy-light)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
									size: 32,
									className: "text-[var(--color-text-main)] opacity-20"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl font-bold text-[var(--color-text-main)] mb-2",
								children: "No SEO records"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 max-w-sm mb-8",
								children: "Start adding metadata for your specific routes to improve search engine visibility."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleOpenModal(),
								className: "bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all",
								children: "Configure Your First Page"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-[800px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[var(--color-navy-light)] border-b border-[var(--color-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Route Path"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Meta Title"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40",
										children: "Description Preview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: seoPages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-[var(--color-navy-light)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-xs font-mono font-bold text-electric",
											children: page.pagePath
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors max-w-xs truncate",
											title: page.title,
											children: page.title
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-[var(--color-text-main)] opacity-60 max-w-md truncate",
											title: page.description,
											children: page.description
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-6 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleOpenModal(page),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all",
												title: "Edit SEO",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { size: 16 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDelete(page.id),
												className: "w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all",
												title: "Delete SEO",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
											})]
										})
									})
								]
							}, page.id)) })]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setIsModalOpen(false),
					className: "absolute inset-0 bg-slate-900/60 backdrop-blur-md"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					animate: {
						scale: 1,
						opacity: 1,
						y: 0
					},
					exit: {
						scale: .95,
						opacity: 0,
						y: 20
					},
					className: "relative w-full max-w-2xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]",
							children: currentSEO ? "Edit SEO Page" : "Add SEO Page"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium",
							children: "Optimize your visibility for search engines."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(false),
							className: "w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] transition-all shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex-1 overflow-y-auto p-6 md:p-10 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, {
										size: 14,
										className: "text-electric"
									}), " Page Route (Path)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: formData.pagePath,
									onChange: (e) => setFormData({
										...formData,
										pagePath: e.target.value
									}),
									placeholder: "e.g. /about or /services/web-development",
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] font-mono text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
										size: 14,
										className: "text-electric"
									}), " Meta Title (Max 60 chars)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									maxLength: 60,
									value: formData.title,
									onChange: (e) => setFormData({
										...formData,
										title: e.target.value
									}),
									placeholder: "Premium Web Development Rajkot | Uma Techno",
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
										size: 14,
										className: "text-electric"
									}), " Meta Description (Max 160 chars)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									maxLength: 160,
									value: formData.description,
									onChange: (e) => setFormData({
										...formData,
										description: e.target.value
									}),
									placeholder: "Best digital agency in Rajkot providing high-performance websites...",
									rows: 4,
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
										size: 14,
										className: "text-electric"
									}), " OG Image URL"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: formData.ogImage,
									onChange: (e) => setFormData({
										...formData,
										ogImage: e.target.value
									}),
									placeholder: "https://example.com/og-image.png",
									className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-[var(--color-text-main)] opacity-60"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsModalOpen(false),
									className: "flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: isProcessing,
									className: "flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50",
									children: [isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 20,
										className: "animate-spin"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 20 }), currentSEO ? "Update Metadata" : "Save Metadata"]
								})]
							})
						]
					})]
				})]
			}) })
		]
	});
}
function WidgetControlPage() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [widgets, setWidgets] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetchWidgets();
	}, []);
	const fetchWidgets = async () => {
		const fallbackWidgets = [
			{
				id: "1",
				name: "hero",
				title: "Hero Section",
				enabled: true,
				order: 1
			},
			{
				id: "2",
				name: "stats",
				title: "Trust & Stats Bar",
				enabled: true,
				order: 2
			},
			{
				id: "3",
				name: "services",
				title: "Our Services",
				enabled: true,
				order: 3
			},
			{
				id: "4",
				name: "why-choose-us",
				title: "Why Choose Us",
				enabled: true,
				order: 4
			},
			{
				id: "5",
				name: "portfolio",
				title: "Selected Portfolio",
				enabled: true,
				order: 5
			},
			{
				id: "6",
				name: "testimonials",
				title: "Client Testimonials",
				enabled: true,
				order: 6
			},
			{
				id: "7",
				name: "process",
				title: "Our Process",
				enabled: true,
				order: 7
			},
			{
				id: "8",
				name: "cta",
				title: "Bottom Call to Action",
				enabled: true,
				order: 8
			}
		];
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/widgets`);
			if (res.ok) {
				const data = await res.json();
				if (data.length === 0) setWidgets(fallbackWidgets);
				else setWidgets(data);
			} else {
				console.error("Failed to fetch widgets", await res.text());
				setWidgets(fallbackWidgets);
			}
		} catch (err) {
			console.error("API fetch failed, using fallback data", err);
			setWidgets(fallbackWidgets);
		} finally {
			setLoading(false);
		}
	};
	const handleToggle = (id) => {
		setWidgets(widgets.map((w) => w.id === id ? {
			...w,
			enabled: !w.enabled
		} : w));
	};
	const handleSave = async () => {
		setSaving(true);
		try {
			if ((await fetch(`https://uma-techno-phrb.vercel.app/api/v1/widgets/reorder`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ widgets })
			})).ok) {}
		} catch (err) {
			console.error(err);
		} finally {
			setSaving(false);
		}
	};
	const moveUp = (index) => {
		if (index === 0) return;
		const newWidgets = [...widgets];
		const temp = newWidgets[index];
		newWidgets[index] = newWidgets[index - 1];
		newWidgets[index - 1] = temp;
		newWidgets.forEach((w, i) => w.order = i);
		setWidgets(newWidgets);
	};
	const moveDown = (index) => {
		if (index === widgets.length - 1) return;
		const newWidgets = [...widgets];
		const temp = newWidgets[index];
		newWidgets[index] = newWidgets[index + 1];
		newWidgets[index + 1] = temp;
		newWidgets.forEach((w, i) => w.order = i);
		setWidgets(newWidgets);
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-electric" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-xl font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, {
					size: 20,
					className: "text-electric"
				}), " Widget Control Panel"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[var(--color-text-main)] opacity-70 text-sm mt-1",
				children: "Enable, disable, and reorder homepage sections."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleSave,
				disabled: saving,
				className: "bg-electric hover:bg-electric/90 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto",
				children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					size: 18,
					className: "animate-spin"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 18 }), "Save Layout"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: widgets.map((widget, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center justify-between p-4 rounded-xl border transition-all ${widget.enabled ? "bg-[var(--color-card)] border-[var(--color-border)]" : "bg-[var(--color-card)] border-red-500/20 opacity-60"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => moveUp(index),
									disabled: index === 0,
									className: "p-1 text-[var(--color-text-main)] opacity-40 hover:opacity-100 hover:bg-[var(--color-navy-light)] rounded transition-all disabled:opacity-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => moveDown(index),
									disabled: index === widgets.length - 1,
									className: "p-1 text-[var(--color-text-main)] opacity-40 hover:opacity-100 hover:bg-[var(--color-navy-light)] rounded transition-all disabled:opacity-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 bg-[var(--color-navy-light)] rounded-lg border border-[var(--color-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, {
									size: 20,
									className: widget.enabled ? "text-electric" : "opacity-50"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg text-[var(--color-text-main)]",
								children: widget.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs opacity-60 font-mono text-[var(--color-text-main)]",
								children: widget.name
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleToggle(widget.id),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${widget.enabled ? "bg-electric/20 text-electric hover:bg-electric/30" : "bg-[var(--color-navy-light)] border border-[var(--color-border)] text-[var(--color-text-main)] opacity-70 hover:opacity-100"}`,
							children: [widget.enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 16 }), widget.enabled ? "Visible" : "Hidden"]
						})
					})]
				}, widget.id))
			})
		})]
	});
}
var HomePage = (0, import_react.lazy)(() => import("./page-DUgeP9d5.mjs"));
var PortfolioPage = (0, import_react.lazy)(() => import("./page-BTZt3lcv.mjs"));
var BlogPage = (0, import_react.lazy)(() => import("./page-BSpTmNwt.mjs"));
var ContactPage = (0, import_react.lazy)(() => import("./page-Cejjh2e_.mjs"));
var AboutPage = (0, import_react.lazy)(() => import("./page-DkW6eKWo.mjs"));
var ServicesPage = (0, import_react.lazy)(() => import("./page-C-oAGh1c.mjs"));
var CareersPage = (0, import_react.lazy)(() => import("./page-HMFNWVYR.mjs"));
var PrivacyPage = (0, import_react.lazy)(() => import("./page-CngJxNVK.mjs"));
var TermsPage = (0, import_react.lazy)(() => import("./page-DSTPNuuu.mjs"));
var WebDevelopmentPage = (0, import_react.lazy)(() => import("./page-YzZ1i2_H.mjs"));
var DigitalMarketingPage = (0, import_react.lazy)(() => import("./page-CbG7EbqQ.mjs"));
var SEOServicesPage = (0, import_react.lazy)(() => import("./page-Bzi0USDT.mjs"));
var PortfolioDetail = (0, import_react.lazy)(() => import("./page-CfIz2bA8.mjs"));
var ServiceDetail = (0, import_react.lazy)(() => import("./page-BfFqWd4f.mjs"));
var BlogDetail = (0, import_react.lazy)(() => import("./page-CnZ4ad5k.mjs"));
var SEOLandingDetail = (0, import_react.lazy)(() => import("./page-BbYfcdE3.mjs"));
var Loading = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)]",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-24 h-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border-4 border-[var(--color-electric)] opacity-20 rounded-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border-4 border-t-[var(--color-electric)] rounded-full animate-spin" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-4 bg-gradient-premium rounded-full animate-pulse" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 text-[var(--color-electric)] font-bold tracking-[0.2em] uppercase text-xs animate-pulse",
		children: "Engineering Excellence..."
	})]
});
function UmaApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/portfolio",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/portfolio/:slug",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioDetail, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/blog",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/blog/:slug",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogDetail, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/contact",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/about",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/services",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/services/:slug",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetail, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/careers",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareersPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/privacy",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/terms",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermsPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/web-development",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebDevelopmentPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/digital-marketing",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalMarketingPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/seo-services",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOServicesPage, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/:slug",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOLandingDetail, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: "/admin/login",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				path: "/admin",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {}) }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						index: true,
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/admin/dashboard",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "dashboard",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardDashboard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "leads",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadsDashboard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "cms/services",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesManager, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "cms/portfolio",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioManager, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "cms/testimonials",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsManager, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "seo",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEODashboard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "widgets",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetControlPage, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: "*",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
					to: "/",
					replace: true
				})
			})
		] })
	}) }) });
}
//#endregion
export { UmaApp as default };
