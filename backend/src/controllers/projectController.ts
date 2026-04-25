import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const ProjectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  clientName: z.string().optional(),
  category: z.string().min(1),
  description: z.string().min(1),
  content: z.string(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  result: z.string().optional(),
  techStack: z.array(z.string()).default([]),
  liveUrl: z.string().optional(),
  featuredImage: z.string().optional(),
  gallery: z.array(z.string()).default([]),
  published: z.boolean().default(true),
});

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch projects' });
  }
};

export const getProjectBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const project = await prisma.project.findUnique({
      where: { slug }
    });
    if (!project) return res.status(404).json({ success: false, message: 'Not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch project' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const data = ProjectSchema.parse(req.body);
    const existing = await prisma.project.findUnique({ where: { slug: data.slug } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Slug already exists' });
    }
    const project = await prisma.project.create({ data });
    res.status(201).json({ success: true, data: project });
  } catch (error: any) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to create project' });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = ProjectSchema.partial().parse(req.body);
    const project = await prisma.project.update({
      where: { id },
      data
    });
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to update project' });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({ where: { id } });
    res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete project' });
  }
};
