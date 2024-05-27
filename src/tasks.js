import projectManager from "./project-manager";
import { domManager } from "./dom";


class TaskManager {
    createTask(title, description, duedate, priority) {
        return {
            title,
            description,
            duedate,
            priority,
            complete: false,
            id: Date.now().toString()
        };
    }
    completeTask (e) {

        if (e.target.closest('li')){
            const taskId = e.target.closest('li').dataset.taskId;
            const selectedProject = projectManager.selectedProject;
            const task = selectedProject.tasks.find(task => task.id == taskId);
            
            if (task) {
                //toggle task complete status
                task.complete = !task.complete; 
                projectManager.saveToLocalStorage();
                domManager.renderProjectTasks(selectedProject); 
            }
       }    
    }
    deleteTask(taskId){
        const selectedProject = projectManager.selectedProject
        selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
        projectManager.saveToLocalStorage();
        domManager.renderProjectTasks(selectedProject);
    }
    editTask (taskId){
        const task = this.findTask(taskId)
        if (!task) return;

        // Populate the form with the exisitng task values
        document.getElementById('title').value = task.title;
        document.getElementById('duedate').value = task.dueDate;
        document.getElementById('description').value = task.description;
        document.getElementById('priority').value = task.priority;
        document.getElementById('taskId').value = task.id;

        modal.showModal();
        
    }
    findTask(taskId){
        return projectManager.selectedProject.tasks.find(task => task.id == taskId);
    }
}

const taskManager = new TaskManager();
export default taskManager;