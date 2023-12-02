//Poppup АКЦИЯ
if ($('#stock__btn').length !== 0) {
    $('#stock__btn').on('click', function (e) {
        e.preventDefault();
        $('.poppup__stock').toggleClass('poppup__stock-open');
        $('body').toggleClass('lock');
    });

    $('.close-poppup').on('click', function (e) {
        e.preventDefault();
        $('.poppup__stock').toggleClass('poppup__stock-open');
        $('body').toggleClass('lock');
    });
};



//Скролл на кнопку "Оставить заявку"
$('.application__btn[href^="#"]').click(function () {
    var scroll_el = $(this).attr('href');
    var destination = $(scroll_el).offset().top;
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: destination }, 900);
    }
    return false;
});



//Последний проект в блоке "ПОРТФОЛИО"
$(".portfolio__progect:last-child").addClass("last__progect-portfolio");
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



// Акардион СОСТАВ РАБОТ
// if ($('.section__process-work').length !== 0) {
if ($(window).width() < 750) {
    $('.process__work-body').hide();

    $('.process__work-item').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".process__work-body").slideUp();
        } else {
            $(".process__work-item.active .process__work-body").slideUp();
            $(".process__work-item.active").removeClass("active");
            $(this).addClass("active").find(".process__work-body").slideDown();
        }
        return false;
    });

}
// }


// Акардион FAQ
$('.accordion__body').hide();

$('.accordion__item').click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".accordion__body").slideUp();
    } else {
        $(".accordion__item.active .accordion__body").slideUp();
        $(".accordion__item.active").removeClass("active");
        $(this).addClass("active").find(".accordion__body").slideDown();
    }
    return false;
});



//Слайдер "Визуализация/Реализация"
if ($('.attention-detail__slider').length !== 0) {
    const attention__slider = new Swiper('.attention-detail__slider', {
        slidesPerView: 1,
        loop: true,
        simulateTouch: false,
        allowTouchMove: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}



//Слайдер "До/После"
if ($('.sl-container').length !== 0) {
    (function ($) {
        var $dragMe = $(".dragme"),
            $container = $(".sl-container"),
            $viewAfter = $(".view-after");
        $dragMe.draggable({
            containment: "parent",
            drag: function () {
                $viewAfter.css({
                    width: parseFloat($(this).css('left')) + 5
                });
            }
        });
        $container.on("click", function (event) {
            var eventLeft = event.pageX - $container.offset().left - 15;
            animateTo(eventLeft);
        });
        animateTo("50%");
        function animateTo(_left) {
            $dragMe.animate({
                left: _left
            }, 'slow', 'linear');
            $viewAfter.animate({
                width: _left
            }, 'slow', 'linear');
        }
    })(jQuery);
}


//Прилоадер для слайдера "Визуализация/Реализация"
$('.slider__priloader').on('click', function (e) {
    e.preventDefault();
    $('.slider__priloader').addClass('close');
});



// TAB
if ($('.advantages__menu-tabs').length !== 0) {
    $('.advantages__menu-item').on('click', function (e) {
        e.preventDefault();

        $('.advantages__menu-item').removeClass('tab-active');
        $('.advantages__item').removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');

    });
}


//Слайдер в табах
if ($('.advantages-slider').length !== 0) {
    const advantages_slider = new Swiper('.advantages-slider', {
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}




//Адаптив
if ($('.block__video-service').length !== 0) {
    $(function () {
        const videoService = document.querySelector('.block__video-service');
        const blockHeroService = document.querySelector('.block__hero-service');

        if ($(window).width() < 750) {
            $(videoService).remove();
            $(blockHeroService).prepend(videoService);
        }
    });
};



if ($('.block__advantages').length !== 0) {
    $(function () {
        const menuTab = document.querySelector('.advantages__menu-tabs');
        const blockAdvantages = document.querySelector('.block__advantages-right');
        const blockAdvantagesTitle = document.querySelector('.advantages-title');

        if ($(window).width() < 750) {
            $(blockAdvantages).prepend(menuTab);
            $(blockAdvantages).prepend(blockAdvantagesTitle);
        }
    });
};
