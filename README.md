# Thu Paing Oo — Portfolio

**Premium Next.js Portfolio with 3D Interactive Background**

## 🚀 Deploy to Vercel (1 minute)

### Option A: Drag & Drop
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the `thu-paing-portfolio` folder onto the Vercel dashboard
3. Click **Deploy** — done!

### Option B: CLI
```bash
npm install -g vercel
cd thu-paing-portfolio
npm install
vercel --prod
```

### Option C: Termux/Linux
```bash
cd thu-paing-portfolio
npm install
npx vercel --prod
```

## 🛠 Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🎨 Canva Image Assets Guide

Replace placeholder sections with your Canva-designed images:

### 1. Profile Photo (About Section)
- **File**: `public/profile.png`
- **Dimensions**: 800 × 1000px
- **Canva Style**: 
  - Dark or transparent background
  - Studio-lit portrait or stylized avatar
  - Add subtle cyan glow or edge light effect
  - Export: PNG with transparent background

### 2. Phone Mockup GIF (Project 1)  
- **File**: `public/app-mockup.gif`
- **Dimensions**: 480 × 960px
- **Canva Style**:
  - Animated GIF of app UI scrolling
  - Dark background, neon accents
  - Show leaderboard + alert notification UI
  - Duration: 3–5 seconds, loop

### 3. Workflow Diagram (Project 2)
- **File**: `public/workflow.png` or `workflow.gif`
- **Dimensions**: 1200 × 400px  
- **Canva Style**:
  - Connected pipeline nodes with arrows
  - Dark background (#020207)
  - Use orange (#FF6B35) as accent color
  - Icons for: Input → FFmpeg → AI → Output nodes
  - Export: PNG transparent or dark BG

### How to add images in code:
```tsx
// In About.tsx, replace the placeholder div with:
<Image src="/profile.png" alt="Thu Paing Oo" fill className="object-cover" />

// In Projects.tsx, for phone mockup:
<Image src="/app-mockup.gif" alt="App mockup" fill className="object-cover" />

// In Projects.tsx, for workflow:
<Image src="/workflow.gif" alt="Workflow" width={1200} height={400} />
```

## 📁 Project Structure
```
thu-paing-portfolio/
├── app/
│   ├── globals.css     — Design system, animations, fonts
│   ├── layout.tsx      — Root layout
│   └── page.tsx        — Main page
├── components/
│   ├── Navbar.tsx      — Sticky glass nav with contact links
│   ├── Hero.tsx        — 3D hero section with typewriter
│   ├── ThreeScene.tsx  — Interactive Three.js torus knot
│   ├── About.tsx       — Bio + traits
│   ├── Skills.tsx      — Animated skill bars + marquee
│   ├── Projects.tsx    — Case studies with code block
│   └── Footer.tsx      — Contacts footer
├── public/             — Add your Canva images here
├── package.json
├── tailwind.config.js
└── vercel.json
```

## 🎯 Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (scroll animations, entrance effects)
- **React Three Fiber** (interactive 3D torus knot)
- **Three.js** (WebGL rendering)
- **Fonts**: Bebas Neue, JetBrains Mono, Outfit

## ✏️ Customization
- Colors: edit `tailwind.config.js` → `colors` 
- Fonts: swap in `app/globals.css` → `@import url(...)`
- Contact links: search `thup2081` or `+959982335714` to update
- Projects: edit `components/Projects.tsx`
