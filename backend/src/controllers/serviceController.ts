import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const ServiceSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  content: z.string(),
  icon: z.string().optional(),
  features: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  published: z.boolean().default(true),
});

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch services' });
  }
};

export const getServiceBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const service = await prisma.service.findUnique({
      where: { slug: slug as string }
    });
    if (!service) return res.status(404).json({ success: false, message: 'Not found' });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch service' });
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const data = ServiceSchema.parse(req.body);
    const existing = await prisma.service.findUnique({ where: { slug: data.slug } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Slug already exists' });
    }
    const service = await prisma.service.create({ data });
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to create service' });
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = ServiceSchema.partial().parse(req.body);
    const service = await prisma.service.update({
      where: { id: id as string },
      data
    });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to update service' });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id: id as string } });
    res.status(200).json({ success: true, message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete service' });
  }
};
