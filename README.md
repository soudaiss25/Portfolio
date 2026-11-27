# Portfolio

Site portfolio personnel de Soudaiss Elfayadine : présentation, compétences, projets, parcours et formulaire de contact, pour les recruteurs et les clients.

**Démo : https://soudaiss-portfolio.netlify.app/**

![Capture](docs/screenshot.png)
<!-- TODO : ajouter une capture de la page d'accueil dans docs/screenshot.png -->

## Contexte

Site statique d'une seule page, sans framework, écrit pour présenter mon profil et mes projets.

## Fonctionnalités principales

- Page unique avec sections À propos, Compétences, Projets, Parcours et Contact
- Barre de navigation qui change d'aspect au défilement, menu burger sur mobile
- Captures d'écran du projet Faltack CRM
- Formulaire de contact envoyé par Formspree
- Statistiques de visites avec GoatCounter

## Stack technique

HTML, CSS, JavaScript sans framework ; polices Google Fonts ; Formspree (formulaire) ; GoatCounter (statistiques) ; hébergement Netlify.

## Points techniques intéressants

- Aucune dépendance ni étape de build : tout tient dans `index.html`, `portfolio.css` et `script.js`.
- Mise en page adaptée au mobile (menu burger).
- Pas de tests ni de CI : le site est statique.

## Installation et lancement

Ouvrir `index.html` dans un navigateur, ou servir le dossier en local :

```bash
python -m http.server 8000   # http://localhost:8000
```

## Statut

En ligne, mis à jour au fil de mes projets.
