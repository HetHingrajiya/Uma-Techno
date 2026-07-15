import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-7t15aEJU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var UmaApp = (0, import_react.lazy)(() => import("./UmaApp-2YXL-nmW.mjs"));
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
	fallback: null,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UmaApp, {})
});
//#endregion
export { SplitComponent as component };
