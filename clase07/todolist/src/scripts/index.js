
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


const addTask = (task) => {
  taskCount++;

  const taskItemElement = document.createElement('div');
  taskItemElement.innerHTML = createTodoListItemHTML(taskCount, task);

  const btnTaskRemove = taskItemElement.querySelector('.todolist__item__remove');
  btnTaskRemove.addEventListener('click', onClickBtnTaskRemove);

  taskList.appendChild(taskItemElement);
};

const onClickBtnTaskRemove = event => {
  event.preventDefault();

  const btn = event.currentTarget;
  // const item = btn.parentElement();
  const item = btn.closest('.todolist__item');
  item.remove();
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
