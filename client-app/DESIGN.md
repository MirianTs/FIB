---
name: FIB Premium Freelance
colors:
  surface: '#041423'
  surface-dim: '#041423'
  surface-bright: '#2b3b4b'
  surface-container-lowest: '#000f1e'
  surface-container-low: '#0c1d2c'
  surface-container: '#112130'
  surface-container-high: '#1b2b3b'
  surface-container-highest: '#263646'
  on-surface: '#d4e4f9'
  on-surface-variant: '#bccac1'
  inverse-surface: '#d4e4f9'
  inverse-on-surface: '#223242'
  outline: '#86948c'
  outline-variant: '#3d4a43'
  surface-tint: '#5ddcab'
  primary: '#5ddcab'
  on-primary: '#003827'
  primary-container: '#12a87b'
  on-primary-container: '#003423'
  inverse-primary: '#006c4d'
  secondary: '#b1cad7'
  on-secondary: '#1b333e'
  secondary-container: '#324a55'
  on-secondary-container: '#a0b9c6'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7cf9c6'
  primary-fixed-dim: '#5ddcab'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#005139'
  secondary-fixed: '#cde6f4'
  secondary-fixed-dim: '#b1cad7'
  on-secondary-fixed: '#041e28'
  on-secondary-fixed-variant: '#324a55'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#041423'
  on-background: '#d4e4f9'
  surface-variant: '#263646'
typography:
  headline-xl:
    fontFamily: Noto Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Noto Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Noto Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.75rem
  margin: 1rem
  margin-md: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system embodies a calm, authoritative, and refined aesthetic tailored for high-stakes freelance contracts, structured creative briefs, and project execution. Drawing from modern high-end fintech and curated editorial workspaces, it communicates trust, precision, and forward-thinking professionalism.

The visual style merges structured depth with low-friction clarity:
- **Atmosphere:** Controlled, focused, and executive. Deep, quiet foundations pair with focused emerald accents and restrained gold markers to emphasize value without visual noise.
- **Tone:** Professional, intelligent, and seamless. Interfaces avoid unnecessary friction, presenting complex brief negotiations and deliverables cleanly in the Georgian script.
- **Aesthetic Movement:** Corporate Modern infused with refined tonal surfacing. No aggressive neon glows or harsh contrasts; interactions utilize soft depth, pristine outlines, and calm luminescence.

## Colors
The palette delivers balanced visual hierarchy across dark and light modes, prioritizing clarity for complex brief parsing, contract milestones, and collaborative workflows.

### Dark Mode Palette (Default)
- **Canvas Base:** `#071827` (Deep Navy) — primary background delivering calm immersion.
- **Surface Elevation:** `#122B35` (Navy Card) — primary container tier for cards, sheets, and active panels.
- **Surface Elevated High:** `#1A3B47` — popovers, menus, raised chips.
- **Primary CTA:** `#12A87B` (Emerald Green) — reserved for key commitments, primary buttons, and milestone progression.
- **Accent & Luminescence:** `#8BE0C1` (Mint) — ambient highlights, subtle AI assistance tints, and focused focus indicators.
- **Prestige Accent:** `#D4AF37` (Muted Gold) — high-value budget labels, verified enterprise partner marks, and contract locks.
- **Text & Content:**
  - High Emphasis: `#F3F7F5`
  - Medium Emphasis: `#9CB3BE`
  - Disabled / Hairlines: `#23424E`

### Light Mode Palette
- **Canvas Base:** `#F3F7F5` (Soft Cloud Light) — clean, glare-free background.
- **Surface Elevation:** `#FFFFFF` — crisp card and sheet surface.
- **Surface Elevated High:** `#E7EFEB` — muted neutral surfaces and chips.
- **Primary CTA:** `#12A87B` — consistent emerald action color.
- **Secondary Surface:** `#E3EDE9` (Subtle Navy-Mint tint) — structural secondary actions.
- **Text & Content:**
  - High Emphasis: `#071827`
  - Medium Emphasis: `#4B6673`
  - Hairlines & Borders: `#D2DFD9`

