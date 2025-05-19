const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); //creates ul
function addTask() {
    if (inputBox.value === '')
        {
        alert('enter a task!');
    }
    else {
        let li = document.createElement('li'); //creates li
        li.innerHTML = inputBox.value; //adds the value of input box to li
        listContainer.appendChild(li); //adds li to ul

        let span = document.createElement('span'); //creates span
        span.innerHTML = '\u00D7'; //adds x to span
        li.appendChild(span); //adds span to li

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();