# Windows Live Messenger for Telegram: landing page

Astro site for the [WLM 2009-style Telegram client](https://github.com/sophie-maney/msn-messenger-telegram-releases).

```sh
npm install
npm run dev      # localhost:4321
npm run build    # static site in dist/
```

- Release version and links live in `src/site.ts`. Bump `version` there after each release.
- The feature list in `src/site.ts` mirrors the app's README checklist.
- Design decisions are in `DESIGN.md`. All WLM chrome is drawn in CSS/SVG; no Microsoft artwork is used.
- The site is set in Selawik (OFL). The fonts are in `public/fonts/`.
