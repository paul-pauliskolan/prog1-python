# Programmering nivå 1 med Python - Deployment Guide

Quick start guide for getting your Programmering nivå 1 med Python companion website online.

## Quick Deploy Options

### 🚀 Option 1: Netlify (Easiest)

**No account needed for instant deployment:**

1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag and drop the entire "Programmering nivå 1 med Python" folder
3. Your site is live! (You get a free subdomain)

**To keep it permanent:**

- Create a Netlify account
- Connect your GitHub repo (if you have one)
- Custom domain setup available

### 🐙 Option 2: GitHub Pages

**If you use GitHub:**

1. Create a new repository (name it `your-username.github.io` or `spacesafari`)
2. Push the Programmering nivå 1 med Python folder contents to the repo
3. Go to Settings → Pages
4. Select "Deploy from branch" → main branch
5. Site appears at `your-username.github.io` or repo URL

**With custom domain:**

- In Settings → Pages → Custom domain
- Point your domain's DNS to GitHub

### 📦 Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from Git or drag folder
4. Deploy (automatic on every push)

### 🏠 Option 4: Self-Hosted Server

If you have a server (nginx, Apache, etc.):

```bash
# Copy all files to your web root
cp -r Space\ Safari/* /var/www/html/

# Ensure proper permissions
chmod -R 755 /var/www/html/
```

**nginx config example:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### ☁️ Option 5: AWS S3 + CloudFront

1. Create S3 bucket
2. Upload all files
3. Enable static website hosting
4. Optional: Use CloudFront for CDN

## Domain Setup

### Using a Custom Domain

**For Netlify:**

- Domain Settings → Custom Domain → Add domain
- Follow DNS instructions for your registrar

**For GitHub Pages:**

- Settings → Pages → Custom domain
- Update DNS records at your registrar to point to GitHub

**DNS Setup Example (for godaddy, namecheap, etc.):**

```
Type: CNAME
Name: spacesafari
Value: your-netlify-domain.netlify.app
```

## Environment Setup for Development

### Local Testing

**Python 3 (simplest):**

```bash
cd "/Users/paul/Prog 1 Python SS"
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js (if you have it):**

```bash
npx http-server Space\ Safari
# Visit http://localhost:8080
```

**macOS with Ruby:**

```bash
cd "/Users/paul/Prog 1 Python SS"
ruby -run -ehttpd . -p8000
# Visit http://localhost:8000
```

## File Checklist Before Deployment

Ensure these files are included:

- ✅ `index.html` - Homepage
- ✅ `css/style.css` - Stylesheet
- ✅ `js/main.js` - JavaScript
- ✅ `data/chapters.json` - Chapter data
- ✅ `chapters/chapter-1.html` through `chapter-19.html` - All chapter pages
- ✅ `assets/images/` - Image directory (can be empty initially)

## Post-Deployment Checklist

After going live:

- [ ] Test on desktop browser
- [ ] Test on mobile/tablet
- [ ] Check all chapter links work
- [ ] Verify external resource links work
- [ ] Test navigation menu
- [ ] Ensure videos load properly
- [ ] Check responsive design
- [ ] Verify search engine can crawl site
- [ ] Test accessibility with keyboard navigation

## SEO Setup

### Add to Search Engines

**Google:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property with your domain
3. Upload sitemap or submit URL

**Bing:**

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

### Generate Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/chapters/chapter-1.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all chapter URLs -->
</urlset>
```

## Performance Optimization

### Cache Headers (Netlify)

Create `netlify.toml` in root:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

### Gzip Compression (Netlify)

- Automatically enabled
- No configuration needed

### CDN

- **Netlify**: Included in all plans
- **Vercel**: Automatic global CDN
- **Cloudflare**: Free tier available

## Monitoring

### Analytics (Optional)

**Simple Option - Fathom Analytics (Privacy-focused):**

```html
<!-- Add to header of index.html and chapter pages -->
<script src="https://cdn.usefathom.com/script.js" data-site="XXXXX"></script>
```

**Or use:**

- Netlify Analytics (built-in)
- Vercel Analytics (built-in)
- Plausible Analytics (privacy-focused)

## Troubleshooting

### Site Not Loading

- Check all file paths are correct
- Verify `index.html` is in root
- Ensure chapters folder exists and has .html files

### Links Not Working

- Make sure relative paths are correct (`../` for going up directories)
- Check file names match exactly (case-sensitive)

### Mobile Not Responsive

- Clear browser cache
- Check CSS file is loading
- Verify viewport meta tag in HTML

### JSON Not Loading

- Ensure `data/chapters.json` is in correct location
- Check JSON syntax is valid
- Verify file permissions if self-hosted

### Videos Not Showing

- External YouTube embeds require no configuration
- Check internet connection
- Verify YouTube URLs are correct

## Support Resources

- **Netlify Docs**: [netlify.com/docs](https://netlify.com/docs)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **HTTP Server Cheat Sheet**: [httpd-cheatsheet.com](https://httpd-cheatsheet.com)

## Next Steps

1. Deploy the site using one of the methods above
2. Share the URL with readers of the book
3. Monitor user feedback
4. Update chapter resources as new discoveries emerge
5. Consider adding custom images or interactive elements

---

**Happy deploying!** Your Programmering nivå 1 med Python companion website is now ready to help readers explore the cosmos! 🚀
