# Chika Barn — Portfolio Site

A static portfolio site (plain HTML/CSS/JS — no build step required).

## Files

- `index.html` — page content
- `styles.css` — all styling
- `script.js` — nav behavior + hero dashboard animation

## Deploy to Vercel (pick one)

### Option A — Drag and drop (fastest, no account setup beyond signing in)
1. Go to https://vercel.com and log in (GitHub, GitLab, or email).
2. Click **Add New… → Project**.
3. Choose **"Deploy without Git"** / drag-and-drop, and drop this whole folder
   (`index.html`, `styles.css`, `script.js`) into the upload area.
4. Vercel auto-detects it as a static site — no framework, no build command needed.
   Click **Deploy**.
5. You'll get a live URL like `chika-barn-portfolio.vercel.app` in under a minute.

### Option B — GitHub import (best if you'll keep editing it)
1. Create a new GitHub repository and push these three files to it:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In Vercel, click **Add New… → Project**, then **Import** your GitHub repo.
3. Leave all settings as default (Framework Preset: "Other", no build command) and click **Deploy**.
4. Every future push to `main` will auto-redeploy.

### Option C — Vercel CLI
```
npm install -g vercel
cd this-folder
vercel
```
Follow the prompts (link or create a project); it deploys immediately and gives you a URL.

## Custom domain

Once deployed, go to your Vercel project → **Settings → Domains** to attach a custom
domain (e.g. `chikabarn.com`) if you buy one later.

## Editing content later

- Text content lives in `index.html` — experience, projects, skills, certifications
  are all plain HTML you can edit directly.
- Colors and fonts are defined as CSS variables at the top of `styles.css` under `:root`.
- Project GitHub links are in the `<a class="project-link">` tags in `index.html`.
