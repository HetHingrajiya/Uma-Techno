import { Router } from 'express';
import { 
  getTheme, 
  updateTheme, 
  getPalettes, 
  createPalette, 
  setActivePalette, 
  deletePalette,
  updatePalette
} from '../controllers/themeController';

const router = Router();

/**
 * Global Theme Settings:
 * Handles the persistent root configuration including branding assets and mode.
 */
router.get('/', getTheme);
router.put('/', updateTheme);

/**
 * Palette Management:
 * Handles CRUD operations and activation logic for curated color sets.
 */
router.get('/palettes', getPalettes);
router.post('/palettes', createPalette);
router.put('/palettes/:id', updatePalette);
router.put('/palettes/:id/activate', setActivePalette);
router.delete('/palettes/:id', deletePalette);

export default router;
