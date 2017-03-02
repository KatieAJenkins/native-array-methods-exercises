'use strict';

var mapArray = [ 45, 1, -10, 11, 250 ];

function multiplyBy10 (array) {
 // your code here
  return array.map(function(number){
   console.log(number);
   console.log(number * 10);
   console.log(mapArray);
   return number * 10;
 });
}

multiplyBy10(mapArray);

function shiftRight (array) {
 // your code here
};

function onlyVowels (array) {
 // your code here
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
