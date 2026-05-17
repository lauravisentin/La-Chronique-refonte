# Fonts

The brand's exact webfonts were not provided. The substitutions below are the
closest matches in **spirit** and are loaded from **Google Fonts** in
`colors_and_type.css`.

## Wordmark — geometric thin sans (with stencil-style notches)

The "la chronique" wordmark is a **thin (Light, ~300)**, low-contrast,
geometric sans with subtle stencil-style notches in some terminals. It is
generously letter-spaced and always set lowercase. It's likely a custom face
or a member of one of these families:

- **Geometria** / **Geometria Stencil** (Fontfabric)
- **Avenir** / **Avenir Stencil**
- **Tenez** (similar humanist proportions)
- **Cera Stencil**

**Substitute**: **[Jost](https://fonts.google.com/specimen/Jost)** weights 200 and 300, on Google Fonts. Jost is geometric, low-contrast, and reads at a similar weight when generously tracked. *Not* a pixel-perfect match — the stencil notches are absent — but the closest free option.

## Descriptor — thin classical serif

The "Restaurant" mark above the wordmark is a **thin classical serif** in
extreme letter-spacing (around `0.32em`). It evokes Trajan, Optima Roman, or
Garamond small caps.

**Substitute**: **[Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)** regular, 400.

## Editorial body — generous serif

The about-page body and any long-form editorial copy is set in a **classical
serif** (likely Adobe Garamond Pro, Caslon, or similar on the live site).

**Substitute**: **Cormorant Garamond** or **EB Garamond** — both ship with
Google Fonts and pair with Jost cleanly.

## UI / utility — neutral geometric sans

We reuse **Jost** at regular/medium for forms, navigation, and footers so the
type system has one sans-serif voice across the brand. **Inter Tight** is also
available as a fallback for very small UI labels.

---

## Suggested licensed swaps if the brand owns one

| Role | Substitute (current) | Likely licensed face |
|---|---|---|
| Wordmark | Jost Light | Geometria Light, Avenir Next Ultra Light, Cera Stencil Light |
| Descriptor | Cormorant Garamond Regular | Trajan Pro, Optima Roman, Mrs Eaves |
| Editorial body | Cormorant Garamond | Adobe Garamond Pro, Caslon, Tiempos Text |
| UI / labels | Jost | Avenir Next, Söhne, Untitled Sans |

When the team supplies licensed files (`.woff2` preferred), drop them into
this folder and rewrite the `@import` at the top of `colors_and_type.css` to a
local `@font-face` block.

---

## What we know from the markup

The site is built on **WordPress** with a custom theme at
`wp-content/themes/lachronique/`. The fetched HTML does not include the
inline `@font-face` declarations and the host blocks cross-origin CSS reads,
so we could not introspect the bundle directly.
