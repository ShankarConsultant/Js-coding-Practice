// Get Count of the Array
// let sumVal = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sumVal += item;
// }
// console.log(sumVal);

// function findSecondLargestElem(arr) {
//   let first = -1,
//     second = -1;

//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] != first) {
//       second = arr[i];
//     }
//   }
//   console.log('---->' + second);
// }
// let arr = [12, 35, 1, 10, 34, 1];
// findSecondLargestElem(arr);

// **** Find non-duplicate values using includes ****
// let ageArr = [22, 44, 55, 22, 66, 55];
// const newAgeArr = Array();
// for (let i = 0; i < ageArr.length; i++) {
//   if (!newAgeArr.includes(ageArr[i])) {
//     newAgeArr.push(ageArr[i]);
//   }
// }
// console.log(newAgeArr);

// **** Find non-duplicate values using indexOf ****
// const nosArr = [1, 2, 3, 2, 4, 5, 5, 6];
// const newArr = Array();
// const dupArr = Array();
// for (let i = 0; i < nosArr.length; i++) {
//   if (newArr.indexOf(nosArr[i]) < 0) {
//     newArr.push(nosArr[i]);
//   } else {
//     dupArr.push(nosArr[i]);
//   }
// }
// console.log(newArr); // updated array after removing duplicates
// console.log(dupArr); // list duplicate elements
//
//
// const strVal = 'xyzabcxyz';
// const strValArr = strVal.split('');
// const newStrArr = Array();
// for (let i = 0; i < strValArr.length; i++) {
//   if (newStrArr.indexOf(strValArr[i]) < 0) {
//     newStrArr.push(strValArr[i]);
//   }
// }
// console.log(newStrArr);

// **** Find Output ****
// var res = [];
// for (var i = 0; i < 5; i++) {
//   res[i] = function () {
//     return i;
//   };
// }

// console.log(res[0]());
// console.log(res[1]());
// console.log(res[2]());
// console.log(res[3]());
// console.log(res[4]());
/* Output
5
5
5
5
5
*/

// **** Find Output ****

// var b = 100;
// const foo = () => {
//   b = 200;
//   return () => {
//     console.log(b);
//   };
// };

// foo()(); // 200

//
//
//
//
// function createIncrement() {
//   let count = 0;
//   function increment() {    count++;  }
//   let message = `Count is ${count}`;
//   function log() {    console.log(message);  }
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// var counter=function() {
//   var _counter=0;
//   return {
//     add: function(num) { _counter=+num; },
//     retrieve: function() { return "the value of counter is currently: "+_counter; }
//   };
// };

// var count=counter();
// count.add(9);
// count.add(5);
// console.log(count.retrieve());
// Get the output of the function
// function closure() {
//   let counted = 0;
//   return {
//     count: function () {      counted++;    },
//     getTheCount: function () {      return 'Counted till ' + counted;    },
//   };
// }

// const closured = closure();

// closured.count();
// closured.count();
// closured.count();
// closured.count();
// closured.count();
// closured.count();

// console.log(closured.getTheCount());  //Counted till 6

// function createBase(var1){
//   return function(var2){
//     return var1 + var2;
//   };
// }
//  var addSix = createBase(6);
//  console.log(addSix(12)); // 16
// addSix(21) //27

// If 2 parameters is given, then two values will be multiplied
// if one parameters is given, then it should multiply on its own as mentioned in following results
// multiply(4, 5); // => 20
// const double = multiply(2);
// double(5); // => 10

// function multiply(number1, number2) {
//   console.log(number2);
//   if (number2 !== undefined) {
//     return number1 * number2;
//   }
//   return function doMultiply(number2) {
//     console.log(number1);
//     console.log('---------');
//     console.log(number2);

//     return number1 * number2;
//   };
// }
// console.log(multiply(4, 5));
// console.log(multiply(6, 7));

