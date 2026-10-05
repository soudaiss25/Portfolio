// =========================================================
// 1. La barre de navigation devient blanche quand on descend
// =========================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =========================================================
// 2. Menu burger sur mobile
// =========================================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// On referme le menu quand on clique sur un lien
navLinks.querySelectorAll('a').forEach((lien) => {
  lien.addEventListener('click', () => navLinks.classList.remove('open'));
});

// =========================================================
// 3. Le sous-titre de l'accueil change toutes les 3 secondes
//    Pour modifier les phrases, change simplement ce tableau.
// =========================================================
const phrases = [
  'Développeur Full Stack Java et Angular',
  'Je construis des applications web solides',
  'Laravel, React, Spring Boot et SQL'
];

const heroSub = document.getElementById('hero-sub');
const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let index = 0;

if (heroSub && !mouvementReduit) {
  setInterval(() => {
    heroSub.style.opacity = 0;             // on fait disparaître
    setTimeout(() => {
      index = (index + 1) % phrases.length; // phrase suivante
      heroSub.textContent = phrases[index];
      heroSub.style.opacity = 1;           // on fait réapparaître
    }, 400);
  }, 3000);
}

// =========================================================
// 4. Les sections apparaissent en douceur quand on les voit
// =========================================================
const sections = document.querySelectorAll('section .section-inner');
sections.forEach((el) => el.classList.add('fade-up'));

const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
      observateur.unobserve(entree.target); // une seule fois suffit
    }
  });
}, { threshold: 0.15 });

sections.forEach((el) => observateur.observe(el));

// =========================================================
// 5. Visionneuse des captures de projet
//    Au clic sur une vignette, l'image s'ouvre en grand.
//    On navigue avec les boutons ou les flèches du clavier,
//    on ferme avec la croix, Échap ou un clic sur le fond.
// =========================================================
const vignettes = Array.from(document.querySelectorAll('.vignette'));
const visionneuse = document.getElementById('visionneuse');
const visionneuseImage = document.getElementById('visionneuse-image');
const visionneuseLegende = document.getElementById('visionneuse-legende');
const boutonFermer = document.getElementById('visionneuse-fermer');
const boutonPrecedent = document.getElementById('visionneuse-precedent');
const boutonSuivant = document.getElementById('visionneuse-suivant');

let indexImage = 0;
let vignetteOuvrante = null; // pour rendre le focus à la bonne vignette

function afficherImage(i) {
  indexImage = (i + vignettes.length) % vignettes.length; // boucle dans les deux sens
  const vignette = vignettes[indexImage];
  visionneuseImage.src = vignette.dataset.image;
  visionneuseImage.alt = vignette.querySelector('img').alt;
  visionneuseLegende.textContent = vignette.dataset.legende || '';
}

function ouvrirVisionneuse(i, declencheur) {
  vignetteOuvrante = declencheur;
  afficherImage(i);
  visionneuse.hidden = false;
  document.body.style.overflow = 'hidden'; // on bloque le défilement derrière
  boutonFermer.focus();
}

function fermerVisionneuse() {
  visionneuse.hidden = true;
  document.body.style.overflow = '';
  if (vignetteOuvrante) vignetteOuvrante.focus();
}

vignettes.forEach((vignette, i) => {
  vignette.addEventListener('click', () => ouvrirVisionneuse(i, vignette));
});

if (visionneuse) {
  boutonFermer.addEventListener('click', fermerVisionneuse);
  boutonPrecedent.addEventListener('click', () => afficherImage(indexImage - 1));
  boutonSuivant.addEventListener('click', () => afficherImage(indexImage + 1));

  // Un clic sur le fond sombre ferme aussi la visionneuse
  visionneuse.addEventListener('click', (evenement) => {
    if (evenement.target === visionneuse) fermerVisionneuse();
  });

  document.addEventListener('keydown', (evenement) => {
    if (visionneuse.hidden) return;
    if (evenement.key === 'Escape') fermerVisionneuse();
    if (evenement.key === 'ArrowLeft') afficherImage(indexImage - 1);
    if (evenement.key === 'ArrowRight') afficherImage(indexImage + 1);
  });
}