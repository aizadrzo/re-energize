"use strict";$(document).ready(function(){$(".slick-slider").slick({lazyLoad:"ondemand",infinite:!1,arrows:!1,slidesToShow:2.5,slidesToScroll:2,responsive:[{breakpoint:769,settings:{slidesToShow:1.5,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".prev-btn").click(function(){$(".slick-slider").slick("slickPrev")}),$(".next-btn").click(function(){$(".slick-slider").slick("slickNext")}),$(".prev-btn").addClass("slick-disabled"),$(".slick-slider").on("afterChange",function(){$(".slick-prev").hasClass("slick-disabled")?$(".prev-btn").addClass("slick-disabled"):$(".prev-btn").removeClass("slick-disabled"),$(".slick-next").hasClass("slick-disabled")?$(".next-btn").addClass("slick-disabled"):$(".next-btn").removeClass("slick-disabled")})});