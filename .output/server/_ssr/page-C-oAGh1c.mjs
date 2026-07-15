import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "../_libs/react-router.mjs";
import { D as Palette, G as Globe, N as Megaphone, Q as Code, f as Smartphone, nt as CircleCheckBig, st as ChartNoAxesColumnIncreasing } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-DsZZztjS.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "Web Development",
		slug: "web-development",
		description: "Build high-performance, responsive websites using the latest technologies.",
		icon: Globe,
		features: [
			"Next.js & React",
			"E-commerce Solutions",
			"Custom CMS",
			"Performance Optimization"
		]
	},
	{
		title: "Mobile App Development",
		slug: "app-development",
		description: "Premium iOS and Android applications designed for growth.",
		icon: Smartphone,
		features: [
			"React Native",
			"Flutter",
			"Native iOS/Android",
			"App Store Optimization"
		]
	},
	{
		title: "UI/UX Design",
		slug: "ui-ux",
		description: "User-centric designs that convert visitors into loyal customers.",
		icon: Palette,
		features: [
			"Prototyping",
			"User Research",
			"Visual Identity",
			"Interactive Design"
		]
	},
	{
		title: "SEO Services",
		slug: "seo",
		description: "Data-driven SEO strategies to boost your organic visibility.",
		icon: ChartNoAxesColumnIncreasing,
		features: [
			"Keyword Research",
			"On-page SEO",
			"Technical SEO",
			"Backlink Strategy"
		]
	},
	{
		title: "Custom Software",
		slug: "custom-software",
		description: "Scalable software solutions tailored to your business needs.",
		icon: Code,
		features: [
			"SaaS Development",
			"API Integration",
			"Cloud Solutions",
			"Legacy Migration"
		]
	},
	{
		title: "Digital Branding",
		slug: "branding",
		description: "Create a powerful brand identity that stands out in the digital world.",
		icon: Megaphone,
		features: [
			"Logo Design",
			"Brand Guidelines",
			"Social Media Kits",
			"Market Positioning"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 pb-20 lg:pt-48 space-y-32 min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "max-w-7xl mx-auto px-6 text-center space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "down",
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-5xl lg:text-7xl font-bold font-outfit text-[var(--color-text-main)]",
					children: [
						"Empowering Your Business With ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Premium Digital Solutions"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-[var(--color-text-main)] opacity-70 max-w-3xl mx-auto",
					children: "We combine creativity and technology to deliver exceptional results that help your business thrive in an ever-evolving digital landscape."
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
			children: services.map((service, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1 * idx,
				width: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-10 h-full rounded-[3rem] border-white/5 hover:border-electric/30 transition-all flex flex-col group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-[var(--color-electric)]/10 rounded-2xl flex items-center justify-center text-[var(--color-electric)] mb-8 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { size: 32 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold font-outfit mb-4 text-[var(--color-text-main)]",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 mb-8 flex-grow",
							children: service.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 mb-10",
							children: service.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-[var(--color-text-main)] opacity-80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
									size: 16,
									className: "text-[var(--color-electric)]"
								}), feature]
							}, feature))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/services/${service.slug}`,
							className: "w-full py-4 bg-white/5 hover:bg-[var(--color-electric)] text-[var(--color-text-main)] hover:text-white text-center rounded-2xl font-bold transition-all",
							children: "Learn More"
						})
					]
				})
			}, service.slug))
		})]
	});
}
//#endregion
export { ServicesPage as default };
