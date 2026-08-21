import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Phone, F as Mail, P as MapPin, h as Send, tt as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-DsZZztjS.mjs";
import { t as MagneticButton } from "./MagneticButton-CBupM21V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-Cejjh2e_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* ContactPage: 
* Handles user inquiries through a validated form and displays agency contact details.
*/
function ContactPage() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		service: "Web Development",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	/**
	* handleSubmit:
	* Validates and sends the form data to the backend API.
	* On success, shows a confirmation message. On failure, displays specific errors.
	*/
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");
		try {
			const res = await fetch(`https://uma-techno-phrb.vercel.app/api/v1/contacts`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					subject: formData.service
				})
			});
			const result = await res.json().catch(() => ({}));
			if (res.ok) {
				setStatus("success");
				setFormData({
					name: "",
					email: "",
					phone: "",
					service: "Web Development",
					message: ""
				});
			} else {
				setStatus("error");
				if (result.errors) {
					const messages = result.errors.map((err) => err.message).join(", ");
					setErrorMsg(messages);
				} else setErrorMsg(result.message || "Something went wrong. Please try again later.");
			}
		} catch (err) {
			setStatus("error");
			setErrorMsg("Failed to connect to the server. Please check your internet.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--color-background)] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-6 mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "down",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider",
							children: "Let's Talk"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]",
							children: [
								"Ready to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Transform"
								}),
								" Your Business?"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg",
							children: "Whether you need a complete enterprise solution or a premium marketing website, our engineers are ready to build it."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-5 gap-12 lg:gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 space-y-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[var(--color-card)] border border-[var(--color-border)] p-8 rounded-3xl shadow-lg space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold font-outfit text-[var(--color-text-main)]",
								children: "Contact Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4 items-start group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 24 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[var(--color-text-main)] mb-1",
											children: "Email Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[var(--color-text-main)] opacity-70 text-sm",
											children: "uma.techno585@gmail.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4 items-start group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 24 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[var(--color-text-main)] mb-1",
											children: "Call Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[var(--color-text-main)] opacity-70 text-sm",
											children: "+91 92743 50728"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4 items-start group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 24 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[var(--color-text-main)] mb-1",
											children: "Headquarters"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[var(--color-text-main)] opacity-70 text-sm",
											children: "Mavdi Main Road, Rajkot, Gujarat, India"
										})] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl overflow-hidden h-64 w-full border border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-700",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202052528!2d70.73889445!3d22.2745903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac1dbc5ff%3A0x7c7cc58a5d3f5ad2!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: true,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					width: "100%",
					className: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-[var(--color-card)] border border-[var(--color-border)] p-8 lg:p-12 rounded-3xl shadow-xl h-full",
						children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							className: "flex flex-col items-center justify-center text-center py-12 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 48 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-bold font-outfit text-[var(--color-text-main)]",
									children: "Message Received!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[var(--color-text-main)] opacity-70 max-w-sm",
									children: "Thank you for reaching out. One of our lead engineers will contact you within 24 hours."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStatus("idle"),
									className: "mt-8 text-[var(--color-electric)] font-bold tracking-widest text-sm uppercase hover:underline",
									children: "Send Another Message"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold font-outfit text-[var(--color-text-main)] mb-6",
									children: "Send us a message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-[var(--color-text-main)]",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors",
											placeholder: "John Doe"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-[var(--color-text-main)]",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors",
											placeholder: "john@company.com"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-[var(--color-text-main)]",
											children: "Phone (Optional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											value: formData.phone,
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											}),
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors",
											placeholder: "+91 90000 00000"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-[var(--color-text-main)]",
											children: "Service Needed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.service,
											onChange: (e) => setFormData({
												...formData,
												service: e.target.value
											}),
											className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors appearance-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Web Development" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "E-commerce Solution" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mobile App" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Custom Software" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "SEO & Marketing" })
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-bold text-[var(--color-text-main)]",
										children: "Message Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										rows: 5,
										value: formData.message,
										onChange: (e) => setFormData({
											...formData,
											message: e.target.value
										}),
										className: "w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors resize-none",
										placeholder: "Tell us about your project goals..."
									})]
								}),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-medium",
									children: errorMsg
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									strength: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: status === "loading",
										type: "submit",
										className: "w-full bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 text-white rounded-xl py-4 font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-[0_0_20px_var(--color-electric)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-none",
										children: [
											status === "loading" ? "Sending..." : "Send Request",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 20 })
										]
									})
								})
							]
						})
					})
				})]
			})]
		})
	});
}
//#endregion
export { ContactPage as default };
