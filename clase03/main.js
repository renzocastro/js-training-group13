console.log('JS ok!');


const qsContenedor2 = document.querySelector('#contenedor2');
const qsaHijos = document.querySelectorAll('#contenedor1 .hijo');

console.log(qsContenedor2);
console.log(qsaHijos);


const contenedor1 = document.getElementById('contenedor1');
const hijos = document.getElementsByClassName('hijo');

console.log(contenedor1);
console.log(hijos);




function toArray(elements) {
  return Array.prototype.slice.call(elements, 0);
}

function qsa(selector) {
  return toArray(document.querySelectorAll(selector));
}

const hijos2 = qsa('.hijo');
// const hijos2 = $('.hijo'); // jQuery

