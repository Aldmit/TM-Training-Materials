var keysBase = "";
var keyBase = "";
var keysObj = "";
var keyObj = "";

var base = {};
var genQuestion = "";

$(document).ready(function(){

  function generateQuestion(){
		keysBase = Object.keys(base);
    keyBase = Math.floor(Math.random() * (keysBase.length));
    
    keysObj = Object.keys(base[keysBase[keyBase]]);
    keyObj = Math.floor(Math.random() * (keysObj.length));
   // ключ keysObj[keyObj];
	 // значение base[keysBase[keyBase]][keysObj[keyObj]];
	  genQuestion = base[keysBase[keyBase]][keysObj[keyObj]];
	}
	function nextQuestion(){
		if(!keysObj.length){
			keysBase = Object.keys(base);
			keyBase = Math.floor(Math.random() * (keysBase.length));
			
			keysObj = Object.keys(base[keysBase[keyBase]]);
			keyObj = Math.floor(Math.random() * (keysObj.length));
			genQuestion = base[keysBase[keyBase]][keysObj[0]];
		}
		else if(keysObj.length <= keyObj){
			keyObj = 0;
			genQuestion = base[keysBase[keyBase]][keysObj[keyObj]];
			console.log(keysObj.length+" , "+keyObj);
		}else{
			genQuestion = base[keysBase[keyBase]][keysObj[keyObj++]];
			console.log(keysObj.length+" , "+keyObj);
		}
		
  }
  
//   Работа с меню
  
  $('.i-button').click(function(){
     $('.b-header .b-nav').toggleClass('_show');
  });
  
  function addMark(blockClass, baseKey, baseText){
    $(blockClass).click(function(event){
        $(blockClass).toggleClass('_mark');
        if($(blockClass).hasClass('_mark')){
          base[baseKey] = baseText;
        } else{ 
          base[baseKey] = null;
        }
    });
  }
  addMark("._html1", "html1", html1);
  addMark("._html2", "html2", html2);
  addMark("._html3", "html3", html3);
  
  addMark("._css1", "css1", css1);
  addMark("._css2", "css2", css2);
  addMark("._css3", "css3", css3);
  
  addMark("._js1", "js1", js1);
  addMark("._js2", "js2", js2);
  addMark("._js3", "js3", js3);
  
//   Работа с карточками
  
	$('.i-question').click(function(){
		$('.i-question').toggleClass('_show');
		$('.i-answer').toggleClass('_show');
	});
	$('.i-answer').click(function(){
		$('.i-answer').toggleClass('_show');
		$('.i-question').toggleClass('_show');
	});

//   Работа со сладером

	$('.b-main .i-nav_next').click(function(){
		nextQuestion();
		if($('.i-answer').hasClass('_show')){
			$('.i-answer').toggleClass('_show');
			$('.i-question').toggleClass('_show');
		}
		if($('.b-header .b-nav').hasClass('_show')) 
		$('.b-header .b-nav').toggleClass('_show');
		
		$('.i-question').html(keysObj[keyObj]);
		$('.i-answer').html(genQuestion);
	});

	
	$('.b-header .i-random').click(function(){
		generateQuestion();
		if($('.i-answer').hasClass('_show')){
			$('.i-answer').toggleClass('_show');
			$('.i-question').toggleClass('_show');
		}
		if($('.b-header .b-nav').hasClass('_show')) 
		$('.b-header .b-nav').toggleClass('_show');
		
		$('.i-question').html(keysObj[keyObj]);
		$('.i-answer').html(genQuestion);
	});

});