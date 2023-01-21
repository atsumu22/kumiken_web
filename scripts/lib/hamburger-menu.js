const hamburger = document.querySelector(".hamburger")
const hidden_menu = document.querySelector(".hamburger-hidden")
const navbar = document.querySelector(".navbar")
const link_tags = document.querySelectorAll(".link-tag")

hamburger.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle('menu-open');
  hidden_menu.classList.toggle('menu-open');
  navbar.classList.toggle('menu-open');
});

link_tags.forEach((tag) => {
  tag.addEventListener("click", (event) => {
    hidden_menu.classList.remove('menu-open');
    hamburger.classList.remove('menu-open');
    navbar.classList.remove('menu-open');
  });
});
