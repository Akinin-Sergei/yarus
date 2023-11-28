//Слайдер
const assurance_slider = new Swiper('.assurance-slider', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



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
        var $footer = $('.section__feedback');
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



/*===прижать NAV_MENU к низу экрана===*/
if ($(window).width() <= 750) {
    let heightblock = $('.nav__page-body').height() + 75;
    $('.nav__page').css("transform", `translate(0px, ${heightblock}px`);
}



/*===NAV_MENU===*/
$('.mobail__nav-sidebar-icon').on('click', function (e) {
    e.preventDefault();
    $('.nav__page').toggleClass('open');
    $('.ven').toggleClass('active');
    $('body').toggleClass('lock');
});



