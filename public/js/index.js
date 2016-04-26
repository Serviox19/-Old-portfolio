$(document).ready(function(){
  $('.collapse').collapse('hide');

  $('.nav-links').on('click', function() {
    $('.collapse').collapse('toggle');
  });
});
