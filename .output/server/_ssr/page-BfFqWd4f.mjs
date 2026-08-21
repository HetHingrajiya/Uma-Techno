import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as useNavigate, l as useParams, n as Link } from "../_libs/react-router.mjs";
import { D as Palette, G as Globe, Q as Code, b as Rocket, f as Smartphone, nt as CircleCheckBig, pt as ArrowRight, st as ChartNoAxesColumnIncreasing } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-BfFqWd4f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var serviceData = {
	"web-development": {
		title: "Premium Website Development",
		tagline: "Build high-performance web systems that dominate your industry.",
		description: "We are the leading web development agency, specializing in Next.js, React, and scalable architectures.",
		icon: Globe,
		features: [
			"Custom Next.js Engineering",
			"SEO-Dominant Architecture",
			"High-Conversion UI/UX",
			"Secure Cloud Integration",
			"Performance Optimization"
		],
		seoFocus: "Global Reach"
	},
	"app-development": {
		title: "Mobile App Development",
		tagline: "Native-quality iOS and Android apps with exceptional UX.",
		description: "Bring your vision to life with a mobile application that people love to use. We build high-performance apps using React Native and Flutter.",
		icon: Smartphone,
		features: [
			"iOS & Android App Dev",
			"Cross-Platform Efficiency",
			"Push Notification Systems",
			"Offline Functionality",
			"App Store Optimization"
		],
		seoFocus: "Global Reach"
	},
	"ui-ux": {
		title: "Premium UI/UX Design",
		tagline: "Human-centric designs that drive engagement and conversion.",
		description: "Our design process focuses on user psychology and brand aesthetics to create interfaces that are beautiful and functional.",
		icon: Palette,
		features: [
			"User Research & Strategy",
			"Wireframing & Prototyping",
			"Visual Identity Design",
			"Interactive Mockups",
			"Usability Testing"
		],
		seoFocus: "Global Reach"
	},
	"custom-software": {
		title: "Custom Software Development",
		tagline: "Scalable software solutions tailored to your business needs.",
		description: "We build robust custom software, enterprise applications, and cloud-native solutions to solve complex business challenges.",
		icon: Code,
		features: [
			"SaaS Development",
			"API Integration",
			"Cloud Solutions",
			"Legacy Migration",
			"Enterprise Software"
		],
		seoFocus: "Global Reach"
	},
	"seo": {
		title: "SEO & Digital Strategy Company",
		tagline: "Rank higher, drive leads, and dominate search results.",
		description: "Our technical SEO strategies are designed to deliver long-term organic growth and national reach.",
		icon: ChartNoAxesColumnIncreasing,
		features: [
			"Technical SEO Audits",
			"Keyword Dominance",
			"Content Strategy",
			"Local SEO Optimization",
			"Analytics & Reporting"
		],
		seoFocus: "Global Reach"
	},
	"branding": {
		title: "Digital Branding & Identity",
		tagline: "Building iconic brands for the digital age.",
		description: "We help businesses establish a powerful visual presence that resonates with their audience across all digital touchpoints.",
		icon: Rocket,
		features: [
			"Brand Strategy",
			"Logo & Visual Design",
			"Brand Guidelines",
			"Social Media Identity",
			"Marketing Collateral"
		],
		seoFocus: "Global Reach"
	}
};
function ServicePage() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const paramsSlug = slug || "";
	const service = serviceData[paramsSlug];
	(0, import_react.useEffect)(() => {
		if (paramsSlug === "web-development") navigate("/web-development", { replace: true });
		if (paramsSlug === "seo") navigate("/seo-services", { replace: true });
		if (paramsSlug === "digital-marketing") navigate("/digital-marketing", { replace: true });
	}, [paramsSlug, navigate]);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-40 text-center text-white",
		children: "Service not found"
	});
	const Icon = service.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border",
						style: {
							backgroundColor: "var(--color-blue-glow, rgba(6, 182, 212, 0.15))",
							borderColor: "var(--color-blue-glow, rgba(6, 182, 212, 0.2))",
							color: "var(--color-electric)"
						},
						children: service.seoFocus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl lg:text-6xl font-bold font-outfit leading-tight text-[var(--color-text-main)]",
						children: [
							service.title.split(" ").slice(0, -1).join(" "),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: service.title.split(" ").pop()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed",
						children: service.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-60 leading-relaxed",
						children: service.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: service.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 items-center group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-5 h-5 rounded-full flex items-center justify-center text-[var(--color-electric)] group-hover:text-white transition-all",
								style: { backgroundColor: "var(--color-blue-glow, rgba(6, 182, 212, 0.2))" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 12 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--color-text-main)] opacity-80 font-medium",
								children: feature
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "px-8 py-4 text-white hover:brightness-110 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-[0_0_20px_var(--color-electric)] inline-flex items-center gap-2",
							style: { backgroundColor: "var(--color-electric)" },
							children: [
								"Get Started with ",
								service.title.split(" ")[0],
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aspect-square glass-card rounded-[3rem] flex items-center justify-center relative overflow-hidden bg-[var(--color-card)] border-[var(--color-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 120,
						className: "text-[var(--color-electric)] animate-float-complex"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "max-w-7xl mx-auto px-6 py-32 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card p-12 rounded-[3rem] space-y-6 bg-[var(--color-card)] border-[var(--color-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold font-outfit text-[var(--color-text-main)]",
					children: "Ready to Scale Your Business Globally?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto italic",
					children: "\"Our mission is to empower local businesses with global-standard digital engineering. Your growth is our primary metric of success.\""
				})]
			})
		})]
	});
}
//#endregion
export { ServicePage as default };
