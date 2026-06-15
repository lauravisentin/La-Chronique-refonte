# Animation d’accueil WordPress

Mini-plugin autonome compatible avec Elementor et ACF. Il ne dépend ni de React,
ni d’un système de smooth-scroll.

## Installation

1. Copier le dossier `accueil-anim` dans `wp-content/plugins/`.
2. Activer **La Chronique - Animation d'accueil** dans WordPress.
3. Modifier la page d’accueil et remplir le groupe ACF **Animation d’accueil**.
4. Dans Elementor, ajouter un widget **Shortcode** contenant `[accueil_anim]`.
5. Construire les sections suivantes normalement sous ce widget.

ACF est facultatif. Les images principales incluses dans `assets/` sont utilisées
si leurs champs sont vides. La flèche n’a aucun fallback et reste masquée tant
qu’aucune image n’est sélectionnée.

Les textes alternatifs de la façade, de l’intérieur et de Michelin proviennent
directement de la médiathèque WordPress. Le logo et la flèche sont décoratifs.

## Champs ACF

- Images: façade, intérieur, logo, Michelin et flèche.
- **Animer la flèche**: active ou désactive son mouvement vertical.
- **Taille de la flèche**: hauteur en pixels, `24 px` par défaut.
- **Taille du logo SVG**: largeur initiale maximale, `720 px` par défaut.
- **Afficher Michelin**: affiche ou masque le badge.
- **Activer la transition mobile**: utilise un fondu léger sur mobile. Désactivé,
  le composant devient une section statique d’un écran.
- Positions façade et intérieur: réglages distincts pour ordinateur et mobile.

## Comportement

Sur ordinateur, la piste sticky mesure `360vh`. Le scroll manuel pilote le zoom
du logo et la transition vers l’intérieur. Le plugin ne force jamais la position
de défilement. Le zoom final du logo atteint une échelle de `64`.

Jusqu’à `720px`, la piste mesure `180vh` et utilise seulement un fondu entre les
images, sans zoom géant. Avec `prefers-reduced-motion: reduce`, la présentation
est statique et l’animation de la flèche est désactivée.

## Header Elementor

Dans Elementor Pro, modifier le modèle de header puis ajouter la classe CSS
`site-header` dans **Avancé > Classes CSS**. Le script ajoute sur `body`:

- `ha-is-active`: la piste est visible;
- `ha-nav-on-dark`: le header est devant la façade;
- `ha-nav-on-light`: le header est devant l’intérieur.

Exemple à adapter au header:

```css
body.ha-nav-on-dark .site-header,
body.ha-nav-on-dark .site-header a {
  color: #fff;
}

body.ha-nav-on-light .site-header,
body.ha-nav-on-light .site-header a {
  color: #1a1a1a;
}
```

## Aperçu autonome

Servir ce dossier avec un serveur HTTP, puis ouvrir `accueil-anim.html`.
L’aperçu utilise `assets/arrow-example.svg`; cette image est uniquement un
exemple et n’est pas utilisée comme fallback dans WordPress.
