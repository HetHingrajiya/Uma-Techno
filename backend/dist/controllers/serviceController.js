"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceBySlug = exports.getServices = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const ServiceSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    slug: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    content: zod_1.z.string(),
    icon: zod_1.z.string().optional(),
    features: zod_1.z.array(zod_1.z.string()).default([]),
    benefits: zod_1.z.array(zod_1.z.string()).default([]),
    published: zod_1.z.boolean().default(true),
});
const getServices = async (req, res) => {
    try {
        const services = await prisma.service.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(services);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch services' });
    }
};
exports.getServices = getServices;
const getServiceBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const service = await prisma.service.findUnique({
            where: { slug }
        });
        if (!service)
            return res.status(404).json({ success: false, message: 'Not found' });
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch service' });
    }
};
exports.getServiceBySlug = getServiceBySlug;
const createService = async (req, res) => {
    try {
        const data = ServiceSchema.parse(req.body);
        const existing = await prisma.service.findUnique({ where: { slug: data.slug } });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Slug already exists' });
        }
        const service = await prisma.service.create({ data });
        res.status(201).json({ success: true, data: service });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError)
            return res.status(400).json({ success: false, errors: error.errors });
        res.status(500).json({ success: false, message: 'Failed to create service' });
    }
};
exports.createService = createService;
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const data = ServiceSchema.partial().parse(req.body);
        const service = await prisma.service.update({
            where: { id },
            data
        });
        res.status(200).json({ success: true, data: service });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError)
            return res.status(400).json({ success: false, errors: error.errors });
        res.status(500).json({ success: false, message: 'Failed to update service' });
    }
};
exports.updateService = updateService;
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.service.delete({ where: { id } });
        res.status(200).json({ success: true, message: 'Service deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete service' });
    }
};
exports.deleteService = deleteService;
