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
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
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
        { name: "Navy Corporate", primaryColor: "#0F172A", secondaryColor: "#1E293B", accentColor: "#3B82F6", backgroundColor: "#F1F5F9", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#CBD5E1", category: "Professional" },
        { name: "Sky Digital", primaryColor: "#0EA5E9", secondaryColor: "#0284C7", accentColor: "#7DD3FC", backgroundColor: "#F8FAFC", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#E0F2FE", category: "Professional" },
        { name: "Midnight Gold", primaryColor: "#D4AF37", secondaryColor: "#B8860B", accentColor: "#FFD700", backgroundColor: "#020617", textColor: "#F8FAFC", cardColor: "#0F172A", borderColor: "#1E293B", headerColor: "#020617", footerColor: "#020617", category: "Dark / OLED" },
        { name: "Onyx Premium", primaryColor: "#D4AF37", secondaryColor: "#B8860B", accentColor: "#FFD700", backgroundColor: "#0F172A", textColor: "#F8FAFC", cardColor: "#1E293B", borderColor: "#334155", headerColor: "#0F172A", footerColor: "#0F172A", category: "Dark / OLED" },
        { name: "Cyber Neon", primaryColor: "#06B6D4", secondaryColor: "#0891B2", accentColor: "#FF00FF", backgroundColor: "#000000", textColor: "#F8FAFC", cardColor: "#0A0A0A", borderColor: "#1A1A1A", headerColor: "#000000", footerColor: "#000000", category: "Dark / OLED" },
        { name: "Deep Amethyst", primaryColor: "#8B5CF6", secondaryColor: "#7C3AED", accentColor: "#C084FC", backgroundColor: "#0B0117", textColor: "#F5F3FF", cardColor: "#160D26", borderColor: "#2D1B4E", headerColor: "#0B0117", footerColor: "#0B0117", category: "Dark / OLED" },
        { name: "Electric Purple", primaryColor: "#8B5CF6", secondaryColor: "#7C3AED", accentColor: "#C084FC", backgroundColor: "#FDF4FF", textColor: "#2E1065", cardColor: "#FFFFFF", borderColor: "#F5D0FE", headerColor: "#FFFFFF", footerColor: "#2E1065", category: "Startup" },
        { name: "Modern Teal", primaryColor: "#14B8A6", secondaryColor: "#0D9488", accentColor: "#5EEAD4", backgroundColor: "#F0FDFA", textColor: "#134E4A", cardColor: "#FFFFFF", borderColor: "#CCFBF1", headerColor: "#FFFFFF", footerColor: "#134E4A", category: "Startup" },
        { name: "Mint Growth", primaryColor: "#10B981", secondaryColor: "#059669", accentColor: "#6EE7B7", backgroundColor: "#F0FDF4", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#DCFCE7", headerColor: "#FFFFFF", footerColor: "#064E3B", category: "Nature" },
        { name: "Forest Deep", primaryColor: "#065F46", secondaryColor: "#064E3B", accentColor: "#A7F3D0", backgroundColor: "#F9FAFB", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#E5E7EB", headerColor: "#FFFFFF", footerColor: "#064E3B", category: "Nature" },
        { name: "Sunset Energy", primaryColor: "#F59E0B", secondaryColor: "#D97706", accentColor: "#FCD34D", backgroundColor: "#FFFBEB", textColor: "#78350F", cardColor: "#FFFFFF", borderColor: "#FEF3C7", headerColor: "#FFFFFF", footerColor: "#78350F", category: "Premium" },
        { name: "Rose Elegant", primaryColor: "#E11D48", secondaryColor: "#BE123C", accentColor: "#FDA4AF", backgroundColor: "#FFF1F2", textColor: "#4C0519", cardColor: "#FFFFFF", borderColor: "#FFE4E6", headerColor: "#FFFFFF", footerColor: "#4C0519", category: "Elegant" }
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
    const id = req.params.id as string;
    
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
      borderColor: activePalette.borderColor,
      headerColor: activePalette.headerColor,
      footerColor: activePalette.footerColor
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
    // Ensure id is not passed if it's a new palette from custom builder
    const { id, ...paletteData } = data;
    const palette = await prisma.themePalette.create({ 
      data: paletteData 
    });
    res.json(palette);
  } catch (error: any) {
    console.error('Palette creation error:', error);
    res.status(500).json({ error: error.message || 'Failed to create palette' });
  }
};

export const updatePalette = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const data = req.body;
    const palette = await prisma.themePalette.update({
      where: { id },
      data
    });
    res.json(palette);
  } catch (error: any) {
    console.error('Palette update error:', error);
    res.status(500).json({ error: error.message || 'Failed to update palette' });
  }
};

export const deletePalette = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.themePalette.delete({ where: { id } });
    res.json({ message: 'Palette deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete palette' });
  }
};
