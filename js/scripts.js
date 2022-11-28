$( document ).ready(function() {
   
	var btnMenuMobile = $('.fa-bars');

	$('.fa-bars').on('click', function() {

		$('.nav-container ul').toggleClass('open');

	});

});