const slides = document.querySelectorAll('.slide');
const arrows = document.querySelectorAll('.arrow');
const captions = document.querySelectorAll('.caption');
let currentIndex = 0;
const transition = 'fade';
const duration = 5000;
setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    arrows.forEach((arrow, index) => {
        if (index === nextIndex) {
            arrow.click();
        }
    });
}, duration);
