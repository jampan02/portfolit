$(function () {
  //隠す
  $(".skill__main__container").hide();

  //初期値状態で、成果物の詳細を隠す
  $(".works__main__container__content--main").hide();

  //初期状態で、isaraのボタンを隠す

  //押した瞬間、成果物の詳細を表示する関数
  $(".arrow").click(function () {
    if ($(this).hasClass("arrow--reverse")) {
      $(this).removeClass("arrow--reverse");
      $(this)
        .parents(".works__main__container__content")
        .find(".works__main__container__content--main")
        .slideUp();
    } else {
      $(this).addClass("arrow--reverse");
      $(this)
        .parents(".works__main__container__content")
        .find(".works__main__container__content--main")
        .slideDown();
    }
  });

  //ヘッダーを押してスムーススクロールするための関数
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(function () {
      $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position - 50 }, speed, "swing");
        return false;
      });
    });
  }

  //ページをスクロールすると、ヘッダーが出現する関数
  var topBtn = $(".header");
  var backTopBtn = $(".gototop");
  topBtn.hide();
  backTopBtn.hide();
  //スクロールが1に達したらボタン表示(パソコンのみ)
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      backTopBtn.fadeIn();
    } else {
      backTopBtn.fadeOut();
    }
  });

  //profileまでスクロールされたら、一周回転させる関数
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#profile").offset().top - 100) {
      $(".profile__main__image--container").addClass(
        "profile__ratating--image"
      );
    }
  });

  //skillまでスクロールされたら、それらを表示する関数
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#skill").offset().top) {
      $(".skill__main__container").slideDown(500);
    }
  });

  //hoverされても表示するための関数
  $(".skill__main__container__container").hover(function () {
    $(".skill__main__container").slideDown(500);
  });

  //矢印を押したらトップへ戻る
  $(".gototop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //プロフィールナビゲーション
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".top-gotoprofile").click(function () {
      $("body,html").animate(
        {
          scrollTop: $("#profile").offset().top - 50,
        },
        500
      );
      return false;
    });
  }

  //それのタブレット以下の場合
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".top-gotoprofile").click(function () {
      $("body,html").animate(
        {
          scrollTop: $("#profile").offset().top,
        },
        500
      );
      return false;
    });
  }

  //画像ホバーで、選択画面表示関数

  $(".isara__pc").click(function () {
    window.open("images/images-works/isara-pc.png");
  });

  $(".isara__smart").click(function () {
    window.open("images/images-works/isara-mobile.png");
  });

  $(".isara__thum,.isara__pc,.isara__smart").hover(
    function () {
      $(".isara__thum").css({ opacity: "0.1" });
      $(".isara__pc,.isara__smart").addClass("isara__btn__show");
    },
    function () {
      $(".isara__thum").css({ opacity: "1" });
      $(".isara__pc,.isara__smart").removeClass("isara__btn__show");
    }
  );
});
