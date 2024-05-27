import { selectedProjectId,Projects,saveToLocalStorage,deleteProject,setProjectId } from "./project-manager";
import { projectForm,projectsList } from "./forms";
import { editTask,deleteTask,completeTask } from "./tasks";


const toggleProjectsIcon = document.querySelector('.toggle-projects');
const projectsContainer = document.querySelector('.projects-container');
const tasksIcon = document.querySelector('.toggle-tasks');
const toggleProjectFormBtn =  document.querySelector('.toggle-form-btn');
export const projectName = document.querySelector('.project-name');
export const tasksList = document.querySelector('.project-task-list');


function renderProjectTasks(selectedProject){
    clearElement(tasksList);

    if(selectedProject){
        projectName.textContent = `${selectedProject.name}`;
        selectedProject.tasks.forEach(task => {
            const taskItem = document.createElement('li');
    
            const taskListItemSpan = document.createElement('span');
            taskListItemSpan.classList.add('task-list-item');
            taskItem.dataset.taskId = task.id;
    
            const icon = document.createElement('i');
            icon.classList.add('fa-regular', task.complete ? 'fa-check-square': 'fa-square');
            icon.addEventListener('click',(e) => completeTask(e))
            taskListItemSpan.appendChild(icon);
            taskListItemSpan.appendChild(document.createTextNode(` ${task.title}`));
            
            const descriptionSpan = document.createElement('span');
            descriptionSpan.classList.add('description-header');
            descriptionSpan.textContent = `${task.description}`
            
            const dueDateSpan = document.createElement('span');
            dueDateSpan.classList.add('duedate-header');
            const dueDate = new Date(task.duedate);
            dueDateSpan.textContent = dueDate.toLocaleString();
    
            taskItem.appendChild(taskListItemSpan);
            taskItem.appendChild(descriptionSpan);
            taskItem.appendChild(dueDateSpan);
    
            if (task.complete) {
                taskItem.classList.add('complete');
            }
            if (task.priority == 'high'){
                taskItem.classList.add('high');
            } else if (task.priority == 'medium'){
                taskItem.classList.add('medium')
            } else{
                taskItem.classList.add('low');
            }
            const functionsDiv = document.createElement('div')
            functionsDiv.classList.add('functions-div')
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid','fa-trash');
            deleteIcon.addEventListener('click',()=>deleteTask(task.id));
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-solid','fa-pen');
            editIcon.addEventListener('click',()=>editTask(task.id));
            functionsDiv.appendChild(deleteIcon);
            functionsDiv.appendChild(editIcon);
            taskItem.appendChild(functionsDiv);
    
            tasksList.appendChild(taskItem);
        });
    }
}

function renderProjects() {
    Projects.forEach(project => {
  
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-list-item')
        projectItem.id = `${project.id}`;
        
       
        const span = document.createElement('span');
        span.classList.add('project-list-icon');
        

        if (projectItem.id == selectedProjectId) {
            projectItem.classList.add('active');
        }
       
        projectItem.appendChild(span);
        // Append the text node to the projectItem after the span
        const textNode = document.createTextNode(` ${project.name}`);
        projectItem.appendChild(textNode);

        const delIcon = document.createElement('i');
        delIcon.classList.add('fa-solid');
        delIcon.classList.add('fa-trash');
        delIcon.addEventListener('click',() => deleteProject(project.id))
        projectItem.append(delIcon);

        projectsList.appendChild(projectItem);
    });
}
function clearElement(elem){
    while (elem.firstChild){
        elem.removeChild(elem.firstChild)
        
    }
}
//Listen for selected Project
projectsList.addEventListener('click',e => {   
    if (e.target.tagName.toLowerCase() == 'li'){
        setProjectId(e.target.id)
        saveToLocalStorage();  
        clearElement(projectsList);
        renderProjects();
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        projectName.textContent = `${selectedProject.name}`
        renderProjectTasks(selectedProject)
    }
})

toggleProjectFormBtn.addEventListener('click',()=>{
    if (projectForm.style.display === 'none' || projectForm.style.display === '') {
        projectForm.style.display = 'block';
        const input = projectForm.querySelector('input'); 
        input.focus();
    } else {
        projectForm.style.display = 'none';
    }
})

toggleProjectsIcon.addEventListener('click', () => {
    projectsContainer.classList.toggle('show');
});

tasksIcon.addEventListener('click', () => {
    projectsContainer.classList.remove('show');
});

export { clearElement, renderProjectTasks, renderProjects }