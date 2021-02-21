var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.*****************************************

//loop through numbers array, each entry will be used as the input for
//the double() funciton. In this case, A new array will be returned with the double function applied to
//each entry.
function double(x) {
  return x * 2;
}
var newNumbers = numbers.map(double);
console.log(newNumbers);

//using anonymous function...
var newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//to achieve this with a for each loop...
var newNumbers = [];
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});
console.log(newNumbers);

//we see that it is MORE CONCISE to use the mapping function becaues
//the output is a new array. With for-each, we have to create a new empty array
//and then keep adding to it.

//Filter - Create a new array by keeping the items that return true.*************************************************
var filteredNumbers = numbers.filter(function (num) {
  return num > 10; //return numbers > 10
});
console.log(filteredNumbers);

//if we used a forEachLoop
var filteredNumbers = [];
numbers.forEach(function (num) {
  if (num > 10) {
    filteredNumbers.push(num);
  }
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.****************************
//example sum up all numbers in array
// each iteration, we add the current value of the array to the accumulator

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator: " + accumulator);
  console.log("currentNumber: " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber);

//with for each
var newNumber = 0;
numbers.forEach(function (currentNumber) {
  newNumber += currentNumber;
});
console.log(newNumber);

//Find - find the first item that matches from an array.*************************************
var foundNum = numbers.find(function (num) {
  return num > 10;
});
console.log(foundNum);

//FindIndex - find the index of the first item that matches.**************************************
var foundIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(foundIndex);

//Challenge: create a new array that only has the meaning text
//truncate text to max 25 characters
import emojipedia from "./emojipedia";

function returnMeaning(emojiEntry) {
  return emojiEntry.meaning.substring(0, 25);
}

var newMeanings = emojipedia.map(returnMeaning);
console.log(newMeanings);
