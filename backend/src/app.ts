import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
// import { errorHandler } from './middleware/errorHandler';

import contactRoutes from './routes/contactRoutes';
import authRoutes from './routes/authRoutes';

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

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to Uma Techno API",
    version: "1.0.0",
    status: "Running"
  });
});

// Routes
app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/auth', authRoutes);

// Error Handling
// app.use(errorHandler);

export default app;
