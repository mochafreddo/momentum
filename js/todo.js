// Get the HTML elements and define the local storage key
const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';

// Initialize the to-do list array
let toDos = [];

// Save the to-do list to local storage
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Remove a to-do item from the listand from local storage
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// Add a new to-do item to the list
function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// Handle submission of the to-do form
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value.trim();
  if (newToDo === '') {
    return;
  }
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

// Add a submit event listener to the to-do form
toDoForm.addEventListener('submit', handleToDoSubmit);

// Load the to-do list from local storage if it exists
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
