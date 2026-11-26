# Guilherme Oliveira Linhares — Portfolio

A personal portfolio showcasing my projects, technical skills, education and contact information.

**Live website:** https://ffreshaf.github.io

## About

This portfolio presents my background as an Informatics and Computing Engineering graduate from FEUP, along with:

- Featured and university projects
- Technical tools and technologies
- Education and professional interests
- Music and astronomy interests
- Contact details and downloadable CV

## Tech Stack

- React 19
- TypeScript
- React Router
- Vite
- CSS
- GitHub Actions
- GitHub Pages

## Pages

- `/` — Landing page
- `/projects` — Featured and academic projects
- `/about` — Background, education and interests
- `/tools` — Languages, frameworks and technologies
- `/contact` — Email, social profiles and CV

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── PageLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Tools.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css

public/
├── GuilhermeLinhares_CV.pdf
├── favicon.svg
├── icons.svg
└── photo-1.jpg
```

## Running Locally

### Requirements

- Node.js 22 or later
- npm

### Installation

```bash
git clone https://github.com/ffreshaf/ffreshaf.github.io.git
cd ffreshaf.github.io
npm ci
```

### Development

```bash
npm run dev
```

Vite will start a local development server, usually at `http://localhost:5173`.

### Build

```bash
npm run build
```

The production files will be generated in `dist/`.

### Preview the Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

The site is automatically deployed to GitHub Pages through `.github/workflows/deploy.yml`.

Every push to `main`:

1. Checks out the repository
2. Installs dependencies with `npm ci`
3. Builds the application
4. Uploads the `dist` directory
5. Deploys it through GitHub Pages

## Contact

- Email: [guilherme-linhares@sapo.pt](mailto:guilherme-linhares@sapo.pt)
- GitHub: [@ffreshaf](https://github.com/ffreshaf)
- LinkedIn: [Guilherme Linhares](https://www.linkedin.com/in/guilherme-linhares-3a06a3393/)
