'use strict';

// Sourced from MDN Web Docs - Math.random
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function Cities(name, minCust, maxCust, averageCookieSale, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
  this.dailyTotal = 0;
}

Cities.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.dailyTotal += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

Cities.prototype.render = function () {
  this.calcCookiesPerHour();
  var tableEl = document.getElementById('dataTable');

  var trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var j = 0; j < this.hourlyTotal.length; j++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

var seattle = new Cities('Seattle', 23, 65, 6.3, 6, 20);
var tokyo = new Cities('Tokyo', 3, 24, 1.2, 6, 20);
var dubai = new Cities('Dubai', 11, 38, 3.7, 6, 20);
var paris = new Cities('Paris', 20, 38, 2.3, 6, 20);
var lima = new Cities('Lima', 2, 16, 4.6, 6, 20);

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
for (var i = 0; i < city.length; i++) {
  city[i].render();
}


