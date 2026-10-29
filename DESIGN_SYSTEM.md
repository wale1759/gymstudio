# Training Studio Design System

## Visual direction

An editorial fitness studio with warm stone backgrounds and light ivory surfaces, forest-green sections, restrained terracotta accents, and expressive serif headlines. Photography and generous spacing lead the design. Small uppercase labels provide structure without competing with headings.

## Tokens

Change these variables in `public/css/styles.css` to update the theme.

| Variable | Value | Purpose |
| --- | --- | --- |
| `--accent` | `#b34a2d` | Terracotta buttons, labels, and emphasis |
| `--accent-light` | `#efab8b` | Emphasis on dark surfaces |
| `--ink` | `#202823` | Forest-green text, active filters, and membership background |
| `--muted` | `#6c716a` | Supporting text |
| `--paper` | `#e8e4db` | Warm stone page background |
| `--soft` | `#ddd8cd` | Deeper stone secondary sections |
| `--surface` | `#f5f1e9` | Light ivory coaching cards, badges, and enquiry panel |
| `--line` | `#ccc6ba` | Dividers and borders |
| `--container` | `1200px` | Maximum content width |
| `--serif` | Georgia, Times New Roman, serif | Editorial display typography |

The timetable uses a pale sage surface. White-on-terracotta actions darken on hover. Recheck contrast when changing colors.

## Typography and composition

Headlines use local serif fonts with fluid sizes and italic emphasis. Body text uses Segoe UI with Arial and sans-serif fallbacks; no external fonts or build tools are needed. Body line height is 1.7. Eyebrows use small uppercase letters with generous tracking.

Desktop sections use 115px vertical spacing and a centered 1200px container with 40px side margins. Mobile uses 72px section spacing and 20px side margins. Three-column collections, split image/content layouts, and fine dividers establish rhythm.

## Components

- Sticky header: compact wordmark, thin current-section underline, and mobile menu.
- Hero: full-bleed photograph with a forest overlay, serif title, ivory action, and a desktop editorial annotation.
- Value strip: three quiet numbered statements on a warm neutral surface.
- Programs: category badges over muted photographs, subtle image hover, and independent filters.
- Approach: framed photograph, gradient-backed caption, and a numbered introduction.
- Schedule: day filters, semantic table, alternating rows, and empty-state feedback. Times remain examples.
- Coaches: portrait-led profiles with fine dividers; profile content remains illustrative.
- Membership: connected dark panels with a sage featured plan and warm neutral actions.
- FAQ: native keyboard-accessible disclosure elements.
- Enquiry: bordered warm-neutral panel and understated form controls. The builder prepares copyable text; no messages are sent.

## Responsive and accessibility behavior

At 1050px, navigation and split layouts become more compact. At 760px, the menu collapses, split layouts stack, and program/membership cards use one column. Coaching uses two columns, then one at 420px. The timetable scrolls horizontally in its labeled region.

Keep semantic HTML, image descriptions, visible focus, native disclosures, status announcements, and reduced-motion support. Content stays visible without animation or JavaScript; filters, mobile navigation, and the enquiry builder require JavaScript. Preserve `aria-pressed` and `aria-current` behavior when extending the page.

## Maintenance

Keep content in `index.html`, visual rules in `public/css/styles.css`, and behavior in `public/js/main.js`. The stylesheet is organized by component with responsive rules at the end. Local photographs remain in `public/images/`. Edit `data-category`, `data-day`, and `data-plan` values together with their matching controls when adding content.
