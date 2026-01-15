# Quick Start Guide - Energize Your Business

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation with logo
│   ├── Hero.tsx             # Creative hero section
│   ├── Services.tsx         # Service cards grid
│   ├── About.tsx            # Company info with image
│   ├── Projects.tsx         # Portfolio slider
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with socials
public/
└── images/                  # Your images folder
```

---

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#DC2626',         // Main red
  'primary-dark': '#B91C1C',  // Hover red
}
```

### Update Content
Edit each component's text and links:
- `src/components/Hero.tsx` - Main headline
- `src/components/Services.tsx` - Services list
- `src/components/About.tsx` - Company info
- `src/components/Footer.tsx` - Links and social

### Add Your Logo
1. Place your logo in `public/images/`
2. Update the logo import in `src/components/Header.tsx`

### Replace Placeholder Images
Add images to `public/images/` and update components:
- Hero background images
- Service icons
- Project images
- Team photos

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Create optimized build
npm start           # Start production server

# Quality
npm run lint        # Run ESLint
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS colors & fonts |
| `tsconfig.json` | TypeScript settings |
| `postcss.config.js` | PostCSS plugins |
| `.eslintrc.json` | ESLint rules |

---

## 🎯 Features Implemented

✅ **Header**
- Fixed navigation
- Mobile menu
- Smooth scroll behavior
- Dynamic styling on scroll

✅ **Hero Section**
- Full-screen layout
- Mouse-tracking background
- Animated elements
- Call-to-action buttons

✅ **Services**
- 6 service cards
- Icon animations
- Responsive grid
- Scroll animations

✅ **About**
- Dark section with overlay
- Company highlights
- Placeholder image
- Professional layout

✅ **Projects**
- Interactive slider
- Project categories
- Statistics display
- Play button overlay

✅ **Contact**
- Contact information cards
- Contact form
- Email validation ready
- Glass morphism design

✅ **Footer**
- Company info
- Quick links
- Social media links
- Scroll to top button

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📝 Next Steps

1. **Add Your Logo**
   - Replace placeholder in `public/images/`
   - Update import in Header component

2. **Update Content**
   - Edit service descriptions
   - Add your company information
   - Update contact details

3. **Add Images**
   - Hero background
   - About section image
   - Project images
   - Team photos

4. **Connect Backend** (Optional)
   - Use the `backend/` folder for API
   - Connect form submissions to your database

5. **SEO Optimization**
   - Update metadata in `src/app/layout.tsx`
   - Add Open Graph tags
   - Create sitemap.xml

---

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 Tips & Best Practices

1. **Performance**
   - Images should be optimized
   - Use Next.js Image component when possible
   - Lazy load non-critical content

2. **Animations**
   - Don't overuse animations
   - Test on mobile devices
   - Consider `prefers-reduced-motion`

3. **Accessibility**
   - Use semantic HTML
   - Add alt text to images
   - Test keyboard navigation

4. **Mobile First**
   - Test on various devices
   - Use responsive classes
   - Check touch interactions

---

## 🤝 Support

For issues or questions:
- Check existing documentation
- Review component comments
- Open GitHub issues

---

**Happy Coding! 🚀**

Made with ❤️ for Energize Your Business
