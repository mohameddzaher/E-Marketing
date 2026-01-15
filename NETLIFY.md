# Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   - Make sure your code is pushed to GitHub repository
   - Repository: `https://github.com/mohameddzaher/E-Marketing.git`

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select the repository: `E-Marketing`

3. **Build Settings** (Auto-detected)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (specified in `.nvmrc`)

4. **Environment Variables** (if needed)
   - Add any environment variables in Netlify dashboard
   - Go to Site settings → Environment variables

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## 📋 Build Configuration

The project is configured with:
- **netlify.toml**: Contains build settings and plugin configuration
- **.nvmrc**: Specifies Node.js version (18)
- **@netlify/plugin-nextjs**: Automatically handles Next.js routing and optimizations

## ⚙️ Netlify Settings

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18`

### Plugins
- `@netlify/plugin-nextjs` - Handles Next.js App Router, ISR, and API routes

## 🔧 Custom Domain Setup

1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be automatically provisioned

## 📊 Performance

Netlify automatically optimizes:
- Image optimization
- Asset compression
- CDN distribution
- Edge functions (if used)

## 🔒 Environment Variables

Add these in Netlify dashboard if needed:
```
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

## ✅ Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify images are loading correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form (if backend is connected)
- [ ] Verify SEO meta tags
- [ ] Test social media sharing
- [ ] Check analytics integration (if added)

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 18)
- Verify all dependencies are in package.json
- Check build logs in Netlify dashboard

### Images Not Loading
- Verify image URLs are accessible
- Check remotePatterns in next.config.js

### Routing Issues
- Ensure @netlify/plugin-nextjs is installed
- Check netlify.toml configuration

## 📞 Support

For issues, check:
- Netlify documentation: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
