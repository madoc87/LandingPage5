$(function(){

	// ativar menu mobile
	$(function() {
		$('.mobile-menu').click(function(){
			$(this).find('ul').slideToggle();
		})
	})	


	// // animacao scroll menu
	// $('nav a').click(function(){
	// 	var href = $(this).attr('href');
	// 	var offSetTop = $(href).offset().top-40;

	// 	$('html, body').animate({'scrollTop':offSetTop});

	// 	return false;
	// });

	// // carregar iframe Mapa
	// $('#map').append('<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=cowmeia&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>');

})


	// $(function() {
	// 	$('mobile-menu').click(function(){
	// 		$('.mobile-menu').find('ul').slideToggle();
	// 	})
	// })	