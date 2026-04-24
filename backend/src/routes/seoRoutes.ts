import { Router } from 'express';
import { getSEOPages, getSEOByPath, createOrUpdateSEO, deleteSEO } from '../controllers/seoController';

const router = Router();

router.get('/', getSEOPages);
router.get('/path', getSEOByPath);
router.post('/', createOrUpdateSEO);
router.delete('/:id', deleteSEO);

export default router;
