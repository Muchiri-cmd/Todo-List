import './index.css';
import projectManager from './project-manager';
import { domManager } from './dom';
import formHandler from './forms';

//render projects and their tasks
domManager.renderProjects();
domManager.renderProjectTasks(projectManager.selectedProject);






