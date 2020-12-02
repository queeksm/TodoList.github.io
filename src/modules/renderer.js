import '../style.css';

const toggler = (evt) => {
  const index = evt.target.id;
  const container = document.getElementById(`pActForm${index}`);
  container.classList.remove('hidden');
};

const masterRenderer = (submitter, adder) => {
  const main = document.getElementById('main');
  const projectHub = document.createElement('div');
  const projectForm = document.createElement('div');
  const projectDisplay = document.createElement('div');
  const projectTitle = document.createElement('div');
  const nameInput = document.createElement('input');
  const objInput = document.createElement('input');
  const descInput = document.createElement('input');
  const cDateInput = document.createElement('input');
  const submitProject = document.createElement('button');
  const addNewProject = document.createElement('button');
  const alert = document.createElement('div');

  alert.setAttribute('class', 'projectsAlert');
  alert.setAttribute('id', 'projectsAlert');

  projectHub.setAttribute('class', 'projectHub');
  projectHub.setAttribute('id', 'projectHub');

  projectForm.setAttribute('class', 'projectFormContainer hidden');
  projectForm.setAttribute('id', 'projectFormContainer');

  projectDisplay.setAttribute('class', 'projectDisplay');
  projectDisplay.setAttribute('id', 'projectDisplay');

  projectTitle.setAttribute('class', 'projectTitle');
  projectTitle.setAttribute('id', 'projectTitle');
  projectTitle.innerHTML = 'Projects';

  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('class', 'nameInput');

  objInput.setAttribute('id', 'objInput');
  objInput.setAttribute('class', 'objInput');

  descInput.setAttribute('id', 'descInput');
  descInput.setAttribute('class', 'descInput');

  cDateInput.setAttribute('id', 'cDateInput');
  cDateInput.setAttribute('class', 'cDateInput');
  cDateInput.setAttribute('type', 'date');

  submitProject.innerHTML = 'submit';
  submitProject.addEventListener('click', submitter);
  addNewProject.innerHTML = 'New Project';
  addNewProject.addEventListener('click', adder);

  projectForm.appendChild(nameInput);
  projectForm.appendChild(objInput);
  projectForm.appendChild(descInput);
  projectForm.appendChild(cDateInput);
  projectForm.appendChild(submitProject);
  projectHub.appendChild(projectTitle);
  projectHub.appendChild(projectDisplay);
  projectHub.appendChild(projectForm);
  projectForm.appendChild(alert);
  projectHub.appendChild(addNewProject);
  main.appendChild(projectHub);
};

const activitiesDisplayer = (index, activitiesSubmitter) => {
  const pActivitiesContainer = document.createElement('div');
  const pActForm = document.createElement('div');
  const titleInput = document.createElement('input');
  const descriptionAct = document.createElement('input');
  const dueDateInput = document.createElement('input');
  const priorityInput = document.createElement('input');
  const editButton = document.createElement('button');
  const actAlerts = document.createElement('div');

  actAlerts.setAttribute('class', 'actAlerts');
  actAlerts.setAttribute('id', 'actAlerts');

  editButton.innerHTML = 'New Activity';
  editButton.setAttribute('class', 'editBActivities');
  editButton.setAttribute('id', `editBActivities${index}`);
  editButton.addEventListener('click', activitiesSubmitter);

  titleInput.setAttribute('id', `titleInput${index}`);
  descriptionAct.setAttribute('id', `descriptionAct${index}`);
  dueDateInput.setAttribute('id', `dueDateInput${index}`);
  dueDateInput.setAttribute('type', 'date');
  priorityInput.setAttribute('id', `priorityInput${index}`);
  priorityInput.setAttribute('type', 'number');

  pActivitiesContainer.setAttribute('class', 'pAContainer');
  pActivitiesContainer.setAttribute('id', `pAContainer${index}`);
  pActivitiesContainer.innerHTML = 'This is the activities container';

  pActForm.setAttribute('class', 'pActForm hidden');
  pActForm.setAttribute('id', `pActForm${index}`);

  pActForm.appendChild(titleInput);
  pActForm.appendChild(descriptionAct);
  pActForm.appendChild(dueDateInput);
  pActForm.appendChild(priorityInput);
  pActForm.appendChild(editButton);
  pActivitiesContainer.appendChild(pActForm);
  pActivitiesContainer.appendChild(actAlerts);

  return pActivitiesContainer;
};

const activitiesCreator = (i, index, activity) => {
  const flagger = document.getElementById(`smallContainer${index}${i}`);
  if (flagger == null) {
    const container = document.getElementById(`pAContainer${index}`);
    const smallContainer = document.createElement('div');
    const aGenInfo = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');

    title.innerHTML = activity.getTitle;
    description.innerHTML = activity.getDescription;
    dueDate.innerHTML = activity.getDueDate;
    priority.innerHTML = activity.getPriority;

    aGenInfo.setAttribute('class', 'aGenInfo');
    title.setAttribute('class', 'aTitle');
    description.setAttribute('class', 'aDescription');
    dueDate.setAttribute('class', 'aDueDate');
    priority.setAttribute('class', 'aPriority');

    smallContainer.setAttribute('id', `smallContainer${index}${i}`);
    smallContainer.setAttribute('class', 'smallAContainer');
    aGenInfo.appendChild(title);
    aGenInfo.appendChild(dueDate);
    aGenInfo.appendChild(priority);
    smallContainer.appendChild(aGenInfo);
    smallContainer.appendChild(description);

    container.appendChild(smallContainer);
  }
};

