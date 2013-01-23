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
  
  
  
  				var q_Id = 0;
  				var test = 'testing';
  				
  				var mcMultiSelect = '<input type="text" name="multi_select_title" placeholder="add your question here." /><input type="checkbox" name="" value="" id="q00_a00"/><label for="q00_a00"></label><button class="new_input">+</button>'
  
  				$('#q_panel .close').click(function(){
  
  					//Create and add the form element
            if ( $('#q_panel li.selected').data('qtype') === 'mcMultiSelect') {
              $(mcMultiSelect).appendTo('#q_list');
            }else {
              $('<li>').attr('id', 'qid_' + q_Id)
                
  						  .text(test)
  
  						  .appendTo('#q_list');
            }
            
  					//Iterate id number
  
  					q_Id++;
  
  				});
  
  
  
})