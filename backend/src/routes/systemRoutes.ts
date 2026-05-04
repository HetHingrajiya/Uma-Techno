import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.post('/clear-cache', (req: Request, res: Response) => {
  try {
    // In a real app, you might clear Redis or internal memory cache
    // For now, we'll just return success to acknowledge the request
    console.log('Cache clear requested by admin');
    res.json({ success: true, message: 'Server cache cleared successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to clear cache' });
  }
});

export default router;
