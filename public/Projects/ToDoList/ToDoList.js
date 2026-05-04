let input = document.querySelector(".input"),
    btnAdd = document.querySelector(".btn"),
    todoList = document.querySelector(".todo-list");

btnAdd.onclick = function() {
    let li = document.createElement('li'),
        checkbox = document.createElement('input'),
        text = document.createElement('label'),
        btnDelete = document.createElement('button');

    if(input.value.trim() !== ""){
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);

        text.type = 'label';
        text.textContent = input.value;
        li.appendChild(text);

        btnDelete.type = 'button';
        btnDelete.textContent = 'Delete';
        btnDelete.classList.add('delete');
        btnDelete.onclick = function() {
            li.remove();
        }
        li.appendChild(btnDelete);

        todoList.appendChild(li);

        input.focus();
        input.value = "";

    } else {
        alert("Place Enter Your Task")
    }
};