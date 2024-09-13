import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase ,ref ,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-dtabase-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database=getDatabase(app)
const tasksInDb=ref(database,"Tasks")

console.log(tasksInDb)

const saveBtn=document.getElementById("save-task")
const taskDisplayEl=document.getElementById("display-el")
const inputEl=document.getElementById("task-input")

saveBtn.addEventListener("click",saveTask)

function saveTask() {
    let taskValue=inputEl.value
    push(tasksInDb,taskValue)    
    console.log(`${taskValue} added to database.`)
}