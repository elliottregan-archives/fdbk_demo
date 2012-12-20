$(document).ready( function() {
  $(window).scroll(function() {
    console.log('hello');
    currentScrollTop = 60-$(window).scrollTop();
    console.log(currentScrollTop);
    if (currentScrollTop<0) currentScrollTop=0
    $(".overlay").css({
      position : 'fixed',
      top : currentScrollTop
    })
  })
  
  window.addEventListener('load', function() {
      new FastClick(document.body);
  }, false);
  
})