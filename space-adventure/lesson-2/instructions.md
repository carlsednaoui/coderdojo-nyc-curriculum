# Lesson 2: Getting ready for takeoff

### End goal - The ship moves on keydown
![](http://i.imgur.com/ns7EDTU.png)


## Part 1: Positioning the ship
Position the ship in the bottom center of the screen, touching the ground.

In `main.css`    
```css
#ship {
  display: block; /* images are inline by default, we need display block to use position absolute */
  position: absolute;
  left: 45%; /* Rough number so it looks centred */
  bottom: 4px; /* This needs to be 46 pixels smaller than the land height, due to image whitespace */
}
```


## Part 2: Add the basic JS files

#### jQuery
Add [jQuery](https://developers.google.com/speed/libraries/devguide#jquery) to `index.html`    
`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>`

#### Main JS file
Create `main.js` and add it to `index.html`    
`<script src="main.js"></script>`


## Part 3: Intro to the Dev Tools
Before going any further, we'll take a few minutes to introduce the kids to the Chrome Dev Tools. We will now introduce them to basic operations and variables.

Have the kids do the following (feel free to share additional examples)
- `console.log('hello world')`
- `var x = 10`
- `x + 100`


## Part 4: Changing an image
The goal is to make our ship fly into space. To achieve this, we'll have to change our ship's image whenever it is actively using it's jet engines.

Here's what our ship looks like when the jet engines are __off__ ([file](end-result/spaceship.png))    
![](http://i.imgur.com/D94m0vr.png)

And here's what it looks like when they are __on__ ([file](end-result/spaceship-moving.png))    
![](http://i.imgur.com/1HKzIzS.png)

Save `spaceship-moving.png` in your project's folder. Now, in the dev tools, run `$('#ship').attr('src', 'spaceship-moving.png')`. Your ship should now have it's jet engines on.


## Part 5: Intro to keybinding
Let's now go to our JS file and add some keybinding (we'll use jQuery, yay!).

Add the following to `main.js`    

```js
$('body').on('keydown', function() {
    $('#ship').attr('src', 'spaceship-moving.png');
});
```

Refresh your project's page (in the browser). You should see the _non-moving_ ship image (spaceship.png). Press any key and you should now see the _moving_ ship image (spaceship-moving.png).

## Part 5: More JS variables
Let's jump back to the dev tools and play with some variables and jQuery functions.

Create a variable called `shipAltitude`    
`var shipAltitude = 200;`

Use this variable to set the altitude of our ship    
`$('#ship').css('margin-bottom', shipAltitude);`


Now change the `shipAltitude` variable to `400`    
`var shipAltitude = 400;`

And update the ship's altitude once again    
`$('#ship').css('margin-bottom', shipAltitude);`

Notice how the ship moves up!


## Part 6: Basic interactions
Let's add some interaction to our JavaScript file. We will use variables (introduced earlier) and some jQuery magic (also introduced earlier).

```js
// Define the ship's initial altitude
var shipAltitude = 0;

$('body').on('keydown', function() {
  // Adjust the ship's altitude
  // Notice how we're using variables like we did in the console
  shipAltitude = shipAltitude + 10;

  // First we're going to change the image for the sprite
  // Then we'll move the ship on the screen
  $('#ship')
    .attr('src', 'spaceship-moving.png')
    .css('margin-bottom', shipAltitude);
};
```

Save your code, refresh your browser. The first time you press a key your ship should move up by 10px and the ship's jet engines should fire.

## Part 7: Reverting the ship back to it's original image
We've made __a lot__ of progress thus far and are almost ready to explore space! One last thing remains, we need to revert to the original image when the ship stops using it's powerful jet engines.

To do this we'll use setTimeout (this logic will come in handy in later lessons).

> If you have time, explain what is happeneing here and tell them more about functions and how they work. If you don't have time, no worries, we'll dive into functions in the next lesson :)

```js
  // Let's reset the image after 500 milliseconds
  window.setTimeout(
    function() {
      $('#ship').attr('src', 'spaceship.png');
    }, 
    500);
});
```

Here is what the `main.js` looks like

```js
// Define the ship's initial altitude
var shipAltitude = 0;

$('body').on('keydown',
  function () {

    // Adjust the ship's altitude
    shipAltitude = shipAltitude + 10;

    // First we're going to change the image for the sprite
    // Now we'll move the ship on the screen
    $('#ship')
      .attr('src', 'spaceship-moving.png')
      .css('margin-bottom', shipAltitude)

    // But since we aren't continuously firing the engines, let's
    // reset the image after 250 milliseconds
    window.setTimeout(
      function() {
        $('#ship').attr('src', 'spaceship.png');
      }, 
      250);
  });
```

#### End result
- [End result folder](end-result)
- [End result zip](end-result.zip)
    - Click "view raw" to download the files
