import { a as __toESM } from "../_runtime.mjs";
import { a as performance_default, i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "../_libs/react-router.mjs";
import { $ as CodeXml, D as Palette, G as Globe, N as Megaphone, Q as Code, T as PenTool, at as ChevronDown, b as Rocket, d as Sparkles, f as Smartphone, g as Search, k as Monitor, nt as CircleCheckBig, ot as Check, p as Shield, pt as ArrowRight, r as Users, st as ChartNoAxesColumnIncreasing, t as Zap, u as Star, z as Lightbulb } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-DUgeP9d5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroNetwork() {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let W = 0;
		let H = 0;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);
		const NODE_COUNT = reduced ? 26 : 55;
		const nodes = [];
		const mouse = {
			x: -9999,
			y: -9999,
			active: false
		};
		const resize = () => {
			const rect = wrap.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvas.width = Math.round(W * dpr);
			canvas.height = Math.round(H * dpr);
			canvas.style.width = W + "px";
			canvas.style.height = H + "px";
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const seed = () => {
			nodes.length = 0;
			for (let i = 0; i < NODE_COUNT; i++) nodes.push({
				x: Math.random() * W,
				y: Math.random() * H,
				vx: (Math.random() - .5) * .35,
				vy: (Math.random() - .5) * .35,
				r: Math.random() * 1.8 + .8
			});
		};
		resize();
		seed();
		const onResize = () => {
			resize();
			seed();
		};
		window.addEventListener("resize", onResize);
		const onMove = (e) => {
			const r = wrap.getBoundingClientRect();
			mouse.x = e.clientX - r.left;
			mouse.y = e.clientY - r.top;
			mouse.active = true;
		};
		const onLeave = () => {
			mouse.active = false;
			mouse.x = -9999;
			mouse.y = -9999;
		};
		wrap.addEventListener("mousemove", onMove);
		wrap.addEventListener("mouseleave", onLeave);
		let raf = 0;
		let running = true;
		const io = new IntersectionObserver(([e]) => {
			running = e.isIntersecting;
			if (running) raf = requestAnimationFrame(draw);
		}, { threshold: .05 });
		io.observe(wrap);
		const draw = () => {
			if (!running) return;
			ctx.clearRect(0, 0, W, H);
			if (mouse.active) {
				const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
				g.addColorStop(0, "rgba(34,211,238,0.18)");
				g.addColorStop(1, "rgba(34,211,238,0)");
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, W, H);
			}
			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < 0 || n.x > W) n.vx *= -1;
				if (n.y < 0 || n.y > H) n.vy *= -1;
				if (mouse.active) {
					const dx = n.x - mouse.x;
					const dy = n.y - mouse.y;
					const dist = Math.hypot(dx, dy);
					if (dist < 120) {
						const f = (120 - dist) / 120;
						n.x += dx / dist * f * 1.6;
						n.y += dy / dist * f * 1.6;
					}
				}
			}
			for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
				const a = nodes[i];
				const b = nodes[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const d = Math.hypot(dx, dy);
				if (d < 130) {
					const alpha = (1 - d / 130) * .35;
					ctx.strokeStyle = `rgba(99,102,241,${alpha.toFixed(3)})`;
					ctx.lineWidth = .6;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
			for (const n of nodes) {
				ctx.beginPath();
				ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(34,211,238,0.9)";
				ctx.shadowColor = "rgba(34,211,238,0.9)";
				ctx.shadowBlur = 10;
				ctx.fill();
				ctx.shadowBlur = 0;
			}
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
			window.removeEventListener("resize", onResize);
			wrap.removeEventListener("mousemove", onMove);
			wrap.removeEventListener("mouseleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "relative w-full h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 w-full h-full"
		})
	});
}
var MagneticButton = (0, import_react.forwardRef)(function MagneticButton({ children, strength = .35, className = "", ...rest }, _ref) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - (r.left + r.width / 2)) * strength;
		const y = (e.clientY - (r.top + r.height / 2)) * strength;
		el.style.transform = `translate(${x}px, ${y}px)`;
	};
	const onLeave = () => {
		if (ref.current) ref.current.style.transform = "translate(0,0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: "inline-block transition-transform duration-300 ease-out will-change-transform " + className,
		...rest,
		children
	});
});
function TextReveal({ children, as = "span", className = "", delay = 0, stagger = .04 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const el = ref.current;
		if (!el) return;
		const spans = Array.from(el.querySelectorAll("[data-w]"));
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			spans.forEach((s) => s.style.transform = "translateY(0)", (s) => s.style.opacity = "1");
			return;
		}
		spans.forEach((s, i) => {
			s.style.transform = "translateY(110%)";
			s.style.opacity = "0";
			s.style.transition = `transform 900ms cubic-bezier(.16,1,.3,1) ${delay + i * stagger}s, opacity 700ms ease ${delay + i * stagger}s`;
		});
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					spans.forEach((s) => {
						s.style.transform = "translateY(0)";
						s.style.opacity = "1";
					});
					io.disconnect();
				}
			});
		}, { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, [
		delay,
		stagger,
		children
	]);
	const words = children.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className: className + " inline-block",
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-baseline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"data-w": true,
				className: "inline-block will-change-transform",
				children: [w, i < words.length - 1 ? "\xA0" : ""]
			})
		}, i))
	});
}
var rotatingWords = [
	"Excellence",
	"Innovation",
	"Experiences",
	"Solutions"
];
function Hero() {
	const [currentWord, setCurrentWord] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
		}, 3e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[720px] lg:min-h-[860px] 2xl:min-h-screen flex items-center overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] bg-gradient-glow" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-[1] opacity-70 mix-blend-screen pointer-events-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroNetwork, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 w-full relative z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative lg:col-span-7 pointer-events-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .1,
									duration: .6
								},
								className: "inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel text-[var(--color-electric)] text-[11px] font-black uppercase tracking-[0.22em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 14,
									className: "text-[var(--color-electric)]"
								}), "Engineering the future"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black font-outfit leading-[0.95] tracking-[-0.03em] text-[var(--color-text-main)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
										as: "span",
										className: "block",
										children: "Digital"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block h-[1.05em] relative overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											mode: "wait",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												initial: {
													y: 80,
													opacity: 0
												},
												animate: {
													y: 0,
													opacity: 1
												},
												exit: {
													y: -80,
													opacity: 0
												},
												transition: {
													duration: .6,
													ease: [
														.16,
														1,
														.3,
														1
													]
												},
												className: "absolute text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)]",
												children: rotatingWords[currentWord]
											}, currentWord)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
										as: "span",
										className: "block",
										delay: .15,
										children: "Delivered."
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl space-y-10 mt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg lg:text-xl text-[var(--color-text-main)]/75 leading-relaxed font-medium",
									children: "We engineer premium web applications, scalable architectures, and growth-driven digital experiences that dominate the market."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-5 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										strength: .35,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											"data-cursor": "button",
											className: "group relative overflow-hidden px-9 py-4 text-white rounded-2xl font-bold text-lg btn-premium-glow shine-border text-center flex justify-center items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative z-10",
												children: "Start Project"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 20,
												className: "relative z-10 group-hover:translate-x-1 transition-transform"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										strength: .25,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/portfolio",
											"data-cursor": "button",
											className: "group px-9 py-4 glass-panel text-[var(--color-text-main)] rounded-2xl font-bold text-lg transition-all hover:border-[var(--color-electric)]/60 text-center",
											children: "View Our Work"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-6 pt-4 text-xs uppercase tracking-[0.2em] text-white/40 font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Trusted by" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-white/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12+ Brands" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rajkot / Gujarat" })
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: 1.4,
							ease: [
								.16,
								1,
								.3,
								1
							],
							delay: .2
						},
						className: "relative hidden lg:flex justify-center items-center h-[520px] lg:col-span-5 pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									animate: { y: [
										0,
										-14,
										0
									] },
									transition: {
										duration: 6,
										repeat: Infinity,
										ease: "easeInOut"
									},
									className: "absolute top-6 right-4 glass-panel rounded-3xl p-5 min-w-[220px] pointer-events-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold",
												children: "Live systems"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 text-3xl font-black font-outfit",
											children: ["99.98", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--color-electric)]",
												children: "%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/50 mt-1",
											children: "Uptime across shipped products"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									animate: { y: [
										0,
										12,
										0
									] },
									transition: {
										duration: 7,
										repeat: Infinity,
										ease: "easeInOut"
									},
									className: "absolute bottom-8 left-2 glass-panel rounded-3xl p-5 min-w-[240px] pointer-events-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold",
											children: "Growth delivered"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-baseline gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-violet)]",
												children: "3.4×"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-white/50",
												children: "avg. conv. lift"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 grid grid-cols-4 gap-1",
											children: [
												40,
												65,
												55,
												88
											].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-8 rounded bg-white/5 relative overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-electric)] to-[var(--color-violet)]",
													style: { height: `${h}%` }
												})
											}, i))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									animate: { y: [
										0,
										-8,
										0
									] },
									transition: {
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut"
									},
									className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-panel rounded-full w-40 h-40 flex flex-col items-center justify-center pointer-events-auto shine-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold",
										children: "Since"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-5xl font-black font-outfit bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60",
										children: "2022"
									})]
								})
							]
						})
					})]
				})
			})
		]
	});
}
function AnimatedCounter({ value, duration = 900, format = (n) => n.toLocaleString("en-IN"), className = "" }) {
	const [display, setDisplay] = (0, import_react.useState)(value);
	const from = (0, import_react.useRef)(value);
	const raf = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const start = performance_default.now();
		const startVal = from.current;
		const delta = value - startVal;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			setDisplay(Math.round(startVal + delta * eased));
			if (t < 1) raf.current = requestAnimationFrame(tick);
			else from.current = value;
		};
		raf.current = requestAnimationFrame(tick);
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [value, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: format(display)
	});
}
var projectTypes = [
	{
		id: "web",
		title: "Web Development",
		icon: Monitor,
		basePrice: 1e4
	},
	{
		id: "app",
		title: "Mobile App",
		icon: Smartphone,
		basePrice: 8e4
	},
	{
		id: "design",
		title: "UI/UX Design",
		icon: Palette,
		basePrice: 2e4
	},
	{
		id: "seo",
		title: "SEO & Marketing",
		icon: Search,
		basePrice: 2e4
	}
];
var featuresByType = {
	web: [
		{
			id: "ecommerce",
			title: "E-commerce",
			price: 12e4
		},
		{
			id: "auth",
			title: "User Authentication",
			price: 4e3
		},
		{
			id: "cms",
			title: "Content Management (CMS)",
			price: 8e4
		},
		{
			id: "api",
			title: "Custom API Integration",
			price: 6e3
		},
		{
			id: "animation",
			title: "Advanced Animations",
			price: 14e3
		}
	],
	app: [
		{
			id: "push",
			title: "Push Notifications",
			price: 4e3
		},
		{
			id: "auth",
			title: "User Authentication",
			price: 4e3
		},
		{
			id: "inapp",
			title: "In-App Purchases",
			price: 8e4
		},
		{
			id: "api",
			title: "Custom API Integration",
			price: 6e3
		},
		{
			id: "offline",
			title: "Offline Mode",
			price: 4e4
		}
	],
	design: [
		{
			id: "prototype",
			title: "Interactive Prototype",
			price: 4e3
		},
		{
			id: "system",
			title: "Design System",
			price: 8e3
		},
		{
			id: "testing",
			title: "User Testing",
			price: 4e3
		},
		{
			id: "wireframe",
			title: "Wireframing",
			price: 4e3
		},
		{
			id: "branding",
			title: "Brand Identity",
			price: 6e3
		}
	],
	seo: [
		{
			id: "keyword",
			title: "Keyword Research",
			price: 2400
		},
		{
			id: "audit",
			title: "Technical SEO Audit",
			price: 4e3
		},
		{
			id: "content",
			title: "Content Strategy",
			price: 5600
		},
		{
			id: "backlink",
			title: "Backlink Building",
			price: 6400
		},
		{
			id: "report",
			title: "Monthly Reporting",
			price: 1600
		}
	]
};
function ProjectEstimator() {
	const [selectedType, setSelectedType] = (0, import_react.useState)(null);
	const [selectedFeatures, setSelectedFeatures] = (0, import_react.useState)([]);
	const handleTypeSelect = (id) => {
		if (selectedType !== id) {
			setSelectedType(id);
			setSelectedFeatures([]);
		}
	};
	const toggleFeature = (id) => {
		setSelectedFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
	};
	const currentFeatures = selectedType ? featuresByType[selectedType] : [];
	const calculateTotal = () => {
		let total = 0;
		if (selectedType) {
			total += projectTypes.find((p) => p.id === selectedType)?.basePrice || 0;
			selectedFeatures.forEach((featureId) => {
				total += currentFeatures.find((f) => f.id === featureId)?.price || 0;
			});
		}
		return total;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-28 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-electric)]/8 blur-[160px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-10 w-[600px] h-[600px] bg-[var(--color-violet)]/10 blur-[180px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-4 mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-panel text-[var(--color-electric)] text-[11px] font-black uppercase tracking-[0.22em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[var(--color-electric)]" }), "INTERACTIVE ESTIMATE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-[-0.03em]",
							children: ["Try Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)]",
								children: "Project. Live."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 text-lg max-w-2xl mx-auto",
							children: "Select your project type and desired features to get an instant, dynamic estimate of your investment."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-8 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8 space-y-12 glass-panel rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 w-64 h-64 bg-[var(--color-electric)]/10 blur-[80px] rounded-full pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 h-8 rounded-full bg-[var(--color-electric)]/15 border border-[var(--color-electric)]/40 flex items-center justify-center text-[var(--color-electric)] text-sm font-black",
										children: "1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-bold font-outfit text-[var(--color-text-main)]",
										children: "Select Project Type"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-4",
									children: projectTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: { y: -4 },
										whileTap: { scale: .97 },
										onClick: () => handleTypeSelect(type.id),
										"data-cursor": "button",
										className: `relative p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-4 text-center group overflow-hidden ${selectedType === type.id ? "bg-[var(--color-electric)]/10 border-[var(--color-electric)] shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)]" : "bg-white/[0.02] border-white/10 hover:border-[var(--color-electric)]/50 hover:bg-white/[0.05]"}`,
										children: [
											selectedType === type.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												layoutId: "est-glow",
												className: "absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-[var(--color-violet)]/10 rounded-2xl"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(type.icon, {
												size: 32,
												className: `relative ${selectedType === type.id ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-electric)]"} transition-colors`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `relative font-bold ${selectedType === type.id ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)]"} transition-colors`,
												children: type.title
											})
										]
									}, type.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									height: 0
								},
								animate: {
									opacity: 1,
									height: "auto"
								},
								exit: {
									opacity: 0,
									height: 0
								},
								className: "space-y-6 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 h-8 rounded-full bg-[var(--color-violet)]/15 border border-[var(--color-violet)]/40 flex items-center justify-center text-[var(--color-violet)] text-sm font-black",
										children: "2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-bold font-outfit text-[var(--color-text-main)]",
										children: "Add Features"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: currentFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: { scale: 1.02 },
										whileTap: { scale: .98 },
										onClick: () => toggleFeature(feature.id),
										"data-cursor": "button",
										className: `p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${selectedFeatures.includes(feature.id) ? "bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-violet)] border-transparent text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]" : "bg-white/[0.02] border-white/10 hover:border-[var(--color-electric)]/50 text-[var(--color-text-main)]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											children: feature.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedFeatures.includes(feature.id) ? "border-white" : "border-[var(--color-text-main)] opacity-30"}`,
											children: selectedFeatures.includes(feature.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
										})]
									}, feature.id))
								})]
							}) })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky top-32 glass-panel p-8 rounded-[2rem] shadow-2xl relative overflow-hidden shine-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-violet)]/20 blur-[80px] rounded-full pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative text-xs uppercase tracking-[0.25em] text-white/50 font-bold mb-6 pb-4 border-b border-white/10",
									children: "Estimated Investment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative space-y-4 mb-8 min-h-[80px]",
									children: [selectedType ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-[var(--color-text-main)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "opacity-70",
											children: projectTypes.find((p) => p.id === selectedType)?.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: ["₹", projectTypes.find((p) => p.id === selectedType)?.basePrice.toLocaleString("en-IN")]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[var(--color-text-main)] opacity-40 italic",
										children: "Select a project type to start"
									}), selectedFeatures.map((fId) => {
										const feature = currentFeatures.find((f) => f.id === fId);
										return feature ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												x: -6
											},
											animate: {
												opacity: 1,
												x: 0
											},
											className: "flex justify-between items-center text-[var(--color-text-main)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "opacity-70 text-sm",
												children: ["+ ", feature.title]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-sm",
												children: ["₹", feature.price.toLocaleString("en-IN")]
											})]
										}, fId) : null;
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative border-t border-white/10 pt-6 mb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--color-text-main)] font-bold",
											children: "Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
												value: calculateTotal(),
												format: (n) => `₹${n.toLocaleString("en-IN")}`,
												className: "text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)] tabular-nums"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-[var(--color-text-main)] opacity-40 uppercase tracking-widest mt-1",
												children: "Starting At"
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									strength: .2,
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: `/contact?estimate=${calculateTotal()}`,
										"data-cursor": "button",
										className: `w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${selectedType ? "btn-premium-glow text-white" : "bg-white/5 text-[var(--color-text-main)] opacity-50 cursor-not-allowed border border-white/10"}`,
										onClick: (e) => !selectedType && e.preventDefault(),
										children: ["Discuss This Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-[10px] text-[var(--color-text-main)] opacity-40 mt-6 uppercase tracking-widest leading-relaxed",
									children: "* Please note: This estimate is an approximate amount. Final costs may vary based on exact project scope."
								})
							]
						})
					})]
				})]
			})
		]
	});
}
var steps = [
	{
		id: 1,
		title: "Discovery & Strategy",
		icon: Lightbulb,
		description: "We dive deep into your business goals, target audience, and market landscape to formulate a winning strategy."
	},
	{
		id: 2,
		title: "UI/UX Design",
		icon: PenTool,
		description: "Our creative team crafts stunning, user-centric interfaces that align perfectly with your brand identity."
	},
	{
		id: 3,
		title: "Development",
		icon: CodeXml,
		description: "We build robust, scalable, and high-performance solutions using cutting-edge technologies."
	},
	{
		id: 4,
		title: "Launch & Scale",
		icon: Rocket,
		description: "Rigorous testing followed by a seamless deployment. We ensure your product is ready to dominate."
	}
];
function ProcessTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 bg-[var(--color-navy-light)] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-[var(--color-electric)]/5 blur-[120px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-4 mb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[var(--color-electric)]" }), "OUR PROCESS"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter",
						children: ["From Idea To ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]",
							children: "Impression."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-70 text-lg max-w-2xl mx-auto",
						children: "A streamlined, transparent, and results-driven approach to bringing your digital vision to life."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-electric)]/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid lg:grid-cols-4 gap-12 lg:gap-8",
					children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .5,
							delay: index * .2
						},
						className: "relative flex flex-col items-center text-center group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-6 -left-4 text-8xl font-black text-[var(--color-electric)] opacity-5 group-hover:opacity-10 transition-opacity select-none font-serif",
								children: step.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-24 h-24 rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-xl flex items-center justify-center text-[var(--color-electric)] mb-8 relative z-10 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
									size: 36,
									className: "relative z-10 group-hover:scale-110 transition-transform duration-500"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold font-outfit text-[var(--color-text-main)] mb-4",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed",
								children: step.description
							})
						]
					}, step.id))
				})]
			})]
		})]
	});
}
var technologies = [
	"React 19",
	"Vite",
	"TypeScript",
	"Tailwind CSS",
	"Shadcn UI",
	"Framer Motion",
	"GSAP",
	"Lenis",
	"Three.js",
	"Lottie",
	"Spline",
	"React Router",
	"TanStack",
	"Zod",
	"Lucide"
];
function TechMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 bg-[var(--color-navy)] overflow-hidden relative border-y border-[var(--color-border)]/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-navy)] to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-navy)] to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center mb-12 relative z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[10px] uppercase tracking-[0.3em] font-bold text-white/50",
					children: "Powered By Elite Technologies"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee space-x-12 lg:space-x-24 items-center",
				children: [...Array(2)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex space-x-12 lg:space-x-24 items-center",
					children: technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group flex flex-col items-center gap-3 transition-transform hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl lg:text-3xl font-black font-outfit text-white/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-electric)] group-hover:to-[var(--color-violet)] transition-all duration-300",
							children: tech
						})
					}, tech))
				}, i))
			})
		]
	});
}
var faqs = [
	{
		question: "What services do you specialize in?",
		answer: "We specialize in modern web development, scalable mobile app development, premium UI/UX design, and comprehensive SEO marketing strategies. We provide end-to-end solutions for startups and enterprises."
	},
	{
		question: "How long does a typical project take?",
		answer: "Project timelines vary based on complexity. A standard corporate website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-4 months. We always provide a detailed timeline during the discovery phase."
	},
	{
		question: "Do you offer ongoing support and maintenance?",
		answer: "Absolutely. We offer dedicated support and maintenance packages to ensure your digital product remains secure, up-to-date, and performs optimally post-launch."
	},
	{
		question: "How do you handle project communication?",
		answer: "We believe in complete transparency. You will have a dedicated project manager, regular status updates, and access to our project management tools to track progress in real-time."
	},
	{
		question: "Are your websites optimized for SEO?",
		answer: "Yes. Every website we build includes technical SEO best practices out of the box, including optimized architecture, fast load times, mobile responsiveness, and clean code."
	}
];
function FAQ() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-[var(--color-background)] relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-4 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl lg:text-5xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter",
						children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]",
							children: "Questions"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-70 text-lg",
						children: "Everything you need to know about working with Uma Techno."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? "border-[var(--color-electric)]/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]" : "border-[var(--color-border)] hover:border-[var(--color-text-main)]/20"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggleFaq(index),
							className: "w-full flex items-center justify-between p-6 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `font-bold font-outfit text-lg transition-colors ${openIndex === index ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)]"}`,
								children: faq.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `text-[var(--color-text-main)] opacity-50 transition-transform duration-300 ${openIndex === index ? "rotate-180 opacity-100 text-[var(--color-electric)]" : ""}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .3,
								ease: "easeInOut"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-6 pb-6 pt-2 text-[var(--color-text-main)] opacity-70 leading-relaxed",
								children: faq.answer
							})
						}) })]
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-70 mb-4",
						children: "Still have questions?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 font-bold text-[var(--color-electric)] hover:text-[var(--color-accent)] transition-colors group",
						children: ["Reach out to us directly ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 16,
							className: "group-hover:translate-x-1 transition-transform"
						})]
					})]
				})
			]
		})
	});
}
var stats = [
	{
		label: "Successful Projects",
		value: "12+",
		icon: Rocket
	},
	{
		label: "Growth Delivered",
		value: "3x",
		icon: Zap
	},
	{
		label: "Client Satisfaction",
		value: "100%",
		icon: Users
	},
	{
		label: "Support Coverage",
		value: "24/7",
		icon: Shield
	}
];
/**
* Home component: The primary landing page for Uma Techno.
* Features dynamic data fetching for CMS content and a widget-based layout control.
*/
function Home() {
	const [widgets, setWidgets] = (0, import_react.useState)([]);
	const [services, setServices] = (0, import_react.useState)([]);
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [testimonials, setTestimonials] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [showStickyCta, setShowStickyCta] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) setShowStickyCta(true);
			else setShowStickyCta(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		/**
		* Primary data orchestrator: Fetches all dynamic content from the backend.
		* Implements fallback data to ensure the site remains functional even if the API is down.
		*/
		const fetchData = async () => {
			const fallbackWidgets = [
				{
					name: "hero",
					enabled: true
				},
				{
					name: "trusted",
					enabled: true
				},
				{
					name: "services",
					enabled: true
				},
				{
					name: "why-choose-us",
					enabled: true
				},
				{
					name: "stats",
					enabled: true
				},
				{
					name: "process",
					enabled: true
				},
				{
					name: "portfolio",
					enabled: true
				},
				{
					name: "testimonials",
					enabled: true
				},
				{
					name: "cta",
					enabled: true
				}
			];
			const fallbackServices = [
				{
					title: "Web Engineering",
					description: "Scalable, secure, and conversion-optimized web platforms for growing businesses in Rajkot.",
					icon: "Globe",
					slug: "web-development"
				},
				{
					title: "SEO Mastery",
					description: "Technical SEO and digital strategy to dominate search results and drive local leads in Gujarat.",
					icon: "BarChart",
					slug: "seo-services"
				},
				{
					title: "Digital Marketing",
					description: "Full-stack marketing solutions focused on ROI and lead generation for local brands.",
					icon: "Megaphone",
					slug: "digital-marketing"
				},
				{
					title: "E-commerce Growth",
					description: "End-to-end online stores with advanced payment integrations and marketing focus.",
					icon: "Rocket",
					slug: "ecommerce"
				},
				{
					title: "Mobile Innovation",
					description: "Native-quality iOS and Android applications that deliver exceptional user experiences.",
					icon: "Smartphone",
					slug: "app-development"
				}
			];
			const fallbackProjects = [
				{
					title: "DocRx Health Platform",
					category: "HealthTech",
					industry: "Medical",
					challenge: "Doctors needed a secure, compliant way to manage digital prescriptions and patient records.",
					solution: "Developed a comprehensive digital health platform with encrypted document storage and e-prescription capabilities.",
					result: "10,000+ Prescriptions Processed",
					tech: [
						"Flutter",
						"ASP.Net",
						"MSSQL"
					],
					featuredImage: "/images/health-booking.png",
					slug: "docrx"
				},
				{
					title: "Premium Jewelry E-commerce",
					category: "E-commerce",
					industry: "Fashion & Jewelry",
					challenge: "Needed a luxury digital presence that matched their physical showroom quality in Rajkot.",
					solution: "Built a custom Next.js storefront with high-fidelity visuals and 3D product previews.",
					result: "+450% Conversion Increase",
					tech: [
						"Next.js",
						"Three.js",
						"Prisma"
					],
					featuredImage: "/images/jewelry-ecommerce.png",
					slug: "jewelry-ecommerce"
				},
				{
					title: "Healthcare Booking System",
					category: "Web App",
					industry: "Medical",
					challenge: "Manual appointment scheduling was causing 40% lead leakage for local clinics.",
					solution: "Automated booking system with real-time slot management and SMS notifications.",
					result: "Zero Manual Overhead",
					tech: [
						"React",
						"Node.js",
						"PostgreSQL"
					],
					featuredImage: "/images/health-booking.png",
					slug: "booking-platform"
				},
				{
					title: "Fintech Growth Dashboard",
					category: "SaaS",
					industry: "Finance",
					challenge: "Users found financial data overwhelming and difficult to track on mobile.",
					solution: "Clean, minimalist dashboard with AI-driven insights and interactive charting.",
					result: "85% User Retention",
					tech: [
						"TypeScript",
						"D3.js",
						"AWS"
					],
					featuredImage: "/images/fintech-dashboard.png",
					slug: "fintech-saas"
				}
			];
			try {
				const baseUrl = "https://uma-techno-phrb.vercel.app";
				const [wRes, sRes, pRes] = await Promise.all([
					fetch(`${baseUrl}/api/v1/widgets`),
					fetch(`${baseUrl}/api/v1/services`),
					fetch(`${baseUrl}/api/v1/projects`)
				]);
				if (wRes.ok) {
					const data = await wRes.json();
					setWidgets(data.length > 0 ? data : fallbackWidgets);
				}
				if (sRes.ok) {
					const data = await sRes.json();
					setServices(data.length > 0 ? data : fallbackServices);
				}
				if (pRes.ok) {
					const data = await pRes.json();
					if (data.length > 0) {
						const docRx = fallbackProjects.find((p) => p.slug === "docrx");
						const merged = docRx ? [docRx, ...data.filter((p) => p.slug !== "docrx")] : data;
						setProjects(merged);
					} else setProjects(fallbackProjects);
				}
				try {
					const tRes = await fetch(`${baseUrl}/api/v1/testimonials`);
					if (tRes.ok) {
						const data = await tRes.json();
						setTestimonials(data);
					}
				} catch (err) {
					console.error("Testimonials fetch failed");
				}
			} catch (err) {
				console.error("API fetch failed, using fallback data", err);
				setWidgets(fallbackWidgets);
				setServices(fallbackServices);
				setProjects(fallbackProjects);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	/**
	* Layout Control:
	* Checks if a specific section (widget) is enabled in the Admin Panel.
	*/
	const isEnabled = (name) => {
		const w = widgets.find((w) => w.name === name);
		return w ? w.enabled : true;
	};
	/**
	* Dynamic Icon Mapping:
	* Converts string-based icon names from the database into Lucide React components.
	*/
	const getIcon = (iconName) => {
		switch (iconName) {
			case "Globe": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 32 });
			case "Rocket": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { size: 32 });
			case "Smartphone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { size: 32 });
			case "Code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { size: 32 });
			case "BarChart": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumnIncreasing, { size: 32 });
			case "Megaphone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { size: 32 });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 32 });
		}
	};
	if (loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-12 lg:gap-16 pb-20 lg:pb-32 bg-[var(--color-background)]",
		children: [
			isEnabled("hero") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectEstimator, {}),
			isEnabled("stats") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-7xl mx-auto px-6 w-full relative z-20 py-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8",
					children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-6 lg:p-8 text-center flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-2xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] flex items-center justify-center ring-1 ring-[var(--color-electric)]/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { size: 24 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl lg:text-5xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] tracking-tight",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs lg:text-sm font-bold text-[var(--color-text-main)] opacity-70 uppercase tracking-widest mt-2",
							children: stat.label
						})] })]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 overflow-hidden relative w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex space-x-16 w-max animate-marquee items-center opacity-40 hover:opacity-100 transition-opacity duration-500",
							children: [...Array(2)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex space-x-16 items-center",
								children: [
									"Retailers",
									"Real Estate",
									"Startups",
									"Enterprises",
									"Medical Centres",
									"Fintech",
									"Agencies"
								].map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl font-black font-outfit text-[var(--color-text-main)] whitespace-nowrap px-8",
									children: brand
								}, brand))
							}, i))
						})
					]
				})]
			}),
			isEnabled("services") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-7xl mx-auto px-6 w-full py-20 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-4 mb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]",
							children: "PREMIUM SOLUTIONS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl lg:text-5xl 2xl:text-6xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]",
							children: [
								"Leading Web, App & ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "SEO Services"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto 2xl:text-lg",
							children: "We engineer high-performance digital systems that capture leads, automate operations, and scale revenue for businesses in Rajkot and across Gujarat."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
					children: services.map((service, index) => {
						const isLarge = index === 0 || index === 3;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: service.slug.startsWith("/") ? service.slug : `/${service.slug}`,
							className: cn("bg-[var(--color-card)] border border-[var(--color-border)] group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500", isLarge ? "lg:col-span-2 min-h-[350px] md:min-h-[400px]" : "min-h-[350px] md:min-h-[400px]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--color-electric)]/10 to-transparent blur-3xl -mr-32 -mt-32 transition-transform duration-1000 ease-out" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 relative z-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-14 h-14 bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl flex items-center justify-center text-[var(--color-electric)] shadow-sm group-hover:-translate-y-1 transition-transform duration-300",
											children: getIcon(service.icon || "Globe")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-2xl lg:text-3xl font-black font-outfit leading-tight text-[var(--color-text-main)] tracking-tighter",
											children: service.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[var(--color-text-main)] opacity-60 leading-relaxed max-w-sm text-sm",
											children: service.description
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-4 text-xs font-bold tracking-widest text-[var(--color-text-main)] opacity-50 uppercase group-hover:opacity-100 group-hover:text-[var(--color-electric)] transition-all relative z-10",
									children: ["EXPLORE SOLUTIONS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							]
						}, service.slug);
					})
				})]
			}),
			isEnabled("why-choose-us") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-7xl mx-auto px-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group order-2 lg:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 bg-gradient-glow opacity-30 blur-[120px] group-hover:opacity-50 transition-all duration-700" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-video bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2.5rem] overflow-hidden shadow-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/about-agency.png",
									alt: "About Us",
									className: "w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								animate: { y: [
									0,
									-15,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity
								},
								className: "absolute -top-6 -right-6 lg:-top-8 lg:-right-8 bg-[var(--color-card)] border border-[var(--color-border)] p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl backdrop-blur-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[var(--color-electric)] font-black text-lg lg:text-xl tracking-tighter",
									children: "Business First"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest mt-1",
									children: "Our Core Mindset"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 lg:space-y-10 order-1 lg:order-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 lg:space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl lg:text-4xl 2xl:text-5xl font-bold font-outfit text-[var(--color-text-main)]",
								children: [
									"Your Partner in ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Business Dominance"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-70 leading-relaxed text-sm lg:text-base 2xl:text-lg",
								children: "We bridge the gap between complex technology and business growth. Our solutions are engineered to be assets, not just expenses."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-4 lg:gap-6",
							children: [
								{
									title: "Revenue-first approach",
									desc: "Code designed to maximize return on investment."
								},
								{
									title: "Elite UI/UX Mastery",
									desc: "Premium design standards that command authority."
								},
								{
									title: "Technical SEO Core",
									desc: "Built-in optimization for organic growth."
								},
								{
									title: "Agile Rapid Delivery",
									desc: "Efficient workflows to market faster."
								}
							].map((benefit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 lg:gap-4 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all mt-1 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 12 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-bold text-[var(--color-text-main)]",
									children: benefit.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[var(--color-text-main)] opacity-60 text-xs mt-1",
									children: benefit.desc
								})] })]
							}, i))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMarquee, {}),
			isEnabled("portfolio") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-7xl mx-auto px-6 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row justify-between items-end gap-8 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-6",
								children: "SELECTED WORK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl lg:text-5xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]",
								children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Portfolio"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-70 max-w-xl",
								children: "Showcasing our best work in branding, development, and strategic digital solutions."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "group flex items-center gap-3 text-[var(--color-text-main)] font-bold tracking-widest text-sm hover:text-[var(--color-electric)] transition-colors",
						children: ["VIEW ALL PROJECTS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 20,
							className: "group-hover:translate-x-2 transition-transform"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: projects.slice(0, 3).map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card group overflow-hidden flex flex-col h-full rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.featuredImage || (i === 0 ? "/images/jewelry-ecommerce.png" : i === 1 ? "/images/health-booking.png" : "/images/fintech-dashboard.png"),
									alt: project.title,
									className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-6 left-6 flex flex-col gap-2 z-20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-4 py-2 bg-[var(--color-card)]/80 backdrop-blur-md text-[var(--color-electric)] border border-[var(--color-electric)]/20 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg",
										children: project.category
									}), project.industry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-4 py-2 bg-[var(--color-card)]/80 backdrop-blur-md text-[var(--color-text-main)] border border-[var(--color-text-main)]/20 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg",
										children: project.industry
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 lg:p-10 space-y-6 flex-1 flex flex-col justify-between relative z-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors break-words",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed line-clamp-3",
										children: project.challenge || project.description
									}),
									project.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-[var(--color-border)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-[var(--color-electric)] tracking-tighter mb-1",
											children: "Result"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-lg font-black text-[var(--color-text-main)]",
											children: project.result
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: `/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, "-")}`,
								className: "flex items-center gap-2 text-[var(--color-text-main)] opacity-60 group-hover:opacity-100 group-hover:text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase mt-6 group/link transition-all",
								children: ["View Case Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									className: "group-hover/link:translate-x-2 transition-transform"
								})]
							})]
						})]
					}, i))
				})]
			}),
			isEnabled("testimonials") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-7xl mx-auto px-6 w-full py-24 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 md:p-20 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center space-y-4 mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]",
								children: ["What Our Clients ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Say"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-60 max-w-xl mx-auto",
								children: "See why businesses trust Uma Techno for their digital growth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-6 py-2 border border-[var(--color-electric)] text-[var(--color-electric)] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-electric)] hover:text-white transition-all",
									children: "Share Your Experience"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: testimonials.length > 0 ? testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-8 rounded-[var(--radius)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-[var(--color-electric)] pointer-events-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-8xl font-serif",
										children: "\""
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-[#F59E0B] mb-6 relative z-10",
									children: Array.from({ length: t.rating || 5 }).map((_, star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 16,
										fill: "currentColor"
									}, star))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[var(--color-text-main)] opacity-70 mb-8 italic relative z-10",
									children: [
										"\"",
										t.content,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-full bg-[var(--color-navy-light)] border border-[var(--color-border)] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: t.image || `https://i.pravatar.cc/100?u=${t.id}`,
											alt: t.name,
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[var(--color-text-main)] opacity-50",
										children: [t.role, t.company ? `, ${t.company}` : ""]
									})] })]
								})
							]
						}, i)) : [
							{
								name: "Rajesh Patel",
								role: "Founder, Heritage Jewellers",
								content: "Uma Techno transformed our physical jewelry business into a premium digital storefront. The seamless checkout experience helped us capture a younger demographic and doubled our online sales.",
								image: "/images/client-1-v2.png"
							},
							{
								name: "Priya Sharma",
								role: "Marketing Director, NextGen Health",
								content: "Their SEO mastery and beautifully designed appointment system were game-changers for our clinics. We saw a 300% increase in organic leads and our patients love how easy it is to book online.",
								image: "/images/client-2-v2.png"
							},
							{
								name: "Amit Desai",
								role: "CTO, FinServe Solutions",
								content: "The engineering team at Uma Techno delivered a robust, scalable SaaS dashboard ahead of schedule. The code quality, attention to UX, and clear communication made them the perfect technology partner.",
								image: "/images/client-3-v2.png"
							}
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-8 rounded-[var(--radius)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-[var(--color-electric)] pointer-events-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-8xl font-serif",
										children: "\""
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-[#F59E0B] mb-6 relative z-10",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 16,
										fill: "currentColor"
									}, star))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[var(--color-text-main)] opacity-70 mb-8 italic relative z-10",
									children: [
										"\"",
										t.content,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-full bg-[var(--color-navy-light)] border border-[var(--color-border)] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: t.image,
											alt: t.name,
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[var(--color-text-main)] opacity-50",
										children: t.role
									})] })]
								})
							]
						}, i))
					})]
				})
			}),
			isEnabled("process") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			isEnabled("cta") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-7xl mx-auto px-6 w-full pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-[3rem] p-10 lg:p-24 text-center space-y-10 relative overflow-hidden group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-electric)]/20 blur-[150px] -mr-64 -mt-64 group-hover:scale-150 transition-transform duration-1000" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/20 blur-[150px] -ml-64 -mb-64 group-hover:scale-150 transition-transform duration-1000" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl lg:text-6xl font-black font-outfit max-w-3xl mx-auto leading-[1.1] text-[var(--color-text-main)] tracking-tighter relative z-10",
							children: [
								"Ready to Accelerate Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse",
									children: "Business Growth"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 max-w-xl mx-auto leading-relaxed text-lg relative z-10",
							children: "Stop settling for mediocre digital presence. Partner with Uma Techno to build a premium solution that commands authority and delivers results."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "px-8 py-4 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-5px_var(--color-electric)] bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] text-center hover:shadow-[0_0_50px_-5px_var(--color-electric)]",
								children: "Get Free Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portfolio",
								className: "px-8 py-4 bg-[var(--color-card)]/50 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] hover:border-[var(--color-electric)]/50 rounded-2xl font-bold text-lg transition-all text-center",
								children: "View Our Work"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("fixed bottom-0 left-0 w-full p-4 bg-[var(--color-background)]/80 backdrop-blur-2xl border-t border-[var(--color-border)]/50 z-40 lg:hidden flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 transform", showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "w-full max-w-md py-3.5 bg-gradient-premium text-white font-bold rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all active:scale-95 text-sm uppercase tracking-wider",
					children: "Get Started Today"
				})
			})
		]
	});
}
//#endregion
export { Home as default };
