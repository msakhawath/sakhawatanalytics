# sakhawatanalytics.com

Personal site. Static HTML, no build step, no dependencies.
Deployed to Cloudflare Workers automatically on every push to `main`.

## Layout

```
wrangler.jsonc     Cloudflare config — don't touch
public/
  index.html       the whole page: layout, styles, scripts
  projects.js      THE PROJECT LIST — edit this one
  404.html         not-found page
  robots.txt       search engine rules
  sitemap.xml      list of pages, for Google
  _headers         security headers
```

## To change something

1. Open the file on github.com
2. Click the pencil (Edit)
3. Make the change
4. **Commit changes** at the bottom
5. Live in ~30 seconds

No download, no zip, no drag-and-drop. Works from a phone.

## To add a project

Edit `public/projects.js`. Copy an existing block and change the values:

```js
{
  title: "What it is",
  track: "ml",              // "ml" | "ops" | "both"
  result: "The outcome — a number if you measured one, otherwise scope",
  body: "Problem, approach, result. Two or three sentences.",
  stack: ["Python", "Docker"],
  links: [{ label: "Code", url: "https://github.com/msakhawath/..." }]
}
```

`track: "both"` makes it appear under both filters. The project count on
the homepage updates itself.

## To add a page

Put `whatever.html` in `public/`, add a nav link in `index.html`,
add the URL to `public/sitemap.xml`. It serves at
`sakhawatanalytics.com/whatever.html`.

## Build version

Bump `<meta name="build" ...>` in `index.html` when you change something.
Check what's live from the browser console:

```js
document.querySelector('meta[name=build]').content
```

## If a deploy breaks the site

Cloudflare dashboard → the Worker → **Deployments** → pick the last good
one → **Rollback**. Or `git revert` the commit and push.
