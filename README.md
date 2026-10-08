# Personal Portfolio Website - Arianne Mei Z. Torres

> **A real, modern, responsive, continuous-scrolling personal portfolio website** designed for Arianne Mei Z. Torres, 3rd-year Bachelor of Science in Information Systems student (Service Management Track) at Don Mariano Marcos Memorial State University – North La Union Campus.

---

## 🌟 Key Highlights & Design Philosophy

- **100% Single-Page Continuous Scrolling**: Built as an authentic, fluid personal website—**strictly not a slideshow or presentation deck**.
- **Beige + White + Black Aesthetic**: Elegant, clean, minimalist, and professional. Soft warm beige backgrounds (`#f8f6f0`), crisp white cards (`#ffffff`), and high-contrast black typography and buttons (`#111111`). No blues, purples, neons, or harsh gradients.
- **Fixed & Sticky Navigation**: Stays accessible at the top with a subtle frosted glass effect; features your full name **ARIANNE MEI Z. TORRES** in the upper-left corner and an automated scroll spy that highlights the current section as you scroll.
- **Unified Navigation Links**: All navigation items, including Contact, are styled consistently and smoothly scroll to their respective sections.
- **Clean Project Cards**: Streamlined project cards focusing on system descriptions, academic years, and tech stacks—**free of fake or placeholder system screenshots**.
- **Expanded Education**: Features your BSIS degree, technical certification, and clearly labeled editable placeholders for Senior High School, Junior High School, and Elementary education.
- **Focused Contact Section**: Simple, clean direct contact channels: Email, Phone, Location, and clickable Facebook (`@Arianne Mei`).
- **Interactive Modals & Filters**: Category filtering for work samples (*Social Media, Event Content, Digital Design*) and clickable preview modals.
- **Zero Heavy Framework Lock-In**: Built with semantic HTML5, clean modern Vanilla CSS (using CSS Custom Properties), and clean Vanilla JavaScript. Works offline or online.

---

## 📂 Project Structure

```text
TorresPortfolio/
├── index.html          # Main HTML structure with all sections and SEO meta tags
├── css/
│   └── style.css       # Design tokens (Beige, White, Black), layout, responsive styles
├── js/
│   └── main.js         # Navigation controller, scroll spy, modal preview, filter logic
├── assets/             # Folder for your profile photo and Canva work samples
└── README.md           # Instructions on customizing and publishing
```

---

## 🚀 How to View the Website Locally

1. **Option 1: Direct Browser Opening**  
   Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, Firefox, or Safari.

2. **Option 2: Live Server (Recommended)**  
   If you use VS Code, right-click `index.html` and click **"Open with Live Server"**.  
   Or run with any local server (e.g. `npx serve .` or Python `python -m http.server 8000`).

---

## ✏️ How to Customize Your Portfolio

All files are organized and clearly commented so you can customize every detail easily.

### 1. Changing Text & Information
Open `index.html` in your preferred editor (VS Code, Notepad++, etc.):
- **Hero Greeting & Tagline**: Found inside `<section class="hero-section" id="home">`.
- **About Me Story**: Found inside `<section class="section section-about" id="about">`.
- **Skills**: Edit cards in `<section class="section section-skills" id="skills">`.
- **Experience**: Edit duties or takeaways in `<section class="section section-experience" id="experience">`.
- **Projects**: Edit descriptions or technologies in `<section class="section section-projects" id="projects">`.
- **Certifications**: Found inside `<section class="section section-certifications" id="certifications">`.
- **Education**: Complete academic background from Elementary to College is detailed in `<section class="section section-education" id="education">`.
- **Contact Details (Email, Phone, Facebook)**: Found in `<section id="contact">` and the footer.

### 2. Adding / Updating Your Profile Photo
1. Save your portrait photo (e.g., `arianne-profile.jpg` or `profile.jpg`) in the `assets/` folder.
2. In `index.html` under the Hero Visual area, locate:
   ```html
   <div class="frame-photo-container">
     <div class="frame-photo-matting">
       <img src="assets/arianne-profile.jpg" alt="Portrait of Arianne Mei Z. Torres" class="author-photo-square" id="hero-portrait">
     </div>
   </div>
   ```

### 3. Adding Your Canva Posters & Work Samples
1. Export your designs from Canva as high-quality PNG or JPG files and place them in `assets/portfolio/`.
2. In `index.html`, inside `.portfolio-thumbnail`, replace the placeholder SVG with:
   ```html
   <img src="assets/portfolio/my-poster.png" alt="Poster Title" style="width:100%; height:100%; object-fit:cover;">
   ```
3. Update the `data-title`, `data-category`, and `data-desc` attributes on the `.portfolio-thumbnail` element so the modal popup displays your custom title and description when clicked!

### 4. Updating Your Facebook Link
In `index.html` under `#contact`, update the `href` attribute for your Facebook button:
```html
<a href="https://facebook.com/YOUR-ACTUAL-PROFILE" target="_blank" rel="noopener noreferrer" class="contact-link">
  @Arianne Mei
</a>
```

### 5. Customizing Colors
Open `css/style.css` to inspect or tweak the color palette tokens at the top:
```css
:root {
  --bg-primary: #f8f6f0;        /* Soft warm beige background */
  --bg-surface: #ffffff;        /* Clean crisp white for cards */
  --bg-surface-alt: #f2efe8;    /* Light warm beige for subtle badges */
  --text-main: #111111;         /* Deep black for headings */
  --text-body: #2c2a27;         /* Charcoal dark for body text */
}
```

---

## 🌐 Free Deployment Guide

### GitHub Pages (Easiest & Best for Student Portfolios)
1. Initialize git and push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio: Beige/White/Black theme"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website will be live at `https://YOUR-USERNAME.github.io/portfolio` in under 60 seconds!

---

© 2026 Arianne Mei Z. Torres. All rights reserved.
