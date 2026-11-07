---
name: Kinetic Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e484d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e797e'
  outline-variant: '#bdc8ce'
  surface-tint: '#006780'
  primary: '#00647c'
  on-primary: '#ffffff'
  primary-container: '#007f9d'
  on-primary-container: '#fafdff'
  inverse-primary: '#6cd3f7'
  secondary: '#006c4e'
  on-secondary: '#ffffff'
  secondary-container: '#97f5cc'
  on-secondary-container: '#007353'
  tertiary: '#286652'
  on-tertiary: '#ffffff'
  tertiary-container: '#43806a'
  on-tertiary-container: '#f5fff8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#6cd3f7'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e61'
  secondary-fixed: '#97f5cc'
  secondary-fixed-dim: '#7bd8b1'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#b0f0d6'
  tertiary-fixed-dim: '#95d3ba'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#0b513d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
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
  margin: 1.25rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers a high-trust, high-precision SaaS interface tailored for mobile-first financial and enterprise interactions. The visual language blends ultra-clean modern minimalism with subtle luminous accents, pairing crisp, distraction-free surfaces with purposeful vitality. 

The emotional resonance is anchored in authority, absolute clarity, and technological sophistication. It avoids visual clutter, relying instead on deliberate white space, nuanced cyan-to-emerald gradient transitions, and disciplined geometry. Interactions should feel frictionless, instantaneous, and premium—evoking the security of a premier institutional tool alongside the swift fluidity of contemporary digital product design.

## Colors

The palette establishes a high-contrast, clean-room foundation dominated by light, crystalline surfaces and balanced by deep, authoritative tones.

- **Primary (`#0891B2`, accented by `#06B6D4`)**: Represents directional clarity, interactive states, key actions, and digital intelligence.
- **Secondary (`#047857`, supported by `#059669`)**: Grounded emerald green conveying fiscal health, validation, security, and growth.
- **Tertiary (`#064E3B`)**: A deep, saturated evergreen used for low-frequency structural accents, high-priority visual weights, and deep contrast elements.
- **Neutral & Slate (`#0F172A`)**: The primary anchor for text, high-emphasis icons, and structural frames. Paired with secondary text shades (`#475569`) and subtle border tones (`#E2E8F0`).
- **Canvas & Surfaces**: Base canvas utilizes pure white (`#FFFFFF`) layered over soft tint backgrounds (`#F8FAFC`).
- **Gradients**: Linear shifts strictly follow a 135-degree axis from vibrant cyan (`#06B6D4`) to deep emerald (`#047857`), reserved exclusively for primary hero callouts, balance visualizations, and high-impact completion metrics.

## Typography

The type scale relies entirely on Plus Jakarta Sans, utilizing its rounded, geometric precision to evoke an approachable yet strictly technical atmosphere. 

- Large titles and numerical readouts use negative letter tracking to ensure visual cohesion and density on mobile screens.
- Numerical data, transaction amounts, and dashboard KPIs must always use tabular figures (`tnum`) to maintain clean baseline and vertical alignment.
- Labels enforce tighter vertical sizing with subtle positive tracking to optimize scannability in dense transactional listings.

## Layout & Spacing

The mobile layout operates on a flexible 4-column structure spanning edge margins of 20px (`1.25rem`) with 16px (`1rem`) gutters between components. On larger viewports or tablets, this expands into an 8-column layout with 24px gutters.

Vertical rhythm is governed by a strict 4px/8px modular scale. Dense transactional feeds utilize tight 8px gaps (`space-sm`), while structural separations between metric cards and action segments use 24px (`space-lg`) to preserve negative space and avoid interface fatigue.

## Elevation & Depth

Depth is established via tonal stratification rather than heavy drop shadows, reinforcing a light, technical minimalism:

- **Surface 0 (Canvas)**: `#F8FAFC` base application background.
- **Surface 1 (Cards & Modules)**: Pure `#FFFFFF` surfaces defined by a crisp 1px outline (`#F1F5F9`) paired with a diffused ambient shadow: `0 4px 20px -2px rgba(15, 23, 42, 0.04)`.
- **Surface 2 (Floating Controls & Navigation Bars)**: Translucent white (`rgba(255, 255, 255, 0.85)`) with an integrated `backdrop-filter: blur(16px)` and a subtle bottom border (`rgba(226, 232, 240, 0.8)`).
- **Surface 3 (Modals & Overlays)**: `#FFFFFF` resting atop a dimmed slate backdrop (`rgba(15, 23, 42, 0.4)`), lifted by a dual-axis shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`.

## Shapes

The interface embraces smooth, approachable contours without compromising corporate structure:

- Primary buttons, input containers, and micro-cards implement an 8px (`0.5rem`) radius.
- Structural container cards, metric tiles, and bottom-sheet drawers employ a 16px (`1rem`) corner radius.
- System pills, status chips, and avatar containers use a fully rounded 9999px pill profile.
- Decorative elements use geometric precision: subtle 45-degree angled accents or crisp circular tracking nodes for state indicators.

## Components

### Buttons
- **Primary**: Full-width or inline, 48px height. Solid gradient fill (`linear-gradient(135deg, #06B6D4 0%, #047857 100%)`) or solid `#0891B2`, white label (`label-lg`), 8px border radius. Active state scales subtly to `0.98`.
- **Secondary**: `#FFFFFF` background, 1px solid `#E2E8F0`, text in slate `#0F172A`. Active state tints to `#F8FAFC`.
- **Ghost/Tertiary**: No background, primary `#0891B2` text with integrated directional chevron.

### Input Fields
- Enclosed 48px height containers with `#FFFFFF` background and 1px border (`#E2E8F0`).
- Focus state highlights with a crisp 1.5px border in `#0891B2` paired with an ultra-soft cyan glow (`0 0 0 3px rgba(6, 182, 212, 0.12)`).
- Floating labels transition from slate `#475569` to `#0891B2` on focus.

### Cards & Modules
- Transaction and KPI cards feature `#FFFFFF` canvas, 16px corner radius, and 16px internal padding.
- Visual anchors (such as account balances) incorporate micro cyan-to-emerald gradient badges in the top-right corner to reinforce hierarchy.

### Chips & Badges
- Pill-shaped (`rounded-full`) tags with compact padding (4px vertical, 10px horizontal).
- **Active / Positive Status**: Subtle emerald wash (`#ECFDF5`) with bold text in `#047857`.
- **Pending / In-Transit Status**: Cyan wash (`#ECFEFF`) with text in `#0891B2`.

### Checkboxes & Radios
- 20px smooth-cornered boxes (4px radius) or circular radios.
- Unchecked: 1.5px border in `#CBD5E1`.
- Checked: Solid `#047857` background containing an interior crisp white check mark icon.

### Transaction Lists
- Separated items using 1px border lines in `#F1F5F9`.
- Dynamic lead icon containers: 40px rounded squares (8px radius) tinted with soft contextual pastels (`#ECFEFF` or `#ECFDF5`), holding sharp single-tone iconography.