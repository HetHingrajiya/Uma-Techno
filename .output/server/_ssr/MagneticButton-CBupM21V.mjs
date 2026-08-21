import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MagneticButton-CBupM21V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MagneticButton = ({ children, className = "", intensity = .2, ...props }) => {
	const ref = (0, import_react.useRef)(null);
	const [position, setPosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const handleMouse = (e) => {
		const { clientX, clientY } = e;
		if (!ref.current) return;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({
			x: middleX * intensity,
			y: middleY * intensity
		});
	};
	const reset = () => {
		setPosition({
			x: 0,
			y: 0
		});
	};
	const { x, y } = position;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		ref,
		onMouseMove: handleMouse,
		onMouseLeave: reset,
		animate: {
			x,
			y
		},
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 15,
			mass: .1
		},
		className: `btn-premium btn-premium-glow relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-background ${className}`,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 flex items-center gap-2",
			children
		})
	});
};
//#endregion
export { MagneticButton as t };
