'use strict';

// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Uses a method of that object to generate a random number of customers per hour.
// // function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in an array...perhaps as a property of the object representing that location.
// Display the values of each array as an unordered list in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
// Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

// Here are the starting numbers that you’ll need to build these objects:

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
// These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

// Sourced from MDN Web Docs - Math.random
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(document);

var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,

  calcCustomersPerHour: function () {
    // Randomly generate customers per hour, and populate the array
    var customersNow = getRandomIntInclusive(this.minCust, this.maxCust);
    console.log(customersNow);
    // while (customersNow < this.minCust || customersNow > this.maxCust) {
    //   customersNow = getRandomInt();
    // }
    // return customersNow;
  },

  calcCookiesPerHour: function () {
    // Multiply the number of customers by the average number of cookies bought per customer
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.close; i++) {
      perHour[i - this.openTime] = (this.calcCustomersPerHour() * this.avgCookieSale).toFixed(0);
      hour[i - this.openTime] = i;
    }
    return [hour, perHour];
  }
};
var sectionElement = document.getElementById('stores');
var pElement = document.createElement('p');
pElement.appendChild(document.createTextNode('Hello World'));

sectionElement.append(pElement);







// var tokyo = {
//   name: 'tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   calcCustomersPerHour: function () {
//     // Randomly generate customers per hour, and populate the array
//     for (var i = 0; i < this.customersPerHour.length; i++) {
//       var customersNow = getRandomInt(this.minCust, this.maxCust);
//       this.customersPerHour.push(customersNow);
//     }
//   }
// };


// var dubai = {
//   name: 'dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   calcCustomersPerHour: function () {
//     // Randomly generate customers per hour, and populate the array
//     for (var i = 0; i < this.customersPerHour.length; i++) {
//       var customersNow = getRandomInt(this.minCust, this.maxCust);
//       this.customersPerHour.push(customersNow);
//     }
//   }
// };

// var paris = {
//   name: 'paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   calcCustomersPerHour: function () {
//     // Randomly generate customers per hour, and populate the array
//     for (var i = 0; i < this.customersPerHour.length; i++) {
//       var customersNow = getRandomInt(this.minCust, this.maxCust);
//       this.customersPerHour.push(customersNow);
//     }
//   }
// };

// var lima = {
//   name: 'lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   calcCustomersPerHour: function () {
//     // Randomly generate customers per hour, and populate the array
//     for (var i = 0; i < this.customersPerHour.length; i++) {
//       var customersNow = getRandomInt(this.minCust, this.maxCust);
//       this.customersPerHour.push(customersNow);
//     }
//   }
// }
var tester = seattle.calcCustomersPerHour();
console.log('tester; ', tester);