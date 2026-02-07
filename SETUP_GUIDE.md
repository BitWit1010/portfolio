# Portfolio Website Setup Guide

## Quick Start (5 minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Visit https://nodejs.org
- Download and install the LTS version
- Verify installation: `node --version` (should show v16+)

### Step 2: Setup Project
```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## Customization Checklist

### ✅ Required Updates

1. **Hero Section** (`src/components/Hero.jsx`)
   - [ ] Update name (currently "Himanshu Singh")
   - [ ] Update GitHub URL (line 19)
   - [ ] Update LinkedIn URL (line 22)

2. **About Section** (`src/components/About.jsx`)
   - [ ] Rewrite bio in your own words
   - [ ] Keep it 3-4 concise sentences

3. **Projects Section** (`src/components/Projects.jsx`)
   - [ ] Replace with YOUR actual projects
   - [ ] Update GitHub repository links
   - [ ] Update live demo links (or use '#' as placeholder)
   - [ ] Ensure Plant Disease Detection project is included

4. **Education Section** (`src/components/Education.jsx`)
   - [ ] Update university name (line 13)
   - [ ] Update graduation years (line 14)
   - [ ] Update relevant coursework

5. **Contact Section** (`src/components/Contact.jsx`)
   - [ ] Update email address (line 17)
   - [ ] Update GitHub URL (line 24)
   - [ ] Update LinkedIn URL (line 32)

6. **Resume**
   - [ ] Add your resume PDF to `/public/resume.pdf`

### 🎨 Optional Customization

**Change Colors:**
Edit `src/App.css` variables:
```css
:root {
  --primary: #10b981;        /* Change to your preferred accent color */
  --primary-dark: #059669;   /* Darker shade for hover */
}
```

**Change Fonts:**
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your preferred fonts
3. Update the import in `src/App.css` (line 155)
4. Update CSS variables (line 14-15)

## Project Structure Explained

```
src/
├── components/          # All reusable UI components
│   ├── Navbar.*        # Fixed navigation bar
│   ├── Hero.*          # Landing section with name & CTA
│   ├── About.*         # Short bio section
│   ├── Skills.*        # Technical skills grid
│   ├── Projects.*      # Projects showcase
│   ├── ProjectCard.*   # Reusable project card
│   ├── Education.*     # Education details
│   └── Contact.*       # Contact info & footer
├── App.jsx             # Main component that combines everything
├── App.css             # Global styles & design system
├── main.jsx            # React entry point
└── index.css           # Base CSS reset
```

## Deployment Guide

### Deploy to Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts
   - Choose project name
   - Confirm settings
   - Get live URL instantly!

### Deploy to Netlify

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Visit [netlify.com](https://netlify.com)
   - Drag the `dist` folder to deploy
   - Get live URL!

3. **Or via Git** (for automatic updates)
   - Connect GitHub repository
   - Netlify auto-deploys on push

## Testing Before Deployment

### Desktop Testing
1. Run `npm run dev`
2. Test all sections scroll smoothly
3. Click all buttons and links
4. Verify hover effects work

### Mobile Testing
1. Open Chrome DevTools (F12)
2. Click device toolbar icon
3. Test on iPhone, iPad, and Android sizes
4. Check text readability
5. Ensure buttons are easily tappable

### Performance Check
1. Build for production: `npm run build`
2. Preview build: `npm run preview`
3. Check load time (should be < 2 seconds)

## Common Issues & Solutions

### Issue: `npm install` fails
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: Port 3000 already in use
**Solution:** Change port in `vite.config.js`:
```js
server: {
  port: 3001  // or any available port
}
```

### Issue: Icons not showing
**Solution:** Ensure `react-icons` is installed:
```bash
npm install react-icons
```

### Issue: Fonts not loading
**Solution:** Check your internet connection (Google Fonts load from CDN)

## Recruiter-Friendly Tips

✅ **DO:**
- Keep content concise and scannable
- Use action verbs in project descriptions
- Add quantifiable results (e.g., "92% accuracy")
- Include tech stack for each project
- Make GitHub links prominent
- Ensure mobile responsiveness

❌ **DON'T:**
- Use overly long paragraphs
- Include too many projects (3-5 is ideal)
- Use jargon without context
- Hide important info below the fold
- Use broken or placeholder links

## Performance Optimization

Before deploying, optimize your site:

1. **Add resume PDF** to `/public/resume.pdf` (keep under 2MB)

2. **Optimize images** (if you add any):
   - Use WebP format
   - Compress images
   - Keep under 200KB each

3. **Test load speed:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Aim for 90+ score

## SEO Basics

The template includes basic SEO:
- Semantic HTML
- Meta descriptions
- Proper heading hierarchy
- Alt text ready for images

To improve further:
- Add relevant keywords to meta tags
- Create unique page title
- Add Open Graph tags for social sharing

## Getting Help

If you encounter issues:

1. Check the browser console for errors (F12)
2. Read error messages carefully
3. Google the specific error
4. Check [Vite documentation](https://vitejs.dev)
5. Check [React documentation](https://react.dev)

## Next Steps After Deployment

1. Share your portfolio link on:
   - LinkedIn profile
   - GitHub profile README
   - Resume
   - Email signature

2. Keep it updated:
   - Add new projects as you build them
   - Update skills as you learn
   - Keep contact info current

3. Track visitors:
   - Add Google Analytics (optional)
   - Monitor which sections recruiters view most

---

**Congratulations!** You now have a professional portfolio ready for internships and placements. Good luck! 🚀
