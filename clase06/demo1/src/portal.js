/*
Usuario
- nombre
- email
- password

Portal
- agregarUsuario
- totalUsuarios (solo lectura)
*/

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;

    this.sueldoEstandar = 2500;
  }

  despedir() {
    console.log("No puede despedir");
  }

  verSueldo() {
    return this.sueldoEstandar;
  }

  cargo() {
    console.log(this.nombre, "liderar equipos");
  }
}

class Administrador extends Usuario {
  despedir() {
    console.log("Sí puede despedir!");
  }

  verSueldo() {
    return super.verSueldo() * 1.5;
  }

  cargo() {
    super.cargo();
    console.log(this.nombre, "administrar");
  }
}

class Portal {
  constructor() {
    this._totalUsuarios = 0;
    this._usuarios = [];
    this._usuariosDict = {};
  }

  agregarUsuario(usuario) {
    this._usuarios.push(usuario);
    this._usuariosDict[usuario.email] = this._usuarios.length - 1;

    this._totalUsuarios = this._usuarios.length;

    usuario.cargo();
  }

  removerUsuario(usuario) {
    const indice = this._usuariosDict[usuario.email];
    this._usuarios.splice(indice, 1);
    delete this._usuariosDict[usuario.email];

    this._totalUsuarios = this._usuarios.length;
  }

  get totalUsuarios() {
    return this._totalUsuarios;
  }
}

var user1 = new Usuario("Renzo", "renzo@gmail.com", "xxx123");
var user2 = new Usuario("Diana", "diana@hotmail.com", "567890");
var user3 = new Administrador("Carlos", "carlos@zmail.com", "qwerty");

var miPortal = new Portal();
miPortal.agregarUsuario(user1);
miPortal.agregarUsuario(user2);
miPortal.agregarUsuario(user3);

console.log(miPortal.totalUsuarios);
