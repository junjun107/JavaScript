var todoList = {
  todos:  [], 
  
  addTodo: function(itemText) {
    this.todos.push({
      text: itemText,
      completed: false
    });

  },
  changeTodo: function(position, text) { //only change the text property of addTodo
    this.todos[position].text = text
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1); 
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length; //need to know total todos and completed todos
    var completedTodos = 0;

    this.todos.forEach(function (todo) {
      if(todo.completed === true) {
        completedTodos++;
      }
    })
 
   this.todos.forEach(function (todo){
     if(completedTodos=== totalTodos ) {
       todo.completed = false;
     } else {
       todo.completed = true;
     }
   });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value ='';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoTextInput.value ='';
    changeTodoPositionInput.value ='';
    view.displayTodos();
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value ="";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todoUl = document.querySelector('ul'); 
    todoUl.innerHTML = '';  //reset 
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      if (todoList.todos[position].completed === true) { 
        todoTextWithCompletion = "(x) " + todoList.todos[position].text;
      } else {
        todoTextWithCompletion = "( ) " + todoList.todos[position].text;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
    todoLi.appendChild(this.createDeleteButton());
    todoUl.appendChild(todoLi); 
    },this)
  }, 
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton'
    return deleteButton; 
  },
  setUpEventListeners: function () {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {
    //console.log(event.target.parentNode.id);

    //get element clicked 
    var elementClicked = event.target
    //check to see if it's delete button that clicked
    if(elementClicked.className === 'deleteButton') {
    //run handlers.deleteTodo (position) (id of li)
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
 view.setUpEventListeners();
