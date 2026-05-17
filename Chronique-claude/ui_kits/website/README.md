# La Chronique — Website UI kit

Recreation of the **lachronique.qc.ca** marketing site at high fidelity, in React (Babel) inside a single `index.html`.

## Screens

1. **Accueil** — full-bleed slider hero, événements teaser, salle gallery row, infolettre, contact footer
2. **À propos** — chef portrait, historique, citation
3. **Menu** — Menu Signature with wine pairings (uses the brand's actual menu copy)
4. **Réservation** — form

Click the top-nav links to move between screens. The slider auto-advances on the home page.

## Components

| File | What it is |
|---|---|
| `components/Nav.jsx` | Top navigation with logo lockup |
| `components/Slider.jsx` | Auto-advancing photo hero |
| `components/Footer.jsx` | Dark footer with contact, hours, social |
| `components/SectionTitle.jsx` | Display title + 48-px sage rule |
| `components/PhotoCard.jsx` | Gallery thumbnail with `+` overlay |
| `components/Button.jsx` | Outlined/ink/sage button variants |
| `components/MenuItem.jsx` | Italic dish line + wine pairing |
| `components/screens/Home.jsx` | Home screen composition |
| `components/screens/Apropos.jsx` | About screen |
| `components/screens/Menu.jsx` | Menu Signature screen |
| `components/screens/Reservation.jsx` | Reservation form |

## Notes

- All photography is referenced from `../../assets/` (local) — the rest of the imagery in the original site lives on `lachronique.qc.ca` and is referenced from `assets/IMAGE_MANIFEST.md`.
- Type, color, and components are imported from `../../colors_and_type.css`.
- The wordmark uses `assets/flatware-mark.svg` + the **Jost Light** substitute font.
