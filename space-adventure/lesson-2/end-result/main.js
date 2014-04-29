var shipAltitude = 0;

$('body').on('keydown',
	function () {

		// Then adjust the ship's altitude
		shipAltitude = shipAltitude + 10;

		// First we're going to change the image for the sprite
		// Now we'll move the ship on the screen
		$('#ship').attr('src', 'spaceship-moving.png');
		$('#ship').css('margin-bottom', shipAltitude);

		// But since we aren't continuously firing the engines, let's
		// reset the image after 250 milliseconds
		window.setTimeout(
			function() {
				$('#ship').attr('src', 'spaceship.png');
			},
			250);
	});
