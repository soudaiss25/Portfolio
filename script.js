// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// === BURGER MENU ===
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));

// === HERO TEXTE DYNAMIQUE ===
const texts = [
  "Développeur Full Stack Java · Angular",
  "Étudiant Mastère Dev, Data & IA — IPSSI Paris",
  "En alternance à partir de septembre 2026",
  "Passionné par le code, la data et l'IA"
];
let i = 0;
const heroSub = document.getElementById('hero-sub');
setInterval(() => {
  heroSub.style.opacity = '0';
  setTimeout(() => {
    i = (i + 1) % texts.length;
    heroSub.textContent = texts[i];
    heroSub.style.opacity = '1';
  }, 400);
}, 3200);

// === ANIMATIONS SCROLL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('section, .project-card, .timeline-item, .skill-group, .contact-item').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// === FORMULAIRE CONTACT (Formspree) ===
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        btn.textContent = 'Message envoyé ✓';
        btn.style.background = '#22c55e';
        form.reset();
      } else {
        btn.textContent = 'Erreur, réessayez';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Erreur réseau';
      btn.disabled = false;
    }
  });
}

// === SMOOTH SCROLL NAV ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      navLinks.classList.remove('open');
    }
  });
});