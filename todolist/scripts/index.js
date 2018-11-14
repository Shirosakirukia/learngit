var todoCount = 0;

function addNewTodo() {

    var todos = document.getElementById('new-todo').value;

    var todoId = ++todoCount;
   
    var newTodo = document.createElement('h4');
    newTodo.setAttribute('id','todo-item-'+todoId);

    var newSpan = document.createElement('span');
    newSpan.innerText = todos;

    var newButtond = document.createElement('button');
    newButtond.className = 'buttn-del';
	newButtond.setAttribute('onclick','deleteTodo('+todoId+')');
    newButtond.innerText = 'Dele';
	
	var newButtonf = document.createElement('button');
    newButtonf.className = 'buttn-finish';
	newButtonf.setAttribute('onclick','finishTodo('+todoId+')');
    newButtonf.innerText = 'Finish';

    newTodo.appendChild(newSpan);
    newTodo.appendChild(newButtond);
	newTodo.appendChild(newButtonf);
    
    let list = document.getElementById('todo-list');
    list.appendChild(newTodo);
}

function deleteTodo(id) {
    let children = document.getElementById('todo-item-'+id);
    let parent = children.parentElement;
    parent.removeChild(children);
}

function finishTodo(id) {
    let todo = document.getElementById('todo-item-'+id);
    let listfinish = document.getElementById('finish-list');
	listfinish.appendChild(todo);
}