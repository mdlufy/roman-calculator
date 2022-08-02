# Overview

#### Description:
Calculator function must accept arithmetic operations of two numbers as a string and return a string with the result of their execution.<br />
The function takes data from arguments and returns using return.

#### Requirements
- The solution must pass all the tests.
- The calculator can perform addition, subtraction, multiplication and division operations with two numbers: a + b, a - b, a * b, a / b. Data is transmitted as a single line!
- The calculator can work with both Arabic (1,2,3,4,5...) and Roman (I,II,III,IV, V...) numbers. Both operands must be either Arabic or Roman.
- Operands must be in the range from 1 to 10 inclusive, without zero. The answer can be more than 10.
- The calculator can only work with integers, accepts and returns.
- The output result is always a string with an integer. In the division, we take into account only the integer part - we discard the decimal, for example 2 / 4 = 0.5 - we return 0.
- The calculator can only work with Arabic or Roman numerals at the same time, when the user enters a string like 3 + II, the calculator should throw an exception (error) and stop working.
- Since there are no zero and negative numbers in the Roman numeral system, we return an empty string instead. (for example I - II = ")
- When calling the calculator with unsuitable numbers, the function throws an exception and terminates its work.
- When calling a calculator with a string that is not a mathematical example with one of the arithmetic operations described in the requirement, the application throws an exception and terminates its work.



#### Example of the program
```
calculate('1 + 2'); // the string '3'
calculate('VI / III') will return; // the string 'II'
calculate('VII / III') will return; // the string II'
calculate('I + II' will return); // the string 'III'
calculate('I - II') will return; // the string " (empty string) will return because there are no negative numbers in the Roman system
calculate('I + 1'); // throws Error exception will be returned because different number systems are used simultaneously
calculate('I'); // throws Error exception will be returned because the string is not a mathematical operation
calculate('1 + 1 + 1'); // an exception will return throws Error because the format of the mathematical operation does not satisfy the task - two operands and one operator (+, -, /, *)
```