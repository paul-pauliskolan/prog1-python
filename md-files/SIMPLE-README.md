# Programmering nivå 1 med Python - Simplified Companion Website

## What You Have

A clean, simple companion website for "Programmering nivå 1 med Python: A Journey Through Our Cosmic Neighborhood"

- **Homepage** - Simple intro + list of all 22 chapters
- **Chapter Pages** - Each chapter shows:
  - Overview and summary
  - Key topics
  - Section list
  - Video recommendations
  - Resource links
  - Previous/Next navigation

## Getting Started

### Run Locally

```bash
cd "/Users/paul/Prog 1 Python SS"
python -m http.server 8000
```

Open: http://localhost:8000

### Deploy

1. **Netlify** (easiest): Drop.netlify.com → drag & drop the folder
2. **GitHub Pages**: Push to GitHub, enable Pages
3. **Vercel**: vercel.com → import
4. **Any server**: Copy files to web root

## Files

```
index.html          - Homepage with chapter menu
chapters/           - 22 chapter pages
css/style.css       - Styling (simplified)
js/main.js          - Functionality (simplified)
data/chapters.json  - Chapter content
```

## Customize

**Change chapter content**: Edit `data/chapters.json`

**Change colors**: Edit top of `css/style.css`:

```css
--bg: #0a0e1a; /* Background */
--accent: #4a9eff; /* Link color */
--text: #e8eaf6; /* Text color */
```

**Add images**: Put in `assets/images/`

## That's It!

Clean, simple, ready to use. All 22 chapters are ready to explore.