const projectDisplayer = (projectDisplay, index, projects, editer, editMaster, actSubmitter) => {
  const flagger = document.getElementById(`${index}`);
  if (flagger == null) {
    const newDisplay = document.createElement('div');
    const projectObjDisplayer = document.createElement('div');
    const pDescription = document.createElement('div');
    const pGenInfo = document.createElement('div');
    const pName = document.createElement('div');
    const pSDate = document.createElement('div');
    const pFDate = document.createElement('div');
    const pEditForm = document.createElement('div');

    const nameInput = document.createElement('input');
    const objInput = document.createElement('input');
    const descInput = document.createElement('input');
    const cDateInput = document.createElement('input');
    const editButton = document.createElement('button');
    const submitEdits = document.createElement('button');
    const newActivity = document.createElement('button');

    newActivity.addEventListener('click', toggler);
    newActivity.innerHTML = 'Add a new Activity';
    newActivity.setAttribute('id', `${index}`);


    nameInput.setAttribute('id', `nameInput${index}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.setAttribute('class', 'formInputSmall');

    objInput.setAttribute('id', `objInput${index}`);
    objInput.setAttribute('type', 'text');
    objInput.setAttribute('placeholder', 'Objective');
    objInput.setAttribute('class', 'formInput');

    descInput.setAttribute('id', `descInput${index}`);
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('placeholder', 'Description');
    descInput.setAttribute('class', 'formInput');

    cDateInput.setAttribute('id', `cDateInput${index}`);
    cDateInput.setAttribute('type', 'date');
    cDateInput.setAttribute('class', 'formInputDate');

    editButton.innerHTML = 'Edit';
    editButton.setAttribute('id', `editButton${index}`);
    editButton.setAttribute('class', 'editButton');
    editButton.addEventListener('click', editMaster);

    submitEdits.setAttribute('id', `subEdit${index}`);
    submitEdits.setAttribute('class', 'subEdits');
    submitEdits.innerHTML = 'EDIT';
    submitEdits.addEventListener('click', editer);

    pEditForm.appendChild(nameInput);
    pEditForm.appendChild(objInput);
    pEditForm.appendChild(descInput);
    pEditForm.appendChild(cDateInput);
    pEditForm.appendChild(submitEdits);

    pEditForm.setAttribute('class', 'editForm hidden');
    pEditForm.setAttribute('id', `editForm${index} `);

    pDescription.setAttribute('class', 'pDescription');
    pDescription.setAttribute('id', `pDescription${index}`);

    pGenInfo.setAttribute('class', 'pGenInfo');

    pName.setAttribute('class', 'pName');
    pName.setAttribute('id', `pName${index}`);
    pName.innerHTML = projects[index].getName;

    pSDate.setAttribute('class', 'pSDate');
    pSDate.setAttribute('id', `pSDate${index}`);
    pSDate.innerHTML = projects[index].getStartDate;

    pFDate.setAttribute('class', 'pFDate');
    pFDate.setAttribute('id', `pFDate${index}`);
    pFDate.innerHTML = projects[index].getCompletionDate;

    pDescription.innerHTML = projects[index].getDescription;

    pGenInfo.appendChild(pName);
    pGenInfo.appendChild(pSDate);
    pGenInfo.appendChild(pFDate);

    projectObjDisplayer.setAttribute('class', 'poDisplayer');
    projectObjDisplayer.setAttribute('id', `poDisplayer${index}`);
    projectObjDisplayer.innerHTML = projects[index].getObjective;

    newDisplay.setAttribute('class', 'projectDisplayer');
    newDisplay.setAttribute('id', `${index}`);
    newDisplay.appendChild(pGenInfo);
    newDisplay.appendChild(projectObjDisplayer);
    newDisplay.appendChild(pDescription);
    newDisplay.appendChild(pEditForm);
    newDisplay.appendChild(activitiesDisplayer(index, actSubmitter));
    newDisplay.appendChild(editButton);
    newDisplay.appendChild(newActivity);

    projectDisplay.appendChild(newDisplay);
  }
};

const updater = (index, projects) => {
  const container = document.getElementById(`editForm${index} `);
  const pName = document.getElementById(`pName${index}`);
  const pObjective = document.getElementById(`poDisplayer${index}`);
  const pDescription = document.getElementById(`pDescription${index}`);
  const pCDate = document.getElementById(`pFDate${index}`);
  const aContainer = document.getElementById(`pAContainer${index}`);
  const button = document.getElementById(`editButton${index}`);

  pName.innerHTML = projects[index].getName;
  pObjective.innerHTML = projects[index].getObjective;
  pDescription.innerHTML = projects[index].getDescription;
  pCDate.innerHTML = projects[index].getCompletionDate;
  button.classList.remove('hidden');
  aContainer.classList.remove('hidden');
  container.className += ' hidden';
};

export {
  projectDisplayer, masterRenderer, updater, activitiesCreator,
};