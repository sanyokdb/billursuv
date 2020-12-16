$(function () {
  // Intro Slider
  $(".intro-slider").slick({
    slidesToShow: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "intro-slider__dots",
    prevArrow:
      '<button class="intro-slider__btn intro-slider__prev"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg></button>',
    nextArrow:
      '<button class="intro-slider__btn intro-slider__next"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg></button>',
  });

  $(".post-slider").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    appendArrows: $(".post-arrows"),
    prevArrow: '<button class="post-arrows__prev"><i class="icon-long-arrow-left"></i></button>',
    nextArrow: '<button class="post-arrows__next"><i class="icon-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".reviews-slider").slick({
    infinite: true,
    slidesToShow: 2,
    appendArrows: $(".reviews-arrows"),
    prevArrow: '<button class="reviews-arrows__prev"><i class="icon-long-arrow-left"></i></button>',
    nextArrow: '<button class="reviews-arrows__next"><i class="icon-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Калькулятор воды
  function res_func() {
    $now_act = $(".calc-gender li.active").attr("id");

    if ($now_act == "calc-gender__man") {
      $rate = 0.9;
    } else {
      $rate = 0.8;
    }

    $w = parseInt($(".calc-range__weight-num").text());
    $t = parseInt($(".calc-range__train-num").text());

    $fin = ($w * 0.03 + ($t * 60) / 100) * $rate;

    $fin = $fin.toFixed(1);

    $(".calc-result__num").text($fin);
    $res_px = $fin * 45;
    $res_px = 450 - $res_px;
    $(".calc-bottle__bg").css("bottom", -$res_px);
  }

  $(".calc-range__weight").slider({
    range: "max",
    min: 20,
    max: 140,
    value: 75,
    step: 1,
    slide: function (event, ui) {
      $(".calc-range__weight-num").text(ui.value);
      $(function () {
        res_func();
      });
    },
  });
  $(".calc-range__weight-num").text($(".calc-range__weight").slider("value"));

  $(".calc-range__train").slider({
    range: "max",
    min: 0,
    max: 6,
    value: 2,
    step: 0.5,
    slide: function (event, ui) {
      $(".calc-range__train-num").text(ui.value);
      $(function () {
        res_func();
      });
    },
  });
  $(".calc-range__train-num").text($(".calc-range__train").slider("value"));
  
  $(".calc-range__label-train").tooltip();

  $(".calc-gender li").click(function () {
    $(".calc-gender li").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(function () {
      res_func();
    });
  });

  $(function () {
    res_func();
  });

});