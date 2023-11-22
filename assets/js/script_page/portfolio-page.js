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