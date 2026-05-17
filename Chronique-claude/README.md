# La Chronique — Design System

> *« Le bonheur est dans l'assiette. »*

This design system captures the visual, editorial, and interaction language of **La Chronique**, a gastronomic restaurant on rue Laurier Ouest in Montréal (Mile End), opened in **March 1995** by chef-owner **Marc De Canck** and joined in 1999 by chef-owner **Olivier de Montigny**. The restaurant was **recommended by the Guide Michelin in 2025**.

The brand is **minimal-modern bistro**: bright white walls, dark walnut floors, leather banquettes, brass-finish pendants, white linen tablecloths. The wordmark is a sage-olive geometric sans with a small flatware mark (fork · knife · spoon). Communication is in **French (Québec)** with a literary, generous voice.

---

## Sources

- **Website**: <https://lachronique.qc.ca/>
- **About page**: <https://lachronique.qc.ca/a-propos/>
- **Menu (Menu Signature & wine list)**: <https://lachronique.qc.ca/menus/>
- **Wine list PDF**: <https://lachronique.qc.ca/wp-content/uploads/2019/05/WINE-SPECTATOR-2026.pdf>
- **Instagram**: <https://www.instagram.com/restolachronique/>
- **Facebook**: <https://www.facebook.com/Restaurant-La-Chronique-156566617717198/>

**Brand assets in `assets/`** were provided directly by the user (façade photos, signage, the sage-olive wordmark, dining-room imagery, historique illustration). Hex tokens below were sampled from these files. No Figma or codebase was attached — typography and the type ramp are reconstructed; see **Caveats** at the bottom.

---

## Index — what's in this folder

| File / folder | What it is |
| --- | --- |
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent-skill entry point — read this first when invoked as a skill. |
| `colors_and_type.css` | CSS custom properties for color tokens and the type ramp. Import in any HTML output. |
| `assets/` | Logos, façade photos, dining-room shots, historique illustration, signage detail. |
| `assets/IMAGE_MANIFEST.md` | Inventory of local + remote brand imagery. |
| `fonts/README.md` | Font substitution notes (we use Jost + Cormorant Garamond as Google-Fonts stand-ins). |
| `preview/` | Design-system cards — colors, type, components, brand. Surface in the Design System tab. |
| `ui_kits/website/` | High-fidelity recreation of the lachronique.qc.ca marketing site. |

---

## Content fundamentals

**Language.** All copy is in **French (Québécois)**. English is rare and only appears in borrowed terms (*bistro, menu*). French is the master; English is a courtesy translation.

**Voice.** Warm, literary, slightly old-fashioned. Long, rhythmic sentences with subordinate clauses and gentle ellipses (« … »). The restaurant talks about itself in the third person more often than the first, and refers to chefs by name. Superlatives are *earned*, not announced — there is no shouting.

**Person.** Third-person narrative ("La Chronique fait partie des grandes tables…"). When the reader is addressed, it is **vous** (formal), never **tu**. The chefs collectively speak as **nous** in the closing menu paragraph.

**Tone & vibe.** Gastronomique, généreux, sans prétention. The word **bonheur** is the brand's anchor — *le bonheur est dans l'assiette* is the recurring refrain. Recurring nouns: *plaisir, qualité, talent, passion, terroir, accord, gourmandise, mignardises*. Adjectives lean classical (*irréprochable, élogieux, épuré, sobre*) rather than trendy.

**Casing.**
- Chef names: **Marc De Canck**, **Olivier de Montigny** (note: lowercase *de* on the second name).
- The wordmark is **always set in lowercase**: `la chronique`. Never `La Chronique` inside the logo lockup. In running prose, "La Chronique" is correct.
- Menu section titles are italic small caps in French style: *« Mises en bouche »*, *« Gourmandise sucrée »*.
- Dish names use slashes with thin spaces: *Homard du Québec / Asperge verte / Sauce américaine*.
- Wine pairings are one-line italic: *France, Vallée de la Loire, Menetou-Salon, Domaine Pellé, Le Carroir 2023*.
- Prices use the Quebec convention: `145 $`, `+ 20 $` (number, non-breaking space, dollar sign).

**Typography conventions in copy.**
- French double-angle quotes: `« comme ça »`, not `"comme ca"`.
- Em dashes for parentheticals (`—`), not hyphens.
- Curly apostrophes: `l'avenue Laurier`.
- Single-character ellipsis `…`.
- Small numbers spelled out: « dix-huit ans », not « 18 ans ».

**Emoji.** Never. The brand does not use emoji.

**Example phrases (canonical voice).**
- *« Le bonheur est dans l'assiette. »*  (the slogan)
- *« Petite resto, grande cuisine. »*  (Françoise Kayler, quoted by the brand)
- *« Mettre tout leur talent au service de la qualité des produits… »*
- *« Un décor épuré, contemporain mais toujours sobre. »*
- *« Nous espérons que vous prendrez autant de plaisir à déguster ce menu que nous en avons eu à le préparer. »*

