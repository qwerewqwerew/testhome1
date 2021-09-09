/* $(function(){실행문}); */
$(function(){
    //배너
    $('.ban').slick({
      slidesToShow:3,   //한번에 보일갯수
      autoplay:true,    //자동실행 
      autoplaySpeed:3000, // 자동실행시간
      dots:true,    //인디케이터
      infinite:true
    });
    
    //전체메뉴
    $('.tit .btn').click(function(){
      //$('#cont_nav').css('display','block');
      $('#cont_nav').slideToggle();
      $(this).toggleClass('on').css('cursor','pointer');
    })

    //탭메뉴
    var tab_list=$('.tab_menu');
    tab_list.find('ul ul').hide();
    tab_list.find('li.active ul').show();

    tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);

    function tabMenu(e){
      e.preventDefault();
      var tg=$(this);
      tg.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
    }


/*  
  tab_list.find('>ul>li>a').click(function(e){
      e.preventDefault();
      var tg=$(this);
      tg.parent('li').addClass('active');
      tg.parent('li').siblings('li').removeClass('active');
      tg.next('ul').show();
      tg.parent('li').siblings('li').find('>ul').hide();
    }) 

    tab_list.find('>ul>li>a').focus(function(e){
      e.preventDefault();
      var tg=$(this);
      tg.parent('li').addClass('active');
      tg.parent('li').siblings('li').removeClass('active');
      tg.next('ul').show();
      tg.parent('li').siblings('li').find('>ul').hide();
    })
 */
    //레이어팝업
    $('.layer').click(function(e){
      e.preventDefault();
      //$('#layer').show();
      //$('#layer').fadeIn(); fadeOut
      //$('#layer').slideDown();
      $('#layer').css('display','block');
    })
    //e는 이벤트객체
    $('#layer .close').click(function(e){
      e.preventDefault();
      $('#layer').hide();
    })
    //윈도우팝업
    $('.window').click(function(e){
      e.preventDefault();
      //window.open('파일명','팝업이름','옵션')
      /*옵션: left, top, width, height, status, toolbar, location , memubar, scrollbars, fullscreen ..*/
      window.open('window_popup.html','웹표준안내팝업','width=800,height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no')

    });
    //라이트박스
    $('.lightbox').lightGallery({
      thumbnail:true,
      autoplay:true,
      pause:3000,
      progressBar:true
    })

    //갤러리
    $('.gallery_img').slick({
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:100,
        pauseOnHover:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        arrows:false
    })
    $('.pause').on('click',function(){
      $('.gallery_img').slick('slickPause');
    });
    $('.play').on('click',function(){
      $('.gallery_img').slick('slickPlay');
    })
    $('.prev').on('click',function(){
      $('.gallery_img').slick('slickPrev');
    })
    $('.next').on('click',function(){
      $('.gallery_img').slick('slickNext');
    })



});//function