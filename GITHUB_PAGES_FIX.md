# GitHub Pages Deployment Fix

## Issues Fixed

### 1. **Path Mismatch (Critical)**
- **Problem**: [`vite.config.ts`](vite.config.ts:6) used `/aog-site/` (with trailing slash) while [`svelte.config.js`](svelte.config.js:13) used `/aog-site` (without trailing slash)
- **Impact**: This mismatch caused CSS and assets to fail loading on GitHub Pages
- **Fix**: Changed [`vite.config.ts`](vite.config.ts:6) from `base: '/aog-site/'` to `base: '/aog-site'` and changed the fallback from `'/'` to `''`

### 2. **Static Asset Paths**
- **Problem**: Background images and navigation links used absolute paths like `/dove.webp` and `/about` which don't work with GitHub Pages subpaths
- **Fix**: Updated all files to use SvelteKit's `base` path:
  - [`src/routes/+page.svelte`](src/routes/+page.svelte): Added `import { base } from '$app/paths'` and changed image URL to `{base}/dove.webp`
  - [`src/routes/about/+page.svelte`](src/routes/about/+page.svelte): Same fix for background image
  - [`src/routes/visit/+page.svelte`](src/routes/visit/+page.svelte): Same fix for background image
  - [`src/lib/components/Navigation.svelte`](src/lib/components/Navigation.svelte): Updated all navigation links to use `{base}/path`
  - [`src/routes/+layout.svelte`](src/routes/+layout.svelte): Fixed favicon path to use `{base}{favicon}`

### 3. **GitHub Pages Jekyll Processing**
- **Problem**: GitHub Pages by default processes files with Jekyll, which can cause issues with SvelteKit
- **Fix**: Added [`static/.nojekyll`](static/.nojekyll) file to disable Jekyll processing

### 4. **GitHub Actions Workflow**
- **Problem**: No automated deployment workflow
- **Fix**: Created [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) with proper build and deploy steps

## How to Deploy

1. **Commit and push all changes**:
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment - resolve CSS loading issues"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on push to main

3. **Verify the deployment**:
   - Check the Actions tab for the deployment status
   - Once complete, your site should be live at `https://[username].github.io/aog-site`

## Testing Locally

To test the GitHub Pages build locally:

```bash
npm run build:gh-pages
npm run preview
```

Visit `http://localhost:4173/aog-site` to verify it works with the base path.

## Key Changes Summary

- ✅ Fixed path consistency between Vite and SvelteKit configs
- ✅ Updated all asset URLs to use the base path
- ✅ Updated all navigation links to use the base path
- ✅ Added `.nojekyll` file
- ✅ Created GitHub Actions deployment workflow
- ✅ Ensured favicon uses correct path

## Technical Details

The root cause was that SvelteKit needs consistent base path configuration across:
1. [`svelte.config.js`](svelte.config.js) - for server-side routing
2. [`vite.config.ts`](vite.config.ts) - for asset bundling
3. Runtime code using `$app/paths` - for dynamic URL generation

All three must use the exact same path format (with or without trailing slash) to work correctly.