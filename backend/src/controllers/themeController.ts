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

// --- Palette Management ---

export const getPalettes = async (req: Request, res: Response) => {
  try {
    let palettes = await prisma.themePalette.findMany({
      orderBy: { createdAt: 'desc' }
    });

    if (palettes.length === 0) {
      // Seed default palettes
      const defaultPalettes = [
        { name: "Cyan Professional", primaryColor: "#06B6D4", secondaryColor: "#0891B2", accentColor: "#22D3EE", backgroundColor: "#F8FAFC", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#E2E8F0", category: "Professional", isDefault: true, isActive: true },
        { name: "Midnight Gold", primaryColor: "#D4AF37", secondaryColor: "#B8860B", accentColor: "#FFD700", backgroundColor: "#0F172A", textColor: "#F8FAFC", cardColor: "#1E293B", borderColor: "#334155", category: "Premium" },
        { name: "Electric Purple", primaryColor: "#8B5CF6", secondaryColor: "#7C3AED", accentColor: "#C084FC", backgroundColor: "#FDF4FF", textColor: "#2E1065", cardColor: "#FFFFFF", borderColor: "#F5D0FE", category: "Startup" },
        { name: "Mint Growth", primaryColor: "#10B981", secondaryColor: "#059669", accentColor: "#6EE7B7", backgroundColor: "#F0FDF4", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#DCFCE7", category: "Nature" }
      ];
      
      for (const p of defaultPalettes) {
        await prisma.themePalette.create({ data: p });
      }
      
      palettes = await prisma.themePalette.findMany({
        orderBy: { createdAt: 'desc' }
      });
    }

    res.json(palettes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch palettes' });
  }
};

export const setActivePalette = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Deactivate all others
    await prisma.themePalette.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });
    
    // Activate selected
    const activePalette = await prisma.themePalette.update({
      where: { id },
      data: { isActive: true }
    });
    
    // Sync with ThemeSetting for backward compatibility and direct use
    let theme = await prisma.themeSetting.findFirst();
    const themeData = {
      primaryColor: activePalette.primaryColor,
      secondaryColor: activePalette.secondaryColor,
      accentColor: activePalette.accentColor,
      backgroundColor: activePalette.backgroundColor,
      cardColor: activePalette.cardColor,
      textColor: activePalette.textColor,
      borderColor: activePalette.borderColor
    };

    if (theme) {
      await prisma.themeSetting.update({
        where: { id: theme.id },
        data: themeData
      });
    } else {
      await prisma.themeSetting.create({ data: themeData });
    }
    
    res.json(activePalette);
  } catch (error) {
    res.status(500).json({ error: 'Failed to set active palette' });
  }
};

export const createPalette = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const palette = await prisma.themePalette.create({ data });
    res.json(palette);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create palette' });
  }
};

export const deletePalette = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.themePalette.delete({ where: { id } });
    res.json({ message: 'Palette deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete palette' });
  }
};