## Typography
Typography is anchored by `Noto Sans Georgian`, configured with a fallback to `sans-serif`. This typeface balances contemporary geometric neutrality with proper structural proportions for Georgian letterforms (Mkhedruli).

- **Vertical Rhythm:** Georgian glyphs require deliberate vertical headroom to prevent ascender and descender collisions. Line-height tokens are calibrated wider than standard Latin baselines.
- **Hierarchy:**
  - `headline-xl` and `headline-lg` are reserved for budget figures, brief milestones, and onboarding introductions.
  - `title-md` and `title-lg` anchor cards, section headers, and bottom sheet titles.
  - `body-md` serves as the primary conversational and brief reading size.
  - `label-sm` is employed for status tags, system metrics, and transaction timestamps.

## Layout & Spacing
The layout follows an 8pt-based fluid mobile grid with dedicated constraints:
- **Mobile Foundation:** A 4-column layout on mobile viewports with `16px` outer margins and `12px` to `16px` gutters. Content containers stretch smoothly across safe layout zones.
- **Tablet / Expanded Views:** Scales to 8 columns with `24px` margins and a maximum content width capped at `640px` for conversational sheets and brief inspection modals to maintain ergonomic scanning speed.
- **Vertical Rhythm:** Structural stacks use `space-md` (`16px`) between grouped list items, `space-sm` (`8px`) inside compound input fields, and `space-xl` (`32px`) between major content phases.

## Elevation & Depth
Depth relies on deliberate tonal layering rather than dense black drop shadows, maintaining an organic visual flow across both light and dark modes.

- **Level 0 (Base Canvas):** `#071827` (Dark) / `#F3F7F5` (Light). Flat, absorbs the full viewport.
- **Level 1 (Card & Content Blocks):** `#122B35` with a subtle `1px` inner border (`rgba(255, 255, 255, 0.05)` in dark mode, `rgba(7, 24, 39, 0.06)` in light mode).
- **Level 2 (Interactive Floating & Modals):** Tinted ambient drop shadow: `0 8px 24px -4px rgba(7, 24, 39, 0.45)`, backed by a `1px` stroke tinted to `#8BE0C1` at 12% opacity.
- **Level 3 (AI Accent Elevation & Floating Navigation):** Center navigation buttons and high-priority AI nodes incorporate an ambient, low-saturation mint diffuse glow: `0 6px 20px 0 rgba(18, 168, 123, 0.28)`.

## Shapes
The design system enforces a calibrated curvature between `12px` and `16px` to maintain a professional, ergonomic feel.

- **Primary Cards & Containers:** `16px` (`rounded-lg`) border radius across brief listings, offer cards, and conversation containers.
- **Interactive Controls (Inputs, Standard Buttons):** `12px` border radius providing a sturdy, tactile appearance.
- **Chips, Badges, & Navigation Capsules:** Fully pill-shaped (`9999px`) or `12px` depending on data density.
- **Bottom Navigation Dock:** `24px` top border curvature with an integrated circular notch for the central action button.

## Components

### Buttons
- **Primary Emerald Button:**
  - *Resting:* Background `#12A87B`, text `#FFFFFF`, font weight `600`, radius `12px`, padding `14px 20px`.
  - *Pressed/Active:* Background `#0E8662`, scale `0.98`.
  - *Disabled:* Background `#122B35` at 50% opacity, text `#9CB3BE` at 40% opacity.
- **Secondary Navy Button / Outline:**
  - *Resting:* Background `#122B35`, border `1px solid rgba(139, 224, 193, 0.2)`, text `#F3F7F5`.
  - *Hover/Active:* Border color `#8BE0C1`, text `#8BE0C1`.
