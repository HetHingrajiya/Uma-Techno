import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const trackVisit = async (req: Request, res: Response) => {
  try {
    const { path } = req.body;
    const ip = req.ip || req.headers['x-forwarded-for'] as string;
    const userAgent = req.headers['user-agent'];

    await prisma.visit.create({
      data: {
        path: path || '/',
        ip: ip || 'unknown',
        userAgent: userAgent || 'unknown'
      }
    });

    res.status(200).json({ success: true });
  } catch (error) {
    // Fail silently to not disrupt user experience
    res.status(500).json({ success: false });
  }
};
