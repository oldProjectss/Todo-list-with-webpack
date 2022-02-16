import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import { addTask, removeTask, editTask } from './functionality.js';

const todoHTML = document.querySelector('.todo_list');
const todoInput = document.querySelector('.todo_input');

export const todoList = {
  todoTasks: [],
};

export function displayTasks() {
  todoHTML.innerHTML = '';
  todoList.todoTasks.innerHTML = '';
  todoList.todoTasks.forEach((task, i) => {
    task.index = i + 1;

    const listItem = document.createElement('article');
    listItem.classList.add('list_item');
    const listContent = document.createElement('div');
    listContent.classList.add('list_content');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', task.index);
    checkbox.setAttribute('name', task.index);
    const input = document.createElement('input');
    input.classList.add('todo_task');
    input.setAttribute('type', 'text');
    input.setAttribute('id', task.index);
    input.setAttribute('name', task.index);
    input.setAttribute('value', task.desctiption);
    input.readOnly = true;
    const breakLine = document.createElement('br');
    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    const editBtn = document.createElement('i');
    editBtn.classList.add('fas', 'fa-ellipsis-vertical');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    const removeBtn = document.createElement('i');
    removeBtn.classList.add('fas', 'fa-trash');
    const hr = document.createElement('hr');

    editButton.append(editBtn);
    removeButton.append(removeBtn);
    listContent.append(checkbox, input, breakLine);
    listItem.append(listContent, removeButton, editButton);
    todoHTML.append(listItem, hr);

    editButton.addEventListener('click', () => {
      editTask(input, listItem, i, todoList);
      if (input.readOnly) {
        displayTasks();
      }
    });

    removeButton.addEventListener('click', () => {
      removeTask(i, todoList);
      displayTasks();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    todoList.todoTasks = JSON.parse(localStorage.getItem('tasks'));
    displayTasks();
  } else if (todoList.todoTasks) {
    displayTasks();
  }
});

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (todoInput.value) {
      addTask(todoInput.value, false, todoList.todoTasks[todoList.todoTasks.length - 1], todoList);
      displayTasks();

      todoInput.value = '';
    }
  }
});
