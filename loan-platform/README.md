# Fincera – Smart Lending Platform

A modern, mobile-first fintech loan platform built with **React + TypeScript + Tailwind CSS v4 + Vite**.

## ✨ Features

- **Splash Screen** – Animated logo with auto-redirect to Login
- **Login Page** – Email & mobile validation within a sleek two-panel layout
- **Home Page** – Hero banner, loan products, services, testimonials, and dynamic CTAs
- **Personal & Business Loans** – Dedicated product pages highlighting benefits, eligibility, required documents, and interactive FAQ accordions
- **Credit Tracker** – Interactive SVG score gauge, refresh animations, personalized improvement tips, dynamic product recommendations, and custom analytics visuals
- **Partners** – Tabbed lending, banking, and digital partner directories
- **About Us** – Key statistics, mission/vision/values, and team overview
- **Contact** – Interactive contact form with comprehensive validation and success states
- **Privacy Policy & Terms** – Static, sectioned content ensuring transparency and compliance
- **Mobile-Optimized Navigation** – Fully responsive headers, seamless hamburger menus, and properly aligned notification icons for flawless mobile usability

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^19 | Core UI Library |
| TypeScript | ~6.0 | Static Typing |
| React Router DOM | ^7 | Client-side Routing |
| Tailwind CSS | ^4 | Utility-first Styling & Theming |
| Axios | ^1 | API Client |
| Lucide React | ^1 | Vector Iconography |
| Vite | ^8 | Fast Build Tool & Dev Server |

## 📁 Folder Structure

```
loan-platform/
├── public/                # Static assets (custom logos, hero images)
├── src/
│   ├── assets/            # App-specific SVGs and images
│   ├── components/
│   │   └── common/        # Shared components (Header, Footer)
│   ├── data/              # Mocked datasets (loans, partners, etc.)
│   ├── layouts/           # Main application layouts
│   ├── pages/             # Distinct route views (Home, Login, Splash, etc.)
│   ├── routes/            # App routing logic
│   ├── services/          # API config (Axios interceptors)
│   ├── types/             # TypeScript interfaces
│   ├── App.tsx            # Main application wrapper
│   ├── main.tsx           # React DOM entry point
│   └── index.css          # Global styles & Tailwind directives
├── PROJECT_OVERVIEW.md    # Detailed architecture & business overview
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

```bash
# Navigate to project
cd loan-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

Fincera employs a meticulous design system defined via CSS variables for immediate consistency:
- **Primary:** `#0F4C81` (Deep Blue)
- **Secondary:** `#1FA971` (Emerald Green)
- **Accent:** `#F5A623` (Gold)
- **Background:** `#F8FAFC` (Light Slate)
- **Font:** Poppins (Google Fonts)

*Recent Updates:* Upgraded the platform logo across the Header, Footer, Splash, and Login pages to feature a custom brand icon, ensuring pixel-perfect layout integrity on mobile devices.

## 🔗 Routes

| Path | Page |
|------|------|
| `/` | Splash |
| `/login` | Login |
| `/home` | Home |
| `/personal-loan` | Personal Loan |
| `/business-loan` | Business Loan |
| `/credit-tracker` | Credit Tracker |
| `/partners` | Partners |
| `/about` | About Us |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |

## 🔌 Future API Integration

The `src/services/api.ts` file contains a pre-configured Axios instance featuring:
- Auth token interceptors
- Global error handling
- Stubbed endpoints for core features

Set `VITE_API_BASE_URL` in `.env` to connect to your backend microservices.

---
*For a deeper dive into the technical architecture and business goals, see [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md).*
