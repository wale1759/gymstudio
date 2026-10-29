# Training Studio

A responsive gym landing page built with HTML, CSS, and vanilla JavaScript. No framework, package installation, or build step is required.

## Preview

Open `index.html` in a browser, or open it with VS Code Live Server. All images load from `./public/images/`, so keep that folder alongside the page. Clipboard copying works best through localhost or HTTPS; a manual selection fallback is provided.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, program cards, coaching profiles, and membership options |
| `public/css/styles.css` | Design variables, components, and responsive layouts |
| `public/js/main.js` | Mobile navigation, program filtering, membership selection, and enquiry builder |
| `public/images/` | Local photographs and graphics |
| `DESIGN_SYSTEM.md` | Visual conventions and maintenance guidance |

## Maintain the page

- Change copy and images directly in the HTML. Keep descriptive image alt text.
- Add a program by copying an article inside `#programs .grid` and setting `data-category` to an existing filter value. Add a matching `data-filter` button if introducing a category.
- Update global colors and content width in the CSS `:root` variables. CSS sections are grouped by purpose; media queries are at the end.
- Membership links use `data-plan`; keep each value identical to its corresponding enquiry select option.
- Replace illustrative coaching profiles and membership options with verified studio details before launch. No prices, location, opening hours, or coach identities have been supplied.
- The enquiry builder only prepares text for copying. It does not send, store, or register enquiries. Connect a real contact service or add verified contact details before using it for customer enquiries.

## Verification

Check desktop and mobile layouts, keyboard navigation, the mobile menu, every program filter, membership selection, and enquiry generation/copying. JavaScript syntax can be checked with `node --check public/js/main.js` when Node is available.

## Sharing changes

Review `git diff`, commit the intended files, then push to your remote repository. Saving locally does not publish the website.

## Attribution

Available Git history lists Olawale as a commit author. This does not establish original authorship of every asset. Confirm permission to use photographs before publishing. No license file is included.

## Folder structure

```text
gymstudio/
??? index.html
??? public/
?   ??? css/styles.css
?   ??? js/main.js
?   ??? images/
??? README.md
??? DESIGN_SYSTEM.md
??? .gitignore
??? .gitattributes
```

## Schedule, FAQs, and navigation

- Edit the weekly schedule directly in the table in `index.html`. Every row has a `data-class-day` matching a day filter. Sunday demonstrates the empty state. The Full week option shows every listed class. All times are illustrative; replace them with verified studio times.
- Add FAQ items using native `<details>` and `<summary>` elements inside `.faq-list`. These work with a keyboard and without JavaScript.
- Navigation highlights the current section as you scroll. For a new navigable section, add its ID and a matching header link; the script discovers these automatically.
- The header stays visible while scrolling, and section anchors account for its height.
- The old root-level HTML, CSS, and JS filenames have moved. Open `index.html` with Live Server; update old bookmarks or deployment entry paths accordingly.

## Visual style

The site uses an editorial warm-stone, forest-green, and terracotta theme with lighter ivory card surfaces with local serif headlines, muted photography, responsive layouts, and reduced-motion support. Theme variables and component rules live in public/css/styles.css; see DESIGN_SYSTEM.md for the current visual conventions. No external font dependency is required.
