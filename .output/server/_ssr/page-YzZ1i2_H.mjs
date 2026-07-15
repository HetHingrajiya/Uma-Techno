import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "../_libs/react-router.mjs";
import { G as Globe, Q as Code, b as Rocket, f as Smartphone, nt as CircleCheckBig, p as Shield, pt as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-YzZ1i2_H.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		title: "Next.js & React Expertise",
		desc: "Building lightning-fast, SEO-friendly applications using the latest web technologies.",
		icon: Zap
	},
	{
		title: "E-commerce Solutions",
		desc: "Developing robust online stores with secure payments and optimized conversion paths.",
		icon: Rocket
	},
	{
		title: "Custom Web Applications",
		desc: "Tailor-made software solutions designed to automate and scale your business operations.",
		icon: Code
	},
	{
		title: "Responsive UI/UX Design",
		desc: "Ensuring your website looks and functions perfectly across all devices and screen sizes.",
		icon: Smartphone
	},
	{
		title: "SEO-Ready Architecture",
		desc: "Technical SEO built into the core, helping you rank higher on Google from day one.",
		icon: Globe
	},
	{
		title: "Cloud Integration",
		desc: "Secure and scalable hosting solutions on AWS, Azure, or Vercel for maximum uptime.",
		icon: Shield
	}
];
var faqs = [
	{
		q: "How long does it take to build a website?",
		a: "A standard business website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks depending on features."
	},
	{
		q: "Do you provide maintenance after launch?",
		a: "Yes, we offer monthly maintenance packages that include security updates, performance monitoring, and content updates."
	},
	{
		q: "Is my website SEO-friendly?",
		a: "Absolutely. Every website we build is optimized for speed and follows the latest SEO best practices to ensure visibility in search results."
	},
	{
		q: "Will my website be mobile-friendly?",
		a: "Yes, 100%. We use a mobile-first design approach to ensure your site works flawlessly on smartphones, tablets, and desktops."
	}
];
function WebDevelopmentPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Web Development Services in Rajkot",
		"provider": {
			"@type": "LocalBusiness",
			"name": "Uma Techno"
		},
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"reviewCount": "124"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Web Development",
			"itemListElement": features.map((f) => ({
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": f.title
				}
			}))
		}
	};
	const faqLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.q,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.a
			}
		}))
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-20 lg:gap-32 pb-32 bg-[var(--color-background)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(faqLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Home",
							"item": "https://umatechno.in"
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Services",
							"item": "https://umatechno.in/services"
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": "Web Development",
							"item": "https://umatechno.in/web-development"
						}
					]
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-32 lg:pt-48 pb-20 px-6 relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-electric)]/10 blur-[150px] -mr-64 -mt-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider",
								children: "Expertise in Rajkot & Gujarat"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl lg:text-7xl font-bold font-outfit leading-tight text-[var(--color-text-main)]",
								children: [
									"Leading ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Web Development"
									}),
									" Company in Rajkot"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-xl",
								children: "We engineer high-performance digital platforms that don't just look beautiful but drive real business results. Partner with the top-rated website development agency in Gujarat."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "px-8 py-4 bg-gradient-premium text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl",
									children: "Start Your Project"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/portfolio",
									className: "px-8 py-4 bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] rounded-xl font-bold text-base transition-all",
									children: "View Our Work"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-square glass-card rounded-[3rem] bg-gradient-soft/50 border border-[var(--color-border)] flex items-center justify-center p-12 relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-glow opacity-20 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								size: 180,
								className: "text-[var(--color-electric)] animate-float-complex"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]",
							children: "Transforming Businesses with Premium Web Solutions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 space-y-6 leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"In today's digital-first world, your website is often the first point of contact between your brand and potential customers. As a premier ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Web Development Company in Rajkot" }),
									", Uma Techno understands that a website needs to be more than just a digital brochure. It needs to be a powerful sales engine, a lead generation machine, and a symbol of your brand's authority."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Our team of expert developers in Rajkot specializes in creating custom web solutions that are tailored to the unique needs of businesses in Gujarat. Whether you are a startup looking for your first MVP or an established enterprise needing a complex system overhaul, we provide the technical expertise and creative vision to bring your ideas to life. You can also explore our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/seo-services",
										className: "text-[var(--color-electric)] hover:underline font-bold",
										children: "SEO services in Rajkot"
									}),
									" to ensure your site reaches the right audience."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold font-outfit text-[var(--color-text-main)] mt-8",
									children: "Why Web Development Matters for Your Business Growth"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A well-designed website can significantly impact your bottom line. By focusing on user experience (UX), page speed, and technical SEO, we ensure that your visitors stay longer, engage more, and convert into loyal customers. In the competitive market of Rajkot, having a website that loads in under 2 seconds and works flawlessly on mobile devices is no longer a luxury—it's a necessity." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid sm:grid-cols-2 gap-4 list-none p-0",
									children: [
										"Increased Organic Traffic from Google",
										"Higher Conversion Rates",
										"Better Brand Credibility",
										"Automated Business Processes",
										"Scalable Digital Infrastructure",
										"24/7 Global Accessibility"
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 16,
											className: "text-[var(--color-electric)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use modern frameworks like Next.js and React to build websites that are incredibly fast and future-proof. Unlike traditional CMS platforms that can be slow and vulnerable to security threats, our headless and serverless approaches provide unmatched performance and security." })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-6 pt-12",
						children: features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-premium p-8 space-y-4 bg-[var(--color-card)] border border-[var(--color-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { size: 24 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xl font-bold font-outfit text-[var(--color-text-main)] uppercase tracking-tight",
									children: feature.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed",
									children: feature.desc
								})
							]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-8 rounded-[2rem] border border-[var(--color-border)] bg-gradient-premium text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-2xl font-bold font-outfit mb-4",
								children: "Need a Quote?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "opacity-90 mb-8 text-sm leading-relaxed",
								children: "Get a free consultation and a detailed project estimate for your web development needs in Rajkot."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "w-full py-4 bg-white text-[var(--color-electric)] rounded-xl font-bold text-center block hover:scale-105 transition-all",
								children: "Request Free Audit"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-8 rounded-[2rem] border border-[var(--color-border)] space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xl font-bold font-outfit text-[var(--color-text-main)]",
							children: "Our Tech Stack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Next.js",
								"React",
								"Node.js",
								"TypeScript",
								"PostgreSQL",
								"Tailwind CSS",
								"AWS",
								"Vercel"
							].map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-full text-xs font-bold",
								children: tech
							}, tech))
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-4xl mx-auto px-6 py-20 bg-gradient-soft/30 rounded-[3rem] border border-[var(--color-border)]/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold font-outfit text-center mb-12 text-[var(--color-text-main)]",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: faqs.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card p-6 rounded-2xl border border-[var(--color-border)] space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold text-[var(--color-text-main)]",
							children: faq.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed",
							children: faq.a
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-7xl mx-auto px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-soft border border-[var(--color-border)] rounded-[3rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-glow opacity-10 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl lg:text-5xl font-bold font-outfit text-[var(--color-text-main)]",
							children: [
								"Ready to Build Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Digital Success"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed",
							children: "Join 100+ businesses who have scaled their operations with our premium web development services in Rajkot, Gujarat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 px-10 py-5 bg-gradient-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl",
							children: ["Get Started Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 24 })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { WebDevelopmentPage as default };