// const dbl = multiply(2);
// console.log(dbl(6));
//
//
//
// Here Stack items is exposed and encapsulation is broken on **********
// function createStack1() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }
// const stack1 = createStack1();
// stack1.push(10);
// stack1.push(5);
// stack1.pop();

// console.log(stack1.items);
// // stack.items = [10,100, 1000]; *************
// // console.log(stack.items);
// function createStack() {
//   const items = [];
//   return {
//     push(item) {
//       items.push(item);
//     },
//     pop() {
//       return items.pop();
//     },
//   };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();

// console.log(stack.items);

//
//
//
//
//
// I want it to log 0, 1, 2 values
// for (let i = 0; i < 3; i++) {
//   setTimeout(
//     (function log(closureI) {
//       console.log(closureI);
//     })(i),
//     1000
//   );
// }

//
//
//
//
//
//

//// What is the output of this function? - 1 and 0
// let a = 0;
// (function foo() {
//   if (a === 0) {
//     let a = 1;    console.log(a);
//   }
//   console.log(a);
// })();
//
//
//
//
//
//
//
//
//
//// What is the output of this function? - 5
// (function iief1(a) {
//   return (function iief2(b) {
//     console.log(a);
//   })(1);
// })(5);
//
//
//
//
//
//
//
//
//
//
//
// //Sample Closure syntax
// function Outer(msg) {
//   //console.log(msg);
//   return function () {
//     console.log(msg);
//   };
//   return Inner();
// }

// Outer('Lenovaa123')();
//
//
//
//
//
//
//
//
//
//
//
//
// //which of these functions below accessing outer scope variables?
// ------- First Scenario -------
// let countClicks = 0;
// let button = document.getElementById('submitBtn');
// button.addEventListener('click', function clickHandler() {
//   countClicks++;
//   console.log(countClicks);
// });
// console.log('---->' + countClicks);

// // ------- Second Scenario -------
// const result = (function immediate(number) {
//   const message = `number is: ${number}`;
//   return message;
// })(100);
// console.log(result);

// // ------- Third Scenario -------
// setTimeout(function delayedReload() {   location.reload(); });
//  Answer : First and Third

// Reference Error check
// var foo = function () {
//   var name = 'shan';
//   console.log(name);
// };
// foo();
// console.log(name); //Uncaught ReferenceError: name is not defined

// Local and Global scope variables
// var var1 = 'hello';
// var foo = function () {
//   var var1 = 'test';
//   console.log(var1);
// };
// foo();
// console.log(var1); // test    hello

//Sort an Array of string values in asc order
//const monthss = ['Mar', 'Jan', 'Feb', 'Dec', 'Apr'];  console.log(monthss.sort());

//Sort an Array of string values in desc order
// monthss.sort(function (a, b) {
//   if (a > b) {    return -1;  }
//   if (a < b) {    return 1;  } // a must be equal to b
//   return 0;
// });

//console.log('Sort the artist names(Descending)', monthss);

//Sort an Array of integrers values in Asc Order
//const numberArray = [40, 1, 5, 200];
// console.log(numberArray.sort()); // [1, 200, 40, 5]
// console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]
// function compareNumbers(a,b){    return a-b; }

//Sort an Array of integrers values in Asc Order
// console.log(numberArray.sort(function(a,b) {return b-a}))

//Sort an Array of objects values based on roll asc
// let students = [
//   { name: 'Isabella Williams', roll: 38 },
//   { name: 'Sophia Heels', roll: 45 },
//   { name: 'Ava Benjamin', roll: 17 },
//   { name: 'Amelia Brown', roll: 8 },
// ];

// students.sort((s1, s2) => {  return s1.roll - s2.roll;});

// console.log(  'Students sorted based on ascending order of their roll numbers are:'+ students);

// students.sort(function(a, b) {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase

// // sort in an ascending order
//   if (nameA < nameB) {     return -1;  }
//   if (nameA > nameB) {     return 1;   }

//  names must be equal
//   return 0;
// });

