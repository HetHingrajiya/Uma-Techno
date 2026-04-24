import { Router } from 'express';
import { getTheme, updateTheme } from '../controllers/themeController';

const router = Router();

router.get('/', getTheme);
router.put('/', updateTheme);

export default router;
