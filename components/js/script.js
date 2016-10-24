// JavaScript Document
// button anim
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });

        // Init ScrollMagic Controller
        scrollMagicController = new ScrollMagic({
          globalSceneOptions: {
            triggerHook: "onLeave"
          }
        });

        var tween = new TimelineMax();

             tween.add([
              TweenMax.to(".on-off", 0.2, {marginTop:70 }),
             TweenMax.to(".button-language-container", 0.3, {height:50}),
             TweenMax.to(".button-language-container", 0.3, {marginTop: -50}),
             TweenMax.to(".navbar", 0.3, {height:50}),
             TweenMax.to(".brand-container", 0.3, {height:50 }),
             TweenMax.to(".brand-image", 0.2, {width:100, height:35 }),
             TweenMax.to(".navmenu-brand", 0.3, {width:100, height:22 }),



           ]);
           tween.add([
           ]);

           scene = new ScrollScene({
             offset: 50

        })
        .setTween(tween)
        .addTo(scrollMagicController);

        var scene3 = new ScrollScene({
          offset: 50

        })
        .setClassToggle('.icon-bar:nth-of-type(2)', 'icon-bar-2')
        .addTo(scrollMagicController);



// same box height
$('.box').matchHeight();

// region classes
$(".mask-1").hover(function(){
       $(".region-left").addClass('region-open');
       console.log("div was hovered");
    }, function(){
       $(".region-left").removeClass('region-open');
    });

$(".region-item:first-child .btn-default").hover(function(){
       $(".region-left").addClass('region-open');
       console.log("div was hovered");
    }, function(){
       $(".region-left").removeClass('region-open');
    });

$(".mask-2").hover(function(){
       $(".region-right").addClass('region-open');
       console.log("div was hovered");
    }, function(){
       $(".region-right").removeClass('region-open');
    });

$(".region-item:last-child .btn-default").hover(function(){
       $(".region-right").addClass('region-open');
       console.log("div was hovered");
    }, function(){
       $(".region-right").removeClass('region-open');
    });
// offcanvas
$(document).ready(function () {
  $('[data-toggle="offcanvas-2"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
    $('.container-fluid.yellow-atelier').toggleClass('atelier-margin-top')
    $('.btn-login').toggleClass('btn-close-white')
  });
});
$('[data-toggle="product-item"]').click(function () {
  $('.overlay-click').toggleClass('product-active')
});
$('[data-toggle="product-item-2"]').click(function () {
  $('.overlay-click-2').toggleClass('product-active')
  $('.owl-nav').toggleClass('fade-off')

});
$('[data-toggle="product-item-3"]').click(function () {
  $('.overlay-click-2').toggleClass('product-active-active')
});
$('[data-toggle="product-item-4"]').click(function () {
  $('.overlay-click-3').toggleClass('overlay-click-3-slide')
});

$('.slider-click').click(function () {
  $('.slider-wrap').toggleClass('slider-wrap-open')
});
$('.panel-title').click(function () {
  $(this).toggleClass('panel-title-active')
});

/*
$(function() {
  $('.panel-title').click(function() {
    if ($(this).hasClass('panel-title-active')) {
      $(this).removeClass('panel-title-active');
    } else {
      $('.panel-title').removeClass('panel-title-active');
      $(this).addClass('panel-title-active');
    }
  });
});*/

//window height
var wheight = $(window).height(); //get height of the window

$('.fullheight').css('height', wheight);

$(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  $('.fullheight').css('height', wheight);
}) //on resize


$(document).ready(function() {
  var contentLastMarginLeft = 0;
  $(".slider-click").click(function() {
    var box = $(".slider-content");
    var newValue = contentLastMarginLeft;
    contentLastMarginLeft = box.css("margin-left");
    box.animate({
      "margin-left": newValue
    }, 500);
  });
});







		});


$('.owl-carousel-main').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false,
    navText: [
      "<i class='main-carusel-left'></i>",
      "<i class='main-carusel-right'></i>"
   ],
})

$('.owl-carousel-product').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: [
      "<i class='carousel-left'></i>",
      "<i class='carousel-right'></i>"
   ],
})
var i = 1;
$('.owl-carousel-product .owl-dot').each(function(){
  $(this).text(i);
  i++;
});
$('.owl-carousel-services').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: [
      "<i class='carousel-left'></i>",
      "<i class='carousel-right'></i>"
   ],
})
var i = 1;
$('.owl-carousel-services .owl-dot').each(function(){
  $(this).text(i);
  i++;
});

$('.owl-carousel-product-one-product').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: [
      "<i class='carousel-left'></i>",
      "<i class='carousel-right'></i>"
   ],
})
$('#owl-carousel-product-list').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: [
      "<i class='carousel-left'></i>",
      "<i class='carousel-right'></i>"
   ],
})




/*
    var $offCanvas = $('#offcanvas'),
        $dropdown  = $offCanvas.find('.dropdown');
    $dropdown.on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').slideDown(350);
    }).on('hide.bs.dropdown', function(){
        $(this).find('.dropdown-menu').slideUp(350);
    });
*/






$(".top-carousel-container .owl-prev, .top-carousel-container .owl-next, .top-carousel-container .btn-scroll, .top-carousel-container .hovereffect-2").hover(function(){
       $(".hover-content").addClass('hover-content-slide');
       console.log("div was hovered");
    }, function(){
       $(".hover-content").removeClass('hover-content-slide');
    });
