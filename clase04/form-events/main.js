let formDemo;
let estaListaLaValidacion = false;

const onClickBtn = event => {
  console.log('click:');
};

const validaInputText = (element) => {
  if (estaListaLaValidacion) {
    if (element.value === '') {
      element.classList.add('error');
    }
  }
};

const onSubmitFormDemo = event => {
  console.log('submit', formDemo);

  estaListaLaValidacion = true;

  const elements = document.querySelectorAll('#formDemo input[type=text]');

  Array.prototype.forEach.call(elements, element => {
    validaInputText(element);
  });

  event.preventDefault();
};

const onFocusNombre = event => {
  console.log('focus');

  const element = event.currentTarget;

  element.classList.remove('error');
};

const onBlurNombre = event => {
  console.log('blur');

  const element = event.currentTarget;

  validaInputText(element);
};

const init = () => {
  const elements = document.querySelectorAll('#formDemo input[type=text]');

  Array.prototype.forEach.call(elements, element => {
    element.addEventListener('focus', onFocusNombre);
    element.addEventListener('blur', onBlurNombre);
  });



  formDemo = document.getElementById('formDemo');
  formDemo.addEventListener('submit', onSubmitFormDemo);

  const btn = document.getElementById('btnMostrar');
  btn.addEventListener('click', onClickBtn);

  document.getElementById('btnMostrar').addEventListener('click', onClickBtn);
};

document.addEventListener('DOMContentLoaded', init);
