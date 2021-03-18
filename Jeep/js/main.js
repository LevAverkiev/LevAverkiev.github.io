

    $(function() {


        $('input, select').styler({
            selectPlaceholder: 'Страна',
        });

        $('.vest-advantages__items').slick({
            dots: true,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });





       
    });

