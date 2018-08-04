class Punto {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Punto (x: ${this.x}, y: ${this.y})`;
    // return 'Punto (' + this.x + ', ' + this.y + ')';
  }
}

const miPunto = new Punto(2, 3);
console.log(miPunto.toString());

//

class ColorPunto extends Punto {
  constructor(x = 0, y = 0, color = "black") {
    super(x, y);
    this.color = color;
  }

  toString() {
    return `ColorPunto (x: ${this.x}, y: ${this.y}, color: ${this.color})`;
  }
}

const miColorPunto = new ColorPunto(8, 9, "blue");
console.log(miColorPunto.toString());
console.log(miColorPunto.x);
console.log(miColorPunto.y);
console.log(miColorPunto.color);
