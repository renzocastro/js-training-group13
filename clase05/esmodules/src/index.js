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


function sumarPromise(a, b) {
  const ejecutor = (resolve, reject) => {
    setTimeout(() => { resolve(a + b) }, 10000);
  };

  const p = new Promise(ejecutor);

  return p;
}

function restarPromise(a, b) {
  const ejecutor = (resolve, reject) => {
    setTimeout(() => { resolve(a - b) }, 3000);
  };

  const p = new Promise(ejecutor);

  return p;
}



// Promise
// .resolve
// .reject
/*

let p = new Promise( (resolve, reject) => {

  setTimeout(() => { resolve('hola') }, 10000);

} );

p.then( (message) => {
  console.log('pasaron 10 seg', message);
} );







sumarPromise(3, 4).then( (resultado) => { console.log('sumar', resultado) } );




restarPromise(5, 4).then( (resultado) => { console.log('restar', resultado) } );

Promise.all( [
  sumarPromise(2,3),
  restarPromise(30,12)
]).then((resultados) => {
  console.log('resultados (ALL)', resultados);
});


restarPromise(8, 1).then((restaResultado) => {
  console.log('A: resta', restaResultado);

  sumarPromise(3, 3).then((sumaResultado) => {
    console.log('B: sumar', sumaResultado);
  })
});
*/

function dividirPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a / b) }, 2000);
  });
}

function multiplicarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a * b) }, 2000);
  });
}

function arregloPromise(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(arr.length);
      resolve(arr)
    }, 2000);
  });
}

async function init() {
  const dividirResultado = await dividirPromise(35, 5);
  console.log('dividirResultado', dividirResultado);

  const multiplicarResultado = await multiplicarPromise(5, 2);
  console.log('multiplicarResultado', multiplicarResultado);

  const arregloResultado = await arregloPromise(['area51', 'training', 'center']);
  console.log('arregloResultado', arregloResultado);
}

init();


