$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop());

    if ($(window).scrollTop() > 730) {
      $('.navbar').addClass('navbar-fixed');
    }

    if ($(window).scrollTop() < 730) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});
