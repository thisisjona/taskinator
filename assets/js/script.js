var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){

    event.preventDefault();

    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";
    listItemEL.textContent = "This is a new Task";
    tasksToDoEl.appendChild(listItemEL);
     
    console.log(event);
};

formEl.addEventListener("submit", createTaskHandler);
