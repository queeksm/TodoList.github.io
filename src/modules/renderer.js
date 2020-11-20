import '../style.css';
import Activity from './activities';
import Project from './projects';


const masterRenderer = (submitter,adder) => {
  const main = document.getElementById('main');
  const projectHub = document.createElement('div');
  const projectForm = document.createElement('div');
  const projectDisplay = document.createElement('div');
  const nameInput = document.createElement('input');
  const objInput = document.createElement('input');
  const submitProject = document.createElement('button');
  const addNewProject = document.createElement('button');
  
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
  submitProject.addEventListener('click', submitter);
  addNewProject.innerHTML = 'New Project';
  addNewProject.addEventListener('click', adder);
  projectForm.appendChild(nameInput);
  projectForm.appendChild(objInput);
  projectForm.appendChild(submitProject);
  projectHub.appendChild(projectDisplay);
  projectHub.appendChild(projectForm);
  projectHub.appendChild(addNewProject);
  main.appendChild(projectHub);
}

const projectDisplayer = (projectDisplay,index,projects) => {
  const flagger = document.getElementById(`${index}`);
  if (flagger == null) {
    let newDisplay = document.createElement('div');
    let projectObjDisplayer = document.createElement('div');
    let pDescription = document.createElement('div');
    let pGenInfo = document.createElement('div');
    let pName = document.createElement('div');
    let pSDate = document.createElement('div');
    let pFDate = document.createElement('div');
    console.log(flagger);
    pDescription.setAttribute('class','pDescription');  
    pGenInfo.setAttribute('class','pGenInfo');
    pName.setAttribute('class','pName');
    pName.innerHTML = projects[index].getName;
    pSDate.setAttribute('class','pSDate');
    pSDate.innerHTML = projects[index].getStartDate;
    pFDate.setAttribute('class','pFDate');
    pFDate.innerHTML = projects[index].getCompletionDate;
    pDescription.innerHTML = projects[index].getDescription;
    pGenInfo.appendChild(pName);
    pGenInfo.appendChild(pSDate);
    pGenInfo.appendChild(pFDate);
  
    projectObjDisplayer.setAttribute('class','poDisplayer');
    projectObjDisplayer.innerHTML = projects[index].getObjective;  
    newDisplay.setAttribute('class','projectDisplayer');
    newDisplay.setAttribute('id',`${index}`);
    newDisplay.appendChild(pGenInfo);  
    newDisplay.appendChild(projectObjDisplayer);
    newDisplay.appendChild(pDescription);
    projectDisplay.appendChild(newDisplay);
  }
}

export { projectDisplayer, masterRenderer};