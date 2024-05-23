import './index.css';

const projectsList = document.querySelector('.projects-list');
const projectForm = document.querySelector('.add-project-form')
const newProjectInput = document.querySelector('.new-project-input');
const tasksForm = document.querySelector('.task-form');
const taskSubmitBtn = document.querySelector('.add-task-btn');
const tasksList = document.querySelector('.project-task-list');
const tasksContainer = document.querySelector('.projects-tasks-container');
const projectName = document.querySelector('.project-name');
const taskListItem = document.querySelector('.task-list-item');

const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');

const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
//get selected project from projects
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY)


displayForm.addEventListener('click',()=>{
    tasksForm.reset();
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
        const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
        const selectedProject = Projects.find(project => project.id == numericProjectId);
        projectName.textContent = `${selectedProject.name}`;
        clearElement(projectsList);
        renderProjects();
        renderProjectTasks(selectedProject);
        
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

function renderProjects() {
    Projects.forEach(project => {
        //console.log(project);
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-list-item')
        projectItem.id = `project-${project.id}`;
       
        const span = document.createElement('span');
        span.classList.add('project-list-icon');

        const icon = document.createElement('i');
        icon.classList.add('fa-regular');
        icon.classList.add('fa-circle');

        if (projectItem.id === selectedProjectId) {
            icon.classList.add('active');
        }
        span.appendChild(icon);
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
function deleteProject(projectId){
    Projects = Projects.filter(project => project.id !== projectId);
    selectedProjectId = 'project-0';
    saveToLocalStorage();
    clearElement(projectsList);

    const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
    const selectedProject = Projects.find(project => project.id == numericProjectId);
    renderProjectTasks(selectedProject)
    renderProjects();
}
renderProjects();

//Tasks section

tasksForm.addEventListener('submit',e=>{
    const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
    const selectedProject = Projects.find(project => project.id == numericProjectId);

    //console.log(selectedProject);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const duedate = document.getElementById('duedate').value
    const description = document.getElementById('description').value
    const priority = document.getElementById('priority').value
    const taskId = document.getElementById('taskId').value;
    
    if (taskId) {
        //edit exisitng task
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
function createTask(title,description,duedate,priority){
    return {title,description,duedate,priority,complete:false, id: Date.now().toString()}
}
function completeTask(e){
    const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
    const selectedProject = Projects.find(project => project.id == numericProjectId);

    if (e.target.closest('li')){
        const taskId = e.target.closest('li').dataset.taskId;
        //console.log(taskId);
        
        //console.log(selectedProject)
        const task = selectedProject.tasks.find(task => task.id == taskId);
        
        //console.log(task);
        if (task) {
            task.complete = !task.complete; 
            saveToLocalStorage();
            renderProjectTasks(selectedProject); 
        }
   }
}

function renderProjectTasks(selectedProject){
    clearElement(tasksList);
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

        if (task.complete) {
            taskItem.classList.add('complete');
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
const numericProjectId = parseInt(selectedProjectId.replace('project-', ''));
const selectedProject = Projects.find(project => project.id == numericProjectId);
renderProjectTasks(selectedProject);

function deleteTask(taskId) {
    selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
    saveToLocalStorage();
    renderProjectTasks(selectedProject);
}

function editTask(id){
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


