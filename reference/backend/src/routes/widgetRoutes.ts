import { Router } from 'express';
import { getWidgets, updateWidget, reorderWidgets } from '../controllers/widgetController';

const router = Router();

router.get('/', getWidgets);
router.put('/reorder', reorderWidgets);
router.put('/:id', updateWidget);

export default router;
