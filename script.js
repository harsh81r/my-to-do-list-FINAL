const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// EventListeners

addBtn.addEventListener('click', () => {
    if (taskInput.value === '') {
        alert("Task box is empty! Please write something.");
    } else {
        const taskText = taskInput.value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="done-btn">Done</button>
            <button class="snooze-btn">Snooze</button>
            <button class="dismiss-btn">Dismiss</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener('click', (event) => {
    const target = event.target;
    const listItem = target.parentElement;
    if (target.classList.contains("delete-btn")) {
        taskList.removeChild(listItem);
    } else if (target.classList.contains("dismiss-btn")) {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "gray";
    } else if (target.classList.contains("snooze-btn")) {
        // Implement snooze functionality, for example, move the task to the bottom of the list
        taskList.appendChild(listItem);
    } else if (target.classList.contains("done-btn")) {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "green";
    }
});
