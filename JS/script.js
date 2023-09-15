let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slide-container");
let intervalId;


function showNextSlide() {
    updateSlide();
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

function updateSlide() {
    const offset = -(slideIndex * 100); 
    slideContainer.style.transform = `translateX(${offset}%)`;
}

function startSlideshow() {
    intervalId = setInterval(showNextSlide, 5000);
}

startSlideshow();
