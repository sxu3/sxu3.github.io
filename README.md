# Shanshan Xu — academic website

Classic scholar design using the structure and wording of the selected template: About me, News, Selected publications, and Teaching. News uses compact line spacing. No visitor JavaScript or external fonts are needed.

## Run locally

Use Node.js 22 and pnpm 11.25.0:

```sh
pnpm install
pnpm dev
```

The preview normally runs at http://localhost:8080. Build with `pnpm build`, then validate with `pnpm check`.

## Edit content

- `src/content/profile.njk`: name, affiliation, portrait, navigation and contact links.
- `src/content/about.njk`: About me biography.
- `src/content/news.njk`: two compact News updates from the selected template.
- `src/content/publications.njk`: three selected publications from the template.
- `src/content/teaching.njk`: homepage Teaching section.
- `src/news.md`: standalone News route, using the same template entries.
- `src/teaching.md`: Teaching page.
- `src/assets/site.css`: typography, colors, spacing and mobile layout.
- `src/_data/site.json`: site URL and metadata.

The `.njk` content files use ordinary HTML. Edit text between tags and destinations in `href` attributes. The homepage follows the Classic scholar preview rather than mirroring the Notion page. Notion is linked from Profile but is not synchronized automatically.

## Publish

First, an authenticated repository administrator must select **Settings → Pages → Build and deployment → Source → GitHub Actions** and clear the old `sxu.notion.site` custom domain if it is still present. This one-time configuration cannot be performed with the workflow token.

GitHub Actions builds `dist/` and deploys it after updates to `main`. The public URL is https://sxu3.github.io/. Pull requests build and check without deploying. No custom domain is included in the generated site.

The repository also contains the old generated site for reference. Only the new `src/` output, genuine legacy publication pages, and their assets are published. Theme example publications are excluded. Legacy publication URLs retain their original content and styling.

Revert a website commit and push to `main` to deploy the previous version.
