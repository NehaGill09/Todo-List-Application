const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    li.appendChild(checkbox);
    li.appendChild(taskLabel);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    removeBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevents the li click event from triggering
      taskList.removeChild(li);
    });
  }
});
