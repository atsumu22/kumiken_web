const infoButton = document.querySelector('.btn-moreinfo');
const curText = infoButton.innerText

infoButton.addEventListener("click", (event) => {
  if(event.currentTarget.innerText == curText){
    infoButton.innerText = "Close";
  }
  else {
    infoButton.innerText = curText
  };
});
