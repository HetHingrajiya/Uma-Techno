import { Router } from 'express';
import { trackVisit } from '../controllers/analyticsController';

const router = Router();

router.post('/track', trackVisit);

export default router;
