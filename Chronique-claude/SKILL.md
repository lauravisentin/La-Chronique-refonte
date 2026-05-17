---
name: la-chronique-design
description: Use this skill to generate well-branded interfaces and assets for La Chronique (Restaurant La Chronique, Montréal — Mile-end, depuis 1995), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. The brand is a Michelin-recommended gastronomic restaurant — quiet, editorial, French-Québécois, sage-olive on white, no emoji.

**Important rules.**
- The **logo is rendered as the PNG asset** (`assets/logo-wordmark.png`). Never re-type it, never re-draw it as SVG.
- Photography is provided in `assets/` (façade, dining room, signage, historique). Reuse — do not generate new images.
- Brand colour is **sage olive `#7B7D62`**, on a white ground. **No gradients, no purple, no neon, no emoji.**
- Voice is French (Québec), formal **vous**, literary, slightly old-fashioned. The slogan is *« Le bonheur est dans l'assiette. »*
- Type stack: **Jost** (display/UI) + **Cormorant Garamond** (editorial italic serif). Substitution flagged — see `fonts/README.md`.
- Tokens live in `colors_and_type.css`. Import it in any HTML output.
- A full marketing-website UI kit lives in `ui_kits/website/` — copy components from there when building anything that should match the brand.

**If creating visual artifacts** (slides, mocks, throwaway prototypes), copy the relevant assets out and create static HTML files for the user to view.

**If working on production code**, copy assets and read the rules here to become an expert in designing with this brand. The Cormorant Garamond + Jost Google Fonts pairing is what we have — if the team supplies licensed fonts, swap them into `fonts/` and rewrite the `@import` in `colors_and_type.css`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
