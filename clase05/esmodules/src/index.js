// const _ = require('lodash');
// const calculadora = require('./utils/calculadora');

// import { concat } from 'lodash';
import { sumar } from './utils/calculadora';
import { juntar } from './utils/texto';

console.log('ok!');


const a1 = ['a','b','c'];
const a2 = ['x','y','z'];

//console.log( concat(a1, a2) ); // // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

console.log( sumar(5, 3) ); // 8
console.log( juntar("hola", "mundo") ); // 8




// Promise
// .resolve
// .reject


let p = new Promise( (resolve, reject) => {

  setTimeout(() => { resolve('hola') }, 10000);

} );

p.then( (message) => {
  console.log('pasaron 10 seg', message);
} );





function sumarPromise(a, b) {
  const ejecutor = (resolve, reject) => {
    setTimeout(() => { resolve(a + b) }, 10000);
  };

  const p = new Promise(ejecutor);

  return p;
}

sumarPromise(3, 4).then( (resultado) => { console.log(resultado) } );


function restarPromise(a, b) {
  const ejecutor = (resolve, reject) => {
    setTimeout(() => { resolve(a - b) }, 3000);
  };

  const p = new Promise(ejecutor);

  return p;
}

restarPromise(5, 4).then( (resultado) => { console.log(resultado) } );


