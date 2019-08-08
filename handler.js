
var tt1 = {"<h1>Тест стилизации текста<h1>":"\
					<h1>Скушай ещё этих мягких французских булок да выпей чаю.</h1>\
					<h2>Скушай ещё этих мягких французских булок да выпей чаю.</h2>\
					<h3>Скушай ещё этих мягких французских булок да выпей чаю.</h3>\
					<h4>Скушай ещё этих мягких французских булок да выпей чаю.</h4>\
					<h5>Скушай ещё этих мягких французских булок да выпей чаю.</h5>\
					<h6>Скушай ещё этих мягких французских булок да выпей чаю.</h6>\
					<p> Скушай ещё этих мягких французских булок да выпей чаю.</p>\
					"};

var keysBase = "", keyBase = "", keysObj = "", keyObj = "", FrontO = "", BackO = "";
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
var menu = qS(".i-menu"); // 1 - иконка меню
var pageStart = qS(".b-page-start"); // 1 - стартовая страница
var pageMenu = qS(".b-page-menu"); // 1 - страница меню
var menuContent = qS(".b-menu-content"); // M - блоки меню
var pageContent = qS(".b-page-content"); // 1 - страница контента
var i_front = qS(".b-content-front"); // 1 - страница фронт-контента
var i_back = qS(".b-content-back"); // 1 - страница бек-контента

var i_buttons = qS(".b-page-content .b-buttons"); // 1 - блок с кнопками

var btn_back = qS(".i-button-back"); // 1 - кнопка назад
var btn_random = qS(".i-button-random"); // 1 - кнопка рандом
var btn_next = qS(".i-button-next"); // 1 - кнопка вперёд

function clickMenu(){
	menu.classList.toggle("m-menu-exit-icon");
	pageStart.classList.toggle("m-show-f");
	pageMenu.classList.toggle("m-show-b");
	
	qS('.i-select-menu').classList.remove("m-selected-ltl");
}

function clickPageMenu(e){
	var element = e.target;

	if (element.classList.contains("i-menu-text") &&
		((element).parentNode).classList.contains("i-page-menu")){
			element.classList.toggle("m-selected");
			menuContent = ((element).parentNode).nextElementSibling;
			menuContent.classList.toggle("m-show-b");
	}
	if (element.classList.contains("i-menu-text") &&
		((element).parentNode).classList.contains("i-menu-content")){
			element.classList.toggle("m-selected-ltl");
			if(base[element.getAttribute('data-code')] == undefined){
				switch(element.getAttribute('data-code')){
					case "js1": base[element.getAttribute('data-code')]= js1;break;
					case "js2": base[element.getAttribute('data-code')]= js2;break;
					case "js3": base[element.getAttribute('data-code')]= js3;break;
						
					case "css1": base[element.getAttribute('data-code')]= css1;break;
					case "css2": base[element.getAttribute('data-code')]= css2;break;
					case "css3": base[element.getAttribute('data-code')]= css3;break;

					case "php1": base[element.getAttribute('data-code')]= php1;break;

					case "eng1": base[element.getAttribute('data-code')]= eng1;break;
					case "eng2": base[element.getAttribute('data-code')]= eng2;break;
					case "eng3": base[element.getAttribute('data-code')]= eng3;break;

					case "poe1": base[element.getAttribute('data-code')]= poe1;break;
					case "poe2": base[element.getAttribute('data-code')]= poe2;break;
					
					case "tt1": base[element.getAttribute('data-code')]= tt1;break;
				}
				
				if(!qS('.i-select-menu').classList.contains("i-page-menu")){
					qS('.i-select-menu').classList.add("m-selected-ltl");
				}
			}
			else
				delete base[element.getAttribute('data-code')];
		console.log(base)
	}
	if(Object.keys(base).length != 0){
		if(!pageContent.classList.contains("m-show-f")){
			pageContent.classList.add("m-show-f");
			i_front.classList.add("m-show-b");
			i_back.classList.add("m-show-b");
			i_buttons.classList.add("m-show-f");
			
			generateQuestion();
			qS('.b-content-front .i-content').innerHTML = FrontO;
			qS('.b-content-back .i-content').innerHTML = BackO;
		} else{
			generateQuestion();
			qS('.b-content-front .i-content').innerHTML = FrontO;
			qS('.b-content-back .i-content').innerHTML = BackO;
		}
	}else{
		if(pageContent.classList.contains("m-show-f")){
			pageContent.classList.remove("m-show-f");
			i_front.classList.remove("m-show-b");
			i_back.classList.remove("m-show-b");
			i_buttons.classList.remove("m-show-f");
		}
	}
}

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
	qS('.b-content-front .i-content').innerHTML = FrontO;
	qS('.b-content-back .i-content').innerHTML = BackO;
}

function randomQuestion(){
	generateQuestion();
	qS('.b-content-front .i-content').innerHTML = FrontO;
	qS('.b-content-back .i-content').innerHTML = BackO;
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
	qS('.b-content-front .i-content').innerHTML = FrontO;
	qS('.b-content-back .i-content').innerHTML = BackO;

}

function buttonFront(){toggleFront(0,"X")}

function toggleFront(e,trigger = null){
	console.log(trigger);
	if(!i_front.classList.contains('m-show-b') && trigger != null){
		i_front.classList.add('m-show-b');
		menu.classList.remove('m-hide');
		qS('.i-black-theme').classList.remove('m-hide');
	}
	else if(i_front.classList.contains('m-show-b') && trigger == null){
		i_front.classList.remove('m-show-b');
		menu.classList.add('m-hide');
		qS('.i-black-theme').classList.add('m-hide');
	}
	else{
		i_front.classList.add('m-show-b');
		menu.classList.remove('m-hide');
		qS('.i-black-theme').classList.remove('m-hide');
	}
}

function toggleTheme(){
	qS('.i-black-theme').classList.toggle('m-white-theme');
	pageStart.classList.toggle('m-black-theme');
	i_front.classList.toggle('m-black-theme');
	i_back.classList.toggle('m-black-theme');
}


menu.addEventListener("click", clickMenu);
qS('.i-select-menu').addEventListener("click", clickMenu);

pageMenu.addEventListener("click", clickPageMenu);

btn_next.addEventListener("click", nextQuestion);
btn_random.addEventListener("click", randomQuestion);
btn_back.addEventListener("click", backQuestion);

i_front.addEventListener("click",toggleFront);
i_back.addEventListener("click",toggleFront);

btn_next.addEventListener("click", buttonFront);
btn_random.addEventListener("click", buttonFront);
btn_back.addEventListener("click", buttonFront)

qS('.i-black-theme').addEventListener("click",toggleTheme);

