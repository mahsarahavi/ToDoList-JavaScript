const addTask = document.getElementById("todo-add");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTasktoList(task));
});

addTask.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText !== ''){
        addTasktoList(taskText);
        saveTask(taskText);
        todoInput.value = '';
    }
});

function addTasktoList(taskText){
    const list = document.createElement('li')
    list.textContent = taskText;    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        list.remove();
        removeTask(taskText);
    });
    list.appendChild(deleteButton);
    todoList.appendChild(list);
}

function saveTask(taskText){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskText){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}