# Phase Arts — Signage Manufacturing Website

A modern, responsive website for **Phase Arts Signage Manufacturing Company**, showcasing signage solutions, manufacturing capabilities, completed projects, and customer inquiry options.

The website is designed to establish a professional online presence, present the company's product portfolio, and make it easier for customers, architects, contractors, and businesses to explore signage solutions.

## Overview

Phase Arts specializes in signage manufacturing and related solutions, including 3D letters, LED signage, stainless steel letters, acrylic signage, ACP signage, and custom branding requirements.

This website provides a central platform to explore the company's services, view project showcases, learn about the business, and submit inquiries.

## Features

- **Responsive Design** — Optimized layouts for desktop, tablet, and mobile devices.
- **Home Page** — Company introduction, key offerings, and prominent inquiry actions.
- **About Us** — Company information and manufacturing capabilities.
- **Products & Services** — Overview of signage products and available solutions.
- **Projects Gallery** — Visual showcase of signage projects and installations.
- **Exhibitions** — Information about exhibitions and industry participation.
- **Contact Page** — Contact information and inquiry options.
- **Quotation Requests** — Dedicated page for customers interested in signage quotations.
- **Floating Contact Actions** — Convenient access to contact and inquiry options.
- **Reusable Components** — Shared navigation, footer, and UI components for maintainability.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type-safe application development |
| Vite | Development server and production build |
| Tailwind CSS | Utility-first styling |
| PostCSS | CSS processing |
| npm | Dependency management |

## Project Structure

```text
phase-arts-website/
├── public/                     # Public static assets, if present
├── src/
│   ├── assets/
│   │   └── images/             # Website images and project visuals
│   ├── components/
│   │   ├── pages/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── ExhibitionsPage.tsx
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── ProjectsPage.tsx
│   │   │   └── QuotePage.tsx
│   │   ├── FloatingActions.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── data/
│   │   └── companyData.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Install the following tools before running the project:

- [Node.js](https://nodejs.org/) — use a version compatible with the project dependencies.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — required to clone the repository.

### 1. Clone the Repository

```bash
git clone https://github.com/Siddharthap101/PhaseartsWeb.git
cd PhaseartsWeb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

If the application uses the Gemini API, create or update a local `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Obtain an API key from [Google AI Studio](https://aistudio.google.com/).

**Security:** Never commit `.env.local`, API keys, passwords, or other secrets to GitHub. For browser-based applications, do not expose private API credentials in client-side code. Use a secure backend or server-side integration for protected API calls.

If the current website does not use Gemini, this variable is not required; follow the actual application code and dependencies.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically:

```text
http://localhost:3000
```

Open the displayed URL in your browser.

### 5. Create a Production Build

```bash
npm run build
```

The optimized production files are generated in the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

Use the local URL shown in the terminal to test the production build.

## Deployment

The project can be deployed to a static hosting provider that supports Vite applications, such as [Vercel](https://vercel.com/) or [Cloudflare Pages](https://pages.cloudflare.com/).

Typical Vite deployment settings:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

After deployment, configure a custom domain such as `phasearts.in` through the hosting provider's domain settings and follow its DNS instructions.

If the website uses client-side routing, configure the appropriate rewrite rules for direct navigation to nested pages.

## Development Workflow

The project uses Git for version control.

```bash
git pull
git add .
git commit -m "Describe your changes"
git push
```

If the repository is connected to an automatic deployment provider, pushing changes to the configured production branch can trigger a new deployment.

## Maintenance Guidelines

- Keep dependencies updated and review security advisories.
- Optimize images to maintain fast loading times.
- Test layouts on mobile and desktop before publishing changes.
- Validate all contact links and quotation inquiry flows.
- Keep API credentials and other sensitive configuration outside source control.
- Verify the production build before deploying updates.

## Project Information

**Project:** Phase Arts Website  
**Organization:** Phase Arts Signage Manufacturing Company  
**Repository:** [PhaseartsWeb](https://github.com/Siddharthap101/PhaseartsWeb)  
**Website:** [phasearts.in](https://phasearts.in/)

---

*Built to showcase Phase Arts' signage solutions, manufacturing capabilities, and project portfolio through a professional digital presence.*