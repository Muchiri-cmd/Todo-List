import projectManager from "./project-manager"
import taskManager from "./tasks"


class DOMManager {
    constructor () {
        //DOM variables
        this.projectName = document.querySelector('.project-name');
        this.projectsList = document.querySelector('.projects-list');
        this.tasksList = document.querySelector('.project-task-list');
        this.projectContainer = document.querySelector('.projects-container');
        this.toggleProjectsIcon = document.querySelector('.toggle-projects');
        this.tasksIcon = document.querySelector('.toggle-tasks');
        this.toggleProjectFormBtn = document.querySelector('.toggle-form-btn');
        this.projectForm = document.querySelector('.add-project-form');
    }

    renderProjects () {
        this.clearElement(this.projectsList);
        projectManager.Projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.classList.add('project-list-item')
            projectItem.id = `${project.id}`;

            const span = document.createElement('span');
            span.classList.add('project-list-icon');
            
    
            if (projectItem.id == projectManager.selectedProjectId) {
                projectItem.classList.add('active');
            }
           
            projectItem.appendChild(span);
            // Append the text node to the projectItem after the span
            const textNode = document.createTextNode(` ${project.name}`);
            projectItem.appendChild(textNode);
    
            const delIcon = document.createElement('i');
            delIcon.classList.add('fa-solid');
            delIcon.classList.add('fa-trash');
            delIcon.addEventListener('click',() => {
                projectManager.deleteProject(project.id)
                this.renderProjects()
                this.renderProjectTasks(projectManager.selectedProject)
            })
    
            projectItem.append(delIcon);
    
           this.projectsList.appendChild(projectItem);

        })
    }

    renderProjectTasks (selectedProject) {
        this.clearElement(this.tasksList);

        if(selectedProject){
            this.projectName.textContent = `${selectedProject.name}`;
            selectedProject.tasks.forEach(task => {
                const taskItem = document.createElement('li');
        
                const taskListItemSpan = document.createElement('span');
                taskListItemSpan.classList.add('task-list-item');
                taskItem.dataset.taskId = task.id;
        
                const icon = document.createElement('i');
                icon.classList.add('fa-regular', task.complete ? 'fa-check-square': 'fa-square');
                icon.addEventListener('click',(e) => taskManager.completeTask(e))
                taskListItemSpan.appendChild(icon);
                taskListItemSpan.appendChild(document.createTextNode(` ${task.title}`));
                
                const descriptionSpan = document.createElement('span');
                descriptionSpan.classList.add('description-header');
                descriptionSpan.textContent = (task.description!=='') ? `${task.description}` : ' - '
                
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
                deleteIcon.addEventListener('click', () => taskManager.deleteTask(task.id))
                const editIcon = document.createElement('i');
                editIcon.classList.add('fa-solid','fa-pen');
                editIcon.addEventListener('click',()=>taskManager.editTask(task.id));
                functionsDiv.appendChild(deleteIcon);
                functionsDiv.appendChild(editIcon);
                taskItem.appendChild(functionsDiv);
        
                this.tasksList.appendChild(taskItem);
            });
        } else {
            this.projectName.textContent = '';
        }
    }
    clearElement (elem){
        while (elem.firstChild){
            elem.removeChild(elem.firstChild)
            
        }
    }
    init() {
        //add event listeners

        //Listen for selected Project
        this.projectsList.addEventListener('click',(e)=>{
            if (e.target.tagName.toLowerCase() == 'li'){
                projectManager.setProjectId(e.target.id)
                projectManager.saveToLocalStorage();  
                

                const selectedProject = projectManager.selectedProject;
                this.projectName.textContent = `${selectedProject.name}`
        
                this.renderProjects();        
                this.renderProjectTasks(selectedProject)
            }
        })

        //listen for toggleProjectFormBtn
        this.toggleProjectFormBtn.addEventListener('click', () => {
            if (this.projectForm.style.display === 'none' || this.projectForm.style.display === '') {
                this.projectForm.style.display = 'block';
                const input = this.projectForm.querySelector('input'); 
                input.focus();
            } else {
                this.projectForm.style.display = 'none';
            }
        })
        this.toggleProjectsIcon.addEventListener('click', () => {
            projectsContainer.classList.toggle('show');
        });
        
        this.tasksIcon.addEventListener('click', () => {
            projectsContainer.classList.remove('show');
        });
    }
}

const domManager = new DOMManager();
domManager.init();

export { domManager }