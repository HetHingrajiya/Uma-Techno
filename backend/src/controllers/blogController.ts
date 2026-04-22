import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const BlogSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(5),
  content: z.string().min(50),
  excerpt: z.string().min(10),
  image: z.string().optional(),
  author: z.string(),
  categoryId: z.string(),
  tags: z.array(z.string()).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  published: z.boolean().default(false),
});

export const createBlog = async (req: Request, res: Response) => {
  try {
    const validatedData = BlogSchema.parse(req.body);
    const blog = await prisma.blog.create({
      data: validatedData,
    });
    return res.status(201).json({ success: true, data: blog });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: req.query.published === 'true' ? { published: true } : {},
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: req.params.slug },
      include: { category: true },
    });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    return res.status(200).json({ success: true, data: blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// Add update and delete as needed
