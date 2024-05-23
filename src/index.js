import './index.css';

const projectsList = document.querySelector('.projects-list');
const projectForm = document.querySelector('.add-project-form')
const newProjectInput = document.querySelector('.new-project-input');
const tasksForm = document.querySelector('.task-form');
const taskSubmitBtn = document.querySelector('.add-task-btn');
const tasksList = document.querySelector('.project-task-list');

const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');

const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
//get selected project from projects
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY)

const LOCAL_STORAGE_TASK_KEY = 'tasks'
const LOCAL_STORAGE_SELECTED_TASK_KEY = 'selectedTaskId'

let Tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_KEY))||[]
let selectedTaskId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_KEY)

displayForm.addEventListener('click',()=>{
    modal.showModal();
})
hideForm.addEventListener('click',(e)=>{
    modal.close();
})

//create projects array
let ProjectID = 1;

function clearElement(elem){
    while (elem.firstChild){
        elem.removeChild(elem.firstChild)
        
    }
}
projectForm.addEventListener('submit',e=>{
    e.preventDefault();
    const projectTitle = newProjectInput.value;
    //console.log(projectTitle);
    //verify input
    if (projectTitle) {
        //create project and add to Projects 
        const project = createProject(projectTitle) 
        Projects.push(project);
        saveToLocalStorage();
        clearElement(projectsList);
        renderProjects();
        newProjectInput.value='';
    }
})
//Listen for selected Project
projectsList.addEventListener('click',e => {
    if (e.target.tagName.toLowerCase() == 'li'){
        selectedProjectId = e.target.id;
        saveToLocalStorage();
    }
})
function createProject(name){
    const project = {
        name:name,
        id:ProjectID,
        tasks:[]
    }
    ProjectID++;
    return project;
}
function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(Projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,selectedProjectId)
}
function saveTasks(){
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY,JSON.stringify(Tasks))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_TASK_KEY,selectedTaskId)
}

function renderProjectTasks(){
    Tasks.forEach(task => {
        const taskItem = document.createElement('li');

        const taskListItemSpan = document.createElement('span');
        taskListItemSpan.classList.add('task-list-item');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-circle-notch');
        taskListItemSpan.appendChild(icon);
        taskListItemSpan.appendChild(document.createTextNode(` ${task.title}`));
        
        const prioritySpan = document.createElement('span');
        prioritySpan.classList.add('priority-header');
        prioritySpan.textContent = `${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} priority`;
        
        const dueDateSpan = document.createElement('span');
        dueDateSpan.classList.add('duedate-header');
        const dueDate = new Date(task.duedate);
        dueDateSpan.textContent = dueDate.toLocaleString();

        taskItem.appendChild(taskListItemSpan);
        taskItem.appendChild(prioritySpan);
        taskItem.appendChild(dueDateSpan);

        tasksList.appendChild(taskItem);
    });
}
function renderProjects() {
    Projects.forEach(project => {
        //console.log(project);
        const projectItem = document.createElement('li');
        projectItem.id = `project-${project.id}`;

        const span = document.createElement('span');
        span.classList.add('project-list-icon');

        const icon = document.createElement('i');
        icon.classList.add('fa-regular');
        icon.classList.add('fa-square');

        span.appendChild(icon);
        projectItem.appendChild(span);

        // Append the text node to the projectItem after the span
        const textNode = document.createTextNode(` ${project.name}`);
        projectItem.appendChild(textNode);

        projectsList.appendChild(projectItem);
    });
}
renderProjects();


//Tasks section
tasksForm.addEventListener('submit',e=>{
    const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
    const selectedProject = Projects.find(project => project.id == numericProjectId);

    //console.log(selectedProject);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value
    const duedate = document.getElementById('duedate').value
    const priority = document.getElementById('priority').value

    const task = createTask(title,description,duedate,priority)
    Tasks.push(task);
    clearElement(tasksList);
    //console.log(task)
    selectedProject.tasks.push(task);
    saveTasks();
    tasksForm.reset();
    //modal.close()
    renderProjectTasks();

})
function createTask(title,description,duedate,priority){
    return {title,description,duedate,priority,complete:false}
}

console.log(selectedProjectId)