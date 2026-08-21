import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as FileCheck, K as Gavel, _ as Scale, rt as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-DsZZztjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-DSTPNuuu.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-20 px-6 bg-[var(--color-background)] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto space-y-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "down",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]",
						children: ["Terms & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Conditions"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-text-main)] opacity-60",
						children: "Last Updated: May 7, 2026"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 leading-relaxed space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Welcome to Uma Techno. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions of use." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 pt-8",
						children: [
							{
								title: "Service Agreement",
								content: "By engaging with Uma Techno, you agree to the specific project terms outlined in your service proposal. All work is performed on a professional basis with clearly defined milestones and deliverables.",
								icon: Gavel
							},
							{
								title: "Intellectual Property",
								content: "Unless otherwise agreed, all custom code and designs created for the client become the property of the client upon full payment. Uma Techno retains the right to showcase the work in our portfolio.",
								icon: FileCheck
							},
							{
								title: "User Responsibilities",
								content: "Users of our website and services must provide accurate information and refrain from any activities that could harm our infrastructure or reputation.",
								icon: Scale
							},
							{
								title: "Limitation of Liability",
								content: "Uma Techno will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.",
								icon: CircleAlert
							}
						].map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3 + i * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card p-8 rounded-3xl border border-[var(--color-border)] space-y-4 hover:border-[var(--color-electric)]/30 transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-xl flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(section.icon, { size: 24 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold font-outfit text-[var(--color-text-main)]",
										children: section.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[var(--color-text-main)] opacity-80",
										children: section.content
									})
								]
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .7,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold font-outfit text-[var(--color-text-main)]",
								children: "Legal Jurisdiction"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-text-main)] opacity-80",
								children: "These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat."
							})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { TermsPage as default };
