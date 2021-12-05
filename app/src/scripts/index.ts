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
    navigation: {
        nextEl: ".products__item-slider-next",
        prevEl: ".products__item-slider-prev",
      },
});
var swiper = new Swiper(".reviews__slider-body ", {
    sliderPerView: 1,
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    preloadImages: false,
    lazy: true,
});