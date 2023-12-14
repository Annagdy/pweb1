document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    document.querySelector('.next-button').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    document.querySelector('.prev-button').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
});
