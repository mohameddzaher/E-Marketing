# Energize Your Business - Marketing Agency Website

A modern, high-performance marketing agency website built with Next.js, React, Tailwind CSS, and Framer Motion animations.

## Features

✨ **Modern Design**
- Responsive layout for all devices (mobile, tablet, desktop)
- Dark and light themed sections
- Beautiful glass morphism effects
- Smooth animations and transitions

🎨 **Creative Components**
- Animated hero section with interactive background
- Dynamic service cards with hover effects
- Project slider with image galleries
- Contact form with validation
- Smooth scroll navigation

⚡ **Performance**
- Next.js App Router for optimal performance
- Tailwind CSS for utility-first styling
- Image optimization
- Fast load times

🔧 **Technologies**
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **3D Graphics**: Three.js (optional)

## Project Structure

```
Energize Marketing - website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # Services showcase
│   │   ├── About.tsx         # About section
│   │   ├── Projects.tsx      # Projects/portfolio
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer
│   └── lib/                  # Utilities and helpers
├── public/
│   └── images/              # Image assets
├── frontend/                # Frontend folder structure
├── backend/                 # Backend folder structure
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js

```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Sections

### 1. **Header**
- Fixed navigation with smooth scroll
- Logo and brand identity
- Responsive mobile menu
- Dynamic styling on scroll

### 2. **Hero Section**
- Full-screen creative design
- Mouse-tracking animated background
- Call-to-action buttons
- Scroll indicator with animation

### 3. **Services**
- 6 comprehensive service cards
- Icon animations on hover
- Responsive grid layout
- Smooth scroll animations

### 4. **About**
- Dark section with overlay background
- Company vision and mission
- Key highlights with checkmarks
- Placeholder for showcase image

### 5. **Projects**
- Interactive project slider
- Project categories and stats
- Hover effects with play button
- Navigation controls

### 6. **Contact**
- Contact information cards
- Professional contact form
- Form validation
- Email integration ready

### 7. **Footer**
- Company information
- Quick links
- Social media connections
- Scroll to top button

## Customization

### Colors
Edit `tailwind.config.ts` to change color scheme:
```typescript
colors: {
  primary: '#DC2626',      // Red
  'primary-dark': '#B91C1C',
  'dark-bg': '#0A0A0A',
  'dark-gray': '#1A1A1A',
}
```

### Fonts
Fonts are configured in `src/app/layout.tsx`:
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Images
Add your logo and project images to `public/images/` folder.

## Performance Optimizations

- Image lazy loading
- CSS-in-JS optimization
- Font optimization with Next.js
- Automatic code splitting
- Minification and compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Adding Backend

The `backend/` folder is ready for API development. You can add:
- Express.js server
- Database integration
- Authentication
- Email services

## Environment Variables

Create a `.env.local` file for environment-specific variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

### Other Platforms
- **Netlify**: Drag & drop or Git integration
- **AWS**: Use Amplify or EC2
- **DigitalOcean**: Deploy as Node.js app

## License

This project is licensed under the MIT License.

## Contact & Support

- Email: info@energize.business
- Website: [Coming Soon]
- Social Media: [@energizebusiness](https://twitter.com)

## Changelog

### v1.0.0 (Initial Release)
- Complete website structure
- All sections implemented
- Animations and interactions
- Mobile responsive design
- SEO optimized

---

**Made with ❤️ by Energize Your Business**
