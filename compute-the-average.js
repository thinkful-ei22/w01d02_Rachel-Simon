'use strict';

function average(numbers) {
  let sum = 0;
  //for each item in our array, iterate through numbers and find the sum(average)
  numbers.forEach(item => sum += item) 
  //arrow function allows us to name each individual item in the array
  //and apply a condition function to it
  return sum / numbers.length;
}

console.log(average([2,2,2]));
