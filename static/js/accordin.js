
$(document).ready(function () {
	
	$('#toggle-view h3').click(function () {

		var text = $(this).next('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('200');
			$(this).children('span').html('-');		
		} else {
			text.slideUp('200');
			$(this).children('span').html('+');		
		}
		
	});

});