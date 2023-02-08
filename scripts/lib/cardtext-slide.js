const isTouchable = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);
const textboxes = document.querySelectorAll(".card-works__text");

if (isTouchable) {
  textboxes.forEach((textbox) => {
    textbox.addEventListener("touchstart", (event) => {
      event.currentTarget.classList.toggle('clicked');
    });
  });
} else {
  textboxes.forEach((textbox) => {
    textbox.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle('clicked');
    });
  });
}
