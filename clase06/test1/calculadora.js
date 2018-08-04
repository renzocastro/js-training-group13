console.log("Hola mundo");

// =>
// sumar
// restar
// multiplicar
// dividir

/*
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
*/

class Calculadora {
  constructor() {
    console.log("Calculadora");
  }

  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    return a / b;
  }
}

const miCalculadora = new Calculadora();
var suma = miCalculadora.sumar(6, 3);
var resta = miCalculadora.restar(6, 3);
var multiplicacion = miCalculadora.multiplicar(6, 3);
var division = miCalculadora.dividir(6, 3);

console.log({ suma, resta, multiplicacion, division });
