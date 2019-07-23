
var tt1 = {"<h1>Тест стилизации текста<h1>":"\
						<h1>Скушай ещё этих мягких французских булок да выпей чаю.</h1>\
						<h2>Скушай ещё этих мягких французских булок да выпей чаю.</h2>\
						<h3>Скушай ещё этих мягких французских булок да выпей чаю.</h3>\
						<h4>Скушай ещё этих мягких французских булок да выпей чаю.</h4>\
						<h5>Скушай ещё этих мягких французских булок да выпей чаю.</h5>\
						<h6>Скушай ещё этих мягких французских булок да выпей чаю.</h6>\
						<p> Скушай ещё этих мягких французских булок да выпей чаю.</p>\
						"};

var keysBase = "";
var keyBase = "";
var keysObj = "";
var keyObj = "";
var FrontO = "";
var BackO = "";

var base = {};

function generateQuestion(){
	keysBase = Object.keys(base);
	keyBase = Math.floor(Math.random() * (keysBase.length));

	keysObj = Object.keys(base[keysBase[keyBase]]);
	keyObj = Math.floor(Math.random() * (keysObj.length));
	// ключ keysObj[keyObj];
	// значение base[keysBase[keyBase]][keysObj[keyObj]];
	FrontO = keysObj[keyObj];
	BackO = base[keysBase[keyBase]][keysObj[keyObj]];
}
  
// querySelector -> Если есть элемент, то перезаписывает его
function qS(selector, elem=undefined){
  if(elem == undefined) return document.querySelector(selector);
  else elem = document.querySelector(selector);
}

//   Работа с меню
var menu = qS(".i-menu");
var pageStart = qS(".b-page-start");
var pageMenu = qS(".b-page-menu");
var menuContent = qS(".b-menu-content");
var b_menu = 0; var i_menu = 0;
var pageContent = qS(".b-page-content");
var i_front = qS(".b-content-front");
var i_back = qS(".b-content-back");

var i_buttons = qS(".b-page-content .b-buttons");

var btn_back = qS(".i-button-back");
var btn_random = qS(".i-button-random");
var btn_next = qS(".i-button-next");

menu.addEventListener("click", function(){
  pageStart.classList.toggle("m-show-f");
  pageMenu.classList.toggle("m-show-b");
});

pageMenu.addEventListener("click", function(e){
  if (e.target.classList.contains("i-menu-text") &&
    ((e.target).parentNode).classList.contains("i-page-menu")){
      e.target.classList.toggle("m-selected");
      menuContent = ((e.target).parentNode).nextElementSibling;
      menuContent.classList.toggle("m-show-b");
  }
  if (e.target.classList.contains("i-menu-text") &&
    ((e.target).parentNode).classList.contains("i-menu-content")){
      e.target.classList.toggle("m-selected");
      if(base[e.target.getAttribute('data-code')] == undefined){
        switch(e.target.getAttribute('data-code')){
          case "js1": base[e.target.getAttribute('data-code')]= js1;break;
          case "js2": base[e.target.getAttribute('data-code')]= js2;break;
          case "js3": base[e.target.getAttribute('data-code')]= js3;break;
            
          case "css1": base[e.target.getAttribute('data-code')]= css1;break;
          case "css2": base[e.target.getAttribute('data-code')]= css2;break;
					case "css3": base[e.target.getAttribute('data-code')]= css3;break;
					
          case "tt1": base[e.target.getAttribute('data-code')]= tt1;break;
        }
      }
      else
        delete base[e.target.getAttribute('data-code')];
    console.log(base)
  }
  if(Object.keys(base).length != 0){
    if(!pageContent.classList.contains("m-show-f")){
      pageContent.classList.add("m-show-f");
      i_front.classList.add("m-show-b");
      i_back.classList.add("m-show-b");
      i_buttons.classList.add("m-show-f");
      
      generateQuestion();
      i_front.innerHTML = FrontO;
      i_back.innerHTML = BackO;
    } else{
      generateQuestion();
      i_front.innerHTML = FrontO;
      i_back.innerHTML = BackO;
    }
  }else{
    if(pageContent.classList.contains("m-show-f")){
      pageContent.classList.remove("m-show-f");
      i_front.classList.remove("m-show-b");
      i_back.classList.remove("m-show-b");
      i_buttons.classList.remove("m-show-f");
    }
  }
});

function nextQuestion(){
  if(!keysObj.length){
    keysBase = Object.keys(base);
    keyBase = Math.floor(Math.random() * (keysBase.length));

    keysObj = Object.keys(base[keysBase[keyBase]]);
    keyObj = Math.floor(Math.random() * (keysObj.length));
    BackO = base[keysBase[keyBase]][keysObj[0]];
    FrontO = keysObj[0];
  }
  else if(keysObj.length-1 <= keyObj){
    keyObj = 0;
    BackO = base[keysBase[keyBase]][keysObj[keyObj]];
    FrontO = keysObj[keyObj];
  }
  else{
    BackO = base[keysBase[keyBase]][keysObj[++keyObj]];
    FrontO = keysObj[keyObj];
  }
   i_front.innerHTML = FrontO;
   i_back.innerHTML = BackO;
}

function randomQuestion(){
  generateQuestion();
  i_front.innerHTML = FrontO;
  i_back.innerHTML = BackO;
}

function backQuestion(){
  if(!keysObj.length){
    keysBase = Object.keys(base);
    keyBase = Math.floor(Math.random() * (keysBase.length));

    keysObj = Object.keys(base[keysBase[keyBase]]);
    keyObj = Math.floor(Math.random() * (keysObj.length));
    BackO = base[keysBase[keyBase]][keysObj[keysObj.length-1]];
    FrontO = keysObj[keysObj.length-1];
  }
  else if(0 >= keyObj){
    keyObj = keysObj.length-1;
    BackO = base[keysBase[keyBase]][keysObj[keyObj]];
    FrontO = keysObj[keyObj];
  }
  else{
    BackO = base[keysBase[keyBase]][keysObj[--keyObj]];
    FrontO = keysObj[keyObj];
  }
   i_front.innerHTML = FrontO;
   i_back.innerHTML = BackO;
}

btn_next.addEventListener("click", nextQuestion);
btn_random.addEventListener("click", randomQuestion);
btn_back.addEventListener("click", backQuestion);

function toggleFront(){
  if(i_front.classList.contains('m-show-b'))
    i_front.classList.remove('m-show-b');
  else
    i_front.classList.add('m-show-b');
}

i_front.addEventListener("click",toggleFront);
i_back.addEventListener("click",toggleFront);

function toggleTheme(){
  qS('.i-black-theme').classList.toggle('m-white-theme');
  pageStart.classList.toggle('m-black-theme');
  i_front.classList.toggle('m-black-theme');
  i_back.classList.toggle('m-black-theme');
}
qS('.i-black-theme').addEventListener("click",toggleTheme);


