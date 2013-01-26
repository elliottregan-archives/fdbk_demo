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
				var qType = 'no type selected';
  				
				function getQuestionType() {
				  return $('#q_panel li.selected').data('qtype');
				}
				  
				function mcMultiSelect(q_Id) {
				

				 return "<li> \
  				  <input type='text' name='q" + q_Id + "_question' placeholder='add your question here.' /> \
  				  <ul class='answers'> \
  				  </ul> \
  				  <button id='q" + q_Id + "_add_answer class='new_input'>+ add new answer</button> \
				  </li>"
				}

        function mcMultiSelectAnswer(q_Id) {
          return "<li> \
            <input type='checkbox' name='q" + q_Id + "_input'/> \
            <input type='text' name='q" + q_Id + "_label placeholder='add the first answer'/> \
          <li> "
        }
          
        function rangeSlider(q_Id) {
          "<fieldset> \
            <div id='slider" + q_Id + "' class='slider'> \
              <div class='track'></div> \
              <div class='knob' role='slider'></div> \
            </div> \
            <script type='text/javascript'> \
              var input1 = document.getElementById('output1'); \
              var slider1 = new MobileRangeSlider('slider1', { \
                value: 5, \
                min: 0, \
                max: 10, \
                change: function(percentage) { \
                  input1.value = percentage; \
                } \
              }); \
              input1.addEventListener('change', function(){ \
                slider1.setValue(input1.value); \
              }); \
            </script> \
          </fieldset>"
        }
        
        function addQuestion(qType) {
          if (qType == "mcMultiSelect") {
            $(mcMultiSelect(q_Id)).appendTo('#q_list');
          }
          else if (qType == "rangeSlider") {
            $(rangeSlider(q_Id)).appendTo('#q_list');
          }
          else if (qType == "mcMultiSelect") {
            $(mcSingleSelect(q_Id)).appendTo('#q_list');
          }
          else {
            $('<li>').attr('id', 'qid_' + q_Id).text("no answer selected").appendTo('#q_list');
          }
          
          //Iterate id number
          q_Id++;
          console.log(q_Id)
        }
        
        function addAnswer(qType) {
          if (qType == "mcMultiSelect") {
            mcMultiSelectAnswer.appendTo('#answers');  
          }
          else if (qType == "rangeSlider") {
            rangeSlider.appendTo('#answers');
          }
          else if (qType == "mcMultiSelect") {
            rangeSlider.appendTo('#answers');
          }
          else {
            $('<li>').attr('id', 'qid_' + q_Id)
              
  					  .text("no answer selected")
  
  					  .appendTo('#q_list');
          }
        }
  
  			$('#q_panel .close').click(function(){
            qType = getQuestionType()
  					//Create and add the form element
            addQuestion(qType);
  			});
  			
  			$('.new_input').click( function() {
    			qType = getQuestionType()
    			//Create and add the form element
    			addAnswer(qType);
  			})
  
  
  
})