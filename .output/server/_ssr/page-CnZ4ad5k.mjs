import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as useParams, n as Link } from "../_libs/react-router.mjs";
import { ct as Calendar, et as Clock, i as User, m as Share2, mt as ArrowLeft } from "../_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var blogData = {
	"best-web-development-company-rajkot": {
		title: "Best Web Development Company in Rajkot: How to Choose?",
		description: "Discover what makes a web development company stand out in Rajkot and how to choose the right partner for your digital success.",
		date: "May 5, 2026",
		author: "Uma Team",
		readTime: "8 min read",
		image: "/images/web-dev-rajkot.png",
		content: `
      <p>Choosing the <strong>best web development company in Rajkot</strong> is a critical decision that can define your business's trajectory in the digital world. With hundreds of agencies claiming to be the best, how do you filter through the noise?</p>
      
      <h2>1. Look for a Proven Portfolio</h2>
      <p>The first thing to check is their past work. A reputable agency in Rajkot should have a diverse portfolio of live websites. Don't just look at screenshots; visit the actual sites to check for speed, responsiveness, and user experience.</p>
      
      <h2>2. Technical Expertise</h2>
      <p>The web is evolving fast. In 2026, you shouldn't settle for legacy technologies. Ensure the company you hire specializes in modern frameworks like <strong>Next.js</strong>, React, and Node.js. These technologies ensure your site is fast and scalable.</p>
      
      <h2>3. Local Understanding, Global Quality</h2>
      <p>A local agency like Uma Techno understands the Rajkot market. We know the local consumer behavior and business culture, but we apply global design standards to ensure your brand competes at the highest level.</p>
      
      <h3>Conclusion</h3>
      <p>Don't just hire a coder; hire a partner. At Uma Techno, we pride ourselves on being the top-rated web development agency in Gujarat, focusing on ROI and business growth.</p>
    `
	},
	"seo-services-guide-local-business": {
		title: "SEO Services Guide for Local Businesses in Gujarat",
		description: "Learn the secrets of local SEO and how to dominate search results in Rajkot, Ahmedabad, and beyond.",
		date: "May 3, 2026",
		author: "SEO Expert",
		readTime: "12 min read",
		image: "/images/seo-gujarat.png",
		content: `
      <p>If your business is based in <strong>Rajkot</strong>, local SEO is your most powerful growth tool. When someone searches for "services near me," you need to be the first name they see.</p>
      
      <h2>The Importance of Google Business Profile</h2>
      <p>Your Google Business Profile (GBP) is the cornerstone of local SEO. Ensure your name, address, and phone number (NAP) are consistent across the web. Encourage happy customers to leave reviews, as this is a major ranking factor.</p>
      
      <h2>Keywords with Local Intent</h2>
      <p>Don't just target broad keywords. Use terms like "SEO services in Rajkot" or "best digital agency Gujarat." This helps Google connect you with local searchers who are ready to buy.</p>
      
      <h3>Content is Still King</h3>
      <p>Create blog posts and service pages that address the specific needs of your Gujarat-based customers. Localized content builds trust and authority.</p>
    `
	},
	"website-cost-india-2026": {
		title: "Website Cost in India 2026: A Comprehensive Breakdown",
		description: "How much does a website really cost in 2026? We break down the pricing for startups, SMEs, and enterprises.",
		date: "April 28, 2026",
		author: "Uma Team",
		readTime: "10 min read",
		image: "/images/website-cost.png",
		content: `
      <p>One of the most frequent questions we get at Uma Techno is: "What is the <strong>website cost in India</strong> for 2026?" The answer depends on your goals, but here is a realistic breakdown.</p>
      
      <h2>Small Business / MVP (₹30,000 - ₹75,000)</h2>
      <p>Ideal for local businesses in Rajkot who need a professional digital presence. This usually includes a responsive design, contact forms, and basic SEO setup.</p>
      
      <h2>Mid-Size E-commerce (₹1,00,000 - ₹3,00,000)</h2>
      <p>For businesses looking to sell online. This includes product management systems, secure payment gateways, and advanced user accounts.</p>
      
      <h2>Enterprise Custom Solutions (₹5,00,000+)</h2>
      <p>Large-scale systems with custom dashboards, AI integrations, and complex database architectures.</p>
    `
	},
	"why-business-needs-website": {
		title: "Why Your Business Needs a Website in the AI Era",
		description: "In 2026, a website is more than just a digital brochure. Discover why your business needs a robust digital presence now more than ever.",
		date: "April 25, 2026",
		author: "Tech Analyst",
		readTime: "7 min read",
		image: "/images/ai-business.png",
		content: `
      <p>With the rise of social media and AI, some might ask if a website is still necessary in 2026. The answer is a resounding YES. Here is why.</p>
      
      <h2>Ownership and Control</h2>
      <p>Social media platforms can change their algorithms or delete your account overnight. Your website is the only piece of digital real estate that you truly own and control.</p>
      
      <h2>Credibility and Professionalism</h2>
      <p>80% of consumers in Rajkot will search for your website before doing business with you. A high-quality website instantly builds trust and separates you from amateur competitors.</p>
    `
	},
	"digital-marketing-tips-2026": {
		title: "Digital Marketing Tips for 2026: Gujarat Market Trends",
		description: "Stay ahead with these digital marketing strategies specifically tailored for the unique business landscape of Gujarat.",
		date: "April 20, 2026",
		author: "Marketing Strategist",
		readTime: "15 min read",
		image: "/images/marketing-trends.png",
		content: `
      <p>Digital marketing in 2026 is about personalization and technical excellence. As a leading <strong>digital marketing agency in Rajkot</strong>, we see these trends dominating the market.</p>
      
      <h2>Hyper-Local Targeting</h2>
      <p>Use ad platforms to target specific neighborhoods in Rajkot. Personalized ads that mention local landmarks or events tend to have 3x higher conversion rates.</p>
      
      <h2>Short-Form Video Content</h2>
      <p>Reels and YouTube Shorts are the fastest way to build brand awareness in Gujarat. Show the human side of your business and provide value through quick tips.</p>
    `
	}
};
function BlogPostPage() {
	const { slug } = useParams();
	const post = blogData[slug || ""];
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-40 text-center text-white",
		children: "Post not found"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "pt-32 lg:pt-48 pb-32 bg-[var(--color-background)] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-[var(--color-electric)] font-bold mb-12 hover:gap-4 transition-all uppercase text-sm tracking-widest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), " Back to Blog"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-sm font-bold text-[var(--color-text-main)] opacity-50 uppercase tracking-widest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 16 }),
									" ",
									post.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 16 }),
									" ",
									post.author
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 }),
									" ",
									post.readTime
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)] leading-tight",
						children: post.title
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[21/9] relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-[var(--color-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.title,
						className: "w-full h-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-4 gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-3 prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-outfit prose-h2:text-[var(--color-text-main)] prose-p:text-[var(--color-text-main)] prose-p:opacity-80 prose-p:leading-relaxed prose-strong:text-[var(--color-electric)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: post.content } })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl font-bold font-outfit text-[var(--color-text-main)] uppercase",
								children: "Share This"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "w-12 h-12 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-electric)] hover:text-white transition-all shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 18 })
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 rounded-3xl bg-gradient-premium text-white space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xl font-bold font-outfit",
									children: "Ready to Scale?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm opacity-90 leading-relaxed",
									children: "Work with the top web & SEO agency in Rajkot to grow your business."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "block w-full py-4 bg-white text-[var(--color-electric)] text-center rounded-xl font-bold hover:scale-105 transition-all",
									children: "Request Audit"
								})
							]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { BlogPostPage as default };
