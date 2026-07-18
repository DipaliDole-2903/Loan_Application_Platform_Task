# Fincera – Smart Lending Platform

A modern, mobile-first fintech loan platform built with **React + TypeScript + Tailwind CSS v4 + Vite**.

## ✨ Features

- **Splash Screen** – Animated logo with auto-redirect to Login
- **Login Page** – Email + mobile validation with two-panel layout
- **Home Page** – Hero banner, loan products, services, testimonials, CTA
- **Personal Loan** – Benefits, eligibility, documents, FAQ accordion, Apply CTA
- **Business Loan** – Business-themed layout with same sections
- **Credit Tracker** – SVG score gauge, refresh animation, improvement tips, product modal
- **Partners** – Tabbed lending/banking/digital partner cards
- **About Us** – Stats, mission/vision/values, team
- **Contact** – Contact form with validation + success state
- **Privacy Policy** – Static sectioned content
- **Terms & Conditions** – Static sectioned content

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | ^19 |
| TypeScript | ~6.0 |
| React Router DOM | ^7 |
| Tailwind CSS | ^4 |
| Axios | ^1 |
| Lucide React | ^1 |
| Vite | ^8 |

## 📁 Folder Structure

```
loan-platform/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── common/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   ├── loans.ts
│   │   └── partners.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Splash.tsx
│   │   ├── Login.tsx
│   │   ├── Home.tsx
│   │   ├── PersonalLoan.tsx
│   │   ├── BusinessLoan.tsx
│   │   ├── CreditTracker.tsx
│   │   ├── Partners.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   └── Terms.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
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

| Token | Value |
|-------|-------|
| Primary | `#0F4C81` (Deep Blue) |
| Secondary | `#1FA971` (Emerald Green) |
| Accent | `#F5A623` (Gold) |
| Background | `#F8FAFC` |
| Font | Poppins (Google Fonts) |

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

The `src/services/api.ts` file contains a pre-configured Axios instance with:
- Auth token interceptor
- Global error handling
- Stub endpoints for all features

Set `VITE_API_BASE_URL` in `.env` to point to your backend.
