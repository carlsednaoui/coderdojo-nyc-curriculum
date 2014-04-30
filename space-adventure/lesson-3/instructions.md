# Lesson 3: Adding some gravity

### End goal
Add the planet's gravity and the ship's thrust logic. We will also learn how to calculate the ship's velocity.

![](http://i.imgur.com/iw6q6ma.gif)


## Note: All of the below steps take place inside `main.js`

## Part 1 - New variables
Let's start this lesson by defining some base values. First, we'll want our ship to start about half-way through the page. Let's position our ship at an altitude of 400px.

`var shipAltitude = 400;`

We will now initialize the ship's velocity with a value of 0. The velocity defines how fast the ship is moving up or down.

`var shipVelocity = 0;`

Finally, let's add our gravity — a constant.

`var GRAVITY = 1;`

## Part 2 - Let the simulation begin
We will now create a function to handle our simulation by using a recursive funtion. Walk the kids through this code. If you haven't introduced them to functions yet, now's the perfect time!

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
To keep track of the ship's thrust we'll use another constant.

`var THRUST = 10;`

This is what our `keydown` function looks like now. Notice that we're now using `shipVelocity` as opposed to `shipAltitude` which we were using in [lesson-2](../lesson-2).

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

You can see the final [main.js](end-result/main.js) file here.

## End result
- [End result folder](end-result)
- [End result zip](end-result.zip)
    - Click "view raw" to download the files
