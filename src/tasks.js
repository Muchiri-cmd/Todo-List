import { selectedProjectId,saveToLocalStorage,Projects } from "./project-manager";
import { renderProjectTasks } from "./dom";


function createTask(title,description,duedate,priority){
    return {title,description,duedate,priority,complete:false, id: Date.now().toString()}
}

function completeTask(e){

    if (e.target.closest('li')){
        const taskId = e.target.closest('li').dataset.taskId;
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        const task = selectedProject.tasks.find(task => task.id == taskId);
        
        //console.log(task);
        if (task) {
            task.complete = !task.complete; 
            saveToLocalStorage();
            renderProjectTasks(selectedProject); 
        }
   }
}
function deleteTask(taskId) {
    const selectedProject = Projects.find(project => project.id == selectedProjectId);
    selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
    saveToLocalStorage();
    renderProjectTasks(selectedProject);
}
function editTask(id){
    const selectedProject = Projects.find(project => project.id == selectedProjectId);
    const task = selectedProject.tasks.find(task => task.id == id);
    if (!task) return;

    // Populate the form with the task values
    document.getElementById('title').value = task.title;
    document.getElementById('duedate').value = task.dueDate;
    document.getElementById('description').value = task.description;
    document.getElementById('priority').value = task.priority;
    document.getElementById('taskId').value = task.id;

    modal.showModal();
}

export {editTask,deleteTask,completeTask,createTask}