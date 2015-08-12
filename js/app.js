$(document).ready(function() { 
	
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			600,
			function() {
				$(this).stop();
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	$(document).keydown(function(e) {
		if(e.which == 88) {
			playCool();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})

	$(document).keyup(function(e) {
		if(e.which == 88) {
			$('#cool-sound')[0].pause();
			$('#cool-sound')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	})

})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].play();
}