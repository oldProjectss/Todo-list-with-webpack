export const setLocalStore = (todoTasks) => {
  localStorage.setItem('tasks', JSON.stringify(todoTasks));
};

export const addTask = (desctiption, completed = false, index, todoList) => {
  const task = {
    desctiption,
    completed,
    index,
  };
  todoList.todoTasks.push(task);
  setLocalStore(todoList.todoTasks);
};

export const removeTask = (i, todoList) => {
  todoList.todoTasks.splice(i, 1);
  todoList.todoTasks.forEach((task) => {
    task.index = i + 1;
  });
  setLocalStore(todoList.todoTasks);
};

export const editTask = (input, listItem, i, todoList) => {
  if (input.readOnly) {
    input.readOnly = false;
    listItem.style.backgroundColor = 'rgb(182, 166, 166)';
  } else {
    input.readOnly = true;
    todoList.todoTasks[i].desctiption = input.value;
    setLocalStore(todoList.todoTasks);
  }
};
