console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jo!"', helloName('Jo'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
  }
// Call the function to test
console.log('Test - should add 3 and 4 to return their sum as 7', addNumbers(3, 4));
console.log('Test - should add 3 and 4 to return their sum as ', addNumbers(0, 0));
console.log('Test - should say -3', addNumbers(-1, -2));
console.log('Test - should say 1.5', addNumbers(1, 0.5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber , secondNumber , thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
// Call the function to test
console.log('Test - should multiply 3, 4, and 5 to return their product as 60', multiplyThree(3, 4, 5));
console.log('Test - should multiply 3, 4, and 5 to return their product as 6', multiplyThree(1, 2, 3));
console.log('Test - should say -6', multiplyThree(-1, -2, -3));
console.log('Test - should say 0.25', multiplyThree(1, 0.5, 0.5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('Test - should return true for a positive number', isPositive(3));
console.log('Test - should return false for a negative number', isPositive(-3));
console.log('Test - should return false for a zero', isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
}
    return array[array.length - 1];
}
// Call the function to test

console.log('Test - should return 3 as the last item in the array', getLast([1, 2, 3]));
console.log('Test - should return undefined for an empty array', getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  }
  return false;
}

// Call the function to test
console.log('Test - should return true if the letter is the first letter in the string', isFirstLetter('a', 'aardvark'));
console.log('Test - should return false if the letter is not the first letter in the string', isFirstLetter('b', 'aardvark'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Call the function to test
console.log('Test - should return the sum of 4, 5, 6, 7 as 22', sumAll([4, 5, 6, 7]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positiveArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray.push(array[i]);
    }
  }
  return positiveArray;
}
// Call the function to test
console.log('Test - should return an array containing only the positive numbers from the input array', allPositive([-1, 2, -3, 4, -5]));
console.log('Test - should return an empty array if there are no positive numbers', allPositive([-1, -2, -3]));
console.log('Test - should return the input array if all numbers are positive', allPositive([3, 4, 5]));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
