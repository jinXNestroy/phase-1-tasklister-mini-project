// document.addEventListener("DOMContentLoaded", () => {

//   (todo) => {
//     document.getElementById('new-task-description').textContent = `${todo}`

//   }
// });

const form = document.getElementById("create-task-form");
const todoInput = document.getElementById("new-task-description");
const listContainer = document.getElementById("list");
let deleteButton

form.addEventListener('submit', (e) => {
  e.preventDefault();

  handlesubmit();
});

function handlesubmit() {
  let newTodo = document.createElement('li');
  newTodo.textContent = todoInput.value;

  let xButton = document.createElement("button");
  xButton.textContent = "X"

  xButton.addEventListener('click', function () {
    xButton.parentNode.remove()

  })


  listContainer.appendChild(newTodo);
  newTodo.appendChild(xButton);

}

