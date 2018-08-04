/*
Cursos

titulo: JavaScript
costo: 1000
tiempo: 48
maxAlumnos: 10
fechaInicio: 01/08/2018


Carrito Compras

- Varios cursos
- costoTotal: 5000

*/

class Curso {
  constructor(objCurso) {
    /*
    this.titulo = objCurso.titulo;
    this.costo = objCurso.costo;
    this.tiempo = objCurso.tiempo;
    this.maxAlumnos = objCurso.maxAlumnos;
    this.fechaInicio = objCurso.fechaInicio;
    */
    Object.keys(objCurso).forEach(propName => {
      this[propName] = objCurso[propName];
    });
  }
}

class CarritoCompras {
  constructor() {
    this.cursos = [];
    this._costoTotal = 0;
  }

  agregarCurso(curso) {
    this.cursos.push(curso);
    this._costoTotal += curso.costo;
  }

  get costoTotal() {
    return this._costoTotal;
  }
}

const js = new Curso({
  titulo: "javascript",
  costo: 1000
});

const fullstack = new Curso({
  titulo: "FullStack",
  costo: 1500
});

const carrito = new CarritoCompras();
carrito.agregarCurso(js);
carrito.agregarCurso(fullstack);

console.log(carrito.costoTotal);
