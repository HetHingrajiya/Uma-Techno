"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { errorHandler } from './middleware/errorHandler';
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const themeRoutes_1 = __importDefault(require("./routes/themeRoutes"));
const widgetRoutes_1 = __importDefault(require("./routes/widgetRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const seoRoutes_1 = __importDefault(require("./routes/seoRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Root Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Uma Techno API",
        version: "1.0.0",
        status: "Running"
    });
});
// Routes
app.use('/api/v1/contacts', contactRoutes_1.default);
app.use('/api/v1/auth', authRoutes_1.default);
app.use('/api/v1/theme', themeRoutes_1.default);
app.use('/api/v1/widgets', widgetRoutes_1.default);
app.use('/api/v1/services', serviceRoutes_1.default);
app.use('/api/v1/projects', projectRoutes_1.default);
app.use('/api/v1/seo', seoRoutes_1.default);
// Error Handling
// app.use(errorHandler);
exports.default = app;
