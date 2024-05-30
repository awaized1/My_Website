const addTasks = document.getElementById("addTasks");
const listContainer = document.getElementById("listContainer");

console.log(listContainer)

document.getElementById("addButton").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addTask()
    }
})

function addTask() {
    if (addTasks.value == "") {
        alert("You must write your task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = addTasks.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    addTasks.value = "";
    saveData()
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})
