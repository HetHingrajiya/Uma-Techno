import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getWidgets = async (req: Request, res: Response): Promise<void> => {
  try {
    const widgets = await prisma.widget.findMany({
      orderBy: { order: 'asc' }
    });
    res.json(widgets);
  } catch (error) {
    console.error('Error fetching widgets:', error);
    res.status(500).json({ error: 'Failed to fetch widgets' });
  }
};

export const updateWidget = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const data = req.body;
    const widget = await prisma.widget.update({
      where: { id },
      data
    });
    res.json(widget);
  } catch (error) {
    console.error('Error updating widget:', error);
    res.status(500).json({ error: 'Failed to update widget' });
  }
};

export const reorderWidgets = async (req: Request, res: Response): Promise<void> => {
  try {
    const { widgets } = req.body; // array of { id, order }
    
    await prisma.$transaction(
      widgets.map((w: any) => prisma.widget.update({
        where: { id: w.id },
        data: { order: w.order }
      }))
    );
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error reordering widgets:', error);
    res.status(500).json({ error: 'Failed to reorder widgets' });
  }
};
