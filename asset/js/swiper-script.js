document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        initialSlide: 2, // commence a 0
        allowTouchMove: false, // Désactiver la possibilité de faire glisser les slides
    });

    
    // Écoutez les clics sur les liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const slideIndex = this.getAttribute('data-slide-index');
            mySwiper.slideToLoop(slideIndex);
        });
    });
    const subnavLinks = document.querySelectorAll(".in-lk");
    subnavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const slideIndex = this.getAttribute('data-slide-index');
            mySwiper.slideToLoop(slideIndex);
        });
    });
});