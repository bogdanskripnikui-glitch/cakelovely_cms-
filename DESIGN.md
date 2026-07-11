# Design System: Cardaq Singapore Reference

Source reference: https://cardaqsingapore.com/

## Summary

The system is a premium, airy concierge-service design. It uses Inter, a restrained navy text palette, white and near-white surfaces, soft pink accents, rounded pill CTAs, thin pink navigation frames, and large modular content blocks. The tone is luxurious but not dramatic: large whitespace, crisp typography, soft line art, and simple component geometry.

## Design Tokens

### Colors

| Token | Value | Usage |
|---|---:|---|
| `--color-ink` | `#0A2540` | Primary headings, active states, icons |
| `--color-ink-90` | `rgba(10, 37, 64, 0.9)` | Strong body text |
| `--color-ink-60` | `rgba(10, 37, 64, 0.6)` | Muted nav/body text |
| `--color-slate` | `#46617B` | Navigation labels, dropdown text |
| `--color-muted` | `#7A8C9F` | Paragraph text, captions |
| `--color-line` | `#C3D0E0` | Neutral dividers and progress lines |
| `--color-surface` | `#FFFFFF` | Cards, nav shell, panels |
| `--color-page` | `#FEFEFE` | Main page background |
| `--color-soft` | `#F6F9FC` | Secondary pale surface |
| `--color-pink` | `#F38AB2` | Primary CTA, links, brand accent |
| `--color-pink-line` | `#FFCACA` | Nav border, light control outlines |
| `--color-pink-muted` | `#DEB6C4` | Inactive slider controls |
| `--color-pink-wash` | `#FCF6F6` | Soft illustrated panels |
| `--color-lavender` | `#ADA5FF` | Rare supporting accent only |

### Typography

Primary family: `Inter`, fallback `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

The source site uses Inter everywhere. It has a dense, slightly tightened setting:

| Role | Size | Line height | Weight | Letter spacing |
|---|---:|---:|---:|---:|
| Hero title | `60px` | `72px` | `650` | `-1.2px` |
| Large display | `77.5px` | `100.75px` | `650` | `-1.55px` |
| Section title | `40px` | `52px` | `650` | `-0.8px` |
| Slider title | `35px` | `49px` | `650` | `-0.7px` |
| Card title | `22.5px-25px` | `35px-37.35px` | `650` | `-0.45px to -0.5px` |
| Body large | `20px` | `28px` | `500` | `-0.4px` |
| Body | `17.5px` | `24.5px` | `500` | `-0.35px` |
| Nav label | `16.25px` | normal | `600` | `-0.325px` |
| Dropdown | `15px` | normal | `400` | `-0.3px` |

Responsive rule: scale display typography down on tablet/mobile, but preserve the same weight, navy color, and tight letter spacing.

### Spacing

The source uses a 2.5px-derived rhythm with many values in `7.5`, `11.25`, `12.5`, `17.5`, `20`, `30`, `37.5`, `42.5`, `55`, `62.5`, `70`, `98.75`, `152.5`, and `262.5`.

Use practical CSS tokens:

| Token | Value |
|---|---:|
| `--space-1` | `2.5px` |
| `--space-2` | `7.5px` |
| `--space-3` | `11.25px` |
| `--space-4` | `12.5px` |
| `--space-5` | `17.5px` |
| `--space-6` | `20px` |
| `--space-7` | `30px` |
| `--space-8` | `37.5px` |
| `--space-9` | `42.5px` |
| `--space-10` | `55px` |
| `--space-11` | `62.5px` |
| `--space-12` | `70px` |
| `--space-13` | `98.75px` |
| `--space-14` | `152.5px` |

### Radius

| Token | Value | Usage |
|---|---:|---|
| `--radius-sm` | `2px` | Progress bars, line caps |
| `--radius-md` | `12px` | Mobile menu opener, compact panels |
| `--radius-lg` | `15px` | Desktop nav shell |
| `--radius-xl` | `20px` | Mobile sheet top corners |
| `--radius-card` | `25px` | Large white content cards |
| `--radius-pill` | `75px` | CTA buttons |
| `--radius-round` | `100%` | Slider number controls |

### Borders and Shadows

The source avoids heavy shadows. Borders and empty space define hierarchy.

| Pattern | Value |
|---|---|
| Nav shell | `2px solid #FFCACA`, radius `15px` |
| Dividers | `1px solid rgba(195, 208, 224, 0.5)` |
| CTA border | none |
| Cards | no visible border, white surface |
| Shadows | none by default |

