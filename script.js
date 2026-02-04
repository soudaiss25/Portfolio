// === ANIMATION DE SCROLL DOUX ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});


const sections = document.querySelectorAll("section");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  appearOnScroll.observe(section);
});

// === ANIMATION DES SECTIONS ===
const style = document.createElement("style");
style.textContent = `
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);

// === FORMULAIRE DE CONTACT (SIMULATION) ===
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      alert(`Merci ${name} ! Ton message a bien été envoyé 🚀`);
      form.reset();
    } else {
      alert("Merci de remplir tous les champs 🙏");
    }
  });
}

// === EFFET TITRE DU HERO (TEXTE DYNAMIQUE) ===
const heroText = document.querySelector(".hero p");
const texts = [
  "Développeur web & étudiant en informatique ",
  "Passionné par le code et les projets créatifs ",
  "Toujours prêt à apprendre de nouvelles techno "
];
let i = 0;

setInterval(() => {
  heroText.textContent = texts[i];
  i = (i + 1) % texts.length;
}, 3000);
