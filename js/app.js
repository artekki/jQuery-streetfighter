$(document).ready(fuction() { 
	$('.ryu').mouseenter(function() {
		alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		alert('mouse left');
	});
});