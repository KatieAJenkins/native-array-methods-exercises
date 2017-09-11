// sum: (arr, base) => {
//   var sum = arr.reduce(function(begSum, number) {
//     return begSum + number;
//   }, base);
//   return sum;
// }

//reduce = combine all elements in an array into one!

//reduce starts by giving you access to the first two values in the array (previous, current)

//then return a SINGLE value that will be used as PREVIOUS the next time around

//reduce takes an argument called the initializer (previous --> starting point)

//FIRST variable = previous OR an initializer (where we are starting at)
//if we don't set an initializer, the beginning accumulator number starts at the 1st index (ex: 10)
//if you set the initializer (0 or an empty array/object/etc), then we will start with this as our beginning value
//start by logging initializer variable as is
//then add in a 0, then log. Will see the initializer is now at 0

//SECOND variable = current number OR next number if setting initializer
//if no initializer is set, we will look at the next number in the array since we are intializing at 10 (the 1st num in the array).
//if set an initializer, current number will be the 1st number in the array since we are setting our starting point at 0

//THIRD variable = index of where we are at in array
//do not set initializer, index starts at 1
//set an initializer, index starts at 0

var array = [ 10, 15, 20, 25, 30, 35 ]

function sum (array) {
  // your code here
   let sum = array.reduce(function(accumulator, current, index, array){
    console.log('accumulator', accumulator);
    console.log('current', current);
    console.log('index', index);
    console.log('array', array);
   //this returns a single number used for previous in the next interation
     return previous + current;
  })
  return sum;
};

// function sum (array) {
//   // your code here
//    let sum = array.reduce(function(previous, current, index){
//     // console.log('previous', previous);
//     // console.log('current', current);
//     // console.log('index', index);
//     return previous + current; //this returns a single number used for previous in the next interation
//   },0)
//   // console.log('sum', sum);
//   return sum;
// };

sum(array);












// function productAll (array) {
//   // your code here
//   let product = array.reduce(function(previous, current){
//     // console.log(current);
//     return previous * current;
//   })
//   // console.log(product);
//   return product;
// };
//
// productAll(array);
//
// let array2 = [[ 'Thundercats', '80s' ],
//              [ 'The Powerpuff Girls', '90s' ],
//              [ 'Sealab 2021', '00s' ]];

// function objectify (array) {
//   // your code here
//   let objects = array.reduce(function(newObj, current){
//     // console.log(current[0]);
//     // let key = current[0];
//     // // console.log(key);
//     // console.log(newObj);
//     // return newObj[key];
//     // return previous[current[0]];
//
//   },{})
//   // console.log(objects);
// };
//
// objectify(array2);

// let array3 = [ 30, 48, 11, 5, 32 ];
//
// function luckyNumbers (array) {
//   // your code here
//   let luckyNums = array.reduce(function(previous, current, index){
//     // console.log(previous);
//     if(index === array.length-1){
//       // console.log("and " + current);
//       let lastNumber = "and " + current;
//       return lastNumber;
//     }
//     return previous + ' ' + current + lastNumber;
//   }, "Your lucky numbers are:")
// };
//
// luckyNumbers(array3);

module.exports = {
  sum: sum
  // productAll: productAll,
  // objectify: objectify,
  // luckyNumbers: luckyNumbers
};
