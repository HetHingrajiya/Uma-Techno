import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contactController';
// import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', submitContact);
router.get('/', getContacts); // Add authMiddleware later

export default router;
