let txtNombre;

const onClickBtn = event => {
  console.log('click:', txtNombre.value);
};

const onSubmitFormDemo = event => {
  console.log('submit');

  event.preventDefault();
};

const init = () => {
  txtNombre = document.getElementById('txtNombre');

  const formDemo = document.getElementById('formDemo');
  formDemo.addEventListener('submit', onSubmitFormDemo);

  const btn = document.getElementById('btnMostrar');
  btn.addEventListener('click', onClickBtn);

  document.getElementById('btnMostrar').addEventListener('click', onClickBtn);
};

document.addEventListener('DOMContentLoaded', init);
