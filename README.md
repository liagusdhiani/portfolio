# Liagusdhiani (Ani) — Digital Performance Marketing Portfolio

A premium, hyper-minimalist personal portfolio built for **Liagusdhiani (Ani)**, Digital Performance Marketing Manager at ALVA Digital (FCN Network). Designed with architectural spacing, high-end editorial typography, dynamic animations, fluid responsive controls, and a custom warm orange-coffee color palette.

🌐 **Live Site**: [liagusdhiani.github.io/portfolio](https://liagusdhiani.github.io/portfolio)

---

## Features

- **Architectural Minimalist Design** — Text-centric editorial layout, clean, spacious, and extremely premium.
- **Dark / Light Theme Toggle** — Switches between custom **Dark Mode** (Deep Roasted Coffee `#2B1A12`) and **Light Mode** (Soft Warm Alabaster Cream `#FFF4E4`).
- **Fluid Responsive Layout** — Viewport-relative sizing (`vw`/`vh`/`clamp`) that scales beautifully from mobile to 4K.
  - Zero horizontal overflow on small screens.
  - Dynamic name scaling for compact viewports.
  - 2×2 compact stats grid on mobile.
  - Stacked tool category rows on narrow screens.
- **Interactive Case Studies** — Smooth tab-switcher to navigate between confidential real-world campaign breakdowns.
- **Scroll-triggered Counter Animation** — Stats ticker fires once when the section enters the viewport.
- **Contact Form** — Fully client-side inquiry form with validation feedback.
- **SEO Ready** — Proper meta tags, Open Graph, semantic HTML5, and structured heading hierarchy.

---

## File Structure

```text
portfolio/
├── index.html          # Main markup — SEO meta, all sections, page structure
├── static/
│   ├── style.css       # Core styles, CSS variables, dark/light themes, media queries
│   └── script.js       # Theme toggle, scroll counter, case study tab switcher
└── README.md           # Project overview & GitHub Pages deployment guide
```

> **Note:** Both `style.css` and `script.js` live directly inside `static/` — there are no `css/` or `js/` subdirectories.

---

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Log in to [GitHub](https://github.com/) and click **New repository**.
2. Choose a repository name:
   - **User domain** *(recommended)*: If your username is `liagusdhiani`, name the repo **`liagusdhiani.github.io`**. Site will be at `https://liagusdhiani.github.io/`.
   - **Project page**: Name it anything else, e.g. `portfolio`. Site will be at `https://liagusdhiani.github.io/portfolio/`.
3. Set visibility to **Public**.
4. Skip the auto-initialize options (README, .gitignore) — they're already here. Click **Create repository**.

### Step 2: Push the Code

```bash
# Initialize local git (skip if already done)
git init

# Stage all files
git add index.html static/ README.md

# First commit
git commit -m "feat: initial portfolio launch"

# Set branch name
git branch -M main

# Link to your GitHub repo (replace URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git push -u origin main
```

For subsequent updates:

```bash
git add .
git commit -m "update: <describe your change>"
git push
```

### Step 3: Enable GitHub Pages

> Skip this step if you named the repo `username.github.io` — it activates automatically.

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `/ (root)`
4. Click **Save**.

### Step 4: Go Live ✅

GitHub Pages takes **1–2 minutes** to build. Refresh **Settings → Pages** until you see:

> *"Your site is live at https://username.github.io/"*

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Name, tagline, platform badges, CTAs |
| Stats | `#stats` | Animated counters — ad spend, ROAS, team size, experience |
| About | `#about` | Profile bio, fast facts panel, contact buttons |
| Expertise | `#expertise` | Core competency cards |
| Career Journey | `#journey` | Vertical timeline — ALVA, ADA Asia, JD.ID |
| Case Studies | `#cases` | Tabbed: Fintech disbursement & Automotive brand lift |
| Stack & Tools | `#tools` | Ad platforms, analytics, MMP & management tools |
| Connect | `#connect` | Contact info cards + direct inquiry form |

---

## Credits

- Designed & developed by **zakiamhbb_**
- Fonts: [Google Fonts — Inter & Space Grotesk](https://fonts.google.com/)
- Icons: [Font Awesome 6](https://fontawesome.com/)
