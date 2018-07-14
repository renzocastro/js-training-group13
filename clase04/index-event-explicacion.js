// document.readyState = "loading" | "interactive" | "complete"

console.log('Archivo cargado', {readyState: document.readyState});

function onDOMContentLoaded(event) {
  console.log({readyState: document.readyState});

  // Propiedades importante de Event
  console.log({
    type: event.type,
    currentTarget: event.currentTarget,
    target: event.target
  });
}

function onWindowLoad(event) {
  console.log({readyState: document.readyState});
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
window.addEventListener('load', onWindowLoad);
