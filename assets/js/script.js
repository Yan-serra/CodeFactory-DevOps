let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(filter = '') {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    taskList.innerHTML = '<p>Nenhuma tarefa encontrada.</p>';
    return;
  }

  filtered.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = 'task ' + (task.status === 'Concluída' ? 'done' : '');

    div.innerHTML = `
      <strong>${task.title}</strong><br>
      ${task.description}<br>
      <small>${task.date} | ${task.priority} | ${task.status}</small>
      <div class="task-actions">
        <button onclick="toggleTask(${index})">Concluir</button>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Excluir</button>
      </div>
    `;

    taskList.appendChild(div);
  });
}

function addTask() {
  const title = document.getElementById('titleInput').value.trim();
  const desc = document.getElementById('descInput').value.trim();
  const priority = document.getElementById('priorityInput').value;

  if (!title || !desc) {
    alert('Preencha todos os campos!');
    return;
  }

  const newTask = {
    title,
    description: desc,
    date: new Date().toLocaleString(),
    priority,
    status: 'Pendente'
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  document.getElementById('titleInput').value = '';
  document.getElementById('descInput').value = '';
}

function toggleTask(index) {
  tasks[index].status =
    tasks[index].status === 'Pendente' ? 'Concluída' : 'Pendente';

  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newTitle = prompt('Novo título:', tasks[index].title);
  const newDesc = prompt('Nova descrição:', tasks[index].description);

  if (newTitle && newDesc) {
    tasks[index].title = newTitle;
    tasks[index].description = newDesc;

    saveTasks();
    renderTasks();
  }
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  renderTasks(e.target.value);
});

renderTasks();