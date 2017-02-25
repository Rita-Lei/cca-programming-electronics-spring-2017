### Homework 6 (due Sunday, February 26, 2017)

Homework this week is to reproduce more of Sol LeWitt's pieces (by Sunday), and watch a video tutorial about arrays and do some practice exercises (by Tuesday).

#### Programming Practice

Pick 3 **more** of Sol LeWitt's *Wall Drawings* from [this retrospective at MASS MoCA](http://massmoca.org/sol-lewitt/) and reproduce them using code, in p5.js. Label these in your [homework repository](http://github.com/zamfi/github-guide) according to their title in the restrospective, e.g., `lewitt-368.js`. Feel free to use the image as your guide or LeWitt's instructions directly. More info about [Sol LeWitt's instructions here](http://risdmuseum.org/manual/45_variations_of_a_drawing_sol_lewitt_and_his_written_instructions).
   
Get creative! Push yourself a little bit outside your comfort zone for this assignment. Bonus points for doing more than 3, or for animating them in some way.
   
You may also find interesting Casey Reas' [{Software} Structures](http://artport.whitney.org/commissions/softwarestructures/map.html).

#### Arrays

We just scratched the surface of arrays in class.

Watch Daniel Shiffman's tutorials about arrays: [part 1](https://www.youtube.com/watch?v=VIQoUghHSxU&index=21&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), [part 2](https://www.youtube.com/watch?v=RXWO3mFuW-I&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), and [part 3](https://www.youtube.com/watch?v=pGkSHeEZLMU&index=23&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).

Given the following code:

```javascript
var sizes = [40, 70, 90, 30, 60];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
}
```

Make the following changes, and save your code in your [homework repository](http://github.com/zamfi/github-guide) using the name `circles-1.js` etc.

1. Add five more circles to the sketch. (Make sure they're all visible.)

2. Modify the code so that the circles have color and are not just grayscale.

3. Modify the circle sizes so they correspond (roughly!) to the sizes of the [8 planets of the solar system](http://www.universetoday.com/36649/planets-in-order-of-size/).

4. Convert the sketch into an animation *(Hint: you'll need to define a `draw()` function!)* that causes each of the circles to jitter up and down by a few pixels each frame.
   
   There are multiple ways to do this; some are easier than others. Think for a bit before jumping into code.

Next, consider the following code:

```javascript
var shade0 = 10;
var shade1 = 20;
var shade2 = 45;
var shade3 = 25;
var shade4 = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
  
  fill(shade0, 100, 100);
  rect(0*width/5, 0, width/5, height);
  
  fill(shade1, 100, 100);
  rect(1*width/5, 0, width/5, height);
  
  fill(shade2, 100, 100);
  rect(2*width/5, 0, width/5, height);
  
  fill(shade3, 100, 100);
  rect(3*width/5, 0, width/5, height);
  
  fill(shade4, 100, 100);
  rect(4*width/5, 0, width/5, height);
}
```

Make the following changes, labeling your sketches `arrays-1.js` etc. in your [homework repository](http://github.com/zamfi/github-guide).

1. Change the code above to use an array insted of the 5 separate variables named `shade0`, `shade1`, etc. Remember to create your array first, e.g., `var shade = [];` -- then replace every use of the variable `shade#` with `shade[#]` (e.g., `shade2` becomes `shade[2]`) so that your code uses numeric indexes into an array. The output of your sketch should not change!

2. Modify the `draw` function to use a loop on a variable `i` instead of calling `fill` and `rect` individually 5 times. The code for the circles assignment above may be helpful inspiration. (Remember that your last value for `i` should be the highest index: 4. Typically, programmers will write `i < 5`, which is true when `i` is 4 and false when `i` is 5.)

3. If you didn't do this in #2, use the array length instead of the constant number `5` in your code's divisions of the `width` variable. Also use the array length in the condition of your loop.

4. Add 4 more shades to the array.

5. **Optional Challenge**: Modify the code so that the shade of the last panel changes with the `y` coordinate of the mouse. (Note: you can access the last entry in an array using its length, as in `shades[shades.length-1] = 300`.)

6. **Optional Challenge**: Make clicks add new bars at the end of the canvas.

7. **Optional Challenge**: Animate the bars sliding together across the screen. 

8. **Bonus Challenge**: Make the bars slide at different speeds. (You may find is helpful to use objects instead of numbers in your array, which would allow you to associate a position as well as a hue with each shade.)

#### Tutorials

If you find the concept of functions and function parameters confusing, watch Daniel Shiffman's videos about functions -- [part 1](https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16), [part 2](https://www.youtube.com/watch?v=zkc417YapfE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17), and [part 3](https://www.youtube.com/watch?v=qRnUBiTJ66Y&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=18).

These videos probably most helpful if you take the time to experiment with the code Shiffman writes in the course of his videos.

As a reminder, **please email us if you get stuck!** We are on email more than is probably healthy, and we are happy to answer questions. Also please make use of the help available to you at CCA: You can get hands-on, in-person help by stopping by the Hybrid Lab and speaking with a lab monitor, or by making an appointment with one of the [Software or Math/Science coaches at the Learning Resources Center](https://www.cca.edu/students/resources/appointments).