# Uma Techno - Project Commands Guide

This document contains all the essential commands for managing, building, and deploying the Uma Techno platform.

## 🛠️ Development Commands

### 1. Initial Setup
Install all required dependencies:
```bash
npm install
```

### 2. Start Development Server
Run the site locally with hot-reloading:
```bash
npm run dev
```

### 3. Clear Cache & Cleanup
If you see old styles or broken images, run this to reset the environment:
```bash
npm run clean
```

---

## 🏗️ Production & Deployment

### 4. Build for Production
Create an optimized, production-ready bundle:
```bash
npm run build
```

### 5. Preview Production Build
Start the project in production mode locally:
```bash
npm run start
```

---

## 🚀 How to Go Online (Deployment)

### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [Vercel.com](https://vercel.com).
3. Import your repository.
4. **IMPORTANT**: In the "Build & Development Settings", set the **Root Directory** to `frontend`.
5. Click **Deploy**. Vercel will automatically run all build commands for you.

### Option 2: Manual Server (VPS)
If you are using your own server:
1. Upload the `frontend` folder to your server.
2. Run `npm install`.
3. Run `npm run build`.
4. Use a process manager like **PM2** to keep it running:
   ```bash
   pm2 start npm --name "umatechno" -- start
   ```

---

## 📁 Project Structure
- `/src/app`: Main pages and routing.
- `/src/components`: UI elements and layouts.
- `/public`: Images, icons, and official logo.
