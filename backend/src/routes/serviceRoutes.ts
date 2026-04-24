import { Router } from 'express';
import { getServices, getServiceBySlug, createService, updateService, deleteService } from '../controllers/serviceController';

const router = Router();

router.get('/', getServices);
router.get('/:slug', getServiceBySlug);
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
