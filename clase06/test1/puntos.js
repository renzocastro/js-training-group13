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

class NodoColorPunto extends ColorPunto {
  constructor(x = 0, y = 0, color = "black") {
    super(x, y, color);

    this.el = document.createElement("div");
    this.el.className = "colorPunto";

    this.el.style.top = this.y + "px";
    this.el.style.left = this.x + "px";
    this.el.style.backgroundColor = this.color;

    this.el.addEventListener("click", function() {
      console.log(color);
    });
  }
}
