'use strict';

const myArray1 = new MyArray(1,undefined,1,new MyArray(2,new MyArray(3,new MyArray(4,4,4),3,3),2,2),1,1);

// const myArray2 = myArray1.flat(2);
// console.log(myArray2);



const mySymbol1 = Symbol('Property');
const mySymbol2 = Symbol('Метка только для вас');

const object = {
  login:'qwerty',
  mySymbol1: 'asda',
  [mySymbol1]:123,
};

delete object[mySymbol1];


const arr = [1,2,3,4,5];
for (const iterator of arr) {
  console.log(iterator)
}

//console.log(...arr)
const myArray2 = new MyArray(10,20,30)
console.log(...myArray2)

for (const iterator of myArray2) {
  console.log(iterator)
}

