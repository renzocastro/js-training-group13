
const tplTodolistItem = document.getElementById('tpl-todolist-item').innerHTML;

function createTodoListItemHTML(id, task) {
  return tplTodolistItem
    .replace(/{{id}}/g, id)
    .replace(/{{task}}/g, task);
}


const txtTask = document.getElementById('txt-task');
const btnAdd = document.getElementById('btn-add');
const taskList = document.querySelector('.todolist__list');
let taskCount = 0;


const addTask = task => {
  taskCount++;

  const taskItemElement = document.createElement('div');
  taskItemElement.innerHTML = createTodoListItemHTML(taskCount, task);

  // const btnTaskRemove = taskItemElement.querySelector('.todolist__item__remove');
  // btnTaskRemove.addEventListener('click', onClickBtnTaskRemove);

  taskList.appendChild(taskItemElement);
};

const removeTaskFromButton = buttonNode => {
  // const item = btn.parentElement();
  const item = buttonNode.closest('.todolist__item');

  if (item) {
    item.remove();
  }
};

const onClickBtnTaskRemove = event => {
  event.preventDefault();

  const btn = event.currentTarget;
  removeTaskFromButton(btn);
};

const onClickTaskList = event => {
  // console.log({ currentTarget: event.currentTarget, target: event.target });
  if (event.target && event.target.classList.contains('todolist__item__remove')) {
    const btn = event.target;
    removeTaskFromButton(btn);
  }
};

const onClickBtnAdd = event => {
  event.preventDefault();

  addTask(txtTask.value.trim());
  txtTask.value = '';
  txtTask.focus();
};

const onKeypressTxtTask = event => {
  if (event.charCode === 13) {
    btnAdd.dispatchEvent(new Event('click'));
  }
};

btnAdd.addEventListener('click', onClickBtnAdd, false);
txtTask.addEventListener('keypress', onKeypressTxtTask, false);

taskList.addEventListener('click', onClickTaskList);



// Preload images

const imgLazyload = document.querySelectorAll('.lazyload');

const preload = (element) => {
  const img = document.createElement('img');

  img.addEventListener('load', event => {
    element.src = img.src;
    element.classList.add('loaded');
  });

  img.src = element.getAttribute('data-src');
};

Array.prototype.forEach.call(imgLazyload, preload);


