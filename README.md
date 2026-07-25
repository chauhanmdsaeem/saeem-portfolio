# Saeem Chauhan — Portfolio

A dark-themed developer portfolio built with React, Tailwind CSS v4, and Framer Motion.

## Before you deploy — edit your content

Everything on the site (name, bio, skills, projects, experience, links) lives in **one file**:

```
src/data/profile.js
```

Open it and fill in the two `TODO`-marked fields:

```js
socials: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
},
```

Also update each project's `github` and `demo` links (currently `"#"` placeholders).

If you have a resume PDF, replace `public/resume.pdf` with your own file (same filename), or update `resumeFile` in `profile.js` if you rename it.

## Run it locally

```bash
npm install
npm run dev
```

Visit the URL it prints (usually `http://localhost:5173`).

## Deploy: GitHub + Vercel (free, public link, no login required to view)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create your-portfolio --public --source=. --push
```

(No `gh` CLI? Create a new repo on github.com, then:)

```bash
git remote add origin https://github.com/YOUR_USERNAME/your-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Select your `your-portfolio` repo.
4. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

You'll get a live URL like `your-portfolio.vercel.app` — public, no sign-in required, and it auto-redeploys every time you push to `main`.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)
