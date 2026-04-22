import { Router } from 'express';
import { createBlog, getBlogs, getBlogBySlug } from '../controllers/blogController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', authMiddleware, createBlog);

export default router;
