let todos = []

async function loadToDos() {
    const url = 'http://localhost:3000/todos';
    let resp = await fetch(url);
    todos = await resp.json();
    render()
}

function addToDo() {
    let toDo_Text = todoinput.value;
    todos.push({ "title": toDo_Text });

    todoinput.value = '';
    addToServer(toDo_Text);
    render()
}

function addToServer(toDo_Text) {
    fetch('http://127.0.0.1:3000/todos', {
        body: JSON.stringify({ "title": toDo_Text }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
    });

}

function render() {
    todolist.innerHTML = '';
    todos.forEach(todo => todolist.innerHTML += `<li class="toDo">${todo.title}</li>`);
}