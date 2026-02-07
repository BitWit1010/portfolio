# Himanshu Singh - Portfolio Website

A clean, professional portfolio website built with React and Vite. Designed for recruiters and hiring managers with a focus on readability, fast loading, and modern UI/UX.

## Features

- ✨ Modern, minimal design with emerald accent color
- 📱 Fully responsive (mobile & desktop)
- ⚡ Fast loading with Vite
- 🎯 Recruiter-friendly layout
- 🚀 Ready for deployment on Vercel/Netlify
- ♿ Semantic HTML for better accessibility

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project files

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist/` folder.

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your Git repository for automatic deployments

## Customization Guide

### Personal Information
Update the following files with your information:

**Hero Section** (`src/components/Hero.jsx`):
- Name
- Tagline
- GitHub and LinkedIn URLs

**About Section** (`src/components/About.jsx`):
- Personal bio

**Projects Section** (`src/components/Projects.jsx`):
- Add/modify project objects in the `projects` array
- Update GitHub and demo links

**Education Section** (`src/components/Education.jsx`):
- University name
- Year range
- Relevant coursework

**Contact Section** (`src/components/Contact.jsx`):
- Email address
- GitHub and LinkedIn URLs

### Colors
To change the color scheme, edit CSS variables in `src/App.css`:

```css
:root {
  --primary: #10b981;        /* Main accent color */
  --primary-dark: #059669;   /* Hover state */
  /* ... other variables */
}
```

### Fonts
Current fonts:
- **Display**: Archivo (headings, buttons)
- **Body**: Inter (paragraphs, text)

To change fonts, update the Google Fonts import in `src/App.css` and the CSS variables.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS Modules** - Styling
- **React Icons** - Icon library
- **Google Fonts** - Typography (Archivo, Inter)

## Key Components

### Navbar
Sticky navigation with smooth scroll and scroll-triggered styling.

### Hero
Landing section with name, tagline, CTA buttons, and social links.

### ProjectCard
Reusable component for displaying project information with tech stack and links.

### Skills
Grid layout showing categorized technical skills with icons.

## Performance Optimizations

- Semantic HTML for better SEO
- Minimal dependencies
- CSS-only animations
- Optimized images (use WebP format)
- Lazy loading ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Himanshu Singh
- GitHub: [@himanshusingh](https://github.com/himanshusingh)
- LinkedIn: [himanshusingh](https://linkedin.com/in/himanshusingh)

---

**Note**: Remember to add your resume PDF as `/public/resume.pdf` for the download button to work properly.
