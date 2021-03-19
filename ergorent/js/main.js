$(function() {

    /* Локализация datepicker */
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'DD, dd MM yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);



    $('.advantage__items').slick({
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1351,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1251,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 831,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.comment__items').slick({
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1551,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".rateYo").rateYo({
        rating: 4,
        readOnly: true,
        starWidth: "18px",
        spacing: "7px"
    });

    var date = new Date();
    date.setDate(date.getDate() + 1);

    $("#datepicker, #datepicker-1").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true,
        minDate: date,
    });

    $('.burger-menu').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.header__box-img img').on('click', function() {
        $('.header__box-wrap').slideToggle();
    });

    $('.arrow').on('click', function() {
        $(this).toggleClass("open");
        $(this).closest('.service__col-item').find('.service__col-list').slideToggle();
    });

    // $('.btn-text').on('click', function() {
    //     $('.saving__email-placeholder').css('display', 'none');
    // });

    $('[data-fancybox="images"]').fancybox({
        // buttons: [
        //     'slideShow',
        //     'share',
        //     'zoom',
        //     'fullScreen',
        //     'close'
        // ],
        // thumbs: {
        //     autoStart: true
        // },
        // zoom: true,
        loop: true,
    });


});