### Homework 1 (first part due Sunday, January 22, 2017)

This homework has two parts; first, complete the exercises we began in class using Rudy. Second, go through a tutorial about drawing graphics and answer a few questions about it.

#### Rudy Puzzles (due Sunday)

- Solve the puzzles up to and including level 8 at [Rudy the Red Dot](http://rudy.zamfi.net). Half of are the puzzles we solved together using "pseudocode" and flow charts in class, but now you will solve them with actual code, in JavaScript. The other half are similar puzzles, with slightly greater complexity, that we did *not* solve together in class.
  
  *(The website is a work in progress; if the <strong>Run</strong> button seems to stop working, reload the page. Please try the [Chrome browser](http://google.com/chrome) for best results.)*
  
  - For puzzles that change, each time you hit the **Run** button, you'll get a new version of the puzzle. Your code should solve any variation of the puzzle you can get. Start by clicking **Run** a few times to make sure you see what the possible variations are.
  - There's a cheat sheet of syntax on the right, under the puzzle itself.
  - **Assignment: Solve the first 8 puzzles; try to include at least 3 functions of your own definition. (They don't all have to be in the same puzzle.)**
  - **Assignment: Use a `while` or `for` loop for puzzles 7 and 8.**
  - **Assignment: Publish your code on the web, and [send me](mailto:jzamfirescupereira@cca.edu) the link. For this class, use [GitHub to publish your work](http://github.com/zamfi/github-guide); your solution to *each puzzle should be in its own file*, named `puzzle-1.js`, `puzzle-2.js`, etc.**
  
  I strongly recommend you review what we [worked on in class today](../README.md#week-1-wednesday-january-18-2017). You may also find the following **advice** extraordinarily helpful; **I recommend reading it carefully**. 
  
  - Programming is the act of recording a process. In our first class, we (you!) executed this recording; in general, however, a computer will execute this process for you. There are two parts to programming: figuring out the process, and coding that process. The act of figuring out the process is the act of combining the primitive components of the environment into the behavior you want. For today's puzzles, that means combining the **vocabulary** of function calls: `up`, `down`, `left`, `right`, `getColor`, `setColor` together with the **grammar** of syntax: variables, `while` loops, `if` statements, blocks, and `function` definitions. You can extend the **vocabulary** by defining your own functions; the **grammar** is fixed by the language.

  - We cheated at the start of class today; we used just the command name itself in our code to tell the Rudy to run a command — but in reality the name itself just *refers* to the command, it doesn't make the computer *execute* the command. To execute a command, we need parentheses after the command name, like so: `down();`. The parentheses tell Rudy to execute the command with no parameters (*aka* arguments). Every command execution also needs to end with a semicolon: (`;`) except for blocks as used in if statements, functions, and while loops. (For command executions within those blocks, yes, semicolons are required.) Another cheat: in class we created new variables just by assigning them; for Rudy, when using a name or variable for the first time, indicate that it's a variable using `var` -- see the sidebar or [lecture notes](../README.md#week-1-wednesday-january-18-2017) for details.

  - Remember that code gets run line by line, using the "program counter". As each line is executed, Rudy performs that action. In the Rudy programming environment, lines are highlighted in red as they are executed. *You can speed up execution by lowering the "Evaluation step delay" at the top of the page with the little arrows next to the number.*

  - The movement functions, `up`, `down`, `left`, and `right`, cause Rudy to move; the `getColor` function *returns*, that is, when executed, a call to `getColor` *evalutes to* the color of the current square. The `setColor` function changes the color of the current square to be whatever the command's *parameter* is.

  - Creating and using your own functions has two parts: (1) **defining** a function, that is, telling Rudy **how** to perform a new command, and (2) actually **executing** the function. See the [lecture notes](../README.md#week-1-wednesday-january-18-2017) for details.

  - There is a distinction between `=`, which creates or updates a value stored in memory, and `==`, which compares two values for mathematical equality. Many bugs come of this. Squash them quickly by remembering this distinction!

  - Remember how gates work: if the colors on both sides of the gate match, then the gate will open.

  If you get stuck, consult the sidebar beneath the puzzle display! If you get an error, Google it! Still stuck? Email [J.D.](mailto:jzamfirescupereira@cca.edu) or [Caroline](mailto:caroline.crandall@cca.edu) for help!

- If you find yourself struggling with the basic concepts of the code, complete through puzzle 20 at [Hour of Code](http://learn.code.org/hoc/1) -- make sure you click the **Show Code** button after solving each puzzle and that you understand how that code works.

#### Tutorial (due Wednesday)

- **Assignment: Read and do the exercises in Chapter 1 of Daniel Schiffman's Learning Processing.** Amazon allows you to see the first chapter in the **preview** of the [Kindle edition of the book](https://www.amazon.com/Learning-Processing-Beginners-Programming-Interaction-ebook/dp/B003FL6X4I/ref=mt_kindle). You may also be able to find a pdf of this chapter online as a "sample". We won't be spending much time using this book, so it may not be worth buying -- if you'd like to hold a paper copy, you can find one in the library.

  - **Assignment**: Include in your GitHub repository an uploaded picture (smartphone pic is fine!) of your completed exercise 1-7, as well as a new file with answers to the following questions:
    - What does the `rect` function do?
    - What does the `rectMode` function do?
    - What is a **pixel**?
    - What is **HSB**?

- **Assignment: Get extra help by going to the Hybrid Lab during staffed hours (I believe 9am-10pm weekdays and 12pm-7pm on weekends) and asking the coaches for help!**

- **Assignment: Bring your computer to class on Wednesday, January 25!**

Please email us at [J.D.](mailto:jzamfirescupereira@cca.edu) or [Caroline](mailto:caroline.crandall@cca.edu) if you're stuck, aren't sure how to move forward, or just want to say hi! (And if you're stuck on Rudy, include the URL link to the puzzle you're stuck on!)
