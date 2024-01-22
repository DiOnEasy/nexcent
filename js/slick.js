$(document).ready(function () {
    $(".reviews__items").slick({
      dots: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data("thumb");
        return '<div class="dot-play"></div>';
      },
      responsive: [
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
  