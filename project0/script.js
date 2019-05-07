const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0;
let uncheckedCount = 0;

function newTodo() {
  const todo = prompt('Enter todo');
  console.log(todo);
  addTodo(todo);
}

function addTodo(todo) {
  uncheckedCount++;
  itemCount++;

  const li = document.createElement('li');
  li.setAttribute('class', classNames.TODO_ITEM);

  const div = document.createElement('div');
  div.setAttribute('class', classNames.TODO_TEXT);
  div.textContent = todo;
  li.appendChild(div);

  const input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  input.setAttribute('class', classNames.TODO_CHECKBOX)
  input.addEventListener('click', function (event) {
    if (event.target.checked) {
      uncheckedCount--;
      renderCounters();
    }
    else {
      uncheckedCount++;
      renderCounters();
    }
  });
  li.appendChild(input);

  const button = document.createElement('button')
  button.setAttribute('class', classNames.TODO_DELETE)
  button.setAttribute('title', 'delete')
  button.textContent = 'delete';
  button.addEventListener('click', function (event) {
    const confirmation = confirm('Delete Todo?');
    if (confirmation) {
      if (!li.childNodes[1].checked) {
        uncheckedCount--;
      }
      li.parentNode.removeChild(li);
      itemCount--;
      renderCounters();
    }
  });
  li.appendChild(button);

  list.appendChild(li);
  renderCounters();
}

function renderCounters() {
  uncheckedCountSpan.innerHTML = uncheckedCount;
  itemCountSpan.innerHTML = itemCount;
}

