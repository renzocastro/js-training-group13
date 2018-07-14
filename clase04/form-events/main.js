let txtNombre;
let formDemo;
let isValidationReady = false;

const onClickBtn = event => {
  console.log('click:', txtNombre.value);
};

const onSubmitFormDemo = event => {
  console.log('submit', formDemo);

  isValidationReady = true;

  event.preventDefault();
};

const onFocusNombre = event => {
  console.log('focus');

  txtNombre.classList.remove('error');
};

const onBlurNombre = event => {
  console.log('blur');

  if (isValidationReady) {
    if (txtNombre.value === '') {
      txtNombre.classList.add('error');
    }
  }
};

const init = () => {
  txtNombre = document.getElementById('txtNombre');
  txtNombre.addEventListener('focus', onFocusNombre);
  txtNombre.addEventListener('blur', onBlurNombre);

  formDemo = document.getElementById('formDemo');
  formDemo.addEventListener('submit', onSubmitFormDemo);

  const btn = document.getElementById('btnMostrar');
  btn.addEventListener('click', onClickBtn);

  document.getElementById('btnMostrar').addEventListener('click', onClickBtn);
};

document.addEventListener('DOMContentLoaded', init);
