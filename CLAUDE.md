# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 restaurant website for "Le Patio – Montauban" using the App Router pattern with TypeScript and Tailwind CSS v4.

### Key Dependencies
- **Next.js 15** with React 19
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Hook Form + Zod** for form validation
- **Lucide React** for icons

### Project Structure
- `/src/app/` - App Router pages and API routes
- `/src/app/components/` - Shared React components (Hero, Navbar)
- `/src/data/` - Static data (menu items)
- `/public/` - Static assets including restaurant images

### Pages
- `/` - Homepage with hero section and features
- `/menu` - Menu display page
- `/reservation` - Reservation form with validation
- `/contact` - Contact information page
- `/api/reserve` - API endpoint for reservation submissions (currently logs to console)

### Styling
- Uses Tailwind CSS v4 with custom container classes
- Global styles in `src/app/globals.css`
- Custom CSS variables for container width (1200px)
- French language content throughout

### Form Handling
Reservation form uses React Hook Form with Zod validation schema requiring:
- Date, time, number of guests (1-12)
- Name, email, phone
- Optional notes

### Data
Menu items are defined in `src/data/menu.ts` with TypeScript interface for MenuItem containing id, title, description, price, and category.

### API
The reservation API endpoint at `/api/reserve` currently only logs requests and returns success - database integration is marked as TODO.