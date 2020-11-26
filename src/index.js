// This is the index.js, index will work as a main hub for calling all the functions, object generators and
// DOM manipulators.

import './style.css';
import { masterRenderer,projectDisplayer, updater} from './modules/renderer';
import Project from './modules/projects';

let projects = [];

const editer = (evt) => {

  let index = evt.target.id.replace('subEdit','');

  let name = document.getElementById(`nameInput${index}`).value;
  let objective = document.getElementById(`objInput${index}`).value;
  let description = document.getElementById(`descInput${index}`).value;
  let cDateInput = document.getElementById(`cDateInput${index}`).value;

  projects[index].setName = name;
  projects[index].setDescription = description;
  projects[index].setObjective = objective;
  projects[index].setCompletionDate = cDateInput;

  updater(index,projects);

}

const projectRenderer = (projects) => {
  let projectDisplay = document.getElementById('projectDisplay');
  for (let index = 0; index < projects.length; index++) {
    projectDisplayer(projectDisplay, index, projects,editer,editMaster);
  }
}

const submitter = () =>  {
  let form = document.getElementById('projectFormContainer');
  let name = document.getElementById('nameInput').value;
  let objective = document.getElementById('objInput').value;
  let description = document.getElementById('descInput').value;
  let cDateInput = document.getElementById('cDateInput').value;
  let project = new Project(name,objective);
  project.setDescription = description;
  project.setCompletionDate = cDateInput;
  form.className += ' hidden';
  projects.push(project);
  projectRenderer(projects);
  console.log(description);
}



const adder = () => {
  let form = document.getElementById('projectFormContainer');
  form.className -= ' hidden';
}

const editMaster = (evt) => {
  console.log(evt.target.id);
  let index = evt.target.id.replace('editButton','');
  let container = document.getElementById(`editForm${index} `);
  const button = document.getElementById(`editButton${index}`);
  container.className -= ' hidden';
  button.className += ' hidden';

}

masterRenderer(submitter,adder);


//Activities support added.
//Activities display and manipulation
//Styling





