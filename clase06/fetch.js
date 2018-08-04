/*
const xhr = new XMLHttpRequest();

xhr.onload = function(evt) {
  console.log(JSON.parse(xhr.response).results.length);
};

xhr.open("GET", url);
xhr.send();

*/

class Marathon {
  getData() {
    const url =
      "https://monkeyfit-api-prod.herokuapp.com/api/v1.1/sports/?format=json";

    return fetch(url).then(response => response.json());
  }
}

var tienda = new Marathon();
tienda.getData().then(response => {
  console.log(response.results);
});

// TAREA: Listar el resultado de la consulta en un HTML
// Usar clase Sport, en ella colocar cada uno de los deportes indicados en el API.
// dentro de la clase Sport crear el elemento HTML (div).
// revisar carpeta "test1"
