        # Mojo's Animations — Video Samples Gallery (Vite + React + Tailwind)

        **What's included**

- A ready-to-run Vite + React project with Tailwind CSS.
- The main gallery component is in `src/components/MojoAnimationsGallery.jsx` and includes your full, self-contained `sampleData` (all Google Drive links).
- Netlify-ready with `netlify.toml` preset (build command: `npm run build`, publish dir: `dist`).

---

## Local development

1. Install Node (recommended >= 18).
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the URL printed by Vite).

## Build for production

```bash
npm run build
```

The production-ready files are written to `dist/`.

## Deploy to Netlify

Two simple options:

**A — Deploy from Git (recommended)**
1. Create a GitHub repo and push this project.
2. In Netlify, click "New site from Git" → choose your Git provider → select repo.
3. Set build settings (Netlify may auto-fill):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site".

**B — Manual drag & drop**
1. Run `npm run build` locally.
2. Open the Netlify Sites dashboard and drag the `dist/` folder onto the "Drag & drop your site output here" area.

---

## Important notes about Google Drive-hosted videos

- The prototype uses direct Google Drive links in the `uc?export=download&id=FILEID` pattern. For each file you must ensure the Drive file is set to **"Anyone with the link" (Viewer)** — otherwise the video won't stream.
- Google Drive is not a CDN. Expect variable performance and possible throttling.
- If you experience playback, CORS, or bandwidth issues, consider moving your videos to Vimeo Pro, Cloudflare, or another CDN for reliable streaming and consistent 1080p delivery.

---

If you want, I can also:
- Add Netlify Forms for a contact form that saves inquiries to Netlify.
- Swap Google Drive links to a more robust host if you provide access.

