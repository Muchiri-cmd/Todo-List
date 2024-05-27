import { Projects,selectedProjectId,saveToLocalStorage,createProject, setProjectId } from "./project-manager"
import { clearElement,renderProjectTasks,renderProjects,tasksList ,projectName} from "./dom";
import { createTask } from "./tasks";


//Form related - DOM variables
export const projectForm = document.querySelector('.add-project-form')
export const projectsList = document.querySelector('.projects-list');
const tasksForm = document.querySelector('.task-form');
const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');
const newProjectInput = document.querySelector('.new-project-input');


//project form 
projectForm.addEventListener('submit',e=>{
    e.preventDefault();
    const projectTitle = newProjectInput.value;
  
    //verify input
    if (projectTitle) {
        //create project and add to Projects 
        const project = createProject(projectTitle) 
        Projects.push(project);
        setProjectId(project.id)
        saveToLocalStorage();
        clearElement(projectsList);
        projectForm.style.display = 'none';
        renderProjects();
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        console.log(selectedProject.name)
        projectName.textContent = `${selectedProject.name}`;
        renderProjectTasks(selectedProject)
        newProjectInput.value='';
    }
})

//tasks form functionalities
tasksForm.addEventListener('submit',e=>{
    const selectedProject = Projects.find(project => project.id == selectedProjectId);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const duedate = document.getElementById('duedate').value
    const description = document.getElementById('description').value
    const priority = document.getElementById('priority').value
    const taskId = document.getElementById('taskId').value;
    
    if (taskId) {
        //edit exisitng task
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        const task = selectedProject.tasks.find(task => task.id == taskId);
        task.title = title;
        task.description = description;
        task.duedate = duedate;
        task.priority = priority;
       
    } else {
        //create new task
        const task = createTask(title, description, duedate, priority);
        selectedProject.tasks.push(task);
    }

    saveToLocalStorage();
    clearElement(tasksList);
    tasksForm.reset();
    document.getElementById('taskId').value = '';
    modal.close();
    renderProjectTasks(selectedProject);
})
hideForm.addEventListener('click',(e)=>{
    modal.close();
})
displayForm.addEventListener('click', () => {
    if (selectedProjectId === null || selectedProjectId === 'null') { 
        alert("Click on a project to attach tasks to.");
    } else {
        tasksForm.reset();
        modal.showModal();
    }
});