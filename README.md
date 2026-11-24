# Shanshan Xu — academic website

Classic scholar design, preserving the public Notion homepage's wording and section order. News uses compact line spacing. No visitor JavaScript or external fonts are needed.

## Run locally

Use Node.js 22 and pnpm 11.25.0:

```sh
pnpm install
pnpm dev
```

The preview normally runs at http://localhost:8080. Build with `pnpm build`, then validate with `pnpm check`.

## Edit content

- `src/content/profile.njk`: homepage title, navigation, contact details, biography.
- `src/content/news.njk`: latest News entries, in Notion order.
- `src/content/publications.njk`: selected publications, authors, venues and links.
- `src/news.md`: complete Notion news archive.
- `src/teaching.md`: Teaching page.
- `src/assets/site.css`: typography, colors, spacing and mobile layout.
- `src/_data/site.json`: site URL and metadata.

The `.njk` content files use ordinary HTML. Edit text between tags and destinations in `href` attributes. Existing Notion spelling, duplicate archive entries, emojis and the “400”/“Bad News” links are intentionally retained. Notion is not synchronized automatically. The separate Notion publications database was unavailable; the homepage's six entries are preserved without guessing additional content.

## Publish

First, an authenticated repository administrator must select **Settings → Pages → Build and deployment → Source → GitHub Actions** and clear the old `sxu.notion.site` custom domain if it is still present. This one-time configuration cannot be performed with the workflow token.

GitHub Actions builds `dist/` and deploys it after updates to `main`. The public URL is https://sxu3.github.io/. Pull requests build and check without deploying. No custom domain is included in the generated site.

The repository also contains the old generated site for reference. Only the new `src/` output, genuine legacy publication pages, and their assets are published. Theme example publications are excluded. Legacy publication URLs retain their original content and styling.

Revert a website commit and push to `main` to deploy the previous version.
