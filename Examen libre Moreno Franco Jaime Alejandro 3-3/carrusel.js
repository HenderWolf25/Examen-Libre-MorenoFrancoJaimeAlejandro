// Variables para el primer carrusel
let currentIndex1 = 0;
const totalSlides1 = document.querySelectorAll('#carousel1 .carousel-item').length;

// Variables para el segundo carrusel
let currentIndex2 = 0;
const totalSlides2 = document.querySelectorAll('#carousel2 .carousel-item').length;

function showSlide(index, carouselId) {
  const carouselInner = document.getElementById(carouselId);
  const slideWidth = carouselInner.querySelector('.carousel-item').clientWidth;
  carouselInner.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide(carouselId) {
  if (carouselId === 1) {
    currentIndex1 = (currentIndex1 + 1) % totalSlides1;
    showSlide(currentIndex1, 'carousel1');
  } else if (carouselId === 2) {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    showSlide(currentIndex2, 'carousel2');
  }
}

function prevSlide(carouselId) {
  if (carouselId === 1) {
    currentIndex1 = (currentIndex1 - 1 + totalSlides1) % totalSlides1;
    showSlide(currentIndex1, 'carousel1');
  } else if (carouselId === 2) {
    currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
    showSlide(currentIndex2, 'carousel2');
  }
}

///////////////////////////////////////////////////////////////////////////////////////