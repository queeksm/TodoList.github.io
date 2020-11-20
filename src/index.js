// This is the index.js, index will work as a main hub for calling all the functions, object generators and
// DOM manipulators.

import './style.css';
import { masterRenderer,projectDisplayer} from './modules/renderer';
import Project from './modules/projects';

let projects = [];

const projectRenderer = (projects) => {
  let projectDisplay = document.getElementById('projectDisplay');
  for (let index = 0; index < projects.length; index++) {
    projectDisplayer(projectDisplay, index, projects);
  }
}

const submitter = () =>  {
  let form = document.getElementById('projectFormContainer');
  let name = document.getElementById('nameInput').value;
  let objective = document.getElementById('objInput').value;
  let project = new Project(name,objective);  
  form.className += ' hidden';
  projects.push(project);
  projectRenderer(projects);
}

const adder = () => {
  let form = document.getElementById('projectFormContainer');
  form.className -= ' hidden';
}

masterRenderer(submitter,adder);


//Activities support added.
//Activities display and manipulation
//Styling





