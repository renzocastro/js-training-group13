console.log('JS ok!');


const qsContenedor2 = document.querySelector('#contenedor2');
const qsaHijos = document.querySelectorAll('#contenedor1 .hijo');
const qsaDivs = document.querySelectorAll('div');

console.log(qsContenedor2);
console.log(qsaHijos);


const contenedor1 = document.getElementById('contenedor1');
const hijos = document.getElementsByClassName('hijo');
const divs = document.getElementsByTagName('div');

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



// const hijos22 = qsa('#contenedor2 .hijo');
const contenedor = document.getElementById('contenedor2');
const hijos22 = contenedor.querySelectorAll('.hijo');

hijos22.forEach(element => {
  element.style.color = 'red';
});


// const contenedor = document.querySelector('#contenedor');
// const hijoPera = contenedor.querySelector('.pera');
// const hijos = contenedor.querySelectorAll('.hijo');

/* area51.pe
const menu1 = document.querySelector('.menu');
const menu2 = document.querySelectorAll('.menu')[0];
const menu3 = document.getElementsByClassName('menu')[0];

const links1 = menu1.querySelectorAll('a');
const links2 = menu1.getElementsByTagName('a');
const links3 = document.querySelectorAll('.menu a');

const aLinks = Array.prototype.slice.call(links1, 0);

aLinks.forEach(el => {
  el.style.color = 'red';
});
*/

/*

element.setAttribute('contenteditable', true);
element.getAttribute('contenteditable'); // "true"

element.innerHTML = 'hola <b>Are51</b>';
element.textContent = 'hola';

const nombres = ['Renzo', 'Pedro', 'Juan'];
const nombresLI = nombres.map(nombre => '<li>' + nombre + '</li>');
const html = nombresLI.join('');

*/

/* EJERCICIO
<div id="demo"></div>

1. crear <ul> dentro de #demo usando innerHTML
2. crear un array usando 5 nombres
3. usar el array para crear <li> dentro de <ul>.
   Ejm:
   <div id="demo">
     <ul>
	   <li>Renzo</li>
	   <li>Carlos</li>
	   <li>Diana</li>
	   <li>Erika</li>
	   <li>Gerald</li>
	 </ul>
   </div>
*/

// 1
const demo = document.getElementById('demo');
demo.innerHTML = '<ul></ul>';

// 2
const nombres = ['a', 'b', 'c', 'd', 'e'];

// 3
// const html = nombres.map(t => '<li>' + t + '</li>').join('');
const html = '<li>' + nombres.join('</li><li>') + '</li>';
// const ul = demo.getElementsByTagName('ul')[0];
const ul = demo.querySelector('ul');
ul.innerHTML = html;

// Tarea
// ajaxGet(url, data, success, dataType) {
const ajaxGet = function () {
  console.log(arguments);

  // return [url, { search: 'pedro', llave: 123456 }, respuesta];
}

const url = '/api';
const respuesta = data => {

};

ajaxGet(url, respuesta);
ajaxGet(url, { search: 'pedro' }, respuesta);
