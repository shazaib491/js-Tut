let TODOURL = "https://jsonplaceholder.typicode.com/todos";

function getAllTodos() {
  fetch(TODOURL)
    .then((todosResponse) => todosResponse.json())
    .then((todoData) => {
      if (Object.keys(todoData).length) {
        console.log(todoData);
      } else {
        console.error("Something went wrong");
      }
    })
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
}

function postTodo(todo) {
  fetch(TODOURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((responseData) => console.log(responseData))
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
}

// postTodo({ id: 201, title: "ayan bhai ignore mat kro", completed: false });

function getTodoById() {
  fetch(TODOURL + "/3")
    .then((todosResponse) => todosResponse.json())
    .then((todoData) => {
      if (Object.keys(todoData).length) {
        console.log(todoData);
      } else {
        console.error("Something went wrong");
      }
    })
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
}

//   getTodoById();

function updateTodoById(id, updatedData) {
  fetch(TODOURL + "/" + id, {
    method: "PATCH", // or 'PATCH'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData), // updatedData is the new data
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

updateTodoById(20, { id: 20, title: "Adolf hitler", completed: false });

function deleteTodoById(params) {
  fetch(TODOURL + "/" + params, {
    method: "DELETE",
  })
    .then((todosResponse) => todosResponse.json())
    .then((todoData) => {
      console.log(todoData);
    })
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
}

//   deleteTodoById(100);
