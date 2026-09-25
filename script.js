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