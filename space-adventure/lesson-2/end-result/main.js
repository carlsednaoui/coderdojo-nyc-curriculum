var ship_altitude = 400;
var ship_velocity = 0;

// These are constants you can use to fine-tune your gain.  Feel free to
// try landing on a high-gravity planet by turning GRAVITY to 3 or 4.  Or
// maybe you have a super powerful rocket with THRUST to 20
var GRAVITY = 1;
var THRUST = 10;

// Here we create a function that gets called every 50 millisecond, and is
// responsible for updating our game.
var step = function () {
	// First, we're going to update the altitude using our velocity
	ship_altitude = ship_altitude + ship_velocity;
	ship_velocity = ship_velocity - GRAVITY;

	// Adjust the ship's position on the screen to its new altitude
	$('#ship').css('margin-bottom', ship_altitude)

	// And make sure we re-call step() again in 50 milliseconds
	window.setTimeout(step, 50);
}

step();

$('body').on('keydown',
	function () {

		// We're shooting off the rocket, which is going to increase our velocity.
		ship_velocity = ship_velocity + THRUST;

		// Now, we want everyone to know we're firing the rockets, so let's update
		// the image as before.
		$('#ship').attr('src', 'spaceship-moving.png')

		// But since we aren't continuously firing the engines, let's
		// reset the image after 250 milliseconds
		window.setTimeout(
			function() {
				$('#ship').attr('src', 'spaceship.png');
			}, 
			250);
	});
