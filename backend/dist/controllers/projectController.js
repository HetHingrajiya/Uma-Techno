"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectBySlug = exports.getProjects = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const ProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    slug: zod_1.z.string().min(1),
    clientName: zod_1.z.string().min(1),
    category: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    challenge: zod_1.z.string().optional(),
    solution: zod_1.z.string().optional(),
    result: zod_1.z.string().optional(),
    techStack: zod_1.z.array(zod_1.z.string()).default([]),
    liveUrl: zod_1.z.string().optional(),
    featuredImage: zod_1.z.string().optional(),
    gallery: zod_1.z.array(zod_1.z.string()).default([]),
    published: zod_1.z.boolean().default(true),
});
const getProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch projects' });
    }
};
exports.getProjects = getProjects;
const getProjectBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const project = await prisma.project.findUnique({
            where: { slug }
        });
        if (!project)
            return res.status(404).json({ success: false, message: 'Not found' });
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch project' });
    }
};
exports.getProjectBySlug = getProjectBySlug;
const createProject = async (req, res) => {
    try {
        const data = ProjectSchema.parse(req.body);
        const existing = await prisma.project.findUnique({ where: { slug: data.slug } });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Slug already exists' });
        }
        const project = await prisma.project.create({ data });
        res.status(201).json({ success: true, data: project });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError)
            return res.status(400).json({ success: false, errors: error.errors });
        res.status(500).json({ success: false, message: 'Failed to create project' });
    }
};
exports.createProject = createProject;
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const data = ProjectSchema.partial().parse(req.body);
        const project = await prisma.project.update({
            where: { id },
            data
        });
        res.status(200).json({ success: true, data: project });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError)
            return res.status(400).json({ success: false, errors: error.errors });
        res.status(500).json({ success: false, message: 'Failed to update project' });
    }
};
exports.updateProject = updateProject;
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.project.delete({ where: { id } });
        res.status(200).json({ success: true, message: 'Project deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete project' });
    }
};
exports.deleteProject = deleteProject;
