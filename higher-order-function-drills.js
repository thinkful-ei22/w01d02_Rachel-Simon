'use strict';

// // function repeat(fn,n) {
// //     //loop repeat n times 
// //     for (i = 0; i < n; i++) { // 
// //     //for each iteration, call fn
// //         fn();
// //     }
 
// // }

// function repeat(fn,n) {
//     let i = 0;
//     while (i < n) {
//         fn; 
//         i++;
//     }
// }

// function hello() {
//     console.log("Hello world");
// }

// function goodbye() {
//     console.log("Goodbye world");
// }

// repeat(hello(), 5);


// -----------------------------------------------


// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:


// function filter(arr, fn) {
// 	let newArray = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (fn(arr[i])) {
// 			newArray.push(arr[i] === true);
// 		}
// 	}
// 	return newArray;
// }

// console.log(filter(myNames, filter));


// -----------------------------------------------
 
// function hazardWarningCreator(typeOfWarning) {
//     let warningCounter = 0;

//     return function(location) {
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//     }

// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const deerAhead = hazardWarningCreator('Look out for deer');
// const hairpinTurn = hazardWarningCreator('Drive slow, turns ahead'); 

// deerAhead("Canada");
// deerAhead("Canada");

//  -----------------------------------------------

// function turtleSteps(arr) {
// 	let newArray = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArray.push(arr[i].filter(a => a >= 0));
// 	}
// 	return newArray;
// }

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

//-----------------------------------------------

function reduceArray(string) {
    let newArray = string.split(' ');
    let counter = [];
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i].length === 3) {
            counter.push(" ");
        } else { 
            counter.push(newArray[i][newArray[i].length - 1])
        }
    }
    return counter.join('').toUpperCase();
}

console.log(reduceArray('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));
    
    
    
    
    
  






