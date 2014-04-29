# Lesson 3: Getting ready for takeoff

### End goal
Add the planet's gravity and the ship's thrust. We'll also learn how to calculate the ship's velocity.

![](http://i.imgur.com/iw6q6ma.gif)


## Part 1 - Let it fall
Let's start this lesson by defining some base values.

First, we'll want our ship to start about half-way through the page. Let's position our ship at an altitude of 400px.

`var shipAltitude = 400;`

Let's also initialize the ship's velocity (how fast it's moving) with a value of 0.

`var shipVelocity = 0;`

Last, but not least, let's add our gravity (which is a constant).

`var GRAVITY = 1;`

## Part 2 - Let the simulation begin
We will now create a function that will handle our simulation. To do this we'll use a recursive funtion. Walk the kids through this code.

```js
// Here we create a function that gets called every 50 millisecond, and is
// responsible for updating our simulation.
var step = function () {
  // First, we're going to update the altitude using our velocity
  shipAltitude = shipAltitude + shipVelocity;
  
  // Then, we're going to update the velocity using the gravity
  shipVelocity = shipVelocity - GRAVITY;

  // Adjust the ship's position on the screen to its new altitude
  $('#ship').css('margin-bottom', shipAltitude)

  // And make sure we re-call step() again in 50 milliseconds
  window.setTimeout(step, 50);
}

// start the function
step();
```

## Part 3 - How powerful is your ship?
One last piece remains, we need to create a constant for the ship's thrust.

`var THRUST = 10;`

This is what our `keydown` function looks like now

```js
$('body').on('keydown',
  function () {

    // We're shooting off the rocket, which is going to increase our velocity.
    shipVelocity = shipVelocity + THRUST;

    // Now, we want everyone to know we're firing the rockets, so let's update
    // the image as before.
    $('#ship').attr('src', 'spaceship-moving.png');

    // But since we aren't continuously firing the engines, let's
    // reset the image after 250 milliseconds
    window.setTimeout(
      function() {
        $('#ship').attr('src', 'spaceship.png');
      },
      250);
  }
);
```

You can see the [final main.js here](end-result/main.js)

## End result
- [End result folder](end-result)
- [End result zip](end-result.zip)
    - Click "view raw" to download the files
