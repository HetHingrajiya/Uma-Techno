import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const SEOSchema = z.object({
  pagePath: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
});

export const getSEOPages = async (req: Request, res: Response) => {
  try {
    const pages = await prisma.sEOPage.findMany({
      orderBy: { pagePath: 'asc' }
    });
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch SEO pages' });
  }
};

export const getSEOByPath = async (req: Request, res: Response) => {
  try {
    const { pagePath } = req.query;
    if (!pagePath || typeof pagePath !== 'string') {
      return res.status(400).json({ success: false, message: 'Path is required' });
    }
    const page = await prisma.sEOPage.findUnique({
      where: { pagePath }
    });
    if (!page) return res.status(404).json({ success: false, message: 'Not found' });
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch SEO page' });
  }
};

export const createOrUpdateSEO = async (req: Request, res: Response) => {
  try {
    const data = SEOSchema.parse(req.body);
    const seo = await prisma.sEOPage.upsert({
      where: { pagePath: data.pagePath },
      update: data,
      create: data,
    });
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to save SEO metadata' });
  }
};

export const deleteSEO = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.sEOPage.delete({ where: { id } });
    res.status(200).json({ success: true, message: 'SEO metadata deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete SEO metadata' });
  }
};
