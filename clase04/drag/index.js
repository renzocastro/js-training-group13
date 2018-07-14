let miCirculo;
let mouseStart = { x: 0, y: 0 };
let miCirculoStart = { x: 0, y: 0 };

const onMousemove = event => {
  const miCirculoRect = miCirculo.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  console.log(miCirculoRect, Object.assign({},
    { x: miCirculoRect.x, y: miCirculoRect.y },
    { mouseX, mouseY },
    { startX: mouseStart.x, startY: mouseStart.y }
  ));

  const x = miCirculoStart.x + mouseX - mouseStart.x;
  const y = miCirculoStart.y + mouseY - mouseStart.y;

  miCirculo.style.top = `${y}px`;
  miCirculo.style.left = `${x}px`;
};

const onMousedown = event => {
  // const miCirculoStyle = getComputedStyle(miCirculo);
  // const miCirculoX = parseInt(miCirculoStyle.left);
  // const miCirculoY = parseInt(miCirculoStyle.top);

  const miCirculoRect = miCirculo.getBoundingClientRect();
  miCirculoStart.x = miCirculoRect.x;
  miCirculoStart.y = miCirculoRect.y;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  mouseStart.x = mouseX;
  mouseStart.y = mouseY;

  console.log('down', Object.assign(miCirculoRect, { mouseX, mouseY }));


  window.addEventListener('mousemove', onMousemove);
  window.addEventListener('mouseup', onMouseup);
}

const onMouseup = event => {
  console.log('up');
  window.removeEventListener('mousemove', onMousemove);
  window.removeEventListener('mouseup', onMouseup);
}

const init = () => {
  miCirculo = document.getElementById('miCirculo');
  miCirculo.addEventListener('mousedown', onMousedown);

  console.log('listo!', miCirculo);
};

document.addEventListener('DOMContentLoaded', init);




