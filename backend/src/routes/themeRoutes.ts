import { Router } from 'express';
import { 
  getTheme, 
  updateTheme, 
  getPalettes, 
  createPalette, 
  setActivePalette, 
  deletePalette 
} from '../controllers/themeController';

const router = Router();

router.get('/', getTheme);
router.put('/', updateTheme);

// Palette routes
router.get('/palettes', getPalettes);
router.post('/palettes', createPalette);
router.put('/palettes/:id/activate', setActivePalette);
router.delete('/palettes/:id', deletePalette);

export default router;
