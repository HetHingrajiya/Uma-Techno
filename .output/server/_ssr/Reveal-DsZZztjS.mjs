import { a as __toESM } from "../_runtime.mjs";
import { n as useAnimation, r as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-DsZZztjS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Reveal = ({ children, width = "fit-content", delay = .2, direction = "up", className = "" }) => {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const mainControls = useAnimation();
	(0, import_react.useEffect)(() => {
		if (isInView) mainControls.start("visible");
	}, [isInView, mainControls]);
	const variants = {
		hidden: {
			opacity: 0,
			y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
			x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
			filter: "blur(10px)"
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			filter: "blur(0px)"
		}
	};
	if (direction === "none") {
		variants.hidden = {
			opacity: 0,
			y: 0,
			x: 0,
			filter: "blur(10px)"
		};
		variants.visible = {
			opacity: 1,
			y: 0,
			x: 0,
			filter: "blur(0px)"
		};
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { width },
		className: `relative overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants,
			initial: "hidden",
			animate: mainControls,
			transition: {
				duration: .8,
				delay,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children
		})
	});
};
//#endregion
export { Reveal as t };
