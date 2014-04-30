# Lesson 4: Houston, we've landed successfully

### End goal
![](http://i.imgur.com/mv9SLTq.gif)


## Note: All of the below steps take place inside `main.js`

## Part 1 - How resistant is the ship, captain?
Create a new variable to save the "crash velocity" — where crash velocity determines our maximum velocity to ensure the ship doesn't crash. This value is a constant.

`var CRASH_VELOCITY = 10;`

## Part 2 - Will you crash?
Let's now detect if the ship's going too fast as it lands. If so, GAME OVER :( Otherwise, you're a hero! :)

This code will live inside our `step` function.

```js
if (shipAltitude <= 0) {
  if (Math.abs(shipVelocity) < CRASH_VELOCITY) {
    alert('Congratulations on a smooth landing!');
  } else {
    alert('Crash!');
  }
} else {
  // And make sure we re-call step() again in 50 milliseconds
  window.setTimeout(step, 50);
}
```

Let's break down the above function step-by-step. If you ship's altitude goes to 0 or below, you've landed.    
`if (shipAltitude <= 0) {`

Once the ship has landed, we check to make sure your velocity was below the `CRASH_VELOCITY`.    
`if (Math.abs(shipVelocity) < CRASH_VELOCITY) {`

If that's true, success!    
`alert('Congratulations on a smooth landing!');`

If not, we failed :(    

```js
} else {
  alert('Crash!');
```

If our altitude is not at 0 or below, we call step again in 50ms.

```js
} else {
  // And make sure we re-call step() again in 50 milliseconds
  window.setTimeout(step, 50);
}
```

Here's what our `step` function looks like:

```js
// Here we create a function that gets called every 50 millisecond, and is
// responsible for updating our simulation.
var step = function () {
  // First, we're going to update the altitude using our velocity
  shipAltitude = shipAltitude + shipVelocity;

  // Then, we're going to update the velocity using the gravity
  shipVelocity = shipVelocity - GRAVITY;

  if (shipAltitude <= 0) {
    if (Math.abs(shipVelocity) < CRASH_VELOCITY) {
      alert('Congratulations on a smooth landing!');
    } else {
      alert('Crash!');
    }
  } else {
    // And make sure we re-call step() again in 50 milliseconds
    window.setTimeout(step, 50);
  }

  $('#ship').css('margin-bottom', shipAltitude);
};
```

## Part 3 - A sleek dashboard
We will now add a dashboard to report our altitude and velocity.

In `index.html` add the following html. We will use jQuery to update these divs.

```html
<div class="dashboard">
  <div id="altitude"></div>
  <div id="velocity"></div>
</div>
```

In `app.js` add the following function, which will be used to update our dashboard. Notice how we've moved `$('#ship').css('margin-bottom', shipAltitude);` from our step function and added it here.

```js
var updateDisplay = function() {
  $('#altitude').html('altitude: ' + shipAltitude);
  $('#velocity').html('velocity: ' + shipVelocity);

  // Adjust the ship's position on the screen to its new altitude
  $('#ship').css('margin-bottom', shipAltitude);
};
```

We now need to call this function at the end of our `step` function. Here's what `step` looks like now:

```js
var step = function () {
  // First, we're going to update the altitude using our velocity
  shipAltitude = shipAltitude + shipVelocity;

  // Then, we're going to update the velocity using the gravity
  shipVelocity = shipVelocity - GRAVITY;

  if (shipAltitude <= 0) {
    shipAltitude = 0;
    updateDisplay();

    if (Math.abs(shipVelocity) < CRASH_VELOCITY) {
      alert('Congratulations on a smooth landing!');
    } else {
      alert('Crash!');
    }
  } else {
    // And make sure we re-call step() again in 50 milliseconds
    window.setTimeout(step, 50);
  }

  updateDisplay();
}
```

Notice that we added `shipAltitude = 0;` before `updateDisplay();`, that's just to make sure our dashboard shows an altitude of 0 once we land (otherwise it may show an altitude of `-x` depending on the velocity).

Finally, add the following in `main.css` to style the dashboard.

```css
.dashboard {
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  color: white;
}
```

You can see the final [main.js](end-result/main.js) file here. And here's the final [index.html](end-result/index.html) and [main.css](end-result/main.css).

## End result
- [End result folder](end-result)
- [End result zip](end-result.zip)
    - Click "view raw" to download the files
