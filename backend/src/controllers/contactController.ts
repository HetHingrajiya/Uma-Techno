import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const submitContact = async (req: Request, res: Response) => {
  try {
    const validatedData = ContactSchema.parse(req.body);
    
    const contact = await prisma.contact.create({
      data: validatedData,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been received. We will get back to you soon!",
      data: contact
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error("Contact submission error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
