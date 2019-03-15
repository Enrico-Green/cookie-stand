
'use strict';

var newStore = document.getElementById('newStore');

var cookieStores = [];
var cookieStoreTable = document.getElementById('cookieStores');

//this is the function to add a new store and stops the page from refreshing when form is submitted


function inputNewStore (event) {
event.preventDefault(); 
console.log('information for a new store');

var name = event.target.storeLocation.value;
var min = event.target.minCustomers.value;
var max = event.target.maxCustomers.value;
var avg = event.target.avgCookies.value;

var newStore = new cookieStore(name,min,max,avg);

console.log(loc,min,max,avg);
console.log(newStore);
newStore.render();

cookieStores.push(newStore);
renderTable();

}

cookieStoreTable.addEventListener('submit', makeNewStore);
 
//creates random number 
//taken from MDN http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(mAth.random() * (max - min +1)) + min;

}

var HoursOpen =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',];
var cookieStoresArray = [];

//this is the constructor function
function SalmonCookies (location, min, max, avgCookies, hours, numCustomers, avgSales) {
    this.location = location;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookiesPerCustomer = avgCookies;
    this.HoursOpen = hours;
    this.numCustomersArray = numCustomers;
    this.avgSalesPerHour = avgSales; 

} ;

//this generates a random number 
SalmonCookies.prototype.numCustomers = function () {
 var randomCustomers = getRandomIntInclusive(this.minCustomers, this.maxCustomers);
 console.log('random number is: ' + randomCustomers);

    retrun randomCustomers;
};

//calculate avg sales per hour
SalmonCookies.prototype.avgSales = function (index) {
    var avgSalesPerHourPerCustomer = Math.floor(this.avgCookiesPerCustomer * this.numCustomersArray[index]);  
    
    retrun avgSalesPerHourPerCustomer;
};

//total the cookie sales
SalmonCookies.prototype.totalCookieSales = function(){
    var totalCookieSales = 0;
    for(var k = 0; k < this.avgSalesPerHour.length; k++){
        totalCookies = totalCookies + this.avgSalesPerHour[k];
    }
    return totalCookieSales;
};

SalmonCookies.prototype.listCookies = function(){
    console.log('${this.location} Results');
    for(var i = 0; i < this.HoursOpen.length; i++){
        this.numCustomersArray.push(this.numCustomers());
        this.avgSalesPerHour.push(this.avgSales(i));

        console.log('${this.hoursOpen[i]}: ${this.avgSalesPerHour} cookies');
    }
        console.log('Total Cookies: ${this.totalCookieSales()}');
};

//this will create the table
/*
<table>
<tr>
<th> 6am <th>
<th> 7am <th>
<th> 8am <th>
<th> 9am <th>
<th> 10am <th>
<th> 11am <th>
<th> 12pm <th>
<th> 1pm <th>
<th> 2pm <th>
<th> 3pm <th>
<th> 4pm <th>
<th> 5pm <th>
<th> 6pm <th>
<th> 7pm <th>
<th> 8pm<th>

<th>
store locations 
<th>
</table> 
 
*/



//footer
function buildFooter() {
var footerTR = document.createElement('tr');
var footerTD = document.createElement('td');
footerTD.textContent = 'Total';
footerTR.appendChild(footerTD);
for(var l =0; l < HoursOpen.length; l++){

}