let miCirculo;

const onMousemoveMiCirculo = event => {
  console.log('mouseMove');
};

const init = () => {  miCirculo = document.getElementById('miCirculo');
  miCirculo.addEventListener('mousemove', onMousemoveMiCirculo);

  console.log('listo!', miCirculo);
};

document.addEventListener('DOMContentLoaded', init);




