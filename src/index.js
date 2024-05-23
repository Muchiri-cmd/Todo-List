import './index.css';

const projectsList = document.querySelector('.projects-list');
const projectForm = document.querySelector('.add-project-form')
const newProjectInput = document.querySelector('.new-project-input');

const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');

const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0}]
//get selected project from projects
let selectedProjectId = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_KEY
)
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
    }
    ProjectID++;
    return project;
}
function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(Projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,selectedProjectId)
}
function renderProjectTasks(){

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

