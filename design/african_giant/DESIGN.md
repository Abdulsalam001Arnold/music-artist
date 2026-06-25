---
name: African Giant
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c4b0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8f7c'
  outline-variant: '#504536'
  surface-tint: '#f9bc51'
  primary: '#f9bc51'
  on-primary: '#432c00'
  primary-container: '#c9922a'
  on-primary-container: '#472f00'
  inverse-primary: '#7e5700'
  secondary: '#abcfb8'
  on-secondary: '#163627'
  secondary-container: '#30503e'
  on-secondary-container: '#9dc1ab'
  tertiary: '#cac6bf'
  on-tertiary: '#31302b'
  tertiary-container: '#9f9c95'
  on-tertiary-container: '#35342e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#f9bc51'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#c7ebd4'
  secondary-fixed-dim: '#abcfb8'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#2d4d3c'
  tertiary-fixed: '#e6e2da'
  tertiary-fixed-dim: '#cac6bf'
  on-tertiary-fixed: '#1c1c17'
  on-tertiary-fixed-variant: '#484741'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: DM Serif Display
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: DM Serif Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: DM Serif Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
  headline-md:
    fontFamily: DM Serif Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1440px
---

## Brand & Style

This design system embodies the "Afrocentric-Modern" aesthetic, merging high-fashion cinematic luxury with the raw, rhythmic energy of contemporary African culture. The brand personality is powerful, grounded, and unapologetically premium. It avoids the polished sterility of standard tech apps, opting instead for a textured, editorial feel that prioritizes visual impact and storytelling.

The style is a fusion of **Minimalism** and **Tactile/Skeuomorphic** elements. While the layout remains clean and spacious (Minimalist), the surfaces are treated with organic textures—worn grain, film dust, and subtle earthy patterns—to create a sense of physical history and "lived-in" luxury. Large-scale imagery and high-contrast typography evoke a cinematic poster quality, positioning the subject as a global icon.

## Colors

The palette is rooted in deep, earthy foundations to create a high-drama, low-light environment. 

- **Primary (Burnt Gold):** Used sparingly for high-action touchpoints, critical CTAs, and accents. It represents prestige and the "Giant" persona.
- **Secondary (Deep Forest Green):** Provides a rich, tonal alternative to black for container backgrounds, hover states, and atmospheric overlays.
- **Neutral (Near-Black):** The canvas. This creates the infinite depth required for a cinematic experience.
- **Off-White:** The primary color for legibility. It is softened to avoid the harshness of pure white against dark backgrounds, maintaining the "worn" editorial feel.

Color application should follow a 60-30-10 rule: 60% Near-Black, 30% Forest Green/Off-White, and 10% Gold highlights.

## Typography

Typography is the primary driver of the "African Giant" personality. We use a three-tier system:

1.  **Display (DM Serif Display):** A high-contrast, authoritative serif. It is used for hero statements and section titles. On desktop, this should be massive and sometimes overlap imagery for a layered, collage-like effect.
2.  **Body (Hanken Grotesk):** A modern, sharp sans-serif that balances the traditional weight of the serif. It ensures high readability for bio text, tracklists, and descriptions.
3.  **Metadata (Space Mono):** Used for technical details (tour dates, timestamps, SKU numbers). The monospaced nature adds a "documentary" or "archival" feel to the content.

Maintain tight leading on headlines to emphasize the "block" feel of the text, while providing generous line-height for body copy to ensure a premium, airy reading experience.

## Layout & Spacing

The design system utilizes a **Fluid-Fixed Hybrid Grid**. 
- **Desktop:** A 12-column grid with wide 80px margins to create a "letterboxed" cinematic feel. 
- **Mobile:** A 4-column grid with 20px margins.

Spacing follows an 8px base unit, but emphasizes asymmetrical layouts to reflect the "raw energy" of the brand. Elements should not always feel perfectly centered; intentional offsets and varying column spans (e.g., an image spanning columns 1-7 while text sits in columns 9-11) create a more dynamic, editorial rhythm.

Vertical spacing between sections should be aggressive (160px+) to allow the high-quality imagery to "breathe" and set the mood before the user encounters more data-heavy content.

## Elevation & Depth

In this dark-mode system, depth is created through **Tonal Layering** and **Texture** rather than traditional drop shadows.

- **Base Layer:** The deepest `#0a0a0a` with a subtle "worn grain" CSS filter or SVG noise overlay.
- **Raised Surfaces (Cards/Modals):** Use the Deep Forest Green `#1a3a2a` with a very low-opacity 1px gold border to define the edge.
- **Interactions:** Hover states should utilize a "glow" effect rather than a shadow—a soft, radial gradient of Burnt Gold that appears to emanate from behind the element, mimicking stage lighting.
- **Parallax:** Background textures and large typography should move at different scroll speeds to create a 3D cinematic parallax effect.

## Shapes

To maintain the "Raw Energy" and "Brutalist-Modern" narrative, this design system uses **Sharp (0px)** corners for all primary containers, buttons, and images. 

Squared edges convey a sense of strength, architectural permanence, and confidence. Rounding should be avoided entirely, except for very specific iconography or small utility tags where a pill shape might be used to denote "Status" or "Live" indicators. All structural elements—cards, input fields, and buttons—remain strictly rectangular.

## Components

### Buttons
Primary buttons are solid Burnt Gold with Off-White or Near-Black text. They are wide and utilize the `label-sm` font style. Secondary buttons are "Ghost" style: 1px Off-White borders with sharp corners and no fill.

### Cards & Media
Images are the hero of the system. Cards should have no visible background; instead, the image itself acts as the container. Typography overlays should be used for titles, using the `headline-md` or `label-sm` styles depending on the card's hierarchy.

### Input Fields
Underline style only. A 1px Off-White border on the bottom of the field. Upon focus, the border transitions to Burnt Gold. No background fill.

### List Items (Tour Dates)
A clean, horizontal row format. Date (Mono), City/Venue (Serif), and "Tickets" (Button). Use a thin 1px `#1a3a2a` divider between rows.

### Navigation
A minimalist top bar that is transparent until scroll. Links use `label-sm`. The logo (Burna Boy / African Giant) should be centered and significantly larger than other nav items, utilizing the `display-xl` font style reduced for the header.