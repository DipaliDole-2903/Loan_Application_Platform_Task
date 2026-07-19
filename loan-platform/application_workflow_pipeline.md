# Application Workflow & Frontend Pipeline

This document provides a comprehensive overview of the frontend architecture, workflow, and pipeline for the Loan Application Platform (Fincera).

## 📂 Directory Structure Overview

The frontend is structured systematically using React + Vite + TypeScript. The application logic resides inside the `src` directory.

```
src/
├── assets/         # Static assets like images and SVGs
├── components/     # Reusable UI components
├── data/           # Mock data and constants
├── layouts/        # Page layout wrappers
├── pages/          # Individual screen components
├── routes/         # Application routing configuration
├── services/       # API interaction and external services
├── types/          # TypeScript interfaces and type definitions
├── App.tsx         # Main Application Component
├── index.css       # Global styles
├── main.tsx        # Application Entry Point
└── vite-env.d.ts   # Vite environment definitions
```

---

## 🖼️ Assets (`src/assets`)

Contains static files that are bundled with the application.
- `hero.png` (13KB) - Hero section background or image.
- `hero_woman.png` (531KB) - High-resolution hero image used on the homepage/landing pages.
- `typescript.svg` (1KB) - TypeScript logo.
- `vite.svg` (8KB) - Vite logo.

---

## 🧩 Components (`src/components/common`)

Reusable UI elements that maintain design consistency across the platform.

### Common Components
1. **`Header.tsx` (8KB)**
   - **Purpose:** Navigation bar present at the top of the application.
   - **Details:** Contains links to different sections (Home, Loans, Credit Tracker, About, Contact), authentication buttons, and responsive menu logic.

2. **`Footer.tsx` (5.8KB)**
   - **Purpose:** Persistent footer at the bottom of the application.
   - **Details:** Contains secondary navigation, social links, legal links (Privacy Policy, Terms), and company information.

---

## 🗂️ Layouts (`src/layouts`)

Structural wrappers that define how pages are presented.

1. **`MainLayout.tsx` (356 bytes)**
   - **Purpose:** Wraps the core application pages with the standard `Header` and `Footer`.
   - **Workflow:** Renders `<Header />`, followed by an `<Outlet />` for the matched route's component, and finally the `<Footer />`.

---

## 📄 Pages (`src/pages`)

The main screens of the application. Each file corresponds to a specific route.

1. **`Splash.tsx` (2.6KB)** - Initial loading/landing screen before entering the main app.
2. **`Login.tsx` (7.6KB)** - User authentication screen.
3. **`Home.tsx` (15.6KB)** - The main dashboard/landing page after entry.
4. **`PersonalLoan.tsx` (5.6KB)** - Details and application flow for Personal Loans.
5. **`BusinessLoan.tsx` (5.7KB)** - Details and application flow for Business Loans.
6. **`CreditTracker.tsx` (8.3KB)** - Interactive page for users to track their credit scores.
7. **`Partners.tsx` (3.3KB)** - Information regarding lending partners and institutional affiliations.
8. **`About.tsx` (3.9KB)** - Company background and information.
9. **`Contact.tsx` (7.2KB)** - Support and inquiry contact forms.
10. **`PrivacyPolicy.tsx` (3.3KB)** - Legal privacy documentation.
11. **`Terms.tsx` (3.8KB)** - Terms of service documentation.

---

## 🛣️ Routing (`src/routes`)

Defines the navigational paths and guards for the application.

1. **`AppRoutes.tsx` (1.5KB)**
   - **Purpose:** Manages the react-router-dom `<Routes>` configuration.
   - **Flow:**
     - `/` ➔ `<Splash />`
     - `/login` ➔ `<Login />`
     - All other main routes (e.g., `/home`, `/personal-loan`, `/credit-tracker`) are nested inside `<MainLayout />`.
     - `*` (Catch-all) ➔ Redirects to `/`.

---

## 🔌 Services (`src/services`)

Handles external communication and API integrations.

1. **`api.ts` (1.3KB)**
   - **Purpose:** Centralized Axios or fetch configurations for making HTTP requests to the backend. Includes interceptors, error handling, and endpoint definitions.

---

## 📝 Types (`src/types`)

Centralized TypeScript interfaces for strict typing across the frontend.

1. **`index.ts` (762 bytes)**
   - **`User`**: Core user properties (`id`, `name`, `email`, `mobile`).
   - **`LoanApplication`**: Tracks application state (`id`, `type`, `amount`, `tenure`, `status`, `appliedAt`).
   - **`CreditScore` & `CreditFactor`**: Types for the credit tracking module.
   - **`ContactForm` & `NavItem`**: Types for UI data structures.

---

## 💾 Data (`src/data`)

Mock data and static configurations used before backend integration.

1. **`loans.ts` (4.5KB)** - Mock data for loan products, terms, interest rates, and sample applications.
2. **`partners.ts` (1.8KB)** - Mock data for banking and lending partners displayed on the platform.

---

## 🚀 Entry Points & Configuration

1. **`App.tsx` (208 bytes)**
   - Wraps `AppRoutes` in `<BrowserRouter>` to enable routing capabilities.
2. **`main.tsx` (230 bytes)**
   - The React mounting point. Renders `<App />` into the DOM (`#root`).
3. **`index.css` (9.4KB)**
   - Global stylesheet. Likely contains CSS variables, reset rules, and base styling (e.g., typography, utility classes) used across the platform.

---

## 🔄 Application Workflow Pipeline

1. **Initialization:** The user hits the application URL. `main.tsx` mounts the React tree.
2. **Routing Entry:** `<BrowserRouter>` in `App.tsx` passes the URL to `AppRoutes.tsx`.
3. **Splash/Auth:** If visiting the root (`/`), the user sees the `<Splash />` screen. They can navigate to `/login` for authentication.
4. **Main Flow:** Upon navigating to `/home` or other core routes, the `<MainLayout />` wraps the requested page (e.g., `<PersonalLoan />`), ensuring the persistent `Header` and `Footer` are rendered.
5. **Data Interaction:** Pages like `<CreditTracker />` or `<BusinessLoan />` import types from `src/types/index.ts` and fetch necessary UI context from `src/data/` or real endpoints via `src/services/api.ts`.
6. **Component Usage:** Pages compose their UI using elements from `src/components/common/` and global styles from `index.css`.
