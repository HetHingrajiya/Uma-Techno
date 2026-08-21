"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContacts = exports.submitContact = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const ContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name is too short"),
    email: zod_1.z.string().email("Invalid email address"),
    phone: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
    message: zod_1.z.string().min(10, "Message must be at least 10 characters"),
});
const submitContact = async (req, res) => {
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
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ success: false, errors: error.errors });
        }
        console.error("Contact submission error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.submitContact = submitContact;
const getContacts = async (req, res) => {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return res.status(200).json({ success: true, data: contacts });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.getContacts = getContacts;
