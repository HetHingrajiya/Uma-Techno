globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/globe.svg": {
		"type": "image/svg+xml",
		"etag": "\"40b-LrojsBpGczu4Qj5tOOv19+lavsU\"",
		"mtime": "2026-07-14T18:02:02.572Z",
		"size": 1035,
		"path": "../public/globe.svg"
	},
	"/file.svg": {
		"type": "image/svg+xml",
		"etag": "\"187-+zgO7/6H1QtZc4NmTAKYKWTQ0ow\"",
		"mtime": "2026-07-14T18:02:02.560Z",
		"size": 391,
		"path": "../public/file.svg"
	},
	"/grid.svg": {
		"type": "image/svg+xml",
		"etag": "\"b3-YEuwiK++4+EGdC3PwhmgzRjD6P0\"",
		"mtime": "2026-07-14T18:02:02.586Z",
		"size": 179,
		"path": "../public/grid.svg"
	},
	"/noise.svg": {
		"type": "image/svg+xml",
		"etag": "\"14a-cHXVo35XX8uOrXS3WSaVwH7+g6A\"",
		"mtime": "2026-07-14T18:02:02.645Z",
		"size": 330,
		"path": "../public/noise.svg"
	},
	"/window.svg": {
		"type": "image/svg+xml",
		"etag": "\"181-VMSODapsqjF/4bTEGQB/2T6Ujbk\"",
		"mtime": "2026-07-14T18:02:02.656Z",
		"size": 385,
		"path": "../public/window.svg"
	},
	"/assets/briefcase-CVehZvgF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc-dl10L1uJOYt/pAGgo82q1Uyyeqs\"",
		"mtime": "2026-07-15T17:44:05.080Z",
		"size": 220,
		"path": "../public/assets/briefcase-CVehZvgF.js"
	},
	"/assets/arrow-right-BzLpDj-K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-9YPdi7hW0X80qPTPZt4Tx709jT4\"",
		"mtime": "2026-07-15T17:44:05.079Z",
		"size": 165,
		"path": "../public/assets/arrow-right-BzLpDj-K.js"
	},
	"/assets/calendar-C1e2OCLe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-FQSVjLSGMD1rtT6ezp+NLBTK8nc\"",
		"mtime": "2026-07-15T17:44:05.080Z",
		"size": 257,
		"path": "../public/assets/calendar-C1e2OCLe.js"
	},
	"/assets/chunk-KS7C4IRE-BUcWxcuz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ef7-3Anu55klXylTOBGUCdDdRlggo/k\"",
		"mtime": "2026-07-15T17:44:05.081Z",
		"size": 40695,
		"path": "../public/assets/chunk-KS7C4IRE-BUcWxcuz.js"
	},
	"/assets/chart-no-axes-column-increasing-CzxY2MyD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9-Qu3UzKIpPW8rcf+N1v4qEhEADU8\"",
		"mtime": "2026-07-15T17:44:05.081Z",
		"size": 217,
		"path": "../public/assets/chart-no-axes-column-increasing-CzxY2MyD.js"
	},
	"/assets/circle-check-big-CgkCyao0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c2-v40+sv79D2SH99x0Xn946TInPhM\"",
		"mtime": "2026-07-15T17:44:05.082Z",
		"size": 194,
		"path": "../public/assets/circle-check-big-CgkCyao0.js"
	},
	"/assets/clock-BEXinLyO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-KQ9A9rw5/gVDo5MR2lpN34+xo3s\"",
		"mtime": "2026-07-15T17:44:05.082Z",
		"size": 169,
		"path": "../public/assets/clock-BEXinLyO.js"
	},
	"/assets/eye-D_BsJewz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-QylgksMAEllTiTDhqNs/jtt5IFg\"",
		"mtime": "2026-07-15T17:44:05.083Z",
		"size": 256,
		"path": "../public/assets/eye-D_BsJewz.js"
	},
	"/assets/createLucideIcon-BB7KhEvq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"563-wDqktcWF/KdoBMEidHVe3jMjybU\"",
		"mtime": "2026-07-15T17:44:05.083Z",
		"size": 1379,
		"path": "../public/assets/createLucideIcon-BB7KhEvq.js"
	},
	"/assets/MagneticButton-DlIWUSR9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3aa-esEig56SDdzSRg4OztjWKfSxww8\"",
		"mtime": "2026-07-15T17:44:05.076Z",
		"size": 938,
		"path": "../public/assets/MagneticButton-DlIWUSR9.js"
	},
	"/assets/globe-DBUDAjJQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-pwsShLfNCdCK+b3xqBK1yDRGztI\"",
		"mtime": "2026-07-15T17:44:05.084Z",
		"size": 242,
		"path": "../public/assets/globe-DBUDAjJQ.js"
	},
	"/assets/mail-DMDIgIBa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-+8EAc2vDcWbRhMB+tGyQ4lRhbLQ\"",
		"mtime": "2026-07-15T17:44:05.084Z",
		"size": 213,
		"path": "../public/assets/mail-DMDIgIBa.js"
	},
	"/assets/map-pin-CfPGZpCw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-BBFO8LrproM1ykVLNCk7FmkA8ok\"",
		"mtime": "2026-07-15T17:44:05.085Z",
		"size": 259,
		"path": "../public/assets/map-pin-CfPGZpCw.js"
	},
	"/assets/mouse-pointer-2-zUtgJ7kG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-4qRw4GoKIAyBiLrwtiyj22AhThk\"",
		"mtime": "2026-07-15T17:44:05.086Z",
		"size": 251,
		"path": "../public/assets/mouse-pointer-2-zUtgJ7kG.js"
	},
	"/assets/megaphone-DVzpU8jG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a-SUmK37WoR8IM7bc45mFZN9YVXco\"",
		"mtime": "2026-07-15T17:44:05.085Z",
		"size": 346,
		"path": "../public/assets/megaphone-DVzpU8jG.js"
	},
	"/assets/index-tFYuaTWS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59cd8-1V2PWzMLC9LWXtfmJn6Ce9PwDD0\"",
		"mtime": "2026-07-15T17:44:05.076Z",
		"size": 367832,
		"path": "../public/assets/index-tFYuaTWS.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"13b4f8-h1WvWlbjm3YciJXWGdzUbXeoSfY\"",
		"mtime": "2026-07-14T18:02:02.524Z",
		"size": 1291512,
		"path": "../public/favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"13b4f8-h1WvWlbjm3YciJXWGdzUbXeoSfY\"",
		"mtime": "2026-07-14T18:02:02.548Z",
		"size": 1291512,
		"path": "../public/favicon.png"
	},
	"/logo-v2.png": {
		"type": "image/png",
		"etag": "\"13b4f8-h1WvWlbjm3YciJXWGdzUbXeoSfY\"",
		"mtime": "2026-07-14T18:02:02.635Z",
		"size": 1291512,
		"path": "../public/logo-v2.png"
	},
	"/icon.png": {
		"type": "image/png",
		"etag": "\"13b4f8-h1WvWlbjm3YciJXWGdzUbXeoSfY\"",
		"mtime": "2026-07-14T18:02:02.612Z",
		"size": 1291512,
		"path": "../public/icon.png"
	},
	"/assets/page-Bycl6GPQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f04-7FNvhCrXThSZ271Dbos3wXYkmk4\"",
		"mtime": "2026-07-15T17:44:05.086Z",
		"size": 3844,
		"path": "../public/assets/page-Bycl6GPQ.js"
	},
	"/assets/page-BC0MHUX0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df6-HIltskRYL1tfDwDhwVqvQNJTP00\"",
		"mtime": "2026-07-15T17:44:05.086Z",
		"size": 7670,
		"path": "../public/assets/page-BC0MHUX0.js"
	},
	"/assets/page-C--pznmN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2dce-ITfFFpQDMpFdiOCahe+wYnRaX0g\"",
		"mtime": "2026-07-15T17:44:05.088Z",
		"size": 11726,
		"path": "../public/assets/page-C--pznmN.js"
	},
	"/assets/page-C16V6N27.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2486-V4J9vg16E5lnGNuPBGDS6as8JZc\"",
		"mtime": "2026-07-15T17:44:05.088Z",
		"size": 9350,
		"path": "../public/assets/page-C16V6N27.js"
	},
	"/assets/page-CSyzOa_L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1024-ArdAdf78AmLSkbiDYJvfntGPwXI\"",
		"mtime": "2026-07-15T17:44:05.089Z",
		"size": 4132,
		"path": "../public/assets/page-CSyzOa_L.js"
	},
	"/assets/page-CjQST7p7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276d-DNnpYW/HJ6lSdNazuTXL2FDbVhE\"",
		"mtime": "2026-07-15T17:44:05.090Z",
		"size": 10093,
		"path": "../public/assets/page-CjQST7p7.js"
	},
	"/assets/page-Ddu5UiiC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1713-2ZLiHenJdFJUkKnM4/6ZhZuVW1s\"",
		"mtime": "2026-07-15T17:44:05.091Z",
		"size": 5907,
		"path": "../public/assets/page-Ddu5UiiC.js"
	},
	"/assets/page-D5bkYJDm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e29-zE8YfvDcWsjynk7puG9vQ7oxsbM\"",
		"mtime": "2026-07-15T17:44:05.090Z",
		"size": 11817,
		"path": "../public/assets/page-D5bkYJDm.js"
	},
	"/assets/page-Dmth_SoN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2048-q0OzuSDSG8lRMjZzWaeMrboVaFU\"",
		"mtime": "2026-07-15T17:44:05.091Z",
		"size": 8264,
		"path": "../public/assets/page-Dmth_SoN.js"
	},
	"/assets/page-DojBKVZn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1539-8fAx7IhChfv8iA9RxlIGSknZKso\"",
		"mtime": "2026-07-15T17:44:05.092Z",
		"size": 5433,
		"path": "../public/assets/page-DojBKVZn.js"
	},
	"/assets/page-DpljDVJc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc9-bO1XLdn2xW8ZDJO6dmGOkzJnuk4\"",
		"mtime": "2026-07-15T17:44:05.093Z",
		"size": 3529,
		"path": "../public/assets/page-DpljDVJc.js"
	},
	"/assets/page-GSx3xZAh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1921-W+kg9hz3X7jPVmMw+9Jb78MtzIw\"",
		"mtime": "2026-07-15T17:44:05.094Z",
		"size": 6433,
		"path": "../public/assets/page-GSx3xZAh.js"
	},
	"/assets/page-DwNlmS01.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92f-IkhfXKwVWO2hbaaA5eFraqmF5U4\"",
		"mtime": "2026-07-15T17:44:05.094Z",
		"size": 2351,
		"path": "../public/assets/page-DwNlmS01.js"
	},
	"/assets/page-IvKyvMZn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1e1-kNI14dxL9DqAgt5h4KghAO1UkuU\"",
		"mtime": "2026-07-15T17:44:05.095Z",
		"size": 53729,
		"path": "../public/assets/page-IvKyvMZn.js"
	},
	"/assets/page-_MRjXgaN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e71-k3h3LjSUYUH9GJd5xJIVhXit36o\"",
		"mtime": "2026-07-15T17:44:05.096Z",
		"size": 11889,
		"path": "../public/assets/page-_MRjXgaN.js"
	},
	"/assets/page-R4dCxQoF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124f-Rsuk0/+vIvopdrSbEUteQ9cuAYk\"",
		"mtime": "2026-07-15T17:44:05.096Z",
		"size": 4687,
		"path": "../public/assets/page-R4dCxQoF.js"
	},
	"/assets/panels-top-left-BeisU2nX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-q0NbJAXkTYA33wxIApiyQZaCcZI\"",
		"mtime": "2026-07-15T17:44:05.097Z",
		"size": 228,
		"path": "../public/assets/panels-top-left-BeisU2nX.js"
	},
	"/assets/phone-CNyzDgGk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-biGtH15ANMDR96zBUUU1g8B6xRY\"",
		"mtime": "2026-07-15T17:44:05.097Z",
		"size": 322,
		"path": "../public/assets/phone-CNyzDgGk.js"
	},
	"/assets/palette-CBe2jOwF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe-T8yVgjLr3o2oxCIdKWZ0V0QYM74\"",
		"mtime": "2026-07-15T17:44:05.097Z",
		"size": 510,
		"path": "../public/assets/palette-CBe2jOwF.js"
	},
	"/assets/proxy-BSfpFasl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d865-bA8yqJJmyrHeUcCiZe93cNA+kyg\"",
		"mtime": "2026-07-15T17:44:05.098Z",
		"size": 120933,
		"path": "../public/assets/proxy-BSfpFasl.js"
	},
	"/assets/Reveal-T99FS9wI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"991-9vkXxaFreKzMW9VaPLlczGY0IO4\"",
		"mtime": "2026-07-15T17:44:05.077Z",
		"size": 2449,
		"path": "../public/assets/Reveal-T99FS9wI.js"
	},
	"/assets/rocket-C96CZif_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-JCv9qni4zvffK/V4DKQq14x5z1U\"",
		"mtime": "2026-07-15T17:44:05.098Z",
		"size": 452,
		"path": "../public/assets/rocket-C96CZif_.js"
	},
	"/assets/routes-CvX_TCl3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"409-85WACfcaYdx8ddB4fKb9ZiXCDt4\"",
		"mtime": "2026-07-15T17:44:05.099Z",
		"size": 1033,
		"path": "../public/assets/routes-CvX_TCl3.js"
	},
	"/assets/search-DCkIONbC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-WMhHHVqHPf1yWB3NMi2mZbBRF8Y\"",
		"mtime": "2026-07-15T17:44:05.099Z",
		"size": 174,
		"path": "../public/assets/search-DCkIONbC.js"
	},
	"/assets/share-2-DL-iRBhQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"165-VAfjeaGZn2k9Br0ATPliEIFAMPo\"",
		"mtime": "2026-07-15T17:44:05.101Z",
		"size": 357,
		"path": "../public/assets/share-2-DL-iRBhQ.js"
	},
	"/assets/smartphone-nSetAz3g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-C53TpBRwKgrh5EQQ/FGH1kxni9o\"",
		"mtime": "2026-07-15T17:44:05.102Z",
		"size": 306,
		"path": "../public/assets/smartphone-nSetAz3g.js"
	},
	"/assets/target-CBaPxMDN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-spZh1GxKcJ9p3oI+kVLk3mrml2E\"",
		"mtime": "2026-07-15T17:44:05.102Z",
		"size": 226,
		"path": "../public/assets/target-CBaPxMDN.js"
	},
	"/assets/styles-C-ZQdeEb.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1efff-MmsWfkSiYCBOF7hj/QRiFLDfw3g\"",
		"mtime": "2026-07-15T17:44:05.107Z",
		"size": 126975,
		"path": "../public/assets/styles-C-ZQdeEb.css"
	},
	"/assets/trending-up-DBj7zOsX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-MOmOI34uftGov41CD0gNHzl5Wr0\"",
		"mtime": "2026-07-15T17:44:05.103Z",
		"size": 175,
		"path": "../public/assets/trending-up-DBj7zOsX.js"
	},
	"/assets/user-5o3D3vD6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-9hf1VU6E34ikegzzDjywszfioao\"",
		"mtime": "2026-07-15T17:44:05.103Z",
		"size": 308,
		"path": "../public/assets/user-5o3D3vD6.js"
	},
	"/assets/UmaApp-CbqCr_fL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f687-3XQoNMXeZlEpCtfsUZZGAHh361Q\"",
		"mtime": "2026-07-15T17:44:05.077Z",
		"size": 456327,
		"path": "../public/assets/UmaApp-CbqCr_fL.js"
	},
	"/assets/users-B0B9mPPg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-iq3c+Eecb4VA5804wTb8htyaRiI\"",
		"mtime": "2026-07-15T17:44:05.104Z",
		"size": 306,
		"path": "../public/assets/users-B0B9mPPg.js"
	},
	"/assets/utils-BOh24uep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d5c-cUCV5H6m1e7rAyHYYR8p+OdXdi8\"",
		"mtime": "2026-07-15T17:44:05.105Z",
		"size": 32092,
		"path": "../public/assets/utils-BOh24uep.js"
	},
	"/assets/zap-DV3XrCZi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-wMl+Ajf+lG2O8XL3wWtM3TjoKaM\"",
		"mtime": "2026-07-15T17:44:05.106Z",
		"size": 262,
		"path": "../public/assets/zap-DV3XrCZi.js"
	},
	"/assets/_-CvX_TCl3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"409-85WACfcaYdx8ddB4fKb9ZiXCDt4\"",
		"mtime": "2026-07-15T17:44:05.078Z",
		"size": 1033,
		"path": "../public/assets/_-CvX_TCl3.js"
	},
	"/assets/shield-Z0TtVaxY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-87IPwDCCz6vveP5TxE/oJyzdJUk\"",
		"mtime": "2026-07-15T17:44:05.101Z",
		"size": 272,
		"path": "../public/assets/shield-Z0TtVaxY.js"
	},
	"/images/client-1-v2.png": {
		"type": "image/png",
		"etag": "\"669ec-6dBnhQuIxB0XSfdZCqECy+YVLak\"",
		"mtime": "2026-07-14T18:02:02.729Z",
		"size": 420332,
		"path": "../public/images/client-1-v2.png"
	},
	"/images/client-2-v2.png": {
		"type": "image/png",
		"etag": "\"669ec-6dBnhQuIxB0XSfdZCqECy+YVLak\"",
		"mtime": "2026-07-14T18:02:02.745Z",
		"size": 420332,
		"path": "../public/images/client-2-v2.png"
	},
	"/images/client-3-v2.png": {
		"type": "image/png",
		"etag": "\"669ec-6dBnhQuIxB0XSfdZCqECy+YVLak\"",
		"mtime": "2026-07-14T18:02:02.761Z",
		"size": 420332,
		"path": "../public/images/client-3-v2.png"
	},
	"/images/about-agency.png": {
		"type": "image/png",
		"etag": "\"d4a6c-tBL79gvkuJMX051S38twctHIJzs\"",
		"mtime": "2026-07-14T18:02:02.676Z",
		"size": 871020,
		"path": "../public/images/about-agency.png"
	},
	"/images/ai-business.png": {
		"type": "image/png",
		"etag": "\"c00d5-1S04VrWUfIj6RaA9RiPIU2s4csM\"",
		"mtime": "2026-07-14T18:02:02.713Z",
		"size": 786645,
		"path": "../public/images/ai-business.png"
	},
	"/images/agile-process.png": {
		"type": "image/png",
		"etag": "\"dc034-OygBt8hZl+VmJsF4COJRsDahiNg\"",
		"mtime": "2026-07-14T18:02:02.694Z",
		"size": 901172,
		"path": "../public/images/agile-process.png"
	},
	"/images/fintech-dashboard.png": {
		"type": "image/png",
		"etag": "\"bad6d-tpdkEQXKxVnk4rLZx6IWePH/uOk\"",
		"mtime": "2026-07-14T18:02:02.780Z",
		"size": 765293,
		"path": "../public/images/fintech-dashboard.png"
	},
	"/images/hero-showcase.png": {
		"type": "image/png",
		"etag": "\"883cf-jCxJg1Os+fjlgJArWep9gQE2fp4\"",
		"mtime": "2026-07-14T18:02:02.818Z",
		"size": 558031,
		"path": "../public/images/hero-showcase.png"
	},
	"/images/health-booking.png": {
		"type": "image/png",
		"etag": "\"a0843-MjttNNZwQmjfKvbEdbFA+EAZHiM\"",
		"mtime": "2026-07-14T18:02:02.799Z",
		"size": 657475,
		"path": "../public/images/health-booking.png"
	},
	"/images/jewelry-ecommerce.png": {
		"type": "image/png",
		"etag": "\"a4962-4mv66LIz9uPi347uH/G876wXDDY\"",
		"mtime": "2026-07-14T18:02:02.837Z",
		"size": 674146,
		"path": "../public/images/jewelry-ecommerce.png"
	},
	"/images/marketing-trends.png": {
		"type": "image/png",
		"etag": "\"cdc8d-bQnFO3OJis771UXzQ374zfgEeqU\"",
		"mtime": "2026-07-14T18:02:02.856Z",
		"size": 842893,
		"path": "../public/images/marketing-trends.png"
	},
	"/images/seo-gujarat.png": {
		"type": "image/png",
		"etag": "\"b22e1-0PE0kwH+cy+rvAHM9AwaXwLXrC4\"",
		"mtime": "2026-07-14T18:02:02.875Z",
		"size": 729825,
		"path": "../public/images/seo-gujarat.png"
	},
	"/images/website-cost.png": {
		"type": "image/png",
		"etag": "\"a9bc5-M5GoXHPHyRPWABCFU3EXApWl+kQ\"",
		"mtime": "2026-07-14T18:02:02.911Z",
		"size": 695237,
		"path": "../public/images/website-cost.png"
	},
	"/images/web-dev-rajkot.png": {
		"type": "image/png",
		"etag": "\"d6b07-cL55mrCr4CtGS48X9MpMS+tsHQQ\"",
		"mtime": "2026-07-14T18:02:02.892Z",
		"size": 879367,
		"path": "../public/images/web-dev-rajkot.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_N5c_0Q = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_N5c_0Q
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
