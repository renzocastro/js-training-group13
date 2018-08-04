console.log("Hola");

class Test {
  constructor(...p) {
    console.log(p);
    this.p = p;
  }

  revisar() {
    var l = this.p.length;

    for (let i = 0; i < l; ++i) {
      console.log(this.p[i]);
    }
  }

  *[Symbol.iterator]() {
    //
    yield "---> " + 1;
    yield "---> " + 3;
    yield "---> " + 7;
  }
}
const t = new Test("a", "b", "c");
// t.revisar();

for (let letra of t) {
  console.log(letra);
}
