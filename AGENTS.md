# Project Guide

## Overview

A Serbian-language furniture-buyback marketing site redesigned from the owner's WordPress site. The business buys used and period furniture, antiques and decoration in Belgrade and across Serbia. This is not an ecommerce storefront. Phone and email originate from the original site; do not replace them with invented details.

## Architecture

- React 19, TypeScript, TanStack Start and TanStack Router provide an SSR single-page marketing site.
- src/routes/index.tsx contains the landing page, static gallery data, FAQ content, LocalBusiness/FAQ JSON-LD, native dialogs and the assessment form.
- src/routes/__root.tsx owns the Serbian document language, siteName, siteDescription, canonical URL, sharing metadata and fonts.
- src/styles.css contains design tokens, custom responsive styles and reduced-motion behavior. Tailwind CSS 4 is available but this design primarily uses named CSS classes.
- public/img/ holds original source photography and any modernized hero variant. Request images through Netlify Image CDN rather than shipping full-size originals.
- public/procena-form.html is the hidden, statically discoverable Netlify Forms registration file. Keep every field synchronized with the React form.
- public/robots.txt and public/sitemap.xml cover public search discovery.
- vite.config.ts configures TanStack Start, React, Tailwind and Netlify integration. netlify.toml configures deployment.

## Design and Coding Conventions

Use Serbian Latin text with diacritics. Preserve the warm off-white and muted olive visual language, DM Sans body typography and Instrument Serif accents. Keep descriptive component and variable names, typed props and accessible native controls. Dialogs use the browser's modal focus handling and Escape support. Gallery photos illustrate categories, not inventory offered for sale. Avoid fake testimonials, ratings, business hours, street addresses or fixed arrival promises.

## Forms and Persistence

The procena form uses Netlify Forms as its persistence primitive. Submit multipart FormData to /procena-form.html, not the SSR root. This supports one optional photograph, validated for JPG/PNG/WebP and a 7 MB limit. Do not manually set the multipart Content-Type boundary. Keep honeypot and form-name fields intact. Netlify Forms was activated using the platform skill's enable script. Email notifications must be configured by the site owner in Netlify. No database or client-side persistent storage is needed.

## SEO Decisions

The canonical domain is currently https://grand-profiterole-c9a5c7.netlify.app. If the production domain changes, update the root metadata, JSON-LD, robots and sitemap together. Never add an og:image: the platform supplies it. Use only verified business details in structured data. FAQ markup does not promise a rich result. SEO readiness does not imply guaranteed ranking. Changes or redirects on the previous WordPress site require owner access and cannot be performed from this repository.

## Development

Use Node.js 22 and pnpm; preserve the pnpm lockfile. pnpm dev starts Vite on port 3000. netlify dev --port 8889 is the Netlify-aware development option. Validate Forms submissions on a Netlify deployment. Follow the active session's restrictions: this implementation intentionally did not run a local build, dev server or test command because deployment validation is performed automatically.
