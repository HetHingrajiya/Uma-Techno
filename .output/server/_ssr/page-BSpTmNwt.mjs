import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "../_libs/react-router.mjs";
import { ct as Calendar, et as Clock, pt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-DsZZztjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-BSpTmNwt.js
var import_jsx_runtime = require_jsx_runtime();
/**
* SEO Metadata: 
* Ensures the blog page is correctly indexed with descriptive titles and canonical links.
*/
/**
* Blog Post Data:
* Static collection of articles. In a production environment, this would 
* typically be fetched from a headless CMS or database.
*/
var posts = [
	{
		title: "Best Web Development Company in Rajkot: How to Choose?",
		excerpt: "Expert insights into selecting the right technology partner for your digital transformation. Learn what sets apart elite web engineering firms in Rajkot.",
		date: "May 12, 2026",
		author: "Uma Team",
		readTime: "8 min read",
		image: "/images/web-dev-rajkot.png",
		slug: "best-web-development-company-rajkot"
	},
	{
		title: "SEO Services Guide for Local Businesses in Gujarat",
		excerpt: "Master the art of local search visibility. Our comprehensive guide helps Gujarat-based businesses dominate search results and capture high-intent leads.",
		date: "May 9, 2026",
		author: "SEO Expert",
		readTime: "12 min read",
		image: "/images/seo-gujarat.png",
		slug: "seo-services-guide-local-business"
	},
	{
		title: "Website Cost in India 2026: A Comprehensive Breakdown",
		excerpt: "Navigating the investment landscape for digital platforms. We provide a transparent breakdown of development costs for startups and enterprises in 2026.",
		date: "May 5, 2026",
		author: "Uma Team",
		readTime: "10 min read",
		image: "/images/website-cost.png",
		slug: "website-cost-india-2026"
	},
	{
		title: "Why Your Business Needs a Website in the AI Era",
		excerpt: "Discover how a robust digital presence serves as the foundation for AI-driven growth. In 2026, your website is your most powerful business asset.",
		date: "April 28, 2026",
		author: "Tech Analyst",
		readTime: "7 min read",
		image: "/images/ai-business.png",
		slug: "why-business-needs-website"
	},
	{
		title: "Digital Marketing Tips for 2026: Gujarat Market Trends",
		excerpt: "Stay ahead of the curve with data-driven marketing strategies tailored for the unique and evolving business landscape of the Gujarat market.",
		date: "April 22, 2026",
		author: "Marketing Strategist",
		readTime: "15 min read",
		image: "/images/marketing-trends.png",
		slug: "digital-marketing-tips-2026"
	}
];
/**
* BlogPage Component:
* Displays a grid of insights and technical articles for local businesses in Gujarat.
*/
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 lg:pt-48 pb-32 bg-[var(--color-background)] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-6 mb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "down",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider",
							children: "Our Insights"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl lg:text-7xl font-bold font-outfit text-[var(--color-text-main)]",
							children: [
								"The ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Tech & Growth"
								}),
								" Blog"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg",
							children: "Stay updated with the latest trends in web engineering, search algorithms, and conversion psychology."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: posts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3 + i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/blog/${post.slug}`,
						className: "group h-full flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] relative overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: post.title,
								className: "object-cover group-hover:scale-110 transition-all duration-700"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 flex-1 flex flex-col justify-between space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 text-[10px] font-bold text-[var(--color-text-main)] opacity-50 uppercase tracking-widest",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
												" ",
												post.date
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 12 }),
												" ",
												post.readTime
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors leading-tight",
										children: post.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed",
										children: post.excerpt
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-bold text-[var(--color-electric)] uppercase tracking-wider group-hover:gap-4 transition-all",
								children: ["Read Article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})]
						})]
					})
				}, i))
			})]
		})
	});
}
//#endregion
export { BlogPage as default };
