import { NodoColorPunto } from "./puntos";

const lienzo = document.getElementById("lienzo");

function pintar(p) {
  lienzo.appendChild(p.el);
}

var p1 = new NodoColorPunto(5, 5, "red");
pintar(p1);

window.pintar = pintar;
