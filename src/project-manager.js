import { projectsList } from "./forms"
import { renderProjects,tasksList,clearElement } from "./dom"

//manages,creates and deletes projects in local storage

// ================== GLOBAL LOCAL STORAGE ===============================================//
const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
export let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
//get selected project from projects
export let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0

function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(Projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,selectedProjectId)
}

//get current selected project according to its id
export let selectedProject = Projects.find(project => project.id == selectedProjectId)

function setProjectId (id){
    selectedProjectId = id
} 
function createProject(name){
    const project = {
        name:name,
        id:Date.now().toString(),
        tasks:[]
    }
    return project
}
function deleteProject(projectId){
    Projects = Projects.filter(project => project.id !== projectId);
    selectedProjectId = null;
    saveToLocalStorage();
    clearElement(projectsList);
    clearElement(tasksList);
    renderProjects();
}
export {saveToLocalStorage,deleteProject,createProject,setProjectId}