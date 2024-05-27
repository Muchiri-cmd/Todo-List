//manages,creates and deletes projects in local storage

// ================== GLOBAL LOCAL STORAGE ===============================================//
const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

class ProjectManager {
    constructor () {
        //get projects from local storage instead of array but if n local, give empty array
        this.Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
        //get selected project id from project or use default's id 0
        this.selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0
    }
    saveToLocalStorage(){
        localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(this.Projects))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,this.selectedProjectId)
    }
    get selectedProject(){
        return this.Projects.find(project => project.id == projectManager.selectedProjectId)
    }
    createProject(name){
        const project = {
            name: name,
            id: Date.now().toString(),
            tasks: []
        };
        this.Projects.push(project);
        this.setProjectId(project.id)
        this.saveToLocalStorage();
        return project;
    }
    deleteProject(projectId){
        this.Projects = this.Projects.filter(project => project.id !== projectId);
        // If remaining projects, select the first one.
        if (this.Projects.length > 0) {
            this.selectedProjectId = this.Projects[0].id;
        } else {
            this.selectedProjectId = null;
        }
        this.saveToLocalStorage();
    }
    setProjectId(id){
        this.selectedProjectId = id
    }
}

const projectManager = new ProjectManager();
export default projectManager;