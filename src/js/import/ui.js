import '../lib/selectize.min';


//select
$('select').selectize();

//menu mob
$('.menu-open').on('click', function() {
  $('.menu').addClass('active');
  $('.bg').fadeIn(1000);
  $('body').css({'overflow': 'hidden'});
});

$('.bg, .menu-close').on('click', function() {
  $('.menu').removeClass('active');
  $('.bg').fadeOut();
  $('body').css({'overflow': 'visible'});
});
