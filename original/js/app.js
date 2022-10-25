$(function() {
  $(document).on("click", "#sp-menu", function () {
    $('.gnav').toggleClass('open--gnav');
    $('#sp-header').toggleClass('open-header');
    $('#top_border').toggleClass('open-border');
  });
  //ページ全体が読み込まれた時の処理
  //スライダー
  $('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500
  });

  // ページトップボタン
  var pagetop = $('#page-top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });


  // $('.mypattern--sp').slick({
  //   dots: true,
  //   dotsClass: 'slide-dots',
  //   arrows: true,
  //   centerMode: true,
  //   centerPadding: '0',
  // });
  // $('.slide-dots li button').text('');
  // $('.slick-prev').text('');
  // $('.slick-next').text('');

  // var sidenav_height = $('.sidenav').innerHeight()
  // var body = window.document.body;
  // var html = window.document.documentElement;
  // var scrollTop = body.scrollTop || html.scrollTop;
  // var aaa =  html.scrollHeight - 1390 - sidenav_height;
  // console.log(sidenav_height)
  // console.log(html.scrollHeight)
  // console.log(html.clientHeight)
  // console.log(scrollTop)
  // console.log(aaa)
  // // ウィンドウのスクロールを見る //
  // $(window).on('scroll', function () {
  //   // トップページでスクロールするとヘッダーが切り替わる
  //   if ($(window).scrollTop() > 720) {
  //     $('.page-second__fixed').addClass('fixed');
  //     if ($(window).scrollTop() > aaa ) {
  //       $('.page-second__fixed').addClass('fixed-end');
  //       return;
  //     } else {
  //       $('.page-second__fixed').removeClass('fixed-end');
  //     }
  //     return;
  //   } else {
  //     $('.page-second__fixed').removeClass('fixed');
  //     return;
  //   }
  // });

  // // ウィンドウのスクロールを見る //
  // $(window).on('scroll', function () {
  //   // トップページでスクロールするとヘッダーが切り替わる
  //   if ($(window).scrollTop() > 920) {
  //     $('.header').addClass('header--second');
  //     return;
  //   } else {
  //     $('.header').removeClass('header--second');
  //     return;
  //   }

  // });

  // ページ内外アンカーリンク
  // var headerHeight = $('header').outerHeight();
  // var urlHash = location.hash;
  // if(urlHash) {
  //   $('body,html').stop().scrollTop(0);
  //   setTimeout(function(){
  //     var target = $(urlHash);
  //     var position = target.offset().top - headerHeight;
  //     $('body,html').stop().animate({scrollTop:position}, 500);
  //   }, 100);
  // }
  // $('a[href^="#"]').on('click', function(){
  //   var href= $(this).attr("href");
  //   var target = $(href);
  //   var position = target.offset().top - headerHeight;
  //   $('body,html').stop().animate({scrollTop:position}, 500);
  // });
  // // ヘッダー分下にずれる
  // var url = $(location).attr('href');
  // if (url.indexOf("#") != -1) {
  //   var anchor = url.split("#");
  //   var target = $("#" + anchor[anchor.length - 1]);
  //   if (target.length) {
  //     var pos = Math.floor(target.offset().top) - 120;
  //     $("html, body").animate({ scrollTop: pos }, 200, 'swing');
  //   }
  // }
})