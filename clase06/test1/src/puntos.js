export class Punto {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Punto (x: ${this.x}, y: ${this.y})`;
    // return 'Punto (' + this.x + ', ' + this.y + ')';
  }
}

// const miPunto = new Punto(2, 3);
// console.log(miPunto.toString());

//

export class ColorPunto extends Punto {
  constructor(x = 0, y = 0, color = "black") {
    super(x, y);
    this._color = color;
  }

  toString() {
    return `ColorPunto (x: ${this.x}, y: ${this.y}, color: ${this.color})`;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }
}

// const miColorPunto = new ColorPunto(8, 9, "blue");
// console.log(miColorPunto.toString());
// console.log(miColorPunto.x);
// console.log(miColorPunto.y);
// console.log(miColorPunto.color);

export class NodoColorPunto extends ColorPunto {
  constructor(x = 0, y = 0, color = "black") {
    super(x, y, color);

    this._intervalId = 0;

    this.el = document.createElement("div");
    this.el.className = "colorPunto";

    this.el.style.top = this.y + "px";
    this.el.style.left = this.x + "px";
    this.el.style.backgroundColor = this.color;

    //let scope = this;

    //let color2 = this.color;
    //
    //this.el.addEventListener("click", function() {
    //  console.log(scope.color);
    //  console.log(color2);
    //});

    //this.el.addEventListener("click", function() {
    //  console.log(color);
    //});

    this.el.addEventListener("click", () => {
      console.log(this.color);
    });

    this.play();
  }

  mover() {
    this.x += 1;
    // this.y += 0.5;

    requestAnimationFrame(() => {
      this.el.style.top = this.y + "px";
      this.el.style.left = this.x + "px";
    });

    if (this.x > 300) {
      this.stop();
    }
  }

  play() {
    this._intervalId = setInterval(() => {
      this.mover();
    }, 10);
  }

  stop() {
    clearInterval(this._intervalId);
  }
}
