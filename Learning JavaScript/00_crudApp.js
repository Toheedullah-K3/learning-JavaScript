

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input[type='text']");
const todoItems = document.querySelector(".todo-items");
// const doneButton = document.querySelectorAll(".done");
// const removeButton = document.querySelector(".remove");


// console.log(todoForm);

todoForm.addEventListener("submit" , (e)=>{
    e.preventDefault(); // prevent page from refresh
    const todoInputValue = todoInput.value;
    const newLi = document.createElement("li");
    const newLiHtml = `
        <span class="todo-text">${todoInputValue}</span>
        <div class="todo-buttons">
        <button class="done">Done</button>
        <button class="remove">Remove</button>
        </div>`;

    newLi.innerHTML = newLiHtml;
    todoItems.append(newLi);
    todoInput.value = "";
    

    console.log("Everything Okay!!")
})


todoItems.addEventListener("click" , e => {
    if(e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})

todoItems.addEventListener("click" , e => {
    if(e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})



