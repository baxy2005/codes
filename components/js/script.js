// JavaScript Document
$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:true,
    items: 1,
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
     TweenMax.to(".button-language-container", 0.3, {height:50}),
     TweenMax.to(".button-language-container", 0.3, {marginTop: -50}),
     TweenMax.to(".navbar", 0.3, {height:50}),
     TweenMax.to(".brand-container", 0.3, {height:50 }),
     TweenMax.to(".brand-image", 0.2, {width:100, height:35 }),
     TweenMax.to(".navmenu-brand", 0.3, {width:100, height:22 }),
    TweenMax.to(".offcanvas.in", 0.3, {marginTop: 50 }),



   ]);
   tween.add([
   ]);

   scene = new ScrollScene({
     offset: 50

})
.setTween(tween)
.addTo(scrollMagicController);
/*
// button anim
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
*/
