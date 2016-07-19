$(document).ready(function() {
  setTimeout(function () {
    $('#welcome').show().addClass('animated bounceInDown');
    setTimeout(function () {
      $('#welcome').removeClass('animated bounceInDown');
      $('#welcome').addClass('animated rubberBand');
    }, 1000);
  }, 1200);
});
