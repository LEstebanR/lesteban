Create a new bilingual blog post for the lesteban portfolio (content/blog/).

## Steps

1. Ask the user for:
   - **Title** in English and Spanish
   - **Short title** (used in cards) in English and Spanish — keep it under 30 chars
   - **Description** (one sentence) in English and Spanish
   - **Publish date** — default to today if not specified (format: YYYY-MM-DD)
   - **Image path** — e.g. `/blog/my-post.jpg` (file must be placed in `public/blog/`)
   - **Content** — ask if they want a blank scaffold or have a draft to start from

2. Generate the URL slug from the English title:
   - Lowercase, hyphen-separated, no special chars (e.g. "My First Post" → `my-first-post`)
   - **The `url` field must be identical in both language files** — this is required for the language switcher

3. Create `content/blog/en/<slug>.md`:

```md
---
title: '<English title>'
short_title: '<English short title>'
url: '<slug>'
date: '<YYYY-MM-DD>'
description: '<English description>'
image: '<image path>'
---

<English content or scaffold>
```

4. Create `content/blog/es/<slug>.md` with the same `url` value:

```md
---
title: '<Spanish title>'
short_title: '<Spanish short title>'
url: '<slug>'
date: '<YYYY-MM-DD>'
description: '<Spanish description>'
image: '<image path>'
---

<Spanish content or scaffold>
```

5. Remind the user:
   - Place the post image at `public<image path>` before deploying
   - Run `bun dev` to preview the post at `/en/blog/<slug>` and `/es/blog/<slug>`
   - Both language versions must exist before merging — the blog listing shows posts for the active locale only
