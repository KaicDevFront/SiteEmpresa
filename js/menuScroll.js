$(function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('body,html').animate({'scrollTop':offSetTop});

		return false;
	})
});