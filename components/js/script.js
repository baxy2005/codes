// JavaScript Document
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


$('.box').matchHeight();

/*
    var $offCanvas = $('#offcanvas'),
        $dropdown  = $offCanvas.find('.dropdown');
    $dropdown.on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').slideDown(350);
    }).on('hide.bs.dropdown', function(){
        $(this).find('.dropdown-menu').slideUp(350);
    });
*/



var topoffset = 90;
// Animated Scrolling
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-topoffset
      }, 1000);
      return false;
    } // target.length
  } //location hostname
}); //on click


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
/**/
// button anim
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});

$(".top-carousel-container .owl-prev, .top-carousel-container .owl-next, .top-carousel-container .btn-scroll, .top-carousel-container .hovereffect-2").hover(function(){
       $(".hover-content").addClass('hover-content-slide');
       console.log("div was hovered");
    }, function(){
       $(".hover-content").removeClass('hover-content-slide');
    });

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
  });
});
$('[data-toggle="product-item"]').click(function () {
  $('.product-item-info').toggleClass('active')
});

//window height
var wheight = $(window).height(); //get height of the window

$('.fullheight').css('height', wheight);

$(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  $('.fullheight').css('height', wheight);
}) //on resize