- **Ghost Button:**
  - *Resting:* Transparent background, text `#8BE0C1`, no border.
  - *Active:* Background `rgba(18, 168, 123, 0.08)`.

### Input Fields & Georgian Mobile Formats
- **Structure:** Vertical stack with persistent Georgian label (`label-md`, `#9CB3BE`).
- **Input Container:** Background `#122B35`, radius `12px`, border `1px solid #23424E`, padding `12px 16px`, height `48px`.
- **Country Prefix (`+995`):** Fixed lead item separated by a subtle vertical border (`1px solid #23424E`), formatted as `+995 (5XX) XX-XX-XX` with high-emphasis text `#F3F7F5`.
- **States:**
  - *Focused:* Border `1.5px solid #8BE0C1`, ambient outline glow `0 0 0 3px rgba(139, 224, 193, 0.15)`.
  - *Error:* Border `1.5px solid #FF5A5F`, helper text below in `#FF5A5F` (`body-sm`).

### Chat Bubbles
- **User Bubble:** Alignment right, background `#122B35`, border `1px solid rgba(255, 255, 255, 0.06)`, text `#F3F7F5`, radius `16px 16px 4px 16px`.
- **AI Bubble (FIB Assistant):** Alignment left, background `linear-gradient(135deg, rgba(18, 168, 123, 0.12) 0%, rgba(18, 43, 53, 0.95) 100%)`, border `1px solid rgba(139, 224, 193, 0.25)`, text `#F3F7F5`, radius `16px 16px 16px 4px`. Includes a subtle `14px` emerald indicator icon at the header.
- **Offer Partner Bubble:** Alignment left, background `#122B35`, border-left `3px solid #D4AF37`, text `#F3F7F5`, radius `4px 16px 16px 16px`.

### AI Suggestion Chips
- Horizontal scrolling pill container.
- Background `rgba(18, 168, 123, 0.1)`, border `1px solid rgba(139, 224, 193, 0.3)`, text `#8BE0C1`, radius `9999px`, padding `6px 14px`, text style `label-md`. Includes leading star/spark icon.

### Offer Card
- Container: Background `#122B35`, radius `16px`, border `1px solid rgba(255, 255, 255, 0.05)`, padding `16px`.
- Header: Partner name and avatar with a prestige status indicator for verified accounts.
- Budget Row: High-emphasis typography in Gold `#D4AF37` (`20px`, bold) formatted with the Georgian Lari sign (`₾`).
- Tags: Horizontal pill stack with `#071827` background and `#9CB3BE` text (`body-sm`), radius `8px`, padding `4px 8px`.
- Action Footer: Integrated primary emerald action button (`შეთავაზების ნახვა` / View Offer).

### Status Badges
- **Active / პროგრესში:** Background `rgba(18, 168, 123, 0.15)`, text `#8BE0C1`, dot indicator `#12A87B`.
- **Pending Review / განხილვაში:** Background `rgba(212, 175, 55, 0.15)`, text `#D4AF37`, dot indicator `#D4AF37`.
- **Completed / დასრულებული:** Background `rgba(156, 179, 190, 0.15)`, text `#9CB3BE`, dot indicator `#9CB3BE`.

### Bottom Navigation Bar
- Fixed dock at viewport base: Height `68px` + safe area inset, background `#071827` with `92%` backdrop blur, top border `1px solid rgba(255, 255, 255, 0.06)`.
- Left Item: `ინფო` (Info) — icon + label (`label-sm`).
- Right Item: `პროგრესი` (Progress) — icon + label (`label-sm`).
- Raised Center AI Node:
  - Suspended `56x56px` circular button protruding `-20px` above dock baseline.
  - Background: Solid `#12A87B` with subtle radial gradient highlight `#8BE0C1`.
  - Icon: Centered `AI` monogram or spark glyph in `#FFFFFF`.
  - Shadow: Ambient diffuse glow `0 8px 20px rgba(18, 168, 123, 0.35)`.