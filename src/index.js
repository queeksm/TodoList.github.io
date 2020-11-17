// This is the index.js, index will work as a main hub for calling all the functions, object generators and
// DOM manipulators.

import './style.css';
import masterRenderer from './modules/renderer';
import Project from './modules/projects';

let projects = [];

const submitter = () =>  {
  let form = document.getElementById('projectFormContainer');
  let name = document.getElementById('nameInput').value;
  let objective = document.getElementById('objInput').value;
  let project = new Project(name,objective);  
  form.className += ' hidden';
  projects.push(project);
  console.log(projects);
}



masterRenderer(submitter);



//The function will create a new project and then will dispay it within a new dedicated div.projectHub



