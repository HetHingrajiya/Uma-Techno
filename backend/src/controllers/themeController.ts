import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTheme = async (req: Request, res: Response): Promise<void> => {
  try {
    let theme = await prisma.themeSetting.findFirst();
    if (!theme) {
      theme = await prisma.themeSetting.create({
        data: {} // Uses defaults from schema
      });
    }
    res.json(theme);
  } catch (error) {
    console.error('Error fetching theme:', error);
    res.status(500).json({ error: 'Failed to fetch theme settings' });
  }
};

export const updateTheme = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    let theme = await prisma.themeSetting.findFirst();
    
    if (theme) {
      theme = await prisma.themeSetting.update({
        where: { id: theme.id },
        data
      });
    } else {
      theme = await prisma.themeSetting.create({ data });
    }
    
    res.json(theme);
  } catch (error) {
    console.error('Error updating theme:', error);
    res.status(500).json({ error: 'Failed to update theme settings' });
  }
};
