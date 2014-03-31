# Lesson 1: Getting ready for takeoff

## Part 1: Position the ship

Position the ship in the bottom center of the screen, touching the ground.

```css
#ship {
  display: block; /* images are inline by default, we need display block to use position absolute */
  position: absolute;
  left: 45%; /* Rough number so it looks centred */
  bottom: 4px; /* This needs to be 46 pixels smaller than the land height, due to image whitespace */
}
```


## Part 2: Add the basic JS files

- Add [jQuery](https://developers.google.com/speed/libraries/devguide#jquery) to `index.html`
- Create `main.js` and add it to `index.html`


## Part 3: Intro to the dev tools and variables

Play around in the dev tools
- `console.log('hello world')`
- `var x = 10`
- `x + 100`


## Part 4: Changing an image

Change the ship's image whenever a key is pressed.

In the dev tools run `$('#ship').attr('src', 'spaceship-moving.png')`

Let's now go to our JS file and add some keybinding!

```js
$('body').on('keydown', function() {
    $('#ship').attr('src', 'spaceship-moving.png');
});
```


## Part 4: More variables
In the dev tools 
- `var ship_altitude = 100;`
- `$('#ship').css('margin-bottom', ship_altitude);`
