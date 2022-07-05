/////// mobile menu
const mobileBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav");

// Show and Hide Navbar Menu
mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    simulateTouch: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});