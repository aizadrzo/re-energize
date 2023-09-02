$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".prev-btn").click(function () {
        $(".slick-slider").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".slick-slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".slick-slider").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });
});