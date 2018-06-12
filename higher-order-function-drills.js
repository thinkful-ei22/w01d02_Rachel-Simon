// 'use strict';

// function repeat(fn,n) {
//   //loop repeat n times 
//   for (var i = 0; i < n; i++) { // 
//     //for each iteration, call fn
//     fn();
//   }
// };

// const hello = function() {
//   console.log('Hello world');
// };

// const goodbye = function() {
//   console.log('Goodbye world');
// };

// repeat(hello, 5);


// -----------------------------------------------


// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:


// function filter(arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }


// -----------------------------------------------
 
 
// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;

//   return function(location) {
//     warningCounter++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//   }

// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const deerAhead = hazardWarningCreator('Look out for deer');
// const hairpinTurn = hazardWarningCreator('Drive slow, turns ahead'); 

// deerAhead("Canada");
// deerAhead("Canada");


//  -----------------------------------------------


// //previous solution:
// function turtleStep(arr) {
// 	var filterArray = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i][0] >= 0 && arr[i][1] >= 0) {
// 			filterArray.push(arr[i]);
// 		}
// 	}
// 	var mapArray = filterArray.map(a => a.reduce((b, c) => b + c));
// 	mapArray.forEach(d => console.log(d));
// }

// console.log(turtleStep([[0, 1], [0, -5], [-1, -3], [3, 7]]));


// //new solution:
// function turtleStep(arr) {
//   const frArray = arr.filter(el => el[0] >= 0 && el[1] >= 0);
//   const mapArray = frArray.map(el => el[0] + el[1]);
//   mapArray.forEach(el => console.log(el));
// }


// turtleStep([[0, 1], [0, -5], [-1, -3], [3, 7]]);


// -----------------------------------------------


// function reduceArray(string) {
//   let newArray = string.split(' ');
//   let counter = [];
//   for (var i = 0; i < newArray.length; i++) {
//     if (newArray[i].length === 3) {
//       counter.push(" ");
//     } else { 
//       counter.push(newArray[i][newArray[i].length - 1])
//     }
//   }
//   return counter.reduce((a, b) => a + b).toUpperCase();
// }

// console.log(reduceArray('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));
    
    
    
    
    
  






