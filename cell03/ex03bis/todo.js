const form = document.getElementById("form");
const todoInput = document.getElementById("input");
const todosList = document.getElementById("ft_list");

function addToDo(todo) {
	let todoText = todoInput.value;
	if(todo) {
		todoText = todo.text;
	}
	if(todoText) {
		const todoEl = document.createElement('div');
		todoEl.className = "list";
		if(todo && todo.completed) {
			todoEl.classList.add('completed');
		}
		todoEl.innerText = todoText;
		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
			updateLocalStorage();
		});
		todoEl.addEventListener('contextmenu', (eve) => {
			eve.preventDefault();
			todoEl.remove();
			updateLocalStorage();
		});
		todosList.prepend(todoEl);
		todoInput.value = '';
		updateLocalStorage();
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	todoInput.className = "toDoInput";
	if (todosList.hasChildNodes) {
		todoInput.className = "toDoInputOpen";
	}
	addToDo();
});

function updateLocalStorage() {
	const todosEl = document.querySelectorAll('.list');
	const todos = [];
	todosEl.forEach(todoEl => {
		todos.unshift({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed')
		});
	});
	localStorage.setItem('todos', JSON.stringify(todos));
}

const todosSaves = JSON.parse(localStorage.getItem('todos'));

if(todosSaves) {
	todosSaves.forEach(todo => addToDo(todo));
}
