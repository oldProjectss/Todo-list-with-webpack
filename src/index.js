import './style.css';

const todoHTML = document.querySelector('.todo_list');

let todoTasks = [
  {
    desctiption: 'string',
    completed: 'bool',
    index: 'number',
  },
  {
    desctiption: 'string',
    completed: 'bool',
    index: 'number',
  },
  {
    desctiption: 'string',
    completed: 'bool',
    index: 'number',
  },
];

todoTasks.forEach((task, i) => {
  task.index = i;
  todoHTML.innerHTML += `${task.desctiption} <br> ${task.completed} <br> ${task.index}`;
});
