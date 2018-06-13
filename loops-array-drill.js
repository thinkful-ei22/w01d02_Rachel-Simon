'use strict';

function max(numbers) {
  let i = 0;
  let currentMax = numbers[0];
  while (i < numbers.length) {
    i++;
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}

console.log(max([1, 5 ,6 ,3]));

function min(numbers) {
  let i = 1;
  let currentMin = numbers[0];
  while (i < numbers.length) {
    i++;
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  return currentMin;
}

console.log(min([1, 5 ,6 ,3]));



