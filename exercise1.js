var store1 = require('./store1-data.js');
//
//
//
// // *********** ACCESSING DATA ***********
//
// // How would you access the value '4.63' from store1?
console.log(store1['2015-01-08'][0][1]);
//
// // How would you access how many 'Mint Wafers' were sold on January 7th?
// //there were no mint wafers sold on the 7th...nice try
//
// // Produce an array of the date keys in store1's data.
console.log(Object.keys(store1));
//
// // *********** LOOPING OVER DATA *********** \\
//
//
// // Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
//
function candySoldOnDate(date) {
    for (var i = 0; i < store1[date][i].length; i++) {
    var candies = store1[date][i][0];
    console.log(candies);
    var sold = [];
    sold.push(candies);
// //
// // }
// // }
// // candySoldOnDate('2015-01-08');
// // Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
// // function candySoldOnDate(date) {
// //
// //   var numSold =0;
// //
    for (var i = 0; i < store1[date].length; i++) {
      numSold += store1[date][i][2];
}
console.log(numSold);
}
candySoldOnDate('2015-01-10');
//
//
Use `Object.keys()` to get an array of the dates that candies were sold at store1.
console.log(Object.keys(store1))
//
//
//
// // Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
//
//
//
//
  var dates = Object.keys(store1);

  for (var dates in store1) {
    console.log(store1[dates]);
  }

//
// // Use a loop to calculate the total number of candies sold at store1.
// var sum = 0;
// var allSum = [];
//
// function fuckingA () {
//
//   var dates = Object.keys(store1);
//
//
//
// for (var dates in store1) {
//    sum = sum + dates[2]
//    allSum.push(sum)
//
//
//     }
//   }

function fuckingB () {
  sum = 0;
  
  for (var date in store1) {
    for (var i = 0; i < store1[date].length; i++) {
      console.log(store1[date][i]);
      sum = sum + store1[date][i][2];
      allSum.push(sum)
    }
    console.log(sum);
  }
  return sum;
}
fuckingB();
console.log(fuckingB());

//

// In the previous exercise, where did you have to initialize the counter variable? Why?


// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
