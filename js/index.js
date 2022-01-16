$(document).ready(function () {
  $("header .in_gnb").each(function (index, item) {
    var sub = $(this).children(".sub");
    var subLast = $(this).find(".sub>li:last-child");
    $(this).hover(function () {
      if ($('header .sub').hasClass('on')) {
        $('header .sub').removeClass('on');
      }
      sub.stop().animate({
        marginTop: 20,
        // opacity: 1,
      });
      sub.addClass("on");
    }, function () {
      sub.stop().animate({
        marginTop: 0,
        // opacity: 1,
      });
      sub.removeClass("on");
    });
    $(this).focusin(function () {
      if ($('header .sub').hasClass('on')) {
        $('header .sub').removeClass('on');
      }
      sub.stop().animate({
        marginTop: 20,
        // opacity: 1,
      });
      sub.addClass("on");
    });
    $(subLast).focusout(function () {
      sub.stop().animate({
        marginTop: 0,
        // opacity: 1,
      });
      sub.removeClass("on");
    });

    var click = false;
    var menuAllW = $('header .menu_all_wrap');
    $('header .gnb_btn').click(function () {
      if (click === false) {
        $('header, header .gnb_btn button, header .menu_all_wrap, header .menu_all_bg').addClass('on');
        menuAllW.stop().animate({
          opacity: 1,
        });
        $('header .gnb_btn .blind').html('전체메뉴닫기');
        click = true;
      } else {
        $('header, header .gnb_btn button, header .menu_all_wrap, header .menu_all_bg').removeClass('on');
        menuAllW.stop().animate({
          opacity: 0,
        });
        $('header .gnb_btn .blind').html('전체메뉴보기');
        click = false;
      }
    });
    $('header .menu_all_wrap .focus_out').focusout(function () {
      $('header, header .gnb_btn button, header .menu_all_wrap, header .menu_all_bg').removeClass('on');
        menuAllW.stop().animate({
          opacity: 0,
        });
        $('header .gnb_btn .blind').html('전체메뉴보기');
        click = false;
    });

    // quick_menu
    var click2 = false;
    var quickMenu = $('.quick_menu');
    $('.quick_menu .modi a').focusin(function () {
      quickMenu.addClass('on');
      $('.quick_menu button.quick_button .blind').html('퀵메뉴 닫기');
      click2 = true;
    });
    $('.quick_menu button.quick_button').click(function () {
      if (click2 === false) {
        quickMenu.addClass('on');
        $('.quick_menu button.quick_button .blind').html('퀵메뉴 닫기');
        click2 = true;
      } else {
        quickMenu.removeClass('on');
        $('.quick_menu button .blind').html('퀵메뉴 열기');
        click2 = false;
      }
    });
    //main_quick

    $('.main_quickT').mouseenter(function () {
      if ($(this).hasClass('quick_first')) {
        $('.main_quick').removeClass('on02');
        $('.main_quick').removeClass('on03');
        $('.main_quick').addClass('on01');
      } else if ($(this).hasClass('quick_second')) {
        $('.main_quick').removeClass('on01');
        $('.main_quick').removeClass('on03');
        $('.main_quick').addClass('on02');
      } else if ($(this).hasClass('quick_third')) {
        $('.main_quick').removeClass('on01');
        $('.main_quick').removeClass('on02');
        $('.main_quick').addClass('on03');
      }

      if (!$('.char_face .char_face01').hasClass('rotate01')) {
        $('.char_face .char_face01').addClass('rotate01');
        setTimeout(function () {
          $('.char_face .char_face01').removeClass('rotate01');
        }, 1500);
      }
      if (!$('.char_face .char_face02').hasClass('rotate02')) {
        $('.char_face .char_face02').addClass('rotate02');
        setTimeout(function () {
          $('.char_face .char_face02').removeClass('rotate02');
        }, 1500);
      }
    });

    $('.top_btn').click(function () {
      $('html, body').stop().animate({
        scrollTop: 0,
      }, 500);
    });

    //slick_slider
    $(".section1-slick").not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: $('.section_1 .btn_wrap .prev'),
      nextArrow: $('.section_1 .btn_wrap .next'),
      autoplay: true,
      autoplaySpeed: 2000,
      // accessibility: false,
    });
    var click3 = false;
    $('.section_1 .btn_wrap .play').click(function () {
      if (click3 === false) {
        $(this).addClass('on');
        $('.section1-slick').slick('slickPause');
        $(this).find('.blind').html('재생');
        click3 = true;
      } else {
        $(this).removeClass('on');
        $('.section1-slick').slick('slickPlay');
        $(this).find('.blind').html('정지');
        click3 = false;
      }
    });

    $(".footer-slick").not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: $('footer .prev'),
      nextArrow: $('footer .next'),
      // accessibility: false,
    });
    // $('.main_qmenu_li').mouseenter(function(){
    //   $('.main_qmenu').attr('class','main_qmenu');

    //   if($(this).hasClass('qmenu_01')){
    //     $('.main_qmenu').addClass('qmenu_01');
    //   } else if($(this).hasClass('qmenu_02')){

    //     $('.main_qmenu').addClass('qmenu_02');
    //   } else if($(this).hasClass('qmenu_03')){

    //     $('.main_qmenu').addClass('qmenu_03');
    //   } 

    //   if($('.img_char_face_1').hasClass('swivel1') == false){
    //     $('.img_char_face_1').addClass('swivel1');
    //     setTimeout(function() { 
    //       $('.img_char_face_1').removeClass('swivel1');
    //     }, 2000);

    //   }
    //   if($('.img_char_face_2').hasClass('swivel2') == false){
    //     $('.img_char_face_2').addClass('swivel2');
    //     setTimeout(function() { 
    //       $('.img_char_face_2').removeClass('swivel2');
    //     }, 2000);

    //   }


    // });


  }); //end











});