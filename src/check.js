import { setLocalStore } from './functionality.js';

const isCompleted = (complete, input, i, todoList) => {
  if (complete) {
    todoList.todoTasks[i].completed = false;
    input.style.textDecoration = 'none';
    setLocalStore(todoList.todoTasks);
  } else {
    todoList.todoTasks[i].completed = true;
    input.style.textDecoration = 'line-through';
    setLocalStore(todoList.todoTasks);
  }
};

export default isCompleted;
