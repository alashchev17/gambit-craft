$(document).ready(function () {
  AOS.init();
  let modalButton = $("[data-toggle=auth]");
  let modalAuth = $(".modal-auth");
  let mobileLink = $(".mobile__link");
  modalButton.on("click", function () {
    if ($(".header__nav-mobile").hasClass("header__nav-mobile--visible")) {
      $(".header__nav-mobile").removeClass("header__nav-mobile--visible");
      $("[data-toggle=menu]").removeClass("header__nav-button--active");
      $("body").removeClass("overflow");
      setTimeout(() => {
        modalAuth.toggleClass("modal-auth--visible");
      }, 500);
    } else {
      modalAuth.addClass("modal-auth--visible");
    }
  });
  $(document).mouseup(function (e) {
    if (modalAuth.has(e.target).length === 0) {
      modalAuth.removeClass("modal-auth--visible");
    }
  });

  let menuButton = $("[data-toggle=menu]");
  menuButton.on("click", () => {
    let mobileMenu = $(".header__nav-mobile");
    mobileMenu.toggleClass("header__nav-mobile--visible");
    menuButton.toggleClass("header__nav-button--active");
    $("body").toggleClass("overflow");
  });

  mobileLink.on("click", function () {
    let mobileMenu = $(".header__nav-mobile");
    mobileMenu.removeClass("header__nav-mobile--visible");
    menuButton.removeClass("header__nav-button--active");
    $("body").removeClass("overflow");
    $("#mobile-nav-menu").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  $("#scroll-to").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $("#header-nav-menu, #footer-nav-menu, #hero-wrapper, #video-content").on("click", "a", function (event) {
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  let toTop = $(".to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      toTop.addClass("to-top--active");
    } else {
      toTop.removeClass("to-top--active");
    }
  });
  toTop.click(function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });

  $(document).keyup(function (event) {
    if ("Escape" === event.key || 27 === event.keyCode) {
      event.preventDefault();
      event = $(".modal-auth");
      event.removeClass("modal-auth--visible");
    }
  });
  let checkboxRegister = $(".checkbox__label");
  checkboxRegister.on("click", function () {
    checkboxRegister.toggleClass("checkbox__label--active");
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        login: {
          required: "Введите ваш логин",
        },
        password: {
          required: "Введите ваш пароль",
        },
        email: {
          required: "Введите вашу электронную почту",
          email: "Введите почту в формате 'имя@домен.com'",
        },
        conf_password: {
          required: "Подтвердите ваш пароль",
          equalTo: "Пароли должны совпадать",
        },
        checkbox: {
          required: "Поставьте галочку",
        },
        post_code: {
          required: "Введите код с почты",
        },
      },
      rules: {
        conf_password: {
          equalTo: "#password",
        },
      },
    });
  });

  var player;
  $(".video__play-button").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "370",
      width: "640",
      videoId: "MmB9b5njVbA",
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    },
  });
});
