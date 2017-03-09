# CCA Programming & Electronics, Spring 2017

This course repository contains homework assignments, useful guides, and code for "Programming & Electronics" at CCA, Spring 2017.

Also included in this repository is the official [course syllabus](syllabus.pdf).

### Week 1: Wednesday, January 18, 2017

Lecture:
- Introductions
- What is programming?
- Goals & course details

Hands-on activities:
- Human Embodiment of Programmer & Robot
  - Programs generally run line-by-line.
  - While loops, if statements, and functions break that up.

#### Building Blocks of Code

In class, we discussed the four basic building blocks of code: functions, variables, conditions, and loops. 

[Here are some notes.](building-blocks.md)

#### Inspiration

Finally, here are some inspirational videos to get you excited for our class if you're not already:
- Basic robots
  - [Coffee-can robot](http://www.youtube.com/watch?v=b0mIshBIbvI#t=24)
  - [Tree-climbing robot](http://www.youtube.com/watch?v=zkpH1BjD6Wc)
  - [Self-balancing robot](http://www.youtube.com/watch?v=Tw9Jr-SPL0Y)
  - [Insect robot](http://www.youtube.com/watch?v=tOsNXg2vAd4#t=120)
  - [Treadbot](http://www.youtube.com/watch?v=YblSltHDbIU)
  - [Velociraptor robot](http://www.youtube.com/watch?v=lPEg83vF_Tw)
- Installations
  - [The Bay Lights](http://thebaylights.org/)
  - [Murmur Wall](http://www.future-cities-lab.net/projects/#/murmurwall/)
  - [Floating Couch](http://vimeo.com/72826106)
  - [Wooden Segment Mirror](https://www.youtube.com/watch?v=BZysu9QcceM#t=36)
  - [Generative design](https://www.youtube.com/watch?v=pNkz8wEJljc)
- Art & Music bots
  - [Textile weaving](https://vimeo.com/71044541)
  - [ReacTable](https://www.youtube.com/user/marcosalonso)
  - [Projection mapping](https://www.youtube.com/watch?v=czuhNcNU6qU)
  - [Laser harp](http://www.youtube.com/watch?v=sLVXmsbVwUs#t=20)
  - [Cubli: Floating Cube](https://www.youtube.com/watch?v=n_6p-1J551Y)
  - [Arc-o-matic](http://vimeo.com/57082262#at=130)
  - [Robo Faber](http://vimeo.com/78771257)
  - [Eggbot](https://www.youtube.com/watch?v=w4cdbV2oaEc)
- Drink-makers
  - [Textspresso](http://www.youtube.com/watch?v=kx9D74t7GD8#t=89)
  - [The Inebriator](http://www.youtube.com/watch?v=WqY7fchs7H0)
- Computer Numerical Control (CNC)
  - [Shapoko / tinyg](http://www.youtube.com/watch?v=pCC1GXnYfFI#t=11)
  - [Makerbot Replicator](http://www.youtube.com/watch?v=NAbiAzYhTOQ)
- Vacuuming
  - [Roomba](https://www.youtube.com/watch?v=0DNkbZvVYvc)

[Homework for Week 1](hw/week1.md)

### Week 2: Wednesday, January 25, 2017

First, homework reivew. Then, a workshop.

#### Workshop

Together, we'll experiment with a few sketches to practice variables:

- [A Single Ellipse](http://p5js.zamfi.net/jd/sketches/SkPx0nSPx)
  - Working with a partner, modify this sketch to create an ellipse that extends past the edges of the canvas.
- [Random Dots](http://p5js.zamfi.net/full/HJ6LyTBPx)
  - Working with a partner, modify this sketch to give each ellipse:
     1. A random size.
     2. A random color. (Use HSB for nicer colors!)
  - **Here's the code we came up with in class: [random-dots.js](class-code/random-dots.js)**
- [Color and HSB](http://p5js.zamfi.net/full/ByanCnHPx)
  - Working with a partner, modify this sketch so that it continuously changes color instead of stopping at red.
  - **Here's the code we came up with in class: [cycling-hue.js](class-code/cycling-hue.js)**
- [Nice Little House](http://p5js.zamfi.net/full/HJRrZprPe)
  - Working with a partner, modify your house so that it is drawn at the location of your mouse, as you move the mouse. Use the `mouseX` and `mouseY` variables available to you in p5.js.
  - **Here's one possible set of code, based in part on ideas we discussed in class: [moving-house.js](class-code/moving-house.js)**

Make sure you understand the principles behind [random-dots.js](class-code/random-dots.js) and [cycling-hue.js](class-code/cycling-hue.js), two of the sketches we worked on in class, before you move on to the homework! Also take a look at [moving-house.js](class-code/moving-house.js), one approach to moving the house with the mouse -- it could be useful inspiration for your homework.

[Homework for Week 2](hw/week2.md)

### Week 3: Wednesday, February 1, 2017

Today, we'll practice loops:

1.  Together, we'll make vertical lines:
    
    ![vertical lines](img/vertical-lines.png)

2.  Then, with a partner, you'll make horizontal lines:
    
    ![horizontal lines](img/horizontal-lines.png)

3.  Try an animation with your partner too:
    
    ![animated lines](img/animated-lines.gif)

4.  Try this animation too:
    
    ![rainbow lines](img/rainbow-lines.gif)

5.  Now try this grid of circles; you'll need **nested loops** for this one!
    
    ![circle grid](img/circle-grid.png)

6.  **Challenge:** Using a technique called the "exponential moving average", we can create a smooth easing animation like this:
    
    ![easing position](img/easing-position.gif)
    
    The technique works by one variable to store intermediate values for another variable. For example, in the sketch above, the *x-* and *y-* coordinates of the circle are stored in variables `x` and `y`, which are **eased** to the target values given by `mouseX` and `mouseY`.
    
    "Exponential moving average" is a fancy way of saying: first, pick a fixed **rate** at which the easing occurs for a variable reaching its target. That rate controls how much impact the target has on the value each frame. For exampe, if the rate is 10%, then the new value each frame is 10% the target value and 90% the old value of the variable. Here's some sample code; the key is in the line `x = target*rate + x*(1-rate);`:
    
    ```javascript
    function setup() {
      createCanvas(400, 400);
    }
    
    var rate = 0.1;
    var x = 0;
    var target = 100;
    
    function draw() {
      ellipse(x, 100, 15, 15);
      x = target*rate + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
    }
    ```
    
    Each frame, x gets 10% closer to its target.
    
    Modify this code to create a circle that follows the mouse as in the anigif above.


#### Working with Loops

Here's one way of working with loops, and figuring out how to turn a pattern into code:

1. Write down the coordinates of the shapes you want to create in your loop.
2. Find the pattern for those coordinates
  a. Where does it start?
  b. Where does it end?
  c. How much does it change each time?
3. Use that pattern in a for loop: `for (var i = START; i < END; i = i + CHANGE) { ... }`
  
For example, to create the following sketch:

![triangle of lines](img/triangle.png)

...start by writing down some endpoints for those lines:

```
(20, 20) -> (20, 20)
(20, 30) -> (30, 20)
(20, 40) -> (40, 20)
(20, 50) -> (50, 20)
(20, 60) -> (60, 20)
(20, 70) -> (70, 20)
(20, 80) -> (80, 20)
.
.
.
(20, 480) -> (480, 20)
```

...from these coordinates, we can find a pattern for each of the four parameters we need to draw a line:

- `startX`: always 20
- `startY`: starts at 20, ends at 480, goes up by 10 each time
- `endX`: starts at 20, ends at 480, goes up by 10 each time
- `endY`: always 20

...from this pattern, we can generate a loop that draws these lines, by creating a variable that starts at `20`, ends at `480`, and goes up by `10` each time. We won't call the variable `x` or `y` beacuse we don't use it exclusively for either coordinate.

```javascript
for (var i = 20; i <= 480; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = i;
  var endY = 20;
  line(startX, startY, endX, endY);
}
```

You'll explore a few more similar puzzles in the homework!

[Homework for Week 3](hw/week3.md)


### Week 4: Wednesday, February 8, 2017

Today, we'll review loops and get some more practice building them.

First, homework review. Working with a partner, go over your solutions to [homework 3](hw/week3.md).

Then, with a partner, try to recreate as many of the following sketches as you can:

1. Circles in a diagonal line. Use a while loop to draw the balls in sequence. What do you know about the *x* and *y* coordinates of each ball? (Spoiler: They're the same!)
   
   ![ball-diagonal](img/wk4/ball-diagonal.png)

2. Circles in a grid. You will likely need a while loop inside another while loop!
   
   ![ball-grid](img/wk4/ball-grid.png)

3. Colored circles in a grid, random version. Check out the `colorMode` function, and HSB, in the [P5.js reference](http://p5js.org/reference).
   
   ![ball-grid-randoms](img/wk4/ball-grid-randoms.png)

4. Colored circles in a grid, sequential version. Check out the `colorMode` function, and HSB, in the [P5.js reference](http://p5js.org/reference). Note that the colors shift from left to right *and* from top to bottom!

   ![ball-grid-rainbows](img/wk4/ball-grid-rainbows.png)

5. Circles in an triangle.

   ![ball-triangle](img/wk4/ball-triangle.png)
   
6. Circles in an hourglass.

   ![ball-hourglass](img/wk4/ball-hourglass.png)

7. The grid.
   
   ![grid](img/wk4/grid.png)
   
8. Diagonal lines.

   ![diagonal-lines](img/wk4/diagonal-lines.png)

9. Diagonal lines, interrupted.

   ![big-p](img/wk4/big-p.png)

10. Random bars.

   ![random-bars](img/wk4/random-bars.png)

11. Random bars, animated.

   [![random-bars-animated](img/wk4/random-bars-animated.png)](http://youtu.be/EA9MqlY56LM)

12. Animated bars, mouse-sensitive. You'll need the P5.js-defined variables `mouseX` and `mouseY` -- see the [P5.js reference](http://p5js.org/reference).

   [![random-bars-mouse](img/wk4/random-bars-mouse.png)](http://youtu.be/3OAKqXS5Lkw)

13. Bouncing balls, just two.

   [![bouncing-balls](img/wk4/bouncing-balls.png)](http://youtu.be/7sfC4-4VoM4)

14. **Optional Challenge:** Bouncing balls, more added by clicking. You may need to use an `Array` or two.

   [![bouncing-balls-with-clicks](img/wk4/bouncing-balls-with-clicks.png)](http://youtu.be/Tnkhya3Tqu0)

15. **Optional Challenge:** Fireworks! They should track the mouse and appear on clicks.

   [![fireworks](img/wk4/fireworks.png)](http://youtu.be/yNTUEe9cof8)
   
[Homework for Week 4](hw/week4.md)

### Week 5: Wednesday, February 15, 2017

Today we reviewed loops and together completed some in-class exercises.

[Homework for Week 5](hw/week5.md)

### Week 6: Wednesday, February 22, 2017

Today we did reviewed homework, worked with objects, and started looking at arrays.


#### Homework Review

Share your Sol LeWitt pieces with a partner.

#### Objects & Functions

Objects are collections of properties. They can help to keep related variables together. For example:

```javascript
var circle = {
	x: 100, 
	y: 100,
	vx: 3,
	vy: 4,
	r: 10
};

var circle2 = {
	x: 120, 
	y: 160,
	vx: 3,
	vy: 4,
	r: 10
};


function setup() {
	createCanvas(400, 400);
}

function draw() {
  background(255);
  
	paint(circle);
	paint(circle2);
	
	move(circle);
	move(circle2);
	
	bounce(circle);
	bounce(circle2);
}

function paint(circle) {
	ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
	circle.x += circle.vx; // circle.x = circle.x + circle.vx
	circle.y += circle.vy;
}

function bounce(circle) {
	if (circle.x > width || circle.x < 0) {
		circle.vx = - circle.vx;
	}
	if (circle.y > height || circle.y < 0) {
		circle.vy = - circle.vy;
	}
}

```

This code creates two objects: `circle` and `circle2`. Each of the `paint`, `move`, and `bounce` functions is defined to act on a single obejct; calling `paint(circle)` makes the function act on the first `circle` object, while calling `paint(circle2)` makes the function act on the second `circle2` object.

"Act on" means that the `circle` variable inside the function actually refers to one of the `circle` or `circle2` objects defined at the top of the code. Which one it refers to depends on whether it was called with `circle` or `circle2` as the parameter.

**Exercise 1**: Add a third circle object.
**Exercise 2**: Add a property to each circle that holds a color.
**Exercise 2a**: Use that property in the `paint` function to draw each circle using its color property.

Next, we modified the initial locations -- the `x` and `y` properties of `circle` and `circle2` so both circles start at the bottom of the canvas:

```javascript
var circle = {
	x: 100, 
	y: 400,
	vx: 0,
	vy: -4,
	r: 10
};

var circle2 = {
	x: 160, 
	y: 400,
	vx: 0,
	vy: -4,
	r: 10
};
```

**Exercise 3**: Modify the `bounce` function so that, instead of bouncing, the two circles each reset to the bottom of the canvas when they reach the top.
**Exercise 4**: Modify the `move` function so that the circles (now bubbles!) vibrate in the `x` direction each frame.
**Exercise 5**: Add some interactivity -- use the `keyPressed` function to make the up (and down) arrow keys increase (and decrease) the rate at which the bubbles rise.

Finally, we modified the code to use arrays instead of individual variables:

```javascript
var allCircles = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 10; i += 1) {
		var circle = {
			x: random(0, 400),
			y: 400,
			vx: 0,
			vy: random(-1, -10),
			r: random(2, 20),
			h: random(0, 360)
		};
		append(allCircles, circle);
	}
}

function draw() {
	background(255);
	for (var i = 0; i < allCircles.length; i += 1) {
		paint(allCircles[i]);
		move(allCircles[i]);
		bounce(allCircles[i]);
	}
}

function mousePressed() {
	var circle = {
		x: mouseX,
		y: mouseY,
		vx: 0,
		vy: -3,
		r: 10,
		h: random(0, 360)
	};
	append(allCircles, circle);
}

function paint(circle) {
	colorMode(HSB);
	fill(circle.h, 100, 100);
	noStroke();
	ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
	circle.x += circle.vx;
	circle.y += circle.vy;
}

function bounce(circle) {
	if (circle.y < 0) {
		circle.y = height;
	}
}
```

This code above creates 10 circles and appends them to the `allCircles` array (aka "list") inside `setup()`. Clicking the mouse triggers the `mousePressed()` function, which adds another circle at the current mouse coordinates.

Finally, the `draw()` function uses a loop to call `paint`, `move`, and `bounce` on each of the cirles in the `allCircles` array.

This gives us the flexibility to add or remove circles using code, in response to user events, instead of needing to modify the code to add additional circles.

[Homework for Week 6](hw/week6.md)

### Week 7: Wednesday, March 1, 2017

In class today, we reviewed the homework, focusing on arrays and objects. We also discussed function "scoping", that is, what happens to the parameters when you call a function.

They key insight is that, when you define a function, you name the parameters it receives. For example, take the following function:

```javascript
function paintCircle(x, y, r) { 
  ellipse(x, y, r*2, r*2);
}
```

The code above defines a function called `paintCircle` whose three parameters are named `x`, `y`, and `r`. The code inside the function uses those parameters by referring to the names `x`, `y`, and `r`.

When your code then later **calls** the `paintCircle` function, it needs to give *values* for those parameters. For example, consider the following code:

```javascript
paintCircle(100, 120, 10);
```

This code calls the `paintCircle` function we defined above, with the parameters `100`, `120`, and `10`. That means that the code *inside* the `paintCircle` is run with the parameters `x`, `y`, and `r` referring to the values `100`, `120`, and `10`, respectively -- purely because of the order in which the paramater names and values appear. In other words, the function call above runs `paintCircle` with `x` equal to `100`, `y` equal to `120`, and `r` equal to `10`.

The result is that `ellipse(x, y, r*2, r*2)` inside the `paintCircle` function becomes `ellipse(100, 120, 10*2, 10*2)`.

If we called the `paintCircle` function with other values, those values would be used instead.

Next, we discussed how to build the classic arcade hit [Space Invaders](https://www.google.com/search?q=space+invaders&client=safari&rls=en&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjzzf3Sq8HSAhVM6GMKHWmtALYQiR4Iew).

We started with a list of way too many things, and ultimately shortened it to just a few pieces:

#### Data
- `x`, `y`, `speed` of invaders
- `x`, `y`, `speed` of missiles
- `x` for player

#### Visual
- Invaders
- Player
- Missiles
- Background

#### Functions
- Player fires weapon
- Player moves
- Invaders move, with changing speed
- Invaders get hit and die
- Player gets hit and dies
- Invader fires
- Player wins
- Invaders hit player

We started to tackle this list with the following starter code: 

```javascript
var invaderSpeed = 5;
var invaders = [
	{ x: 30,
	  y: 30,
	  w: 10,
	  h: 5
	},
	{ x: 25,
	  y: 45,
	  w: 9,
		h: 5
	},
];
var playerX = 200;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	for (var i = 0; i < invaders.length; i += 1) {
		paintInvader(invaders[i]);
	}
	paintPlayer(playerX);
}
	
function paintInvader(invader) {
	rect(invader.x, invader.y, invader.w, invader.h);
}

function paintPlayer(position) {
	triangle(position-10, height-20,
					 position+10, height-20,
					 position, height-60);
}

```

In case you're curious, I've included below one approach to building Space Invaders. Note that there are quite a few functions, whose names should be relatively self-explanatory.

It's a lot of code, and as a result challenging to fully understand -- but ultimately each function is quite short. It does most (but not all!) of the pieces we laid out initially.

Enjoy!

```javascript
var invaderSpeed = 1;
var maxInvaderSpeed = 10;
var invaders = [];
var missiles = [];

var playerX = 200;

var invadersPerRow = 10;
var rowsOfInvaders = 4;

function setup() {
  createCanvas(400, 400);
  for (var row = 0; row < rowsOfInvaders; row++) {
    for (var invader = 0; invader < invadersPerRow; invader++) {
      append(invaders, {
        x: invader * (width * 0.8) / invadersPerRow,
        y: 20 + row * 20,
        w: width * 0.8 / invadersPerRow / 2,
        h: 5
      });
    }
  }
}

function draw() {
  background(0);
  var edgeHit = false;
  for (var i = 0; i < invaders.length; i += 1) {
    paintInvader(invaders[i]);
    moveInvader(invaders[i]);
    if (invaderHitEdge(invaders[i])) {
      edgeHit = true;
    }
  }
  if (edgeHit) {
    invaderSpeed = constrain(
      invaderSpeed * -1.1, -maxInvaderSpeed, maxInvaderSpeed);
    for (var i = 0; i < invaders.length; i += 1) {
      invaders[i].y += 10;
    }
  }
  for (var i = 0; i < missiles.length; i += 1) {
    paintMissile(missiles[i]);
    moveMissile(missiles[i]);
  }
  checkAllMissiles(invaders, missiles);
  paintPlayer(playerX);
  movePlayer();
}

function paintInvader(invader) {
  stroke(255);
  fill(255);
  rect(invader.x, invader.y, invader.w, invader.h);
}

function moveInvader(invader) {
  invader.x += invaderSpeed;
}

function invaderHitEdge(invader) {
  return invader.x <= 0 || invader.x + invader.w >= width;
}

function paintMissile(missile) {
  stroke(255);
  strokeWeight(2);
  line(missile.x, missile.y, missile.x, missile.y - missile.length);
}

function moveMissile(missile) {
  missile.y -= missile.vy;
  if (missile.y < 0) {
    removeArrayValues(missiles, [missile]);
  }
}

function removeArrayValues(array, values) {
  for (var i = 0; i < values.length; i += 1) {
    // use the array.splice function to remove en entry at a given index
    array.splice(array.indexOf(values[i]), 1);
  }
}

function checkAllMissiles(invaders, missiles) {
  var deadInvaders = [];
  var deadMissiles = [];

  // for each invader, check each missile to see if it collides
  for (var i = 0; i < invaders.length; i += 1) {
    for (var m = 0; m < missiles.length; m += 1) {
      if (checkCollision(invaders[i], missiles[m])) {
        append(deadInvaders, invaders[i]);
        append(deadMissiles, missiles[m]);
      }
    }
  }
  
  // actually remove those dead invaders and missiles
  removeArrayValues(invaders, deadInvaders);
  removeArrayValues(missiles, deadMissiles);
}

function checkCollision(invader, missile) {
  return missile.x > invader.x &&
    missile.x < invader.x + invader.w &&
    !(missile.y - missile.length > invader.y ||
      missile.y < invader.y - invader.h);
}

function paintPlayer(position) {
  triangle(position - 10, height - 20,
    position + 10, height - 20,
    position, height - 60);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= maxInvaderSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX += maxInvaderSpeed;
  }
  playerX = constrain(playerX, 10, width-10);
}

function fireMissile(playerPosition) {
  var missile = {
    x: playerPosition,
    y: height-60,
    vy: 8,
    length: 10
  };
  append(missiles, missile);
}

function keyPressed() {
  if (keyCode == 32) {
    fireMissile(playerX);
  }
}
```

No homework this week. Use the time to catch up on previous homework assignments if you weren't able to complete them!


### Week 8: Wednesday, March 8, 2017

Lecture

- We introduced Arduino. ([Lecture Slides here](img/arduino-slides.pdf).)

- We installed the Arduino software and tested basic functionality using the blink example (File -> Examples -> Basics -> Blink).

- We changed the value in the delay() function to change the blink rate.

- We learned how the solderless breadboard works, and we used it to add an external LED.

- Then we added an input -- a potentiometer, which lets us convert physical rotation of a knob into a value in code.

- Then we modified the code to write that value to the serial monitor.

- Next, we added a new type of output: the servo motor. And we looked at two examples: Knob (File -> Examples -> Servo -> Knob) and Sweep (File -> Examples -> Servo -> Sweep), focused on why the code is structured the way it is.

- Finally, we added a new type of input: the Light-Dependent Resistor (LDR).

[Homework for Week 8](hw/week8.md)