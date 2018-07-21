const _ = require('lodash');
const calculadora = require('./utils/calculadora');

console.log('ok!');


const a1 = ['a','b','c'];
const a2 = ['x','y','z'];

console.log( _.concat(a1, a2) ); // // [ 'a', 'b', 'c', 'x', 'y', 'z' ]


console.log( calculadora.sumar(5, 3) ); // 8


