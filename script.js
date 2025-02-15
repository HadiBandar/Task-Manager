const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
},1000)