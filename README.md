# Liagusdhiani (Ani) - Professional Performance Marketing Portfolio

A premium, hyper-minimalist personal portfolio built for **Liagusdhiani (Ani)**, Digital Performance Marketing Manager. Designed with architectural spacing, high-end editorial typography, dynamic animations, fluid responsive controls, and a custom warm orange-coffee color palette.

## Key Features

- **Architectural Minimalist Styling**: Text-centric editorial layout that looks clean, spacious, and extremely premium.
- **Dynamic Theme Controls**: Quick switching between custom **Dark Mode** (Deep Roasted Coffee `#2B1A12`) and **Light Mode** (Soft Warm Alabaster Cream `#FFF4E4`).
- **Fluid Sizing (VW/VH & Clamp)**: Fully fluid viewport layout with dynamic font scaling to fit any display beautifully.
- **Mobile Optimized Layouts**:
  - **No Overflow**: Carefully styled padding and margins ensuring zero horizontal layout breaks.
  - **Dynamic Name Scaling**: Her 13-character name fits cleanly on small devices without awkward line wrapping.
  - **Compact 2x2 Stats Grid**: Formatted statistics block that renders as a clean dashboard widget on mobile viewports instead of a massive vertical column.
  - **Tools Row Stacking**: The tools categories stack gracefully as full-width vertical rows, allowing long badge names to stay on a single line.
- **Interactive Case Studies**: Smooth switcher tabs to explore complex client growth strategies seamlessly.
- **Interactive Ticker Animation**: Counter ticking animation that triggers automatically when the stats section scrolls into view.

---

## Workspace Structure

```text
├── index.html            # Main markup with SEO meta tags
├── static/
│   ├── css/
│   │   └── style.css     # Core styles, dark/light theme, and media queries
│   └── js/
│       └── script.js     # Light theme logic, ticker, & tab switcher
└── README.md             # Deploy & setup instructions
```

---

## Hosting on GitHub Pages (github.io)

Hosting this portfolio on GitHub Pages is free, instant, and secure. Follow these steps to put the site online:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New** (or the `+` icon in the top right) to create a new repository.
3. Choose a name:
   * **User Domain (Recommended)**: If your GitHub username is `example`, name the repository **`example.github.io`**. This puts your site directly at your root domain (`https://example.github.io/`).
   * **Sub-folder (Project Page)**: Name it something else, e.g., **`portfolio-ani`**. This puts your site at `https://example.github.io/portfolio-ani/`.
4. Make sure the repository visibility is set to **Public**.
5. Do *not* initialize the repository with a README, `.gitignore`, or license (as they are already present in your files). Click **Create repository**.

### Step 2: Push Your Code
Initialize git and push these files to your new GitHub repository:

```bash
# Initialize local git repository
git init

# Add all project files
git add index.html static/ README.md .gitignore

# Commit changes
git commit -m "feat: initial commit of premium performance marketing portfolio"

# Rename default branch to main
git branch -M main

# Link to your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in Settings
*(Note: If you named your repository `username.github.io`, this step is performed automatically. Skip to Step 4.)*

1. On GitHub, navigate to your repository homepage.
2. Click the **Settings** tab in the top navigation bar.
3. Select the **Pages** menu item from the left-hand sidebar (under the *Code and automation* section).
4. Under **Build and deployment**:
   * For **Source**, select **Deploy from a branch**.
   * Under **Branch**, select **`main`** and folder **`/ (root)`**.
5. Click **Save**.

### Step 4: Your Site is Live!
* After clicking save, GitHub will take about **1 to 2 minutes** to build and launch your site.
* Refresh the Settings > Pages page. You will see a banner saying: **"Your site is live at https://username.github.io/"**.
* Click the link to view the portfolio online!


