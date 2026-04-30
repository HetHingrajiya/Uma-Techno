import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { rateLimiter } from './middleware/rateLimiter';
// import { errorHandler } from './middleware/errorHandler';

import contactRoutes from './routes/contactRoutes';
import authRoutes from './routes/authRoutes';
import themeRoutes from './routes/themeRoutes';
import widgetRoutes from './routes/widgetRoutes';
import serviceRoutes from './routes/serviceRoutes';
import projectRoutes from './routes/projectRoutes';
import seoRoutes from './routes/seoRoutes';
import testimonialRoutes from './routes/testimonialRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import analyticsRoutes from './routes/analyticsRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// Health Check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Uma Techno API",
    version: "1.0.0",
    status: "Running"
  });
});

// Routes
app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/theme', themeRoutes);
app.use('/api/v1/widgets', widgetRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/seo', seoRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/analytics', analyticsRoutes);

// Error Handling
// app.use(errorHandler);

export default app;
