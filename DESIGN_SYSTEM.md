# Gym Studio Design System

This document records the current visual design and provides guidance for future changes. Suggested improvements below are not yet implemented in the HTML or CSS.

## Visual direction

Use a bold fitness aesthetic: a dark video hero, white text, orange emphasis, and a white program section. Keep headings prominent and calls to action easy to identify.

## Colors

| Role | Current value | Usage |
| --- | --- | --- |
| Accent | `orangered` / `#ff4500` | Brand emphasis, buttons, active Home label, Discover More text |
| Hero overlay | `#232d39cc` | Dark blue-gray with 80% alpha over the hero |
| Light surface | `#ffffff` | Program section and hero text |
| Dark text | `#000000` | Program content |
| Header | `gray` / `#808080` | Header background; the header currently has `opacity: .8` |

Header opacity currently also affects its children. For future changes, use an alpha background color if only the background should be translucent. Check text contrast when using orange on white, especially for small text.

## Typography

No font family is declared, so the browser default applies.

| Element | Current styling |
| --- | --- |
| Hero title | `70px`, bold heading, uppercase |
| Brand | `30px`, weight `900`, uppercase |
| Section title | Bold heading; section header declares weight `900` |
| Program title | `20px`, weight `700` |
| Intro copy | `20px` |
| Navigation and sign-up | `17px` |
| Primary membership action | `20px`, weight `800` |

Keep orange emphasis to key words. For future cleanup, use a consistent font stack and move inline typography styles into CSS classes.

## Layout and spacing

The hero and program sections each use `100vh` height and full width. The existing layout relies on relative and absolute positioning with large pixel offsets. Navigation uses a `30px` gap, and programs visually form two columns.

For future responsive work:

- Use a centered container with consistent horizontal padding.
- Use Flexbox for the header and CSS Grid for program cards.
- Stack program cards on narrow screens and allow sections to grow with their content.
- Start with a spacing scale of `4`, `8`, `16`, `24`, `32`, `48`, and `64px`; this is a proposed scale, not an existing token system.
- Scale the hero heading down on smaller screens.

## Components

| Component | Current treatment |
| --- | --- |
| Header | Training Studio wordmark, uppercase navigation labels, orange sign-up button |
| Hero | Looping muted video, dark overlay, tagline, large title, membership button |
| Primary button | Orange background and border with bold white uppercase text |
| Section heading | Centered visual treatment, orange keyword, decorative divider image, intro copy |
| Program item | `100 × 100px` icon, bold title, description, orange Discover More label |

The membership button is `250 × 60px`; the sign-up button is `130 × 50px`. Buttons currently have no custom hover, focus, loading, or disabled states. Navigation and Discover More labels are not links yet.

## Interaction and accessibility guidance

When implementing interactions, use links for navigation and buttons for actions. Add visible keyboard focus styles and meaningful destinations. Give informative images useful alt text and decorative images empty alt text. Keep heading levels sequential, ensure text contrast, and provide a reduced-motion alternative for the background video.

## Asset references

The HTML expects `gym-video.mp4`, `line-dec.png`, and `features-first-icon.png` under `/asset/project/`. These assets are not included in the repository. Use media you have permission to publish and update paths when organizing assets.
