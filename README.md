# TECHFEST 2026 // College Ambassador Program Submission
### *An Aetherial Renaissance* — Web Development Task

A premium, responsive, editorial landing page created as a student submission for the **Techfest College Ambassador Web-Development Task**.

Designed intentionally to avoid generic AI SaaS clichés (no excessive glassmorphism, no generic purple gradients, no cartoon 3D assets). Instead, the visual language embraces a bold, editorial, futuristic, minimal, and cinematic aesthetic.

---

## Disclaimer

This project is a student-submitted educational assignment for the Techfest College Ambassador Program. It is not an official publication or website of IIT Bombay.

---

## ✦ Key Visual & Technical Highlights

* **Original Visual Identity**: `#050505` near-black canvas, high-contrast white typography, muted slate metadata, and deep Techfest crimson accents (`#e50914`).
* **Aceternity Spotlight & Card Spotlight**: Dynamic cursor-following radial illumination, soft Gaussian-blur spotlight beams, and high-precision border tracking.
* **Magic UI Inspired Animated Grid**: Subtle pulsing technical grid pattern with random glowing cells and fine-grain 35mm film noise texture.
* **Editorial Typography**: Pairing *Space Grotesk*, *Syne*, and *JetBrains Mono* for brutalist yet elegant hierarchy.
* **Real-Time Functional Countdown**: High-precision JavaScript countdown targeting December 16, 2026 at the festival venue.
* **Original Campus Architecture Visual**: Original geometric perspective and architectural wireframe vector mesh representing the festival venue and Powai landscape.
* **100% Responsive**: Tailored layouts tested across Mobile (390px), Tablet (768px/1024px), and Desktop (1440px+).

---

## 🛠 Tech Stack

* **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [Motion](https://motion.dev/) (Framer Motion v14)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Google Fonts (*Space Grotesk*, *Syne*, *JetBrains Mono*, *Inter*)

---

## 📂 Project Architecture

```
techfest-landing/
├── public/
│   └── favicon.svg            # Custom Techfest geometric monogram
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AnimatedGrid.jsx   # Magic UI animated grid & film noise
│   │   │   ├── CardSpotlight.jsx  # Aceternity dynamic card hover spotlight
│   │   │   ├── CustomCursor.jsx   # Restrained desktop cursor-follow halo
│   │   │   ├── ScrollProgress.jsx # Top hairline scroll-progress indicator
│   │   │   └── Spotlight.jsx      # Aceternity angled ambient light beam
│   │   ├── LoadingScreen.jsx      # Technical boot sequence & progress bar
│   │   ├── Navbar.jsx             # Minimal blur navbar & mobile overlay
│   │   ├── Hero.jsx               # Oversized "30", spotlight, editorial title
│   │   ├── Intro.jsx              # "The future doesn't wait. It's built." manifesto
│   │   ├── Stats.jsx              # 30 Editions, 03 Days, 1,80,000+ Footfall, 300+ Events
│   │   ├── Experiences.jsx        # Compete, Build, Learn, Discover cards
│   │   ├── Competitions.jsx       # Asymmetric bento grid of competition tracks
│   │   ├── Workshops.jsx          # Accessible horizontal scrollable masterclasses
│   │   ├── Edition30.jsx          # Massive "30" legacy visual moment & timeline
│   │   ├── IITBombay.jsx          # Original architectural campus visual & coordinates
│   │   ├── Countdown.jsx          # Live JavaScript timer to Dec 16, 2026
│   │   ├── FinalCTA.jsx           # Full-width dramatic call to action & interactive trigger
│   │   ├── Footer.jsx             # Minimal editorial footer & public disclaimer
│   │   └── RegisterModal.jsx      # College Ambassador & Delegate portal
│   ├── data/
│   │   └── festivalData.js        # Centralized festival data arrays
│   ├── App.jsx                    # Root composition
│   ├── index.css                  # Tailwind v4 configuration & theme tokens
│   └── main.jsx                   # Application entry
├── index.html                     # HTML5 shell, preconnect & web fonts
├── vite.config.js                 # Vite configuration with Tailwind CSS plugin
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (version 18.0.0 or higher) is installed.

### 2. Installation
Clone the repository or navigate to the project directory:
```bash
npm install
```

### 3. Development Server
Run the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the landing page.

### 4. Build for Production
Generate optimized, minified production assets in the `dist/` directory:
```bash
npm run build
```

### 5. Preview Production Build
Locally preview the production build output:
```bash
npm run preview
```

### 6. Linting
Verify code quality and clean imports with ESLint:
```bash
npm run lint
```

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the CLI prompts. Framework preset will automatically detect Vite.

### Deploying to Netlify
1. Connect the repository in the Netlify Dashboard.
2. Set Build command to: `npm run build`
3. Set Publish directory to: `dist`

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: './'` or `base: '/<repository-name>/'` (if deploying to a subpath).
2. Run `npm run build` and publish the `dist/` directory via GitHub Actions or the `gh-pages` branch.

---

## ⚖️ Attribution & Program Information
Created for the **Techfest 2026** College Ambassador Web Development evaluation.  
Student Submission · Techfest College Ambassador Program · 2026
