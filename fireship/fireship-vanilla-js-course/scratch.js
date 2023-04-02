//Prototype Chain
/*
const animal = {
  dna: 'ATCG',
};

const dog = {
  face: '🐺',
};

Object.setPrototypeOf(dog, animal);

Object.getPrototypeOf(dog) === animal; // true

Object.getPrototypeOf(animal) === Object.prototype; // true

Object.getPrototypeOf(Object.prototype) === null; // true

console.log(dog.prototype);
*/
///////////
//closure
/*
function privateMessage() {
  let xxx =
    'This is a private message, please dont say this, here you can the secre of life';
  function callPrivateMessage(name) {
    let message = `${name}, ${xxx}`;
    return message;
  }

  return callPrivateMessage;
}

let magicMessage = privateMessage();
console.log(magicMessage('sebastian'));
*/
/////////////////////// Array Tricks
/*
const arr = [...Array(100).keys()];

// Get a Random Element
const random = arr[Math.floor(Math.random() * arr.length)];

console.log(random);

let promise = new Promise((resolve, rejecc) => {
  const time = 3;
  setTimeout(() => {
    resolve('Succes promise');
  }, time * 1000);
});

class Dragon {
  constructor(age, power, tipe) {
    this.age = age;
    this.power = power;
    this.tipe = tipe;
  }
}

const charizard = new Dragon(3224, 'Llamarada', undefined);
console.log(charizard.age);
*/

///////////////
////////🥣 Algorithms

// const arr = Array(5)
//   .fill('')
//   .map((elem, index) => {
//     return index + 1;
//   });

// const sumArray = function (array) {
//   let sum = array.reduce((acc, currentV) => {
//     return acc + currentV;
//   }, 0);

//   console.log(sum);
// };

// const allway = function (arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }

//   return sum;
// };

// console.log(allway(arr));

// sumArray(arr);
// console.log(arr);

//I am an odd number. Take away one letter and I become even. What number am I?
/*
let letters = 'qwertyuiopasdfghjklzxcvbnm'.toLocaleUpperCase();
const arrLetters = [...letters];
let number = [4, 6, 7, 11].filter(num => num % 2 != 0);
const hexToDecimal = hex => parseInt(hex, 16);

arrLetters.forEach(letter => {
  let number1 = number[0] + letter;
  let number2 = number[1] + letter;

  let event1 =
    hexToDecimal(number2) % 2 == 0
      ? hexToDecimal(number2)
      : 'el 11 no es tu numero magico';

  console.log(event1);
});

// console.log(arrLetters);
*/
function search(arr, target, start = 0, end = arr.length - 1) {
  console.log(start, end);

  if (start > end) {
    console.log('Not found!');
    return -1;
  }

  const middle = Math.floor((start + end) / 2);
  console.log(middle);
  if (arr[middle] === target) {
    console.log(`${target} Found at index ${middle}`);
    return middle;
  }

  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return search(arr, target, middle + 1, end);
  }
}

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
console.log(search(arr, 'b'));
