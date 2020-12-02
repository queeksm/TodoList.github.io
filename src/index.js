import './style.css';
import {
  masterRenderer, projectDisplayer, updater, activitiesCreator,
} from './modules/renderer';
import Project from './modules/projects';
import Activity from './modules/activities';

const projects = [];

const editMaster = (evt) => {
  const index = evt.target.id.replace('editButton', '');
  const container = document.getElementById(`editForm${index} `);
  const aContainer = document.getElementById(`pAContainer${index}`);
  const button = document.getElementById(`editButton${index}`);
  container.classList.remove('hidden');
  button.className += ' hidden';
  aContainer.className += ' hidden';
};

const editer = (evt) => {
  const index = evt.target.id.replace('subEdit', '');

  const name = document.getElementById(`nameInput${index}`).value;
  const objective = document.getElementById(`objInput${index}`).value;
  const description = document.getElementById(`descInput${index}`).value;
  const cDateInput = document.getElementById(`cDateInput${index}`).value;

  projects[index].setName = name;
  projects[index].setDescription = description;
  projects[index].setObjective = objective;
  projects[index].setCompletionDate = cDateInput;

  updater(index, projects);
};

const activitiesRenderer = (index, projects) => {
  const actArray = projects[index].getActivities;
  for (let i = 0; i < actArray.length; i += 1) {
    activitiesCreator(i, index, actArray[i]);
  }
};

const activitiesSubmitter = (evt) => {
  const index = evt.target.id.replace('editBActivities', '');

  const actForm = document.getElementById(`pActForm${index}`);
  const alert = document.getElementById('actAlerts');
  const title = document.getElementById(`titleInput${index}`).value;
  const description = document.getElementById(`descriptionAct${index}`).value;
  const dueDate = document.getElementById(`dueDateInput${index}`).value;
  const priorityInput = document.getElementById(`priorityInput${index}`).value;

  if (title !== '' || description !== '' || dueDate !== '' || priorityInput !== '') {
    const activity = new Activity(title, description, dueDate, priorityInput);
    projects[index].setActivities = activity;
    alert.innerHTML = '';
    actForm.className += ' hidden';
    activitiesRenderer(index, projects);
  } else {
    alert.innerHTML = 'You must fill the required fields to create a new Activity.';
  }
};

const projectRenderer = (projects) => {
  const projectDisplay = document.getElementById('projectDisplay');
  for (let index = 0; index < projects.length; index += 1) {
    projectDisplayer(projectDisplay, index, projects, editer, editMaster, activitiesSubmitter);
  }
};

const submitter = () => {
  const alert = document.getElementById('projectsAlert');
  const form = document.getElementById('projectFormContainer');
  const name = document.getElementById('nameInput').value;
  const objective = document.getElementById('objInput').value;
  const description = document.getElementById('descInput').value;
  const cDateInput = document.getElementById('cDateInput').value;

  if (name !== '' || objective !== '' || description !== '' || cDateInput !== '') {
    const project = new Project(name, objective);
    project.setDescription = description;
    project.setCompletionDate = cDateInput;
    form.className += ' hidden';
    alert.innerHTML = '';
    projects.push(project);
    projectRenderer(projects);
  } else {
    alert.innerHTML = 'You must fill the required fields';
  }
};

const adder = () => {
  const form = document.getElementById('projectFormContainer');
  form.classList.remove('hidden');
};

masterRenderer(submitter, adder);
