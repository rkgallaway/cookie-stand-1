'use strict';

// Sourced from MDN Web Docs - Math.random
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allCities = [];

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
  allCities.push(this);
}

Cities.prototype.calcCookiesPerHour = function () {
  this.dailyTotal = 0;
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
    //this.dailyTotal += this.hourlyTotal[j];
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

// var city = [seattle, tokyo, dubai, paris, lima];

for (var k = 0; k < allCities.length; k++) {
  allCities[k].calcCookiesPerHour();
}

var newStore = document.getElementById('New Store');

function handleSubmit(event) {
  event.preventDefault();

  console.log(event.target);

  var storeName = event.target.storeName.value;
  console.log('Store Name: ', storeName);

  var minCust = parseInt(event.target.minCust.value);
  console.log('Minimum Customer\'s per hour: ', minCust);

  var maxCust = parseInt(event.target.maxCust.value);
  console.log('Maximum Customer\'s per hour: ', maxCust);

  var averageCookieSale = parseFloat(event.target.averageCookieSale.value);
  console.log('Average Cookies Sold per hour: ', averageCookieSale);

  var newStore = new Cities(storeName, minCust, maxCust, averageCookieSale);

  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.averageCookieSale.value = null;


  renderTable();

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
  console.log(headertotal);
}


// renderheader();
// for (var i = 0; i < allCities.length; i++) {
//   allCities[i].render();
// }
// renderFooter();

function renderFooter() {
  var headerrow = document.createElement('tr');
  tableBody.appendChild(headerrow);
  var tdElement = document.createElement('td');

  tdElement.textContent = 'Daily Total';
  headerrow.appendChild(tdElement);

  var runningTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    tdElement = document.createElement('td');
    var total = 0;
    for (var j = 0; j < allCities.length; j++) {
      total += allCities[j].hourlyTotal[i];
      runningTotal += allCities[j].hourlyTotal[i];
      tdElement.textContent = total;
      headerrow.appendChild(tdElement);
    }


  }
  tdElement = document.createElement('td');
  tdElement.textContent = runningTotal;
  headerrow.appendChild(tdElement);
}



function renderTable() {
  tableBody.innerHTML = '';
  renderheader();
  for (var i = 0; i < allCities.length; i++) {
    allCities[i].render();
  }
  renderFooter();
}

newStore.addEventListener('submit', handleSubmit);

// for (var j = 0; j < allCities.length; j++) {
//   allCities[j].render();
// }

renderTable();
