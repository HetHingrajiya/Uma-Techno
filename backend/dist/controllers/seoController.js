"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSEO = exports.createOrUpdateSEO = exports.getSEOByPath = exports.getSEOPages = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const SEOSchema = zod_1.z.object({
    pagePath: zod_1.z.string().min(1),
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    keywords: zod_1.z.array(zod_1.z.string()).optional(),
    ogImage: zod_1.z.string().optional(),
});
const getSEOPages = async (req, res) => {
    try {
        const pages = await prisma.sEOPage.findMany({
            orderBy: { pagePath: 'asc' }
        });
        res.status(200).json(pages);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch SEO pages' });
    }
};
exports.getSEOPages = getSEOPages;
const getSEOByPath = async (req, res) => {
    try {
        const { pagePath } = req.query;
        if (!pagePath || typeof pagePath !== 'string') {
            return res.status(400).json({ success: false, message: 'Path is required' });
        }
        const page = await prisma.sEOPage.findUnique({
            where: { pagePath }
        });
        if (!page)
            return res.status(404).json({ success: false, message: 'Not found' });
        res.status(200).json(page);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch SEO page' });
    }
};
exports.getSEOByPath = getSEOByPath;
const createOrUpdateSEO = async (req, res) => {
    try {
        const data = SEOSchema.parse(req.body);
        const seo = await prisma.sEOPage.upsert({
            where: { pagePath: data.pagePath },
            update: data,
            create: data,
        });
        res.status(200).json({ success: true, data: seo });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError)
            return res.status(400).json({ success: false, errors: error.errors });
        res.status(500).json({ success: false, message: 'Failed to save SEO metadata' });
    }
};
exports.createOrUpdateSEO = createOrUpdateSEO;
const deleteSEO = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.sEOPage.delete({ where: { id } });
        res.status(200).json({ success: true, message: 'SEO metadata deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete SEO metadata' });
    }
};
exports.deleteSEO = deleteSEO;