When writing new copy: pick a noun the brand loves (*bonheur, plaisir, passion, qualité*), build the sentence around it, and end with a slightly understated coda. **Resist American marketing patterns** — no power verbs, no FOMO, no exclamation marks, no "discover", no all-caps shouting.

---

## Visual foundations

### Palette — sampled from the brand

The room is **white walls, dark walnut floors, white linen, leather banquettes** with brass pendants. The brand expresses this with a near-monochrome system anchored by **one warm-taupe accent** on **bright white** grounds. The logo PNG carries its own slightly olive print colour — that asset is left untouched — but the UI accent is shifted to a warm taupe so the rest of the interface reads neutral.

| Token | Hex | Role |
|---|---|---|
| `--lc-sage` | `#857A66` | **The brand accent (warm taupe).** Hover, hairline accent, eyebrow type. |
| `--lc-sage-deep` | `#5C5448` | Active / pressed accent |
| `--lc-sage-soft` | `#B5A993` | Tints, selection background |
| `--lc-sage-tint` | `#EBE6DC` | Section bands, list backgrounds |
| `--lc-ink` | `#1A1A1A` | Primary text, window frames, banquette leather |
| `--lc-walnut` | `#3E2A1F` | Wainscot wood, floor accent |
| `--lc-walnut-soft` | `#6A4A38` | Warm wood mid-tone |
| `--lc-brass` | `#B89466` | Pendant lamp glow — **photo overlay only**, never a UI fill |
| `--lc-white` | `#FFFFFF` | Default page ground |
| `--lc-paper` | `#FAFAF8` | Elevated card surface |
| `--lc-mist` | `#F2F2EE` | Banded sections, gallery captions |
| `--lc-graphite` | `#4F4F4D` | Secondary text |
| `--lc-stone` | `#8E8E89` | Captions, meta, disabled |
| `--lc-fog` | `#C7C7C0` | Hairline borders |

**No gradients. No purple. No reds.** If a token is missing, derive it from these — never invent a new hue. The walnut and brass appear in **photography**, not in UI fills.

### Typography

The wordmark uses a **thin, modern geometric sans-serif with subtle stencil-cut notches** — light weight, generously letter-spaced, lowercase, sage-olive. The descriptor *"Restaurant"* sits above it in a thin classical serif with extreme tracking.

**The brand's actual fonts are not in our hands.** Below are the closest Google Fonts substitutions; please send the licensed font files in `fonts/`.

| Role | Substitute | Brand fingerprint |
|---|---|---|
| Wordmark / display | **Jost** Light (200/300) | Geometric, low-contrast, futura-adjacent |
| "Restaurant" descriptor | **Cormorant Garamond** Regular | Thin classical serif, extreme tracking |
| Editorial body (À propos, menu paragraphs) | **Cormorant Garamond** / **EB Garamond** | Generous, italic, serif |
| UI / form labels / footer | **Jost** Regular | Same family as display for cohesion |
| Micro labels (ALL CAPS) | **Jost** 400, `letter-spacing: 0.22em` | The brand's signage uses extreme tracking |

The brand wordmark itself is **always rendered as the asset** (PNG / SVG), never typed live. Only the supporting type ramp uses the Google-Font stand-ins.

### Spacing

Generous. The page breathes the way the dining room does — white space around every dish.

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 · 168`

- Section vertical padding on desktop: **96–168 px**
- Card interior padding: **24–32 px**
- Menu list rhythm: **24 px** vertical, with a **1 px sage-tint** divider between items

### Backgrounds & imagery

- **Flat whites.** Page background is `#FFFFFF` or `#FAFAF8`. **No gradients. No textures. No noise.** Backgrounds are clinical so the photography sings.
- **Photography** dominates: room interiors at golden-hour, **plated dishes shot top-down or 45° in warm light**, the chefs in chef-whites. Bright highlights, neutral mid-tones, slightly desaturated. La Presse press photos (Fany Ducharme et al.) — warm white-balance, no cold blues.
- **Full-bleed** hero imagery on the home page (slider). Small **thumbnails (165 × 107)** in the gallery row.
- A signature **`+` icon-plus motif** sits over thumbnails as a "view more" affordance.
- No illustrations, no marks, no hand-drawn ornaments — the closest thing to ornament is the **flatware glyph** (fork · knife · spoon) of the logo.

### Borders, radii, shadows

