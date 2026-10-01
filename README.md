# Portfolio — Greg Harvey

Portfolio personnel construit avec React, Vite et Tailwind CSS, conforme au
cahier des charges v1.1.

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/`, prêt à être déployé sur Vercel, Netlify,
GitHub Pages ou Cloudflare Pages (aucun serveur ni base de données requis).

## Ajouter un projet

Les projets sont définis dans `src/data/projects.js`. Pour en ajouter un,
ajoutez un objet au tableau exporté :

```js
{
  slug: "mon-projet",
  name: "Mon projet",
  category: "Personnel", // Personnel | Académique | Professionnel | Expérimental
  pitch: "Une phrase expliquant le problème ou le besoin.",
  tech: ["React", "Node.js"],
  status: "En développement", // Idée | Prototype | En développement | Terminé
  demoUrl: "",
  githubUrl: "",
}
```

Aucune autre modification n'est nécessaire : la section Projets se met à
jour automatiquement.

## Remplacer la photo du Hero

Une image de remplacement (placeholder) se trouve dans
`src/assets/portrait.jpg`. Pour mettre ta vraie photo :

1. Remplace le fichier `src/assets/portrait.jpg` par ta photo, **en gardant
   exactement le même nom** (`portrait.jpg`) — ou alors renomme ton fichier
   et mets à jour l'import dans `src/components/sections/Hero.jsx` :
   ```js
   import portrait from "../../assets/portrait.jpg";
   ```
2. Une photo au format portrait (verticale, ratio proche de 4:5) donnera le
   meilleur résultat, car le cadre est justement taillé dans ce ratio.

Aucune autre modification n'est nécessaire : la photo s'affiche
automatiquement à droite du texte d'introduction dans le Hero.

## Ajouter / modifier une certification

Les certifications sont définies dans `src/data/certifications.js` et
s'affichent par rangées de 3, avec un agrandissement au clic. Pour en
ajouter une :

1. Place l'image de la certification dans `src/assets/certifications/`.
2. Importe-la en haut de `src/data/certifications.js` et ajoute un objet au
   tableau exporté :

```js
import monCert from "../assets/certifications/mon-certificat.jpg";

{
  slug: "ma-certification",
  title: "Nom de la certification",
  issuer: "Organisme émetteur",
  date: "2025",
  image: monCert,
}
```

Aucune autre modification n'est nécessaire.

## Mettre à jour le Parcours (CEPE, BEPC, BAC, Licence...)

La timeline « Parcours » est définie dans `src/data/journey.js`. Chaque
étape a un titre (`step`), un intitulé complet (`label`), une date
(`date`) et une liste de documents consultables en grand (`documents`,
typiquement une attestation et un diplôme).

1. Remplace les images placeholder dans `src/assets/journey/` par tes
   véritables attestations et diplômes scannés (garde les mêmes noms de
   fichiers, ou mets à jour les imports dans `src/data/journey.js`).
2. Remplace `"Date à compléter"` par l'année réelle d'obtention pour
   chaque étape.
3. Pour ajouter une étape (ex. un Master), ajoute un objet supplémentaire
   au tableau, sur le même modèle.

## Mode sombre

Un bouton (soleil / lune) est visible dans la barre de navigation, sur ordinateur
comme sur mobile. Le site démarre toujours en **mode clair** pour un nouveau
visiteur ; si quelqu'un bascule en mode sombre, son choix est mémorisé
(`localStorage`) et restauré à sa prochaine visite.

Techniquement, les couleurs qui changent entre les deux modes sont des
**jetons sémantiques**, définis une seule fois dans `src/index.css` :

| Jeton | Rôle | Clair | Sombre |
|---|---|---|---|
| `--surface` | Fond de page | `#F6F1E6` | `#0E1611` |
| `--surface-soft` | Fond de section alternée | `#EDE6D3` | `#172018` |
| `--surface-card` | Fond des cartes | `#FFFFFF` | `#182219` |
| `--text` | Texte principal | `#0E1A0C` | `#F1EEE3` |
| `--heading` | Titres et liens | `#304F27` (forest) | `#9FD98C` (vert clair) |
| `--border` | Bordures discrètes | forest à 14 % | crème à 14 % |