## Components

### Header

Desktop header is a three-part layout: logo left, framed nav center, sign-up CTA right.

- Header margin top: `25px`
- Header horizontal padding: `37.5px`
- Logo width: about `180px`
- Nav shell: white, `2px #FFCACA` border, radius `15px`, padding `11.25px 20px`, gap `11.25px`
- Nav items: `16.25px`, weight `600`, slate text, `7.5px` padding, small chevron
- CTA: pink pill, white text, `18.75px`, height `40px`, padding `8.75px 20px`

### Primary Button

Pink, pill-shaped, no shadow, white text, arrow icon to the right.

- Medium: height `40px`, padding `8.75px 20px`, radius `75px`, font `18.75px/normal`, weight `400`
- Large: height `49px`, padding `12.5px 42.5px`, radius `37.5px`, font `18.75px/24.375px`, weight `650`
- Hover: slightly deeper pink and subtle upward movement
- Focus: navy outline with pink offset

### Text Link Button

Transparent button with pink text and arrow.

- Font: `18.75px`, weight `650`
- Padding: `6.25px 0`
- Gap: `2.5px`
- Color: `#F38AB2`
- No background or border

### Hero

Two-column hero after header.

- Left: large title, body copy, account preview card
- Right: pale pink illustration panel with line-art travel/concierge imagery and vertical numbered slider controls
- Top padding: `98.75px`
- H1: `60px/72px`, weight `650`, `#0A2540`
- Body: `20px/28px`, weight `500`, muted slate
- Hero art panel: pale pink wash, large radius, no shadow

### Account Preview Card

White large card, quiet hierarchy, internal divider between account types.

- Surface: white
- Radius: `25px`
- Padding: `37.5px 32.5px`
- Title: `22.5px/37.35px`, weight `650`
- Text: `17.5px/24.5px`, weight `500`, muted
- Link: pink text button, margin top `20px`
- Divider: `1px solid rgba(195, 208, 224, 0.5)`

### Section Blocks

Sections are tall and spacious, not card-stacked.

- Common section top padding: `70px`
- Large bottom padding: `100px-152.5px`
- Section intro text width: around `520px`
- Section titles: `40px/52px`, weight `650`
- Body text: `20px/28px`, muted, weight `500`

### Slider / Step Controls

Used for hero and content carousels.

- Circular controls: `48px x 48px`, radius `100%`
- Number font: `20px/28px`, weight `500`; active weight `650`
- Inactive color: `#DEB6C4`
- Active color: `#0A2540`
- Horizontal step rows: large `01` number at `40px/56px`, label at `21.25px/29.75px`, uppercase, weight `650`
- Progress line: `1px` neutral line with `4px` active overlay

### Dropdown Menu

Dropdowns are simple white menus with slate text and icon rows.

- Item height: `40px`
- Padding: `10px 17.5px`
- Gap: `12.5px`
- Font: `15px`, weight `400`, letter spacing `-0.3px`
- Text color: `#46617B`

### Pricing / Number Blocks

Numbers are large, navy, and tightly spaced.

- Price label: `17.5px/24.5px`, muted
- Price number: `52.5px/73.5px`, weight `650`, letter spacing `-1.05px`
- Keep pricing modules structured and white-space heavy.

### Mobile Menu

Mobile menu appears as a white bottom sheet.

- Sheet background: white
- Radius: `20px 20px 0 0`
- Opener radius: `12px`
- Padding: `5px 0 75px`
- CTA remains pink pill

## Implementation Notes

Use the companion CSS file at `design-system/cardaq-system.css` as the canonical starting point. New components should consume the tokens before adding custom styles.
