import '../lib/selectize.min';
import modal from 'jquery-modal';


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


//fixed header
$(window).scroll(function() {
  if($('body, html').scrollTop() > 300) {
    $('.header-fixed').css({'top': '-1px'});
  } else{
    $('.header-fixed').css({'top': '-130px'});
  }
});


//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});
