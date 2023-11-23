const rateLoad = document.querySelector('#rate__load');
const fuelLoad = document.querySelector('#fuel__load');
const tollsLoad = document.querySelector('#tolls__load');
const profitLoad = document.querySelector('#profit__load');
const calculateButtonLoad = document.querySelector('.submit__load');
const clearButtonLoad = document.querySelector('.clear__load');

var guesses = []
var guessesOrdered = new Array();
var guessesMapped = {};

guesses[0] = 'a'
guesses[1] = 'b'
guesses[2] = 'c'

guessesOrdered.push('a')
guessesOrdered.push('b')
guessesOrdered.push('c')

guessesMapped['a'] = 1
guessesMapped['b'] = 1
guessesMapped['c'] = 1

console.log(guesses);
console.log(guessesOrdered);
console.log(guessesMapped);

calculateButtonLoad.addEventListener('click', function(e){
  let rate = new Number(rateLoad.value)
  let fuel = new Number(fuelLoad.value)
  let tolls = new Number(tollsLoad.value)

  let result = rate-fuel+tolls;

  profitLoad.value = rate-fuel+tolls;

  addTax(result);
});

function addTax(total){
  console.log(total*.07);
}