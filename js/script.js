// 1. Load Calculator
const rateLoad = document.querySelector('#rate__load');
const fuelLoad = document.querySelector('#fuel__load');
const tollsLoad = document.querySelector('#tolls__load');
const profitLoad = document.querySelector('.results__load');
const calculateButtonLoad = document.querySelector('.submit__load');
const clearButtonLoad = document.querySelector('.clear__load');

// Click event for Fuel Button
calculateButtonLoad.addEventListener('click', function(e){
  e.preventDefault();
  calculateProfit();
  profitLoad.innerText = 'PROFIT: $' + result.toFixed(2);
});

// Function to calculate Profit
function calculateProfit() {
  let rate = new Number(rateLoad.value);
  let fuel = new Number(fuelLoad.value);
  let tolls =  new Number(tollsLoad.value);
  return rate-fuel-tolls;
}

// Click event for Clear Button
clearButtonLoad.addEventListener('click', function(e) {
  profitLoad.innerText = 'PROFIT: $$$';
});



// 2. Fuel Calculator
const distance = document.querySelector('#distance__fuel');
const milesPerGallon = document.querySelector('#mpg__fuel');
const pricePerGallon = document.querySelector('#ppg__fuel');
const fuelCost = document.querySelector('#fuel__cost');
const calculateButtonFuel = document.querySelector('.submit__fuel');
const clearButtonFuel = document.querySelector('.reset__fuel');

// Click event for Fuel Button
calculateButtonFuel.addEventListener('click', function(e) {
  e.preventDefault();
  calculateFuel();
  fuelCost.innerText = 'Fuel Cost: $' + fuelCostResults.toFixed(2);
});

// Function to calculate fuel cost
function calculateFuel(distance, mpg, ppg) {
  let distance = new Number(distance.value);
  let mpg = new Number(milesPerGallon.value);
  let ppg = new Number(pricePerGallon.value);
  // mpg = mpg || 7;
  // ppg = ppg || 5;
    return distance - mpg - ppg;
}

// Click event for Clear Button
clearButtonFuel.addEventListener('click', function(e) {
  fuelCost.innerText = 'Fuel Cost: $$$';
});

// var guesses = ['c', 1, 'a']
// var guessesOrdered = new Array();
// var guessesMapped = {};

// // guesses[0] = 'c'
// // guesses[1] = 'b'
// // guesses[2] = 'a'

// guessesOrdered.push('a')
// guessesOrdered.push(1)
// guessesOrdered.push('c')

// guessesMapped['a'] = 1
// guessesMapped['b'] = 1
// guessesMapped['c'] = 1

// console.log(guesses);
// console.log(guessesOrdered);
// // console.log(guessesMapped);

