const isTouchable = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);
const textboxes = document.querySelectorAll(".card-works__text");

  textboxes.forEach((textbox) => {
    if (isTouchable) {
      textbox.addEventListener("touchstart", (event) => {
        event.currentTarget.classList.toggle('clicked');
      });
  } else {
      textboxes.forEach((textbox) => {
      textbox.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle('clicked');
      });
    });
  }
});