- **Corner radii are minimal.** `0` on photos, `2 px` on inputs, **`4 px` only on hovering panels**. No pill chips except over photographs.
- **Borders** are 1-px hairlines at 8–20% ink opacity. Sage hairlines are used to underline headings and to divide menu items.
- **Shadows barely exist.** `0 1px 2px rgba(26,26,26,0.05), 0 8px 20px rgba(26,26,26,0.05)` is the maximum for cards. **No Material drop shadows.**
- **No glassmorphism, no neumorphism, no blur backdrops.** Transparency is only used to overlay text on a photograph — a single ink wash at 20–40 %.

### Layout

- **Centered, narrow columns** for editorial copy (~640–720 px max-width).
- **Image-first** on the home page (full-bleed slider above the fold; narrow content columns beneath).
- **Fixed header** with the wordmark left and a thin nav right. The original site uses a top mini-nav with a phone number and a "réservation" link.
- **No floating "Book Now" button.** Reservation is a nav link, full-stop.
- Footer is editorial: phone, email, address on its own line, social, photo credit. All small, sentence-case.

### Motion

- **Slow, restrained.** Slider crossfades **4–6 s holds, 800 ms fade**.
- **No bounces, no springs, no parallax, no stagger choreography.**
- Hover: a 200-ms colour shift (`ink → sage`), an underline reveal, or an opacity step. Never `scale()`.
- Press: 1-px optical inset; **never** a punchy `scale(0.96)`.
- Easing: `cubic-bezier(.2, .0, .2, 1)` — quiet, no overshoot.

### Cards

A card is a **white rectangle with a 1-px hairline border, optional 4-px radius, and 24–32 px padding**. Images sit flush with the top edge of the card. Title in display sans, body in serif. **No coloured left-accent stripe.**

### Transparency & blur

Used only to overlay text on photographs:
- Dark ink wash: `rgba(26, 26, 26, 0.20–0.40)`
- Soft backdrop blur (`backdrop-filter: blur(2px)`) is acceptable on photo overlays. **Avoid frosted-glass UI.**

---

## Iconography

The brand uses **almost no icons**, by design.

### The brand mark itself — flatware

The single graphic device in the identity is the **fork · knife · spoon glyph** that sits to the left of the wordmark. It's drawn from real cutlery silhouettes (rounded handles, slender shafts), all in the sage-olive brand colour, set with consistent gaps. **Reproduce it as a single SVG**, lined up to the height of the lowercase `chronique` x-height. Do not redraw it as flat outline icons — the silhouettes are filled.

When you need the lockup, **use the asset** in `assets/logo-wordmark.png` (or the larger versions in `assets/logo-large.jpeg`, `assets/signage-detail.jpg`). Don't try to retype it.

### The `+` "view more" mark

A thin white **`+`** sits over photo thumbnails to indicate an expandable gallery. Reproduce as a 24-px plus, 1.25-px stroke, white at 90 % opacity, optionally inside a 40-px square frame.

### UI iconography

The brand ships no icon font and uses no UI icons in the public site. When a UI surface *needs* icons (form fields, navigation arrows, social marks), we substitute **[Lucide Icons](https://lucide.dev/)** at **stroke 1.25 px** in the **ink** colour — quiet line weight that matches the editorial restraint. **Flagged as substitution** — replace if the brand later supplies its own glyph set.

**Social icons** in the footer are single-colour ink, hovering to sage. **Do not use Instagram-brand-gradient tiles.**

### Emoji & unicode

- **Emoji: never.**
- **Unicode dingbats used by the brand**: middle-dot `·`, slash `/`, typographic ellipsis `…`.
- Avoid `★ ✓ ➔ ✦` etc.

---

## Caveats — please help me iterate

- **Exact brand fonts are unverified.** I substituted **Jost** (display/sans) and **Cormorant Garamond** (serif) as the closest Google Fonts in spirit. The actual wordmark is a thin geometric sans with stencil-style notches — closer in feel to *Avenir Light* or a custom face like *Geometria Stencil*. If the brand owns licensed files, drop them into `fonts/` and rewrite the `@import` at the top of `colors_and_type.css`.
- **Logo sampled at `#7B7D62`** as the brand sage. Bigger renderings of the wordmark suggest a slightly lighter sage (around `#8C8E72`); please confirm which is the source-of-truth value used in print.
- **No Figma** was provided. With access we can lock the type ramp, spacing scale, and component sizes to exact values.
- **No second product** — the UI kit covers the marketing website only. If there is an internal POS / reservation / waitlist tool, attach it and I'll add a second kit.
- **Remote site images** (sliders, salle thumbnails, chef portrait, menu category tiles) couldn't be downloaded — the host blocks cross-origin reads. They're referenced by URL in `assets/IMAGE_MANIFEST.md` and used in HTML by URL. If you want a fully offline-portable system, please upload local copies into `assets/`.

**The bold ask**: open the Design System tab to review the palette, type, and components. Confirm the brand color value, send me the **real font files**, and let me know if there's a **secondary product** (POS, internal tool, app, decks) I should build a UI kit for.
