### Homework 8 (due Tuesday, March 14)

This week's assignment is a review of what we did in class, plus an extra lab assignment to learn about `analogWrite`, an approximately analog version of `digitalWrite`.

In order to complete this week’s homework assignment you will need to go to the Hybrid Lab and use a Servo motor, LEDs, and other components. Please allow sufficient time for this!

  1. Modifying what we did in class
    1. Rebuild the circuit that we built in class, consisting of a potentiometer and a servo motor. ([This schematic might help](http://wiki.seeedstudio.com/images/a/a6/Arduino_Sidekick_Mini_Servo.jpg).)
    2. Test first the potentiometer using the `AnalogReadSerial` example (File -> Examples -> Basics -> AnalogReadSerial) and then test the servo using the `Knob` example (File -> Examples -> Servo -> Knob).
    3. If your servo motor seems unhappy/gets hot/is vibrating near the ends of the range, modify the parameters to the `map()` function to limit its range.
    4. Add a red LED and a green LED to any two digital pins. Don’t forget the resistors (any value between 300 and 1000 ohms). Test each of those LEDs using the blink example.
    5. Modify the knob example so that the the red LED lights when the servo is between angles 0 and 20, and light the green LED when the servo is between angles 160 and 180. If you modified the range use your numbers instead. Hint: the `if()` statement in Arduino works just like the `if()` statement in P5.js.
    6. **Upload your code to your Github repository**
    7. **Take a picture of your breadboard, and upload the picture to your Github repository**
  2. Learn about `analogWrite()`
    1. Read the `analogWrite()` [reference page](https://www.arduino.cc/en/Reference/AnalogWrite).
    2. Optional: If you are curious about PWM read [this explanation](https://www.arduino.cc/en/Tutorial/PWM).
    3. Follow [this tutorial](https://www.arduino.cc/en/Tutorial/AnalogInOutSerial) to use a potentiometer to control the brightness of an LED.
    4. Answer these questions, and upload them to your Github repository:
      1. Why can you only use certain pins for `analogWrite()`?
      2. What is the range the map() function maps the value to? Why this range? 
  3. **Email me a link to your Github by Tuesday night.**

