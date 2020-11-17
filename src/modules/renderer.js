import '../style.css';
import Activity from './activities';
import Project from './projects';


const masterRenderer = (submitter) => {
  const main = document.getElementById('main');
  const projectHub = document.createElement('div');
  const projectForm = document.createElement('div');
  const projectDisplay = document.createElement('div');
  const nameInput = document.createElement('input');
  const objInput = document.createElement('input');
  const submitProject = document.createElement('button');
  projectHub.setAttribute('class','projectHub');
  projectHub.setAttribute('id','projectHub');
  projectHub.innerHTML = 'this is the main hub for projects';
  projectForm.setAttribute('class', 'projectFormContainer');
  projectForm.setAttribute('id','projectFormContainer');
  projectDisplay.setAttribute('class','projectDisplay');
  projectDisplay.setAttribute('id','projectDisplay');
  projectDisplay.innerHTML = 'this should display all the projects';
  nameInput.setAttribute('id','nameInput');
  objInput.setAttribute('id','objInput');
  submitProject.innerHTML = 'submit';
  submitProject.addEventListener('click',submitter);
  projectForm.appendChild(nameInput);
  projectForm.appendChild(objInput);
  projectForm.appendChild(submitProject);
  projectHub.appendChild(projectDisplay);
  projectHub.appendChild(projectForm);
  main.appendChild(projectHub);
}

const projectUpdater = (projects) => {
  let projectDisplay = document.getElementById('projectDisplay');
  for (let index = 0; index < projects.length; index++) {
    
    
  }
}

export { masterRenderer as default};