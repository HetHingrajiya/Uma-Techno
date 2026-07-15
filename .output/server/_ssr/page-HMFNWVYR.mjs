import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Link } from "../_libs/react-router.mjs";
import { P as MapPin, et as Clock, pt as ArrowRight, ut as Briefcase } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-DsZZztjS.mjs";
import { t as MagneticButton } from "./MagneticButton-CBupM21V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-HMFNWVYR.js
var import_jsx_runtime = require_jsx_runtime();
var jobs = [
	{
		title: "Full Stack Developer",
		location: "Remote / Rajkot",
		type: "Full-time",
		salary: "₹15k - ₹20k"
	},
	{
		title: "UI/UX Designer",
		location: "Remote",
		type: "Full-time",
		salary: "₹10k - ₹15k"
	},
	{
		title: "Digital Marketing Specialist",
		location: "Rajkot",
		type: "Contract",
		salary: "₹20k - ₹25k"
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--color-background)] min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-7xl mx-auto px-6 text-center space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "down",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-electric font-bold tracking-widest text-sm uppercase",
							children: "Join Our Team"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-5xl lg:text-7xl font-bold font-outfit text-[var(--color-text-main)]",
							children: [
								"Build the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Future"
								}),
								" With Us"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed",
							children: "We are looking for passionate, creative, and talented individuals to join our growing team. Help us build world-class digital solutions."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold font-outfit mb-8 text-[var(--color-text-main)]",
						children: "Open Positions"
					})
				}), jobs.map((job, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .4 + i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-premium p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-electric)]/30 transition-all flex flex-col md:flex-row justify-between items-center gap-6 group bg-[var(--color-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-2xl font-bold font-outfit group-hover:text-[var(--color-electric)] transition-colors text-[var(--color-text-main)]",
								children: job.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-center md:justify-start gap-4 text-sm text-[var(--color-text-main)] opacity-60 font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
											" ",
											job.location
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 14 }),
											" ",
											job.type
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 14 }),
											" ",
											job.salary
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							strength: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "px-8 py-3 bg-[var(--color-electric)]/10 hover:bg-[var(--color-electric)] text-[var(--color-electric)] hover:text-white font-bold rounded-xl transition-all flex items-center gap-2 border border-[var(--color-electric)]/20 shadow-sm whitespace-nowrap",
								children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})
						})]
					})
				}, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-5xl mx-auto px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					width: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gradient-premium rounded-[3rem] p-12 md:p-16 text-white space-y-8 shadow-2xl relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl lg:text-4xl font-bold font-outfit",
									children: "Looking for an IT Company in Rajkot for Internship?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-lg opacity-90 max-w-2xl leading-relaxed",
									children: [
										"At Uma Techno, we believe in nurturing the next generation of tech talent. If you are a student looking for a premium ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											children: "IT internship in Rajkot"
										}),
										", we offer hands-on training in Web Development, App Development, and Digital Marketing."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									strength: .2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 bg-white text-[var(--color-electric)] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl",
										children: ["Apply for Internship ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
									})
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-7xl mx-auto px-6 py-20 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					width: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-premium p-12 rounded-[3rem] border border-[var(--color-border)] space-y-8 bg-[var(--color-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl font-bold font-outfit text-[var(--color-text-main)]",
							children: "Why Work at Uma Techno?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-3 gap-8",
							children: [
								{
									t: "Modern Tech Stack",
									d: "Master the latest industry-leading technologies."
								},
								{
									t: "Growth Opportunity",
									d: "Constant learning and career advancement."
								},
								{
									t: "Premium Culture",
									d: "Collaborative and supportive environment."
								}
							].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: idx * .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "font-bold text-[var(--color-electric)] text-lg",
										children: item.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed",
										children: item.d
									})]
								})
							}, item.t))
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { CareersPage as default };
