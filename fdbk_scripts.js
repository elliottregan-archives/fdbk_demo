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
	var a_Id = 0
	var qType = 'no type selected';
		
	function getQuestionType() {
	  return $('#q_panel li.selected').data('qtype');
	}
	
	function getAnswerType() {
	  return $('#q_list li.selected').data('qtype');
	}
	
	function setSelectedQuestion() {
	  $('#q_list li').removeClass('selected');
	}
	
	var mcMultiSelect = function(q_Id) {
	
	  var question = "<li data-qtype='mcMultiSelect'> \
		  <input type='text' name='q" + q_Id + "_question' placeholder='add your question here.' /> \
		  <ul class='answers'> \
		  </ul> \
		  <button id='q" + q_Id + "_add_answer' class='new_input dotted'>+ add new answer</button> \
	  </li>"
	  
	  var answer = "<li> \
	      <input type='checkbox' name='q" + q_Id + "_input'/> \
	      <input type='text' name='q" + q_Id + "_label' placeholder='add the first answer'/> \
	    <li> "
	  
	  return [question, answer];
	}
	
	var mcSingleSelect = function(q_Id) {
	
	  var question = "<li data-qtype='mcSingleSelect'> \
		  <input type='text' name='q" + q_Id + "_question' placeholder='add your question here.' /> \
		  <ul class='answers'> \
		  </ul> \
		  <button id='q" + q_Id + "_add_answer' class='new_input dotted'>+ add new answer</button> \
	  </li>"
	  
	  var answer = "<li> \
	      <input type='radio' name='q" + q_Id + "_input'/> \
	      <input type='text' name='q" + q_Id + "_label' placeholder='add the first answer'/> \
	    <li> "
	  
	  return [question, answer];
	}
           
  var rangeSlider = function(q_Id) {
    var question = "<li data-qtype='rangeSlider'> \
      <input type='text' name='q" + q_Id + "_question' placeholder='add your question here.' /> \
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
      </script>"
    
    return [question];
  }
  
  var addQuestion = function(qType) {
    $('#q_list li').removeClass('selected');
    if (qType == 'mcMultiSelect') {
      $(mcMultiSelect(q_Id)[0]).appendTo('#q_list').addClass('selected');
    }
    else if (qType == "rangeSlider") {
      $(rangeSlider(q_Id)[0]).appendTo('#q_list').addClass('selected');
    }
    else if (qType == "mcSingleSelect") {
      $(mcSingleSelect(q_Id)[0]).appendTo('#q_list').addClass('selected');
    }
    else {
      $('<li>').attr('id', 'qid_' + q_Id).text("no answer selected").appendTo('#q_list');
    }
    
    //Iterate id number
    q_Id++;
  }
  
  function addAnswer(qType) {
    if (qType == "mcMultiSelect") {
      $(mcMultiSelect(qType)[1]).appendTo('#q_list > li.selected .answers');  
    }
    else if (qType == "rangeSlider") {
      $(rangeSlider(qType)[1]).appendTo('#q_list > li.selected .answers');
    }
    else if (qType == "mcSingleSelect") {
      $(mcSingleSelect(qType)[1]).appendTo('#q_list > li.selected .answers');
    }
    else {
      $('<li>').attr('id', 'qid_' + q_Id)
			  .text("no answer selected")
			  .appendTo('li.selected .answers');
    }
  }

	$('#q_panel .close').click(function(){
    qType = getQuestionType()
    addQuestion(qType);
    addAnswer(qType);
    
    $('#q_panel li').siblings().children('p, fieldset').slideUp();
    $('#q_panel li').removeClass('selected');
    
	});
	  			
	$('#q_list > li').live('mousedown',function() {
	  $(this).siblings().removeClass('selected');
	  $(this).addClass('selected');
	})
	
	$('.new_input').live('click', function() {
	  addAnswer(qType);
	})
  
  var steps = [form, reward, social, permissions, url]
  var currentStep = 0
    
  function forwardPage() {
    if (currentStep < (steps.length - 1)) {
      $(steps[currentStep]).fadeOut();
      currentStep = currentStep + 1;
      $(steps[currentStep]).delay(400).fadeIn();
    } 
  }
  
  function backPage() {
    if (currentStep >= 0) {
      $(steps[currentStep]).fadeOut();
      currentStep = currentStep - 1;
      $(steps[currentStep]).delay(400).fadeIn();
    }
  }
  
  $('#next').click(function() {
    forwardPage();
  })
  
  $('#back').click(function() {
    if (currentStep > 0) {
      backPage();
    }
    else if (currentStep == 0) {
      console.log('back')
      document.location='dashboard.html'
    }
  })
  
  $('#launch').click( function() {
    $('#login_panel').fadeIn();
  })
  
})