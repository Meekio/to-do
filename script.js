const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
    if (inputBox.value === '')
        {
        alert('enter a task!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // inputBox.value = '';

        // const span = document.createElement('span');
        // span.innerHTML = '\u00D7';
        // li.appendChild(span);
    }
    saveData();
}