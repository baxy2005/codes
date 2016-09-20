// JavaScript Document
$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
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
