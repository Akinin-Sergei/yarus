// ===PRELOADER===
$(function preloader() {
    $(() => {

        setInterval(() => {

            let preloader = $('.preloader');

            preloader.css('opacity', 0);

            setInterval(
                () => preloader.remove(),
                parseInt(preloader.css('animation-duration', 100))
            );

        }, 1000);
    });
});

// setInterval(() => preloader(), 20000);



// ===COOKEI===
$.cookie('test_var', 'test_value', { expires: 30 });

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
    cookiewin = document.getElementsByClassName('cookie_notice')[0];
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    // показываем    
    cookiewin.style.display = "block";
    // закрываем по клику
    document.getElementById("cookie_close").addEventListener("click", function (e) {
        e.preventDefault();
        cookiewin.style.display = "none";
        // записываем cookie на 1 день, с которой мы не показываем окно
        let date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
    });
};



// ===HEADER_SCROLL===
var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});



// ===BURGER_MENU===
$('.burger__menu-icon-inner').on('click', function (e) {
    e.preventDefault();
    $('.burger__menu-icon').toggleClass('close');
    $('.burger__menu-body').toggleClass('open');
    $('.burger__menu-bg').toggleClass('open');
    $('body').toggleClass('lock');
});



// ===SCROLL TO TOP=== 
$(function scrollToTop() {

    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 700) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });

});



// ===FOOTER_BOTTOM===
if ($(document).height() <= $(window).height()) {
    $(".footer").addClass("fixed-bottom");
};



// ===FOOTER_LINK_SKROLL===
$('#footer__logo').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
});



// Ограничения на ввод данных в формах
if ($('.input-number').length !== 0) {
    $('body').on('input', '.input-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
};

if ($('input-ru').length !== 0) {
    $('body').on('input', '.input-ru', function () {
        this.value = this.value.replace(/[^а-яё\s]/gi, '');
    });
};



// Отмечаем чекбокс на политике
$('#calculator__btn-send').click(function () {
    $('#checkbox__policy').prop('checked', true);
});



// Маска для телефона
if ($('.input__phone').length !== 0) {
    $('.input__phone').mask('+7 (999) 999-99-99');
};


// ==TEXTAREA==
if ($('.feedback__message').length !== 0) {
    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.addEventListener('keydown', resize);

    function resize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 1);
    }
};



// ===Анимация при скролле страницы===

//Добавить class="_anim-items" в HTML документе к элементам которые будут анимироваться
//Добавить в CSS файле к анимированному элементу .classel._active{}
//Добавить class="_anim-no-hide" в HTML документе к элементам у которых есть class="_anim-items", что бы они анимировались один раз
if ($('._anim-items').length !== 0) {
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

        setTimeout(() => {
            animOnScroll();
        }, 100);

    }
}