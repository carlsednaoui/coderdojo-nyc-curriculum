# Lesson 1: Project Setup

### End goal
![](http://i.imgur.com/vFBsejE.png)

#### Step 1
Create an HTML file called `index.html`

#### Step 2
Create a CSS file called `main.css`

#### Step 3
Add your CSS file to your HTML.

In `index.html`    
`<link rel="stylesheet" href="main.css">`

#### Step 4
Add [space.png](end-result/space.png) as the background of the `body`

In `main.css`    
```css
body {
  background-image: url('space.png');
  margin: 0;
}
```

#### Step 5
Add the planet's land, at the bottom of the screen

In `main.css`    
```css
#land {
  background-color: #8D5239;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
}
```

#### Step 6
Add [spaceship.png](end-result/spaceship.png) as an `img` to `index.html`

In `index.html`    
`<img id="ship" src="spaceship.png">`

#### End result
- [End result folder](end-result)
- [End result zip](end-result.zip)
    - Click "view raw" to download the files
