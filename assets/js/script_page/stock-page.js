//Скролл на кнопку "Оставить заявку"
$('.application__btn[href^="#"]').click(function () {
    var scroll_el = $(this).attr('href');
    var destination = $(scroll_el).offset().top;
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: destination }, 900);
    }
    return false;
});



// Слайдер "Главный"
const hero_slider = new Swiper('.hero__slider', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



//===CALCULATOR-STOCK===
const inputANode = document.querySelector('.numder');
const inputBNode = 9000;
const inputCNode = 3500;
const outputANode = document.querySelector('.input_rez-a');
const outputBNode = document.querySelector('.input_rez-b');

inputANode.addEventListener('input', calculator)

function calculator() {
    const a = Number(inputANode.value);
    const b = inputBNode;
    const c = inputCNode;
    const resultA = a * b;
    const resultB = resultA - (a * c);

    outputANode.innerHTML = resultA + " ₽";
    outputBNode.innerHTML = resultB + " ₽";
};



// ===PRICE-SLIDER===
var $range = $(".js-range-slider");
var $input = $(".numder");
var instance;
var min = 0;
var max = 400;

$range.ionRangeSlider({
    skin: "round",
    type: "single",
    min: min,
    max: max,
    from: 50,
    postfix: "м²",
    onStart: function (data) {
        $input.prop("value", data.from);
        calculator();
    },
    onChange: function (data) {
        $input.prop("value", data.from);
        calculator();
    }
});


instance = $range.data("ionRangeSlider");

$input.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val,
        from: val
    });
});

//===END-CALCULATOR-STOCK===



// Форма калькулятора АКЦИИ
$('.stock__сalc-button').on('click', function (e) {
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