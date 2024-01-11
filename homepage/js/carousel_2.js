let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-images img");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide((currentSlide + direction + slides.length) % slides.length);
}

showSlide(currentSlide);