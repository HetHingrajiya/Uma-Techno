import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const TestimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  company: z.string().optional(),
  content: z.string().min(1),
  rating: z.number().min(1).max(5).default(5),
  image: z.string().optional(),
  active: z.boolean().default(true),
});

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const { all } = req.query;
    const testimonials = await prisma.testimonial.findMany({
      where: all === 'true' ? {} : { active: true },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch testimonials' });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const data = TestimonialSchema.parse(req.body);
    const testimonial = await prisma.testimonial.create({ data });
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to create testimonial' });
  }
};

export const updateTestimonial = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const data = TestimonialSchema.partial().parse(req.body);
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data
    });
    res.status(200).json({ success: true, data: testimonial });
  } catch (error) {
    if (error instanceof z.ZodError) return res.status(400).json({ success: false, errors: error.issues });
    res.status(500).json({ success: false, message: 'Failed to update testimonial' });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.testimonial.delete({ where: { id } });
    res.status(200).json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete testimonial' });
  }
};
