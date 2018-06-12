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
 
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    }

}
    const rocksWarning = hazardWarningCreator('Rocks on the Road');
    const deerAhead = hazardWarningCreator('Look out for deer');
    const hairpinTurn = hazardWarningCreator('Drive slow, turns ahead'); 

deerAhead("Canada");
deerAhead("Canada");

 -----------------------------------------------