const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function  addTask(){
    if(inputBox.value === ''){
        alert("you mut write somethin")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createComment("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click" , function(a) {
    if (a.target.tagName === "LI"){
a.target.classList.toggle("checked");
saveData();
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parent.remove();
        saveData();
    }



}, false);

function saveData(){
    localStorage.setItem("data" ,  listContainer.innerHTML);

}
function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
}