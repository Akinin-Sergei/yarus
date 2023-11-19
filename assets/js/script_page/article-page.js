//Плавный скролл
$('.nav__page-link[href^="#"]').click(function () {
    var scroll_el = $(this).attr('href');
    var destination = $(scroll_el).offset().top;
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: destination }, 900);
    }
    return false;
});



//NAVBAR FIXED
if ($(window).width() > 750) {
    $(function () {
        var $window = $(window);
        var $sidebar = $(".nav__page");
        var $sidebarTop = $sidebar.position().top;
        var $sidebarHeight = $sidebar.height();
        var $footer = $('.section__more');
        var $footerTop = $footer.position().top;

        $window.scroll(function (event) {
            $sidebar.addClass("fixed");
            var $scrollTop = $window.scrollTop();
            var $topPosition = Math.max(100, $sidebarTop - $scrollTop);

            if ($scrollTop + $sidebarHeight > $footerTop) {
                var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
            }

            $sidebar.css("top", $topPosition);
        });
    });
};



// Выделение активных пунктов NAVBAR
var last_id;
var $top_menu = $('.nav__page-item');
var $menu_items = $top_menu.find('a');
var $scroll_items = $menu_items.map(function () {
    var item = $($(this).attr('href'));
    if (item.length) {
        return item;
    }
});

$menu_items.click(function (e) {
    var href = $(this).attr('href'),
        offset_top = href === '#' ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offset_top
    }, 300);
    e.preventDefault();
});

$(window).scroll(function () {
    var from_top = $(this).scrollTop() + 180;
    var mar = parseInt($top_menu.css('margin-bottom'));
    var cur = $scroll_items.map(function () {
        if ($(this).offset().top < from_top + mar) {
            return this;
        }
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';
    if (last_id !== id) {
        last_id = id;
        $menu_items.parent()
            .removeClass('active')
            .end()
            .filter("[href='#" + id + "']")
            .parent()
            .addClass('active');
    }
});



/*===NAV_MENU===*/
$('.mobail__nav-sidebar-icon').on('click', function (e) {
    e.preventDefault();
    $('.nav__page').toggleClass('open');
    $('.ven').toggleClass('active');
    $('body').toggleClass('lock');
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