var swiper = new Swiper(".intro__slider", {
    sliderPerView: 1,  
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
    loop: true,
    preloadImages: false,
    lazy: true,
});
var swiper = new Swiper(".products__item-slider", {
    sliderPerView: 1,
    grabCursor: true,
    loop: true,
    preloadImages: false,
    lazy: true,
});
var swiper = new Swiper(".reviews__slider-body ", {
    sliderPerView: 1,
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    preloadImages: false,
    lazy: true,
});