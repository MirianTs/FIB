---
name: Executive Emerald
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006577'
  on-tertiary: '#ffffff'
  tertiary-container: '#008096'
  on-tertiary-container: '#f9fdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.025em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system powers a high-trust professional ecosystem bridging institutional enterprises and verified professionals. The identity projects authority, cryptographic precision, and operational clarity. It merges the stability of private equity infrastructure with the velocity of modern networked talent platforms.

The aesthetic blends **Modern Corporate** structure with **Subtle Glassmorphism** and tactile surface fidelity. Layouts use disciplined visual hierarchy, controlled hairline borders, ultra-fine frosted overlays, and deep atmospheric contrasts. Interfaces must feel composed and intentional: every element signals institutional stability, data integrity, and premium utility.

## Colors

The palette balances institutional depth with growth-driven vitality. 

- **Primary Emerald (`#059669`)**: Core interactive driver, verified signals, and principal actions. Paired with `#10B981` for active focus accents, `#047857` for pressed states, and `#D1FAE5` for soft contextual tinted fills.
- **Deep Navy (`#0F172A`)**: The institutional anchor. Used for primary typography in light mode, authoritative badges, and foundational framing. In dark mode, `#0A1128` forms the global viewport canvas while `#1E293B` serves as elevated card layers.
- **Intelligence Cyan (`#06B6D4`)**: Reserved strictly for predictive matching, algorithmic insights, and automated governance badges.
- **Neutrals**: `#F8FAFC` provides a clinical light-canvas foundation, `#FFFFFF` isolates active components, and `#E2E8F0` / `#334155` construct crisp structural divides.
- **Functional Semantics**: `#F59E0B` (Amber) signals pending verifications and audit warnings; `#EF4444` (Rose) marks systemic blocks and contract terminations.

## Typography

The typography pairings contrast institutional authority with utilitarian scanning efficiency.

- **Plus Jakarta Sans** delivers structural balance to all display headers, subheadings, and interactive micro-labels. Its modern geometric curves lend elegance to fintech metrics and corporate identities.
- **Inter** handles dense data grids, analytics feeds, and narrative documentation. Its neutral vertical metrics maximize reading endurance across high-density surfaces.
- **Uppercase Metadata (`label-caps`)**: Used for category tickers, system status markers, and micro-metric headers. Rendered with explicit wide letter-spacing (`0.06em`) to preserve legibility at small sizes.

## Layout & Spacing

The layout is built on an adaptable 12-column fluid grid system pinned to an 8pt spatial baseline (with 4pt sub-increments for compact inputs).

- **Grid Architecture**:
  - **Desktop (≥1024px)**: 12 columns, `gutter: 1.5rem`, outer section margin minimum `2rem`. Max container limit of `1280px` for optimal data dashboards.
  - **Tablet (768px - 1023px)**: 8 columns, `gutter: 1.25rem`, outer margin `1.5rem`.
  - **Mobile (<768px)**: 4 columns, `gutter: 1rem`, outer margin `1rem`. Structural rows stack vertically.
- **Touch Ergonomics**:
  - Mobile targets mandate a minimum interactive bounds of `44px × 44px`.
  - Action-heavy views shift key conversion actions to fixed bottom bars (`safe-area-inset-bottom` + `1rem`).

## Elevation & Depth

Visual hierarchy uses tonal surface layering combined with low-radius ambient occlusion rather than heavy drop shadows:

- **Surface Tiers**:
  - **Base Canvas (Level 0)**: `#F8FAFC` (Dark: `#0A1128`).
  - **Flat Container (Level 1)**: Solid `#FFFFFF` (Dark: `#0F172A`) framed by a hairline border (`1px solid #E2E8F0` / Dark: `1px solid #1E293B`).
  - **Floating/Elevated (Level 2)**: Used for cards and modals. Soft shadow tinted with deep navy: `0 8px 24px -4px rgba(10, 17, 40, 0.06), 0 2px 6px -1px rgba(10, 17, 40, 0.04)`.
  - **Overlay / Sticky Nav (Level 3)**: Frosted glass finish with `backdrop-filter: blur(12px)` over a 75% translucent base (`rgba(255, 255, 255, 0.75)` / Dark: `rgba(15, 23, 42, 0.8)`).
- **Inner Depth**: Inset hair-borders (`box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6)`) impart a subtle beveled edge to primary buttons and active metric tiles.

## Shapes

The design system uses a rounded shape language to soften dense enterprise data while maintaining crisp technical precision.

- **Standard Inputs, Badges, & Chips**: `0.5rem` (`rounded-md` equivalent to base 2) creates a unified interactive rhythm across form controls.
- **Standard Surface Panels & Cards**: `1rem` (`rounded-lg`) provides container structure without wasting corner real estate.
- **Modals, Floating Panels, & Hero Banners**: `1.5rem` (`rounded-xl`) defines standalone floating contextual overlays.
- **Role Badges & Metric Pills**: Fully rounded pill shapes (`9999px`) for individual entity tags and status trackers.

## Components

### Buttons
- **Primary**: Background `#059669`, text `#FFFFFF`, font `label-lg`. Inset top shadow `inset 0 1px 0 rgba(255,255,255,0.2)`. Hover: `#047857`. Focus: ring `2px #10B981` with `2px` offset. Minimum height `44px`.
- **Secondary (Navy Institutional)**: Background `#0F172A`, text `#FFFFFF`. Hover: `#1E293B`.
- **Tertiary / Outline**: Surface transparent, border `1px solid #E2E8F0`, text `#0F172A`. Hover: `#F8FAFC`.

### Role Distinction Badges
- **Company**: Background `#0F172A` (Deep Navy), text `#FFFFFF`, with an integrated `#10B981` leading verified pip. Outlined with `1px solid #334155`.
- **Individual**: Background `#D1FAE5`, text `#047857`, border `1px solid #A7F3D0`.
- **AI Intelligence**: Background `rgba(6, 182, 212, 0.1)`, text `#0891B2`, border `1px solid rgba(6, 182, 212, 0.3)`.

### Cards & Surfaces
Constructed on white surface background with `1px solid #E2E8F0` and `1rem` corner radius. Padding is uniformly `1.5rem`. Card headers feature `headline-md` paired with uppercase label tickers. In dark mode, card surfaces map to `#1E293B` bordered by `#334155`.

### Input Fields
Height `44px`, corner radius `0.5rem`, border `1px solid #CBD5E1`, background `#FFFFFF`. Active focus changes the border to `#059669` and applies a `3px` glow ring tinted to `#D1FAE5`. Placeholder copy sits in `#64748B`.

### Segmented Controls
Pill or `0.5rem` rounded track in `#F1F5F9` (`#0F172A` in dark mode) containing floating active segments in `#FFFFFF` with a subtle elevation drop shadow (`0 2px 4px rgba(0,0,0,0.06)`). Minimum touch target height `44px` on mobile screens.

### Checkboxes & Radios
Dimensions `20px × 20px`, border `1.5px solid #CBD5E1`. Checked state animates smoothly to fill `#059669` with a crisp white tick or pip. Focus states use an outer emerald halo (`#D1FAE5`).