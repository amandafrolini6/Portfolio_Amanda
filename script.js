// Seleciona os principais elementos usados nas interações.
const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation a");
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

// Adiciona uma pequena sombra no menu depois que a página é rolada.
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Abre e fecha o menu em celulares e tablets.
menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute("aria-label", menuIsOpen ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu móvel quando um link é escolhido.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Filtra os cards de acordo com a categoria escolhida.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    projectCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" || card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Mostra os elementos suavemente quando entram na tela.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Atualiza automaticamente o ano do rodapé.
document.querySelector("#year").textContent = new Date().getFullYear();