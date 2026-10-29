# Gym Studio

A static fitness landing page built with HTML and CSS. It features a video hero, Training Studio branding, membership calls to action, and a six-item exercise program section.

## Project files

| File | Purpose |
| --- | --- |
| `gymstudio.html` | Page content and structure |
| `gymstudio.css` | Layout and styling, alongside inline styles in the HTML |
| `DESIGN_SYSTEM.md` | Visual foundations and component guidance |
| `.gitignore` | Local files excluded from Git |

## Preview locally

There is no build step or package installation. Open `gymstudio.html` in a browser, or use VS Code's Live Server extension to serve the project folder.

The current HTML references resources at these server-root paths:

- `/asset/gymstudio/gymstudio.css`
- `/asset/project/gym-video.mp4`
- `/asset/project/line-dec.png`
- `/asset/project/features-first-icon.png`

The media files are not included in this repository. For a standalone preview, change the stylesheet link to `./gymstudio.css`, add your media files, and update the media paths to their locations. Alternatively, serve the project within a site that provides the existing `/asset/` paths. Until those paths resolve, styling or media may be missing.

## Make changes

1. Edit `gymstudio.html` for text and structure.
2. Edit `gymstudio.css` and relevant inline styles for appearance.
3. Save and refresh the browser.
4. Check desktop and narrow screen sizes, stylesheet loading, and media loading.
5. Review `git diff`, then commit and push when ready to share your changes.

The current layout uses fixed offsets and needs further work for smaller screens. Navigation labels and calls to action are visual elements; registration and navigation behavior have not been implemented. There are no automated tests or deployment configuration included.

## Design guidance

See [the design system](DESIGN_SYSTEM.md) for the existing colors, typography, components, and guidance for future improvements.

## Attribution

The available Git history lists Olawale as a commit author. This does not establish original authorship of all code or media. No license file is currently included.
