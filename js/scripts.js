$(document).ready(function() {
	// 1. This is bad code since JS is controlling styling
	// 2. This is bad code since JS styling cannot be reused  
	$('button#green').click(function() {
		$('body').css('background-color', 'green');
	});

	$('button#yellow').click(function() {
		$('body').css('background-color', 'yellow');
	});

	$('button#red').click(function() {
		$('body').css('background-color', 'red');
	});
});