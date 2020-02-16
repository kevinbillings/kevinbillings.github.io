import { Task } from './task.js';

let tasks = [];

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    loadTasks();
}

window.addTask = addTask;

function addTask() {
    const newTask = new Task(
        document.getElementById('content').value
    );

    tasks.push(newTask);

    saveTasks(tasks);

    loadTasks();

    clearFields();
}

function clearFields() {
    document.querySelector('#content').value = '';
}

function clearTasks() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function loadTasks() {
    clearTasks();

    tasks.forEach(
        (task) => {
            let tr = document.createElement('tr');
            let tdContent = document.createElement('td');
            let tdDone = document.createElement('td');
            let tdEdit = document.createElement('td');

            tdContent.textContent = task.content;

            let aDelete = document.createElement('a')
            aDelete.addEventListener('click', deleteTask.bind(null, task), false);
            aDelete.textContent = 'Delete';

            tdEdit.appendChild(aDelete);

            tr.appendChild(tdContent);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);
        }
       
    );
}

function saveTasks(task) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(task) {
    let pos = tasks.indexOf(task);
    
    if (pos < 0) {
        return;
    }

    tasks.splice(pos, 1);

    saveTasks(tasks);

    loadTasks();
}