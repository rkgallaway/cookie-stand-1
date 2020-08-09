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

// Lab 7

// 1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// 2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// 3. Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:

// 4. Each cookie stand location should have a separate render() method that creates and appends its row to the table

// 5. The header row and footer row are each created in their own stand - alone function

// Sourced from MDN Web Docs - Math.random
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Seattle

// var seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   openTime: 6,
//   closeTime: 20,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

function Cities(name, minCust, maxCust, averageCookieSale, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
}

Cities.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.dailyTotal += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

var seattle = new Cities('Seattle', 23, 65, 6.3, 6, 20);
var tokyo = new Cities('Tokyo', 3, 24, 1.2, 6, 20);
var dubai = new Cities('Dubai', 11, 38, 3.7, 6, 20);
var paris = new Cities('Paris', 20, 38, 2.3, 6, 20);
var lima = new Cities('Lima', 2, 16, 4.6, 6, 20);

seattle.calcCookiesPerHour();

var city = [seattle, tokyo, dubai, paris, lima];

for (var k = 0; k < city.length; k++) {
  city[k].calcCookiesPerHour();
}

var tableBody = document.getElementById('dataTable');

function renderheader() {
  var headerrow = document.createElement('tr');
  var headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);
  for (var i = 0; i < hours.length; i++) {
    var headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  var headertotal = document.createElement('th');
  headertotal.textContent = 'Store Totals';
  headerrow.appendChild(headertotal);
}

renderheader();

var tableEl = document.getElementById('dataTable');

var trElement = document.createElement('tr');
tableEl.appendChild(trElement);

var thElement = document.createElement('th');
thElement.textContent = seattle.name;
trElement.appendChild(thElement);

for (var j = 0; j < seattle.hourlyTotal.length; j++) {
  var tdElement = document.createElement('td');
  tdElement.textContent = seattle.hourlyTotal[j];
  trElement.appendChild(tdElement);
}

var thElement = document.createElement('th');
thElement.textContent = tokyo.name;
trElement.appendChild(thElement);

for (var j = 0; j < tokyo.hourlyTotal.length; j++) {
  var tdElement = document.createElement('td');
  tdElement.textContent = tokyo.hourlyTotal[j];
  trElement.appendChild(tdElement);
}

// Tokyo

// var tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   openTime: 6,
//   closeTime: 20,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesPerHourArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// tokyo.calcCookiesPerHour();

// Dubai

// var dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   openTime: 6,
//   closeTime: 20,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesPerHourArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// dubai.calcCookiesPerHour();

// var paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   openTime: 6,
//   closeTime: 20,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesPerHourArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// paris.calcCookiesPerHour();

// var lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   openTime: 6,
//   closeTime: 20,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesPerHourArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// lima.calcCookiesPerHour();

// var city = [seattle, tokyo, dubai, paris, lima];

// var section = document.getElementById('stores');

// var total;
// for (var j = 0; j < city.length; j++) {
//   total = 0;

//   // <div>

//   var divElement = document.createElement('div');
//   section.append(divElement);

//   // h3

//   var h3Element = document.createElement('h3');
//   h3Element.textContent = city[j].name;
//   divElement.appendChild(h3Element);
//   // h3Element.appendChild(document.createTextNode(city[j].name));
//   var ulElement = document.createElement('ul');
//   divElement.appendChild(h3Element);
//   divElement.append(ulElement);
//   // LI

//   var liElement;
//   var outPutString;
//   var time = city[j].openTime;
//   for (var i = 0; i < (city[j].closeTime - city[j].openTime); i++) {
//     liElement = document.createElement('li');
//     outPutString = `${formatTime(time)}: ${city[j].cookiesPerHourArray[i]} cookies.`;
//     time++;
//     liElement.textContent = outPutString;
//     ulElement.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.appendChild(document.createTextNode(`Total Sold: ${city[j].dailyTotal}.`));
//   ulElement.appendChild(liElement);
// }

// // takes the 24 hour value and makes it am or pm
// function formatTime(input) {
//   if (input < 13) {
//     return `${input}am`;
//   } else {
//     return `${input - 12}pm`;
//   }
// }
// var tester = seattle.calcCustomersPerHour();
// console.log('tester; ', tester);