Les couleurs de marque (`forest`, `sage`, `gold`, `sun`) ne changent pas entre
les deux modes : elles font l'identité du site. Les sections à fond vert plein
(Compétences, Contact) restent identiques dans les deux modes, car un fond
`forest` est déjà suffisamment sombre pour bien fonctionner partout.

Pour ajuster une couleur du mode sombre, modifie sa valeur dans le bloc
`.dark { ... }` de `src/index.css` — aucune autre modification n'est
nécessaire, tous les composants s'adaptent automatiquement.

## Indicateur de section active dans la navigation

Le menu du haut de page souligne automatiquement le lien correspondant à la
section actuellement visible à l'écran, avec un trait qui **glisse** d'un
lien à l'autre (jamais un changement brutal). Sur mobile, c'est un petit
point qui se déplace de la même façon dans le menu déroulant.

Techniquement :
- `src/hooks/useActiveSection.js` observe les sections via
  `IntersectionObserver` et retourne l'identifiant de celle qui est
  actuellement au centre de l'écran.
- `src/components/navigation/Nav.jsx` utilise cette information pour
  savoir quel lien souligner, et anime le trait avec `layoutId` (Motion for
  React) pour obtenir l'effet de glissement plutôt qu'un saut direct.

Si tu ajoutes une nouvelle section avec un `id`, pense à l'ajouter aussi
dans le tableau `LINKS` de `Nav.jsx` pour qu'elle apparaisse dans le menu et
soit suivie par l'indicateur.

## Modifier les couleurs, textes et liens

- **Couleurs et typographies** : tokens définis dans `src/index.css` (bloc
  `@theme`) — `--color-forest`, `--color-sage`, `--color-gold`, `--color-sun`
  et les neutres. Modifier ces valeurs suffit à repeindre tout le site.
- **Textes éditoriaux** : chaque section lit son contenu depuis un fichier
  dans `src/data/` (`site.js`, `about.js`, `skills.js`, `projects.js`,
  `journey.js`, `exploring.js`, `philosophy.js`). Aucun texte n'est codé en
  dur dans les composants.
- **Liens de contact** : `src/data/site.js` (`email`, `socials`).

## Structure

```
src/
├── assets/
│   ├── certifications/     # Images des certifications
│   └── journey/             # Attestations et diplômes (Parcours)
├── components/
│   ├── layout/               # Footer, wrappers de page
│   ├── navigation/            # Nav responsive
│   ├── sections/               # Une section = un fichier (Hero, About, Skills, ...)
│   ├── projects/                 # Carte projet
│   ├── certifications/            # Carte certification (grille de 3, clic pour agrandir)
│   └── ui/                          # Primitives réutilisables (reveal, fond animé, entrée, lightbox)
├── context/
│   ├── LightboxContext.jsx           # État partagé de l'agrandissement d'image (certifications + parcours)
│   └── ThemeContext.jsx               # État partagé du mode clair / sombre
├── data/                                # Contenu éditorial séparé du JSX
├── hooks/
│   └── useActiveSection.js           # Détecte la section actuellement visible (pour l'indicateur de navigation)
├── App.jsx
└── main.jsx
```

## Notes de conformité au cahier des charges

- Animation d'entrée unique par session (`sessionStorage`), non bloquante,
  désactivée si `prefers-reduced-motion` est actif.
- Palette limitée aux 4 couleurs de marque + neutres fonctionnels ; les
  accents or/jaune sont réservés aux CTA, hover et détails.
- Space Grotesk pour la structure (~80 % de l'interface), Instrument Serif
  pour les moments éditoriaux (titres de section, Hero).
- Aucun backend, aucune base de données — site statique déployable
  gratuitement.
- Formulaire de contact non implémenté en V1 (lien `mailto` direct, comme le
  permet le cahier des charges) ; à remplacer par un service tiers si besoin.

## Prochaines étapes suggérées (hors V1)

- Pages de détail projet dédiées (les projets sont pour l'instant présentés
  en cartes sur la page unique, comme prévu pour un premier jalon).
- Formulaire de contact via un service tiers gratuit (Formspree, etc.).
- Blog / rubrique d'articles (la séparation data/composants le permet sans
  restructuration lourde).
