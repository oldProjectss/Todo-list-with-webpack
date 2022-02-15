import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

const todoHTML = document.querySelector('.todo_list');

const todoTasks = [
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
  todoHTML.innerHTML += `<article class="list_item">
                          <div class="list_content">  
                            <input class="checkbox" type="checkbox" id="${task.index}" name="${task.index}" />
                              <label class="todo_text" for="${task.index}"> ${task.desctiption}</label><br />
                            </div>
                              <i class="fa-solid fa-ellipsis-vertical"></i>
                          </article>
                          <hr />`;
});
