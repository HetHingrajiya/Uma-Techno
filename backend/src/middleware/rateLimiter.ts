import { Request, Response, NextFunction } from 'express';

const rates = new Map<string, { count: number, lastReset: number }>();
const LIMIT = 100; // 100 requests
const WINDOW = 15 * 60 * 1000; // 15 minutes

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const userData = rates.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > WINDOW) {
    userData.count = 1;
    userData.lastReset = now;
  } else {
    userData.count++;
  }

  rates.set(ip, userData);

  if (userData.count > LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later."
    });
  }

  next();
};
