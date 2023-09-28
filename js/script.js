// banner-slider.js
let contactSlideIndex = 0;

function showContactSlides() {
  let i;
  const contactSlides = document.getElementsByClassName("mySlides");
  for (i = 0; i < contactSlides.length; i++) {
    contactSlides[i].style.display = "none";
  }
  contactSlideIndex++;
  if (contactSlideIndex > contactSlides.length) {
    contactSlideIndex = 1;
  }
  contactSlides[contactSlideIndex - 1].style.display = "block";
  setTimeout(showContactSlides, 3000); 
  
}

showContactSlides();
