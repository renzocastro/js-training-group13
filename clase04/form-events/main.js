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

const validaSelect = (element) => {
  if (estaListaLaValidacion) {
    if (element.selectedIndex <= 0) {
      element.classList.add('error');
    } else {
      element.classList.remove('error');
    }
  }
};

const onSubmitFormDemo = event => {
  console.log('submit', formDemo);

  estaListaLaValidacion = true;

  let elements;

  elements = document.querySelectorAll('#formDemo input[type=text]');

  Array.prototype.forEach.call(elements, element => {
    validaInputText(element);
  });


  elements = document.querySelectorAll('#formDemo select');

  Array.prototype.forEach.call(elements, element => {
    validaSelect(element);
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

const onChangeSexo = event => {
  const element = event.currentTarget;

  validaSelect(element);
};

const init = () => {
  let elements;

  elements = document.querySelectorAll('#formDemo input[type=text]');

  Array.prototype.forEach.call(elements, element => {
    element.addEventListener('focus', onFocusNombre);
    element.addEventListener('blur', onBlurNombre);
  });

  // const selectSexo = document.getElementById('selectSexo');
  // selectSexo.addEventListener('change', onChangeSexo);

  elements = document.querySelectorAll('#formDemo select');

  Array.prototype.forEach.call(elements, element => {
    element.addEventListener('change', onChangeSexo);
  });


  formDemo = document.getElementById('formDemo');
  formDemo.addEventListener('submit', onSubmitFormDemo);

  const btn = document.getElementById('btnMostrar');
  btn.addEventListener('click', onClickBtn);

  document.getElementById('btnMostrar').addEventListener('click', onClickBtn);
};

document.addEventListener('DOMContentLoaded', init);
