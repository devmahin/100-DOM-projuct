document.getElementById("addTask").addEventListener("click", addTask)
let incompleted_task = document.getElementById("items");
let inputValue = document.getElementById("new-task");
const completeList = document.querySelector(".complete-list ul");
console.log(completeList)


function addTask(event) {
    event.preventDefault()
    let listItem = addNewTask(inputValue.value);
    incompleted_task.appendChild(listItem)
    inputValue.value = "";

    bindInCompletedTask(listItem, completedTask);

}

function bindInCompletedTask(list, completedTask){
    console.log(list)
    let checkbox = list.querySelector("input[type=checkbox]")
    checkbox.onchange = completedTask;
}

function completedTask(){
    // console.log(this)
    let listItem = this.parentNode;
    // console.log(listItem)
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.className = "delete";

    listItem.appendChild(button)

    let inputBox = listItem.querySelector("input[type = 'checkbox']");
    // console.log(inputBox)
    completeList.appendChild(listItem);
    inputBox.remove();


    bindInCompletedTask(listItem, deletedItem);

}


function deletedItem(){
    let listItem = this.parentNode;
    console.log(listItem);
    let ul = listItem.parentNode;
    console.log(ul);

    // ul.removeChild(listItem);

}


function addNewTask(task) {
    let li = document.createElement("li");
    li.setAttribute("class", "item")
    let input = document.createElement("input");
    input.type = "checkbox";

    let label = document.createElement("label");
    label.innerText = task;

    console.log(label)
    li.appendChild(input);
    li.appendChild(label);

    return li
}
