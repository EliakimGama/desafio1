/*$( document ).ready(function() {
   
	var btnMenuMobile = $('.fa-bars');

	$('.fa-bars').on('click', function() {

		$('.nav-container ul').toggleClass('open');

	});

});*/

var arr = [];
 
function addItem(){
   if (localStorage.meuArr){             
	  arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   let novoItem = document.getElementById("nomes").value;
   arr.push(novoItem);
   document.getElementById("nomes").value = "";
   localStorage.meuArr = JSON.stringify(arr);
}

function showItems(){
   let resultDIV = document.getElementById('d');
   resultDIV.innerHTML = "";
   if (localStorage.meuArr){             
	  arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   for(var i in arr){
	  let p = document.createElement("p");
	  p.innerHTML = arr[i];
	  resultDIV.append(p);
   }
}

function clearItems(){
   arr = [];
   localStorage.meuArr = JSON.stringify(arr);   
}