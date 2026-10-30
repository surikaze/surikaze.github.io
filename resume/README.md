# Interactive Resume

Interactive resume site for José Pedro Azevedo. Plain HTML, CSS and JavaScript: no build step, no dependencies.

**Live at https://jpsazevedo.github.io/resume/**

## View it locally

Double-click `index.html` to open it in your browser.

## Publish changes

Run `sync.bat` in the `Claude Projects` folder. It pushes the `jpsazevedo.github.io` repo, and GitHub Pages redeploys within a minute or two.

Note: this repo is public. Don't add anything here you wouldn't put on the site.

## Update the content

Edit `js/data.js`. Everything on the page (roles, skills, education, languages, contact) comes from that file.

- Wrap text in `**double asterisks**` to highlight it.
- Each skill has a `used` list of role ids (`flutter`, `bnp`, `tls`, `nokia-ops`, `ericsson`, `nokia-radio`, `nokia-noc`). That drives the "where I used it" highlighting. Leave it empty for general skills.
- The downloadable CV is generated from `js/data.js` via `cv-print.html`: run `powershell -ExecutionPolicy Bypass -File tools/build-cv-pdf.ps1` from the repo root after editing the data, and it rewrites the PDF in `assets/`.

## Structure

```
index.html        page layout
css/styles.css    styling (light + dark themes)
js/data.js        resume content
js/app.js         terminal, timeline, skills explorer, animations
assets/           downloadable PDF
```

## Terminal commands

`help`, `whoami`, `experience [n]`, `skills [category]`, `education`, `languages`, `contact`, `cv`, `goto <section>`, `theme <light|dark>`, `scan`, `clear`. A couple of hidden ones too.
