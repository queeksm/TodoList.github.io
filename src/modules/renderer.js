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
  const descInput = document.createElement('input');
  const cDateInput = document.createElement('input');
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
  descInput.setAttribute('id','descInput');
  cDateInput.setAttribute('id','cDateInput');
  cDateInput.setAttribute('type','date');
  submitProject.innerHTML = 'submit';
  submitProject.addEventListener('click', submitter);
  addNewProject.innerHTML = 'New Project';
  addNewProject.addEventListener('click', adder);
  projectForm.appendChild(nameInput);
  projectForm.appendChild(objInput);
  projectForm.appendChild(descInput);
  projectForm.appendChild(cDateInput);
  projectForm.appendChild(submitProject);
  projectHub.appendChild(projectDisplay);
  projectHub.appendChild(projectForm);
  projectHub.appendChild(addNewProject);
  main.appendChild(projectHub);
}

const projectDisplayer = (projectDisplay,index,projects,editer,editMaster) => {
  const flagger = document.getElementById(`${index}`);
  if (flagger == null) {
    let newDisplay = document.createElement('div');
    let projectObjDisplayer = document.createElement('div');
    let pDescription = document.createElement('div');
    let pGenInfo = document.createElement('div');
    let pName = document.createElement('div');
    let pSDate = document.createElement('div');
    let pFDate = document.createElement('div');
    let pEditForm = document.createElement('div');
    const nameInput = document.createElement('input');
    const objInput = document.createElement('input');
    const descInput = document.createElement('input');
    const cDateInput = document.createElement('input');
    const editButton = document.createElement('button');


    nameInput.setAttribute('id','nameInput');
    objInput.setAttribute('id','objInput');
    descInput.setAttribute('id','descInput');
    cDateInput.setAttribute('id','cDateInput');
    cDateInput.setAttribute('type','date');
    const submitEdits = document.createElement('button');

    editButton.innerHTML = 'Edit';
    editButton.setAttribute('id',`editButton${index}`);
    editButton.addEventListener('click',editMaster);
    

    nameInput.id += index;
    objInput.id += index;
    descInput.id += index;
    cDateInput.id += index;

    submitEdits.setAttribute('id',`subEdit${index}`);
    submitEdits.innerHTML = 'EDIT';
    submitEdits.addEventListener('click',editer);
    

    pEditForm.appendChild(nameInput);
    pEditForm.appendChild(objInput);
    pEditForm.appendChild(descInput);
    pEditForm.appendChild(cDateInput);
    pEditForm.appendChild(submitEdits);

    pEditForm.setAttribute('class','editForm hidden');
    pEditForm.setAttribute('id',`editForm${index} `);  
    pDescription.setAttribute('class','pDescription');
    pDescription.setAttribute('id',`pDescription${index}`);
    pGenInfo.setAttribute('class',`pGenInfo`);
    pName.setAttribute('class','pName');
    pName.setAttribute('id',`pName${index}`);
    pName.innerHTML = projects[index].getName;
    pSDate.setAttribute('class','pSDate');
    pSDate.setAttribute('id',`pSDate${index}`)
    pSDate.innerHTML = projects[index].getStartDate;
    pFDate.setAttribute('class','pFDate');
    pFDate.setAttribute('id',`pFDate${index}`)
    pFDate.innerHTML = projects[index].getCompletionDate;
    pDescription.innerHTML = projects[index].getDescription;
    pGenInfo.appendChild(pName);
    pGenInfo.appendChild(pSDate);
    pGenInfo.appendChild(pFDate);
  
    projectObjDisplayer.setAttribute('class','poDisplayer');
    projectObjDisplayer.setAttribute('id',`poDisplayer${index}`);
    projectObjDisplayer.innerHTML = projects[index].getObjective;  
    newDisplay.setAttribute('class','projectDisplayer');
    newDisplay.setAttribute('id',`${index}`);
    newDisplay.appendChild(pGenInfo);  
    newDisplay.appendChild(projectObjDisplayer);
    newDisplay.appendChild(pDescription);
    newDisplay.appendChild(editButton);
    newDisplay.appendChild(pEditForm);
    projectDisplay.appendChild(newDisplay);
  }
}

const updater = (index,projects) => {
  let container = document.getElementById(`editForm${index} `);
  let pName = document.getElementById(`pName${index}`);
  let pObjective = document.getElementById(`poDisplayer${index}`);
  let pDescription = document.getElementById(`pDescription${index}`);
  let pCDate = document.getElementById(`pFDate${index}`);
  const button = document.getElementById(`editButton${index}`);

  pName.innerHTML = projects[index].getName;
  pObjective.innerHTML = projects[index].getObjective;
  pDescription.innerHTML = projects[index].getDescription;
  pCDate.innerHTML = projects[index].getCompletionDate;
  container.className += ' hidden';
  button.className -= 'hidden';
}

export { projectDisplayer, masterRenderer, updater};