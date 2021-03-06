$(function () {

  // AOS
  AOS.init();
  
  $(".menu__btn").click(function () {
    $(this).toggleClass("active");
    $(".menu-mobile").toggleClass("active");
    $("body").toggleClass("body__lock");
  });

  // intro-slider
  var swiper = new Swiper('.intro__slider', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // post-slider
  var swiper = new Swiper('.post-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Calc water
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

  //  Waves.attach('.button');
  Waves.init();
  Waves.attach(".btn, .ripple");

});
