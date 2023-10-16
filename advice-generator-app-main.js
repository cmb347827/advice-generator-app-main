'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

$(window).resize(function(){
	location.reload();
});
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler);
};

const displayWhere = ['#adviceId','#adviceText'];

const urlStart='https://api.adviceslip.com/advice/search/action';
//const urlStart='https://api.adviceslip.com/advice/117';
const url= 'https://api.adviceslip.com/advice';

$(window).on('load',function(){
	let ids = displayWhere.map(function(element){
		let id = document.querySelector(element);
		return id;
	});
	//display some random advice on first load
	getJson(urlStart,ids,displayAdvice);
 
    
	//display randome advice on the user clicking the dice button
	onClick('#dice',function(){
	    getJson(url, ids,displayAdvice);
    });
	  
	  
});