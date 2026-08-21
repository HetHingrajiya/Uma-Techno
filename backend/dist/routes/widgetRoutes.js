"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const widgetController_1 = require("../controllers/widgetController");
const router = (0, express_1.Router)();
router.get('/', widgetController_1.getWidgets);
router.put('/reorder', widgetController_1.reorderWidgets);
router.put('/:id', widgetController_1.updateWidget);
exports.default = router;
