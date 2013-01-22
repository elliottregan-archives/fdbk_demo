$(document).ready( function() {
  
  $('#send_form').click( function() {
  
    $('#form').fadeOut();
    $('#connect').delay(400).fadeIn(200);
  
  })
  
  $('.connect').click( function() {
    
    $('#connect').fadeOut();
    $('#share').delay(400).fadeIn(200);
    
  })
  
  $('#new_q').click( function() {
    $('#q_panel').removeClass('bounceOutDown hidden');
    $('#q_panel').addClass('bounceInUp');
    $('#q_panel').addClass('animated');
    $('#q_panel').show();
  })
  
  $('#q_panel .close').click( function() {
    $('#q_panel').removeClass('bounceInUp');
    $('#q_panel').addClass('bounceOutDown hidden');
  })
  
  $('#q_panel li').click( function() {
    $('#q_panel li').removeClass('selected');
    $(this).siblings().children('p, fieldset').slideUp();
    $(this).toggleClass('selected');
    $(this).children('p, fieldset').slideDown();
  })
  
})