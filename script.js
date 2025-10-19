const form = document.getElementById('todo-form');
if(todos.length === 0){
const empty = document.createElement('div');
empty.className = 'empty';
empty.textContent = 'No tasks yet. Add one above!';
list.appendChild(empty);
}


todos.forEach(todo => {
const li = document.createElement('li');
li.className = 'todo-item';


const left = document.createElement('div');
left.className = 'todo-left';


const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = todo.done;
checkbox.addEventListener('change', () => toggleDone(todo.id));


const span = document.createElement('span');
span.className = 'todo-text' + (todo.done ? ' completed' : '');
span.textContent = todo.text;


left.appendChild(checkbox);
left.appendChild(span);


const right = document.createElement('div');


const removeBtn = document.createElement('button');
removeBtn.className = 'icon-btn remove';
removeBtn.textContent = 'Remove';
removeBtn.addEventListener('click', () => removeTodo(todo.id));


right.appendChild(removeBtn);


li.appendChild(left);
li.appendChild(right);


list.appendChild(li);
});


countEl.textContent = todos.length;
save();
}


function addTodo(text){
const trimmed = text && text.trim();
if(!trimmed) return;
todos.push({id: Date.now(), text: trimmed, done: false});
input.value = '';
render();
}


function removeTodo(id){
todos = todos.filter(t => t.id !== id);
render();
}


function toggleDone(id){
todos = todos.map(t => t.id === id ? {...t, done: !t.done} : t);
render();
}


form.addEventListener('submit', e =>{
e.preventDefault();
addTodo(input.value);
});


clearBtn.addEventListener('click', ()=>{
todos = todos.filter(t => !t.done);
render();
});


load();