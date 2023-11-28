
//Последний проект в блоке "ПОРТФОЛИО"
$(".portfolio__progect:last-child").addClass("last__progect");
$(".portfolio__progect:last-child").prepend(`<div class="portfolio__more"><p class="portfolio__more-link">Перейти в портфолио</p></div>`);



/*===SELECT===*/
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        $('.new-select').not(this).each(function () {
            $(this).removeClass('on');
            $(this).next('.new-select__list').slideUp(duration);
        })
        $(this).toggleClass('on');
        $(this).hasClass('on') ? selectList.slideDown(duration) : selectList.slideUp(duration);
    });

    $('.new-select__item span').on('click', function (e) {
        let parent = $(this).closest(".new-select__list");
        console.log(parent)
        $(".new-select.on").text($(this).text());
        parent.slideUp(duration);
        $(".new-select.on").removeClass('on')
    })
});

$(document).on('click', function (e) {
    if (!$(e.target).closest(".select").length) {
        $('.new-select__list').each(function () {
            $(this).slideUp(450);
        });
        $('.new-select').each(function () {
            $(this).removeClass('on');
        });
    }
    e.stopPropagation();
});



// Форма калькулятора
$('.first__form-bnt').on('click', function (e) {
    e.preventDefault();
    $('.second__stage').toggleClass('poppup_open');
    $('body').toggleClass('lock');
});

$('.second__form-close').on('click', function (e) {
    e.preventDefault();
    $('.second__stage').toggleClass('poppup_open');
    $('body').toggleClass('lock');
});

$('.massage__btn').on('click', function (e) {
    e.preventDefault();
    $('.post__success').removeClass('massage__open');
    $('body').removeClass('lock');
});



// Слайдер "Команда"
const teams_slider = new Swiper('.teams-slider', {
    loop: true,

    breakpoints: {
        2000: {
            slidesPerView: 5,
            spaceBetween: 8,
        },

        1800: {
            slidesPerView: 4.5,
            spaceBetween: 8,
        },

        1700: {
            slidesPerView: 4.1,
            spaceBetween: 8,
        },

        1550: {
            slidesPerView: 3.7,
            spaceBetween: 8,
        },

        1450: {
            slidesPerView: 3.3,
            spaceBetween: 8,
        },

        1350: {
            slidesPerView: 3,
            spaceBetween: 8,
        },

        1300: {
            slidesPerView: 3.3,
            spaceBetween: 8,
        },

        1150: {
            slidesPerView: 2.8,
            spaceBetween: 8,
        },

        1000: {
            slidesPerView: 2.4,
            spaceBetween: 8,
        },

        900: {
            slidesPerView: 2.2,
            spaceBetween: 8,
        },

        840: {
            slidesPerView: 2,
            spaceBetween: 8,
        },

        750: {
            slidesPerView: 1.8,
            spaceBetween: 8,
        },

        700: {
            slidesPerView: 2.2,
            spaceBetween: 8,
        },

        580: {
            slidesPerView: 1.9,
            spaceBetween: 8,
        },

        1: {
            slidesPerView: 1.5,
            spaceBetween: 8,
        },
    },
});



// Слайдер "Награды"
const awards_slider = new Swiper('.awards__slider', {
    loop: true,

    breakpoints: {
        2000: {
            slidesPerView: 4,
            spaceBetween: 8,
        },

        670: {
            slidesPerView: 1.5,
            spaceBetween: 8,
        },

        550: {
            slidesPerView: 2.8,
            spaceBetween: 8,
        },

        450: {
            slidesPerView: 2.1,
            spaceBetween: 8,
        },

        1: {
            slidesPerView: 1.9,
            spaceBetween: 8,
        },
    },
});






//Адаптив
$(function () {
    const title = document.querySelector('.hero__title');
    const text_hero = document.querySelector('.text__hero');

    if ($(window).width() < 750) {
        $(title).appendTo(".hero__img");
        $(".hero__block-right").addClass("hero__block-mobile");
        $(".hero__title").addClass("hero__title-mobile");
        $(text_hero).appendTo(".hero__img");
        $(".text__hero").addClass("text__hero-mobile");
    }
});

