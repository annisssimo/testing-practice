# Testing practice

## Overview

This assignment involves writing tests for several utility functions and objects in JavaScript, and then ensuring that these functions work correctly by making the tests pass. The functions and objects you will work with include:

1. **capitalize:** A function that capitalizes the first character of a given string.
2. **reverseString:** A function that reverses the given string.
3. **calculator:** An object that performs basic arithmetic operations (addition, subtraction, multiplication, division).
4. **caesarCipher:** A function that implements the Caesar cipher, shifting characters in a string by a given factor while maintaining the original lettercase, wrapping from `z` to `a`, and preserving non-alphabetical characters.
5. **analyzeArray:** A function that takes an array of numbers and returns an object containing the array's average, minimum, maximum, and length.

## Requirements

### 1. Capitalize Function
- **Functionality:** Takes a string and returns it with the first character capitalized.
- **Example:** `capitalize('hello')` should return `'Hello'`.
- **Testing:** Write tests to ensure the function handles various cases, including strings with:
  - A lowercase first letter.
  - An uppercase first letter (should remain unchanged).
  - An empty string (edge case).
  - Strings with non-alphabetical first characters.

### 2. ReverseString Function
- **Functionality:** Takes a string and returns it reversed.
- **Example:** `reverseString('hello')` should return `'olleh'`.
- **Testing:** Write tests to verify the function correctly reverses:
  - Standard strings.
  - Strings with special characters.
  - Strings with spaces.
  - Empty strings (edge case).

### 3. Calculator Object
- **Functionality:** Contains methods for the basic arithmetic operations: `add`, `subtract`, `multiply`, and `divide`.
- **Example:** `calculator.add(2, 3)` should return `5`.
- **Testing:** Write tests for each method, ensuring they correctly handle:
  - Positive and negative numbers.
  - Zero as an operand.
  - Division by zero (edge case).

### 4. CaesarCipher Function
- **Functionality:** Takes a string and a shift factor, returning the string with each character shifted according to the Caesar cipher rules.
- **Example:** `caesarCipher('abc', 3)` should return `'def'`.
- **Testing:** Ensure the function handles:
  - Wrapping from `z` to `a`.
  - Preserving the original lettercase.
  - Leaving non-alphabetical characters unchanged.
  - Different shift factors, including negative values.

### 5. AnalyzeArray Function
- **Functionality:** Takes an array of numbers and returns an object with properties: `average`, `min`, `max`, and `length`.
- **Example:** `analyzeArray([1,8,3,4,2,6])` should return `{ average: 4, min: 1, max: 8, length: 6 }`.
- **Testing:** Write tests to validate:
  - Correct calculation of average, min, max, and length.
  - Handling of arrays with a single number.
  - Handling of empty arrays (edge case).

## Steps to Complete

1. **Write Tests:**
   - Use a testing framework (such as Jest) to write comprehensive tests for each function and object as described.
   - Ensure the tests cover a variety of input cases, including edge cases.

2. **Implement Functions:**
   - Write the actual function code to pass all the tests you've written.
   - Ensure your code is clean, efficient, and well-documented.

3. **Run Tests:**
   - Execute your tests to ensure all functions work as expected.
   - Debug and refine your code until all tests pass.

4. **Submit:**
   - Ensure your code is well-organized and includes comments where necessary.
   - Submit your final code along with the test cases.

## Conclusion

This assignment will help you practice test-driven development (TDD) by writing tests first and then implementing the functionality to pass those tests. By completing this task, I've enhanced my skills in writing reliable, bug-free code.