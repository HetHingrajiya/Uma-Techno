import { Router } from 'express';
import { uploadImage, clearCache } from '../controllers/systemController';

const router = Router();

router.post('/upload', uploadImage);
router.post('/clear-cache', clearCache);

export default router;
