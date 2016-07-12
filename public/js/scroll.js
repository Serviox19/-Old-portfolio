$(document).ready(function() {

  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);
        
  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});

  $(window).scroll(function () {
      // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 730) {
      $('.navbar').addClass('navbar-fixed');
    }

    if ($(window).scrollTop() < 730) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});
