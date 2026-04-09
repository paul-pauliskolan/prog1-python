# Programmering nivå 1 med Python - Companion Website

A beautiful, interactive educational companion website for "Programmering nivå 1 med Python: A Journey Through Our Cosmic Neighborhood."

## Overview

This static website is designed to enhance the reading experience of the popular science book by providing multimedia resources, deeper context, and interactive learning materials for each chapter. The site guides readers on an incredible journey from our Sun through our cosmic neighborhood to the edge of the observable universe.

## Features

### 🏠 Homepage

- Clear, welcoming introduction to the book
- Featured chapter previews
- Complete chapter index with navigation
- Guidance on how to use the companion site

### 📖 Chapter Pages (22 Total)

Each chapter page includes:

- **Chapter Overview** - Context and main themes
- **Key Topics** - Visual tags highlighting core concepts
- **Chapter Sections** - Outline of topics covered
- **Educational Videos** - Curated recommendations from NASA, ESA, and other institutions
- **Further Reading** - Authoritative links and resources
- **Interactive Resources** - Links to tools like NASA's Eyes, Stellarium, and Skyview
- **Navigation** - Easy movement between chapters

### 🎨 Design Highlights

- **Cosmic Aesthetic** - Dark space-themed interface with gradient accents
- **Typography** - Clear, readable fonts with generous spacing
- **Responsive Design** - Fully mobile-friendly and accessible
- **Performance** - Lightweight static site, fast loading
- **Accessibility** - WCAG compliant color contrasts and semantic HTML

## Site Structure

```
Programmering nivå 1 med Python/
├── index.html                 # Homepage
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── main.js               # Core functionality
├── data/
│   └── chapters.json         # Chapter content data
├── chapters/
│   ├── chapter-template.html # Template for chapter pages
│   ├── chapter-1.html        # Chapter pages (1-22)
│   ├── chapter-2.html
│   └── ... chapter-19.html
├── assets/
│   └── images/               # For custom images/diagrams
└── README.md                 # This file
```

## Chapters Included

1. **The Sun and the Edge of Home** - Our star and its influence
2. **Human Satellites and Exploration** - Artificial eyes above Earth
3. **The Moon** - Earth's ancient companion
4. **The Inner Planets** - Mercury, Venus, Earth, Mars
5. **The Asteroid Belt** - Between Mars and Jupiter
6. **Meteoroids, Meteors, and Meteorites** - Fragments from space
7. **The Outer Planets and the Migrating Worlds** - Gas and ice giants
8. **Comets, Kuiper Belt, and the Oort Cloud** - The icy frontier
9. **Leaving the Solar System** - The heliopause and beyond
10. **Beyond the Solar System: Worlds Around Other Stars** - Exoplanets
11. **The Local Interstellar Cloud and the Local Bubble** - Our galactic neighborhood
12. **Our Nearest Stars** - Alpha Centauri and stellar neighbors
13. **The Solar Neighborhood** - Red dwarfs and nearby worlds
14. **Local Stellar Associations and Moving Groups** - Families of stars
15. **The Interstellar Medium and Molecular Clouds** - Birth of new stars
16. **The Local Arm and Beyond** - Our place in the galaxy
17. **The Stellar Life Cycle in Orion** - Birth, life, and death of stars
18. **The Future of the Solar System's Journey** - Long-term fate
19. **Beyond the Milky Way: The Cosmic Web** - Galaxies and structures
20. **Cosmic Origins: A Journey Through Time and Space** - The Big Bang and early universe
21. **A Universe at Two Speeds** - The Hubble Tension
22. **The Fate of Light and Time** - The ultimate destiny of the universe

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript** - No dependencies, pure client-side interactivity
- **JSON** - Data structure for chapter content
- **Static Hosting** - Compatible with Netlify, GitHub Pages, Vercel, etc.

## Getting Started

### Local Development

1. Clone or download the project
2. Open `index.html` in your web browser
3. Navigate through chapters using the menu or chapter cards

### Hosting Options

#### Netlify (Recommended)

1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site is live instantly

#### GitHub Pages

1. Push the project to a GitHub repository
2. Go to Settings → Pages
3. Enable GitHub Pages from the main branch

#### Vercel

1. Import the project at [Vercel](https://vercel.com)
2. Deploy automatically

#### Any Static Host

- The site works on any web server that serves static files (nginx, Apache, etc.)
- No backend or build process required

## Customization

### Adding Custom Images

1. Place images in `assets/images/`
2. Reference in chapter content using relative paths

### Editing Chapter Content

Edit `data/chapters.json` to:

- Update chapter titles and descriptions
- Add or modify key topics
- Change video suggestions
- Update resource links

### Styling

Modify `css/style.css` to:

- Change color scheme (CSS variables at top)
- Adjust typography
- Customize layouts
- Add animations

### Adding Resources

Edit chapter data in `data/chapters.json`:

```json
"resources": [
  {
    "title": "Resource Name",
    "url": "https://example.com",
    "description": "Brief description"
  }
]
```

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- Sufficient color contrast
- Keyboard navigation support
- Responsive text sizing

## Performance

- Lightweight CSS (~15KB)
- Minimal JavaScript (~8KB)
- JSON data (~60KB)
- Total homepage ~100KB
- No external dependencies
- Fast loading on all connections

## Educational Use

### For Students

- Use each chapter page while reading the corresponding book chapter
- Explore video recommendations to visualize concepts
- Follow resource links to dive deeper
- Use interactive tools for hands-on learning

### For Teachers

- Link to specific chapter pages in course materials
- Use videos and resources in lessons
- Supplement astronomy or physics curricula
- Provide supplementary context and expert sources

## Future Enhancement Ideas

- Glossary page with searchable terms
- Quiz/assessment tools for each chapter
- 3D interactive models (solar system, galaxy structure)
- Downloadable study guides
- Discussion forums or comments
- Print-optimized chapter summaries
- Podcast/audio guide integration
- Timeline interactive tool

## Credits

- **Site Design & Development**: Educational companion website
- **Book**: "Programmering nivå 1 med Python: A Journey Through Our Cosmic Neighborhood"
- **Data Sources**: NASA, ESA, academic institutions
- **Icons & Assets**: Open source and educational

## License & Attribution

This companion website is designed to enhance and supplement the original book. When referencing or sharing, please acknowledge:

- The original book "Programmering nivå 1 med Python: A Journey Through Our Cosmic Neighborhood"
- NASA and ESA for scientific content and imagery
- All curated educational resources

## Support & Contact

For issues, suggestions, or questions:

- Check the book for context about specific topics
- Visit NASA Science (science.nasa.gov) for latest discoveries
- Explore ESA (esa.int) for European space missions
- See chapter resources for specific topic resources

## Version

**Version 1.0** - Initial release with full 22-chapter support

---

**Last Updated**: January 2025

Designed with education and accessibility in mind. Best viewed on modern browsers with JavaScript enabled.
