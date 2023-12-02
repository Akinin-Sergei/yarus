//Прилоадер 3D визуализации
$('.visualization__block').on('click', function (e) {
    e.preventDefault();
    $('.visualization__bg').addClass('close');
});



// Слайдер "Похожее"
const more_slider = new Swiper('.more-slider', {
    loop: true,

    breakpoints: {
        1350: {
            slidesPerView: 2,
            spaceBetween: 8,
        },

        1150: {
            slidesPerView: 1.9,
            spaceBetween: 8,
        },

        1150: {
            slidesPerView: 1.7,
            spaceBetween: 8,
        },

        850: {
            slidesPerView: 1.4,
            spaceBetween: 8,
        },

        750: {
            slidesPerView: 1.1,
            spaceBetween: 8,
        },

        600: {
            slidesPerView: 1.5,
            spaceBetween: 8,
        },

        600: {
            slidesPerView: 1.5,
            spaceBetween: 8,
        },

        500: {
            slidesPerView: 1.2,
            spaceBetween: 8,
        },

        100: {
            slidesPerView: 1,
            spaceBetween: 8,
        },

    },
});