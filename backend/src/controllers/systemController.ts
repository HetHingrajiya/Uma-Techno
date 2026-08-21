import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { image, name, type } = req.body; // Expecting base64
    if (!image) {
       res.status(400).json({ error: 'No image data provided' });
       return;
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, 'base64');
    
    const fileName = `${name || 'upload'}-${Date.now()}.${type || 'png'}`;
    const uploadDir = path.join(process.cwd(), '..', 'frontend', 'public', 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);
    
    const url = `/uploads/${fileName}`;
    res.json({ url });
  } catch (error: any) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error.message || 'Failed to upload image' });
  }
};

export const clearCache = async (req: Request, res: Response) => {
  try {
    // In a real scenario, this would clear Redis, CDN, or Next.js cache tags
    // For now, we return success to confirm the trigger works
    res.json({ message: 'Cache cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear cache' });
  }
};
