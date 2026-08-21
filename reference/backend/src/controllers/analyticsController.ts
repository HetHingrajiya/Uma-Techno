import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const trackVisit = async (req: Request, res: Response) => {
  try {
    const { path } = req.body;
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'];

    // Don't track administrative or internal paths if needed
    if (path?.startsWith('/api') || path?.includes('admin')) {
      return res.status(200).json({ success: true, message: 'Internal path skipped' });
    }

    await prisma.visit.create({
      data: {
        path: path || '/',
        ip: ip || 'unknown',
        userAgent: userAgent || 'unknown'
      }
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('CRITICAL: Analytics Tracking Failed:', error);
    res.status(500).json({ success: false, error: 'Tracking failed' });
  }
};
