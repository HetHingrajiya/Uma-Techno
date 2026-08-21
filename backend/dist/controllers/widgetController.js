"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorderWidgets = exports.updateWidget = exports.getWidgets = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getWidgets = async (req, res) => {
    try {
        const widgets = await prisma.widget.findMany({
            orderBy: { order: 'asc' }
        });
        res.json(widgets);
    }
    catch (error) {
        console.error('Error fetching widgets:', error);
        res.status(500).json({ error: 'Failed to fetch widgets' });
    }
};
exports.getWidgets = getWidgets;
const updateWidget = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const widget = await prisma.widget.update({
            where: { id },
            data
        });
        res.json(widget);
    }
    catch (error) {
        console.error('Error updating widget:', error);
        res.status(500).json({ error: 'Failed to update widget' });
    }
};
exports.updateWidget = updateWidget;
const reorderWidgets = async (req, res) => {
    try {
        const { widgets } = req.body; // array of { id, order }
        await prisma.$transaction(widgets.map((w) => prisma.widget.update({
            where: { id: w.id },
            data: { order: w.order }
        })));
        res.json({ success: true });
    }
    catch (error) {
        console.error('Error reordering widgets:', error);
        res.status(500).json({ error: 'Failed to reorder widgets' });
    }
};
exports.reorderWidgets = reorderWidgets;
