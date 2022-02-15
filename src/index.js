import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

const todoHTML = document.querySelector('.todo_list');

const todoTasks = [
  {
    desctiption: 'string',
    completed: true,
    index: 1,
  },
  {
    desctiption: 'string',
    completed: true,
    index: 2,
  },
  {
    desctiption: 'string',
    completed: true,
    index: 3,
  },
];

todoTasks.forEach((task, i) => {
  task.index = i + 1;
  todoHTML.innerHTML += `<article class="list_item">
                          <div class="list_content">  
                            <input class="checkbox" type="checkbox" id="${task.index}" name="${task.index}" />
                              <label class="todo_text" for="${task.index}"> ${task.desctiption} index is ${task.index}</label><br />
                            </div>
                              <i class="fa-solid fa-ellipsis-vertical"></i>
                          </article>
                          <hr />`;
});
