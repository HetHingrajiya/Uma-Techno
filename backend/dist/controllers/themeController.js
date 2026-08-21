"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTheme = exports.getTheme = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTheme = async (req, res) => {
    try {
        let theme = await prisma.themeSetting.findFirst();
        if (!theme) {
            theme = await prisma.themeSetting.create({
                data: {} // Uses defaults from schema
            });
        }
        res.json(theme);
    }
    catch (error) {
        console.error('Error fetching theme:', error);
        res.status(500).json({ error: 'Failed to fetch theme settings' });
    }
};
exports.getTheme = getTheme;
const updateTheme = async (req, res) => {
    try {
        const data = req.body;
        let theme = await prisma.themeSetting.findFirst();
        if (theme) {
            theme = await prisma.themeSetting.update({
                where: { id: theme.id },
                data
            });
        }
        else {
            theme = await prisma.themeSetting.create({ data });
        }
        res.json(theme);
    }
    catch (error) {
        console.error('Error updating theme:', error);
        res.status(500).json({ error: 'Failed to update theme settings' });
    }
};
exports.updateTheme = updateTheme;
