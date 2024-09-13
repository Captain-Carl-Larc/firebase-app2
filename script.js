import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase ,ref ,push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-dtabase-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database=getDatabase(app)
const tasksInDb=ref(database,"Tasks")

//console.log(tasksInDb)

const saveBtn=document.getElementById("save-task")
const taskDisplayEl=document.getElementById("display-el")
//console.log(taskDisplayEl.attributes)

const inputEl=document.getElementById("task-input")

saveBtn.addEventListener("click",saveTask)

onValue(tasksInDb,function(snapshot){
    let tasksArray=Object.values(snapshot.val())
    for (let i = 0; i < tasksArray.length; i++) {        
        const taskElements = tasksArray[i];
        appendTask(element)
        console.log(element)
    }
    
})
function appendTask(task) {
    taskDisplayEl.innerHTML +=`<li>${task}</li>`

}

function saveTask() {
    let taskValue=inputEl.value
    push(tasksInDb,taskValue)    
    inputEl.value=""
    console.log(`${taskValue} added to database.`)
}