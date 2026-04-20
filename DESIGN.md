# Design System Strategy: The Technical Editorial
 
## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Intellect."** 
 
We are moving away from the "template-heavy" look of generic portfolios. Instead, we are building a high-end editorial experience that mirrors the precision of clean code and the depth of complex systems. The goal is to present an IT student not just as a learner, but as a curator of technology. 
 
By leveraging **intentional asymmetry**, **luminous accents**, and **tonal depth**, we create a digital environment that feels premium and authoritative. We replace rigid structural lines with sophisticated layering, ensuring the content breathes while maintaining a "tech-forward" edge.
 
---
 
## 2. Colors & Surface Philosophy
The palette is rooted in a deep, nocturnal foundation (`surface: #0e141a`) punctuated by high-energy, vibrant teals (`primary: #3cd7ff`).
 
### The "No-Line" Rule
To achieve a high-end feel, **1px solid borders are prohibited for sectioning.** We define boundaries through tonal transitions. Use a background shift (e.g., transitioning from `surface` to `surface_container_low`) to signal a new context. This creates a more organic, seamless flow that feels designed, not "assembled."
 
### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials. 
- **Base Layer:** `surface` (#0e141a) for the overall canvas.
- **Section Layer:** `surface_container_low` (#161c22) for large content blocks.
- **Interaction Layer:** `surface_container_high` (#252b31) for cards and interactive elements.
- **Nesting:** To create "sunken" depth (common for code blocks), use `surface_container_lowest` (#090f15) inside a higher container.
 
### The "Glass & Gradient" Rule
For hero elements and floating navigation, use **Glassmorphism**.
- **Values:** `surface_variant` at 40-60% opacity with a `20px` backdrop-blur.
- **Signature Gradients:** Main CTAs or data visualizations should utilize a linear gradient from `primary` (#3cd7ff) to `primary_container` (#00829d) at a 135-degree angle. This adds a "soul" to the tech-heavy interface.
 
---
 
## 3. Typography
We utilize a pairing of **Space Grotesk** for headlines and **Inter** for functional text. 
 
- **Display & Headline (Space Grotesk):** This typeface offers a rhythmic, tech-industrial feel. We use a "tight" letter-spacing (-0.02em) for `display-lg` to create a bold, editorial impact.
- **Body & Label (Inter):** Inter provides neutral, high-legibility support. Its mathematical precision complements the more expressive headlines.
- **Hierarchy as Identity:** Use extreme scale contrast. A `display-lg` heading next to a `body-md` description creates an intentional, high-fashion "Tech Journal" aesthetic.
 
---
 
## 4. Elevation & Depth
We eschew traditional drop shadows in favor of **Tonal Layering**.
 
- **The Layering Principle:** Softness is strength. To "lift" a project card, simply place a `surface_container_highest` element on a `surface_container_low` background. 
- **Ambient Shadows:** For floating modals, use a "Cyan-Tinted Glow" rather than a grey shadow.
    - **Value:** `0px 20px 40px rgba(0, 103, 126, 0.12)` (using `inverse_primary` color).
- **The "Ghost Border" Fallback:** If a tactile edge is required for accessibility, use the `outline_variant` (#404751) at **15% opacity**. It should be felt, not seen.
 
---
 
## 5. Components
 
### Project Cards
- **Structure:** No borders. Use `surface_container_high`.
- **Interaction:** On hover, the background shifts to `surface_container_highest` and the `primary` accent becomes more luminous.
- **Separation:** Use `48px` of vertical whitespace instead of divider lines.
 
### Code Snippets (The "Terminal" Style)
- **Background:** `surface_container_lowest`.
- **Typography:** Use a monospaced font (e.g., JetBrains Mono) at `label-md` size.
- **Styling:** Add a subtle `primary` glow to the top-left corner (a 2px high-opacity teal line) to signify an "active" or "premium" snippet.
 
### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`) with `on_primary` text. Use `radius-md` (0.375rem) for a modern, sharp-yet-approachable edge.
- **Secondary:** Transparent background with a "Ghost Border."
- **Tertiary:** Text-only with a `primary` underline that expands on hover.
 
### Skills & Experience
- **Experience Timeline:** Avoid the vertical line. Use a "Stepped Surface" approach where each experience block is a slightly different tonal shift of `surface_container`.
- **Skill Chips:** Use `secondary_container` with `on_secondary_container` text. Roundedness: `full`.
 
---
 
## 6. Do's and Don'ts
 
### Do:
- **Embrace Negative Space:** Allow at least `80px` to `120px` of padding between major sections to emphasize the "Editorial" feel.
- **Use Intentional Asymmetry:** Align your hero text to the left but place a floating 3D asset or code snippet offset to the right. 
- **Animate Transitions:** Use a "Bezier 0.4, 0, 0.2, 1" (Standard Easing) for all surface color shifts.
 
### Don't:
- **Don't use 100% white (#ffffff) for body text.** Use `on_surface_variant` (#c0c7d3) for secondary text to reduce eye strain and maintain the "nocturnal" vibe.
- **Don't use standard shadows.** If the shadow looks like a "smudge," it's too dark. It should look like an ambient light leak.
- **Don't use dividers.** If the content feels cluttered, increase the spacing scale or change the background tone of the adjacent section.