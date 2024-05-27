import projectManager from "./project-manager";
import { domManager } from './dom';
import taskManager from "./tasks"

class FormsHandler {
    constructor () {
        //Form related - DOM variables
        this.projectForm = document.querySelector('.add-project-form');
        this.newProjectInput = document.querySelector('.new-project-input');
        this.tasksForm = document.querySelector('.task-form');
        this.modal = document.querySelector('.modal');
        this.displayForm = document.querySelector('.toggle-taskform-btn');
        this.hideForm = document.querySelector('.hide-form');
        this.projectsList = document.querySelector('.projects-list');

        //current selected Project
        this.selectedProject = projectManager.selectedProject
    }
    //initialize project Form
    initProjectForm () {
        this.projectForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const projectTitle = this.newProjectInput.value;
            //verify input
            if (projectTitle) {
                //create project and add to Projects 
                projectManager.createProject(projectTitle) //project
                projectManager.saveToLocalStorage();
                
                //reset form input & hide form after input
                this.newProjectInput.value='';
                this.projectForm.style.display = 'none';

              
                //re-render projects and projectTasks section
                domManager.renderProjects();
                domManager.renderProjectTasks(projectManager.selectedProject) 
            }
        })
    }
    //initialize task form
    initTaskForm(){
        //task form functionality
        this.tasksForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('title').value;
            const duedate = document.getElementById('duedate').value
            const description = document.getElementById('description').value
            const priority = document.getElementById('priority').value
            const taskId = document.getElementById('taskId').value;
            
            if (taskId) {
                //edit exisitng task
                const task = projectManager.selectedProject.tasks.find(task => task.id == taskId);
                task.title = title;
                task.description = description;
                task.duedate = duedate;
                task.priority = priority;
               
            } else {
                //create new task
                const task = taskManager.createTask(title, description, duedate, priority);
                projectManager.selectedProject.tasks.push(task);
            }
        
            projectManager.saveToLocalStorage();
            
            //reset tasks form and close modal after input
            this.tasksForm.reset();
            document.getElementById('taskId').value = '';
            this.modal.close();
            domManager.renderProjectTasks(projectManager.selectedProject)
        })
        this.hideForm.addEventListener('click',(e)=>{
            modal.close();
        })
        this.displayForm.addEventListener('click', () => {
            console.log("clicked")
            if (projectManager.selectedProjectId == null || projectManager.selectedProjectId == 'null' ) {
                alert("Click on a project to attach tasks to.");
            } else {
                this.tasksForm.reset();
                this.modal.showModal();
            }
        });
    }
}
const formHandler = new FormsHandler();
formHandler.initProjectForm();
formHandler.initTaskForm();

export default formHandler;