// console.log(  'Students sorted based on ascending order of their names are:'+students);
// students.sort((s1, s2) => {   return s2.roll - s1.roll; });

// console.log('Students sorted based on ascending order of their roll numbers are:' +students);

//Students sorted based on ascending order based on Registration date
// let studentsNew = [
//   {     name: 'Isabella Williams',     roll: 38,     registrationDate: 'January 20, 2019',   },
//   {     name: 'Sophia Heels',     roll: 45,     registrationDate: 'March 17, 2022',   },
//   {     name: 'Ava Benjamin',     roll: 17,     registrationDate: 'April 10, 2017',   },
//   {     name: 'Amelia Brown',     roll: 8,    registrationDate: 'July 15, 2017',   },
// ];

// studentsNew.sort((x, y) => {
//   (x = new Date(x.registrationDate)), (y = new Date(y.registrationDate));
//   return x - y;
// });

// console.log(studentsNew)

//if count and a character given, form a array with the char of that count length
// const fill = (arraySize, valuee) => {
//   let arrVal = [];
//   for(i=0;i<arraySize;i++){
//     arrVal.push(valuee);
//   }
//   console.log(arrVal)
//  }

//  fill(5, 'a') // ['a', 'a', 'a','a','a']

// Reverse an array of numbers
// const data = [1, 2, 3];  console.log(data.reverse()); // [3, 2, 1]

// Remove unwanted datatypes in an array and keep numbers alone
// const dataa = [0, 1, false, 5, undefined, '', 3, null];
// const compactFn = (arrray) => arrray.filter((el) => el);  console.log(compactFn(dataa)) // [1, 2, 3]

//combine nested array, two dimensional arrays
// const data = [1, 2, [3, 4, [5]]];
// console.log(data.flat(2));

// Array Chunk with input value
// const chunk = (array, size) => {
//   const chunkedArr = [];
//   let index = 0;
//   while (index < array.length) {
//     chunkedArr.push(array.slice(index, size + index));
//     index += size;
//   }
//   return chunkedArr;
// };

// const data = [1, 2, 3, 4, 5, 6];
// console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6]]
// console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6]]

//3 Ways to Clone Objects in JavaScript
//const foodVar = { beef: 'friedItem', bacon: 'bakedItem' };
// console.log({ ...foodVar })                                        // 1. "Spread"
// let cloneObj = Object.assign({}, foodVar)   console.log(cloneObj)  // 2. "Object.assign"
//let cloneObj = JSON.parse(JSON.stringify(foodVar)); console.log(cloneObj); // 3."JSON"

// Get vowels characters from given string
// const countVowels1 = (str) => Array.from(str).filter((letter) => 'aeiou'.includes(letter));
// console.log(countVowels1('hello'));

// Get vowels character length from given string
// const countVowels = (str) =>  Array.from(str).filter((letter) => 'aeiou'.includes(letter)).length;
// console.log(countVowels('hello'));

//Find duplicates in array javascript es6
// const findDupFn = arry =>  arry.filter((item, index) => arry.indexOf(item) !== index);
// console.log(findDupFn([1, 2, 3, 1, 2, 3, 4]));

//Get unique values from an array
// const uniqueArr = [...new Set([1, 2, 2, 1, 2, 3, 4])];
// console.log(uniqueArr)

//Get unique values length from an string
// strValArr = Array.from('tester');
// const newStrArr = [...new Set(strValArr)]
// console.log(newStrArr.length);

// Get unique objects

//Add array elements using Spread operator
// function putDookieInAnyArray(arr) {
//   return [...arr, 'dookie'];
// }

// const resultArr = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]
// console.log(resultArr);

//Clone a object using Spread operator
// const person = {   name: 'Todd',   age: 29, };

// const copyOfTodd = { ...person };
// console.log(copyOfTodd);

//Merge two array using spread operator
// let arr1 = [1,3,5];  let arr2 = [2,4,6]
// let arr3 = [...arr1,...arr2]
// console.log(arr3)
