/*===СЧЕТЧИК===*/
let num1 = 7;
let num2 = 300;
let num3 = 95;

function tmp() {
    if ($('#counter .num_sum').eq(0).text() < num1) {
        $('#counter .num_sum').eq(0).text(parseInt($('#counter .num_sum').eq(0).text()) + 1);
        setTimeout(tmp, 200);
    }
}

function tmp1() {
    if ($('#counter .num_sum span').text() < 10000) {
        $('#counter .num_sum span').text(parseInt($('#counter .num_sum span').text()) + 1);
        setTimeout(tmp1, 1);
    }
}

function tmp2() {
    if ($('#counter .num_sum').eq(2).text() < num3) {
        $('#counter .num_sum').eq(2).text(parseInt($('#counter .num_sum').eq(2).text()) + 1);
        setTimeout(tmp2, 10);
    }
}

if ($('#counter').length) {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $('#counter').height() + 800 >= $('#counter').offset().top) {
            tmp();
            tmp1();
            tmp2();
        };
    });
}




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

        470: {
            slidesPerView: 1.5,
            spaceBetween: 8,
        },

        1: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
    },
});



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



/*===MAPS_WORK===*/
$('.two.grow').each(function () {
    const $square = $(this)
    const boundingBox = $square[0].getBBox()
    const xCenter = (boundingBox.width / 2) + boundingBox.x
    const yCenter = (boundingBox.height / 2) + boundingBox.y
    $square.css('transform-origin', `${xCenter}px ${yCenter}px`)
})

$('.maps_text-link').hover(function () {
    let id = $(this).data('maps');
    $(id).css('transform', 'scale(1.2)');
    $(id).css('filter', 'drop-shadow(7px 9px 2px rgb(0, 0, 0, 0.4))');
})
$('.maps_text-link').on('mouseleave', function () {
    let id = $(this).data('maps');
    $(id).css('transform', 'scale(1)');
    $(id).css('filter', 'none');
})

$('.maps_text-link').each(function () {
    let id = $(this).data('maps');
    $(id).children().css('fill', 'var(--black)');
})

$('g.two').hover(function () {
    $(this).parent().append($(this))
});

$('.two.grow').hover(function () {
    $(this).css('animation-name', 'none')
    $(this).css('animation-duration', '0s')
})

$('.two.grow').mouseleave(function () {

    console.log($(this))
    $(this).css('fill', 'var(--hover)')
    $(this).css('animation-name', 'scale')
    $(this).css('animation-duration', '1s')
})