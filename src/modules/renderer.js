import '../style.css';

const mainRenderer = (key = 'blank', index = 'delta', actIndex = 'gamma', pFunctions = [], aFunctions = [], project = '', activity = '') => {

 const mainContainer = document.getElementById('main');
 const projectFlag = document.getElementById(`projectFormContainer${index}`);
 const activityFlag = document.getElementById(`activityContainer${index}${actIndex}`);
 

 switch (key) {
   case 'project':
    if (projectFlag == null) {
      const projectContainer = document.createElement('div');
      const projectName = document.createElement('div');
      const projectDates = document.createElement('div');
      const projectObjective = document.createElement('div');
      const projectDescription = document.createElement('div');
      const projectActivities = document.createElement('div');
      const newActbutton = document.createElement('button');
      const editProject = document.createElement('button');
      const deleteProject = document.createElement('button');
      const projectButtons = document.createElement('div');
      const projectAttrContainer = document.createElement('div');
      const projectMainContainer = document.createElement('div');

      const projectFormContainer = document.createElement('div');
      const projectFormName = document.createElement('div');
      const projectFormObjective = document.createElement('div');
      const projectFormDescription = document.createElement('div');
      const projectFormStartDate = document.createElement('div');
      const projectFormCompletionDate = document.createElement('div');

      const projectFormNameInput = document.createElement('input');
      const projectFormObjectiveInput = document.createElement('input');
      const projectFormDescriptionInput = document.createElement('input');
      const projectFormStartDateInput = document.createElement('input');
      const projectFormCompletionDateInput = document.createElement('input');
      const projectFormAcceptEditButton = document.createElement('button');

      const projectFormNameLabel = document.createElement('label');
      const projectFormObjectiveLabel = document.createElement('label');
      const projectFormDescriptionLabel = document.createElement('label');
      const projectFormStartDateLabel = document.createElement('label');
      const projectFormEndDateLabel = document.createElement('label');

      const activityFormTitleLabel = document.createElement('label');      
      const activityFormDescriptionLabel = document.createElement('label');
      const activityFormDateLabel = document.createElement('label');
      const activityFormPriorityLabel = document.createElement('label');

      const activityFormContainer = document.createElement('div');
      const activityFormTitle = document.createElement('div');
      const activityFormDescription = document.createElement('div');
      const activityFormDueDate = document.createElement('div');
      const activityFormPriority = document.createElement('div');

      const activityFormTitleInput = document.createElement('input');
      const activityFormDescriptionInput = document.createElement('input');
      const activityFormDueDateInput = document.createElement('input');
      const activityFormPriorityInput = document.createElement('input');

      const activityEditAccept = document.createElement('button');

      projectFormNameLabel.innerHTML = 'Project Name';
      projectFormObjectiveLabel.innerHTML = 'Project Objective';
      projectFormDescriptionLabel.innerHTML = 'Project Description';
      projectFormStartDateLabel.innerHTML = 'Start Date';
      projectFormEndDateLabel.innerHTML = 'End Date';

      activityFormTitleLabel.innerHTML = 'Activity Title';
      activityFormDescriptionLabel.innerHTML = 'Activity Description';
      activityFormDateLabel.innerHTML = 'Due Date';
      activityFormPriorityLabel.innerHTML = 'Priority';

      projectAttrContainer.setAttribute('id',`projectAttrContainer${index}`);
      projectAttrContainer.setAttribute('class','projectAttrContainer');

      projectMainContainer.setAttribute('id',`projectMainContainer${index}`);
      projectMainContainer.setAttribute('class','projectMainContainer');

      activityEditAccept.setAttribute('id',`activityEditAccept${index}`);
      activityEditAccept.setAttribute('class','activityEditAccept');
      activityEditAccept.addEventListener('click',pFunctions[6]);
      activityEditAccept.innerHTML = 'Create';

      activityFormContainer.setAttribute('id',`activityFormContainer${index}`);
      activityFormTitle.setAttribute('id',`activityFormTitle${index}`);
      activityFormDescription.setAttribute('id',`activityFormDescription${index}`);
      activityFormDueDate.setAttribute('id',`activityFormDueDate${index}`);
      activityFormPriority.setAttribute('id',`activityFormPriority${index}`);

      activityFormContainer.setAttribute('class','activityFormContainer hidden');
      activityFormTitle.setAttribute('class','activityFormTitle');
      activityFormDescription.setAttribute('class','activityFormDescription');
      activityFormDueDate.setAttribute('class','activityFormDueDate');
      activityFormPriority.setAttribute('class','activityFormPriority');

      activityFormTitleInput.setAttribute('id',`activityFormTitleInput${index}`);
      activityFormDescriptionInput.setAttribute('id',`activityFormDescriptionInput${index}`);
      activityFormDueDateInput.setAttribute('id',`activityFormDueDateInput${index}`);
      activityFormPriorityInput.setAttribute('id',`activityFormPriorityInput${index}`);

      activityFormTitleInput.setAttribute('class','activityFormTitleInput');
      activityFormDescriptionInput.setAttribute('class','activityFormDescriptionInput');
      activityFormDueDateInput.setAttribute('class','activityFormDueDateInput');
      activityFormPriorityInput.setAttribute('class','activityFormPriorityInput');

      activityFormTitleInput.setAttribute('type','text');
      activityFormDescriptionInput.setAttribute('type','text');
      activityFormDueDateInput.setAttribute('type','date');
      activityFormPriorityInput.setAttribute('type','numeric');

      projectFormContainer.setAttribute('id',`projectFormContainer${index}`);
      projectFormName.setAttribute('id',`projectFormName${index}`);
      projectFormObjective.setAttribute('id',`projectFormObjective${index}`);
      projectFormDescription.setAttribute('id',`projectFormDescription${index}`);
      projectFormStartDate.setAttribute('id',`projectFormStartDate${index}`);
      projectFormCompletionDate.setAttribute('id',`projectFormCompletionDate${index}`);
      projectFormAcceptEditButton.setAttribute('id',`projectFormAcceptEditButton${index}`);

      projectFormContainer.setAttribute('class','projectFormContainer hidden');
      projectFormName.setAttribute('class','projectFormName');
      projectFormObjective.setAttribute('class','projectFormObjective');
      projectFormDescription.setAttribute('class','projectFormDescription');
      projectFormStartDate.setAttribute('class','projectFormStartDate');
      projectFormCompletionDate.setAttribute('class','projectFormCompletionDate');
      projectFormAcceptEditButton.setAttribute('class','projectFormAcceptEditButton');

      projectFormNameInput.setAttribute('id',`projectFormNameInput${index}`);
      projectFormObjectiveInput.setAttribute('id',`projectFormObjectiveInput${index}`);
      projectFormDescriptionInput.setAttribute('id',`projectFormDescriptionInput${index}`);
      projectFormStartDateInput.setAttribute('id',`projectFormStartDateInput${index}`);
      projectFormCompletionDateInput.setAttribute('id',`projectFormCompletionDateInput${index}`);
      projectFormAcceptEditButton.addEventListener('click',pFunctions[5]);
      projectFormAcceptEditButton.innerHTML = 'Accept Edit';

      projectFormNameInput.setAttribute('class',`projectFormNameInput`);
      projectFormObjectiveInput.setAttribute('class',`projectFormObjectiveInput`);
      projectFormDescriptionInput.setAttribute('class',`projectFormDescriptionInput`);
      projectFormStartDateInput.setAttribute('class',`projectFormStartDateInput`);
      projectFormCompletionDateInput.setAttribute('class',`projectFormCompletionDateInput`);

      projectFormNameInput.setAttribute('type','text');
      projectFormObjectiveInput.setAttribute('type','text');
      projectFormDescriptionInput.setAttribute('type','text');
      projectFormStartDateInput.setAttribute('type','date');
      projectFormCompletionDateInput.setAttribute('type','date');

      projectContainer.setAttribute('id',`projectContainer${index}`);
      projectName.setAttribute('id',`projectName${index}`);
      projectDates.setAttribute('id',`projectDates${index}`);
      projectObjective.setAttribute('id',`projectObjective${index}`);
      projectDescription.setAttribute('id',`projectDescription${index}`);
      projectActivities.setAttribute('id',`projectActContainer${index}`);
      newActbutton.setAttribute('id',`newActButton${index}`);
      editProject.setAttribute('id',`editProject${index}`);
      deleteProject.setAttribute('id',`deleteProject${index}`);    
      projectButtons.setAttribute('id',`projectButtons${index}`);

      projectContainer.setAttribute('class','projectContainer');
      projectName.setAttribute('class','projectName');
      projectDates.setAttribute('class','projectDates');
      projectObjective.setAttribute('class','projectObjective');
      projectDescription.setAttribute('class','projectDescription');
      projectActivities.setAttribute('class','projectActContainer');
      newActbutton.setAttribute('class','newActButton');
      editProject.setAttribute('class','editProject');
      deleteProject.setAttribute('class','deleteProject');
      projectButtons.setAttribute('class','projectButtons');

      newActbutton.innerHTML = 'New Activity';
      editProject.innerHTML = 'Edit project';
      deleteProject.innerHTML = 'Delete project';

      newActbutton.addEventListener('click',pFunctions[0]);
      editProject.addEventListener('click',pFunctions[1]);
      deleteProject.addEventListener('click',pFunctions[2]);

      projectFormName.appendChild(projectFormNameInput);
      projectFormObjective.appendChild(projectFormObjectiveInput);
      projectFormDescription.appendChild(projectFormDescriptionInput);
      projectFormStartDate.appendChild(projectFormStartDateInput);
      projectFormCompletionDate.appendChild(projectFormCompletionDateInput);

      projectFormContainer.appendChild(projectFormNameLabel);
      projectFormContainer.appendChild(projectFormName);
      projectFormContainer.appendChild(projectFormObjectiveLabel);
      projectFormContainer.appendChild(projectFormObjective);
      projectFormContainer.appendChild(projectFormDescriptionLabel);
      projectFormContainer.appendChild(projectFormDescription);
      projectFormContainer.appendChild(projectFormStartDateLabel);
      projectFormContainer.appendChild(projectFormStartDate);
      projectFormContainer.appendChild(projectFormEndDateLabel);
      projectFormContainer.appendChild(projectFormCompletionDate);
      projectFormContainer.appendChild(projectFormAcceptEditButton);
      
      projectButtons.appendChild(editProject);
      projectButtons.appendChild(deleteProject);
      
      activityFormTitle.appendChild(activityFormTitleInput);      
      activityFormDescription.appendChild(activityFormDescriptionInput);
      activityFormDueDate.appendChild(activityFormDueDateInput);
      activityFormPriority.appendChild(activityFormPriorityInput);

      activityFormContainer.appendChild(activityFormTitleLabel);
      activityFormContainer.appendChild(activityFormTitle);
      activityFormContainer.appendChild(activityFormDescriptionLabel);
      activityFormContainer.appendChild(activityFormDescription);
      activityFormContainer.appendChild(activityFormDateLabel);
      activityFormContainer.appendChild(activityFormDueDate);
      activityFormContainer.appendChild(activityFormPriorityLabel);
      activityFormContainer.appendChild(activityFormPriority);
      activityFormContainer.appendChild(activityEditAccept);
      
      projectActivities.appendChild(activityFormContainer);
      projectActivities.appendChild(newActbutton);

      projectAttrContainer.appendChild(projectName);
      projectAttrContainer.appendChild(projectDates);
      projectAttrContainer.appendChild(projectObjective);
      projectAttrContainer.appendChild(projectDescription);

      projectMainContainer.appendChild(projectAttrContainer);
      projectMainContainer.appendChild(projectButtons);

      projectContainer.appendChild(projectMainContainer);      
      projectContainer.appendChild(projectFormContainer);
      projectContainer.appendChild(projectActivities);
    
      mainContainer.appendChild(projectContainer);

      projectName.innerHTML = project.getName;
      projectDates.innerHTML = project.getStartDate;
      projectObjective.innerHTML = project.getObjective;
      projectDescription.innerHTML = project.getDescription;
      break;
    } else {
      break;
    }

   case 'activity':
     if (activityFlag == null) {
      const actmainContainer = document.getElementById(`projectActContainer${index}`);

      const activityContainer = document.createElement('div');
      const activityTitle = document.createElement('div');
      const activityDescription = document.createElement('div');
      const activityDate = document.createElement('div');
      const activityPriority = document.createElement('div');
      const actButtons = document.createElement('div');
      const delActButton = document.createElement('button');
      const editActButton = document.createElement('button');
      const actAttrContainer = document.createElement('div');
      const actInfoContainer = document.createElement('div');      
  
      const activityFormContainer = document.createElement('div');
      const activityFormTitle = document.createElement('div');
      const activityFormDescription = document.createElement('div');
      const activityFormDueDate = document.createElement('div');
      const activityFormPriority = document.createElement('div');
      const activityEditAccept = document.createElement('button');
  
      const activityFormTitleInput = document.createElement('input');
      const activityFormDescriptionInput = document.createElement('input');
      const activityFormDueDateInput = document.createElement('input');
      const activityFormPriorityInput = document.createElement('input');

      actAttrContainer.setAttribute('id',`actAttrContainer${index}`);
      actAttrContainer.setAttribute('class','actAttrContainer');

      actInfoContainer.setAttribute('id',`actInfoContainer${index}`);
      actInfoContainer.setAttribute('class','actInfoContainer');

      activityEditAccept.setAttribute('id',`activityEditAccept${index}${actIndex}`);
      activityEditAccept.setAttribute('class','activityEditAccept');
      activityEditAccept.addEventListener('click',aFunctions[2]);
      activityEditAccept.innerHTML = 'Accept edit';
  
      activityFormContainer.setAttribute('id',`activityFormContainer${index}${actIndex}`);
      activityFormTitle.setAttribute('id',`activityFormTitle${index}${actIndex}`);
      activityFormDescription.setAttribute('id',`activityFormDescription${index}${actIndex}`);
      activityFormDueDate.setAttribute('id',`activityFormDueDate${index}${actIndex}`);
      activityFormPriority.setAttribute('id',`activityFormPriority${index}${actIndex}`);
  
      activityFormContainer.setAttribute('class','activityFormContainer hidden');
      activityFormTitle.setAttribute('class','activityFormTitle');
      activityFormDescription.setAttribute('class','activityFormDescription');
      activityFormDueDate.setAttribute('class','activityFormDueDate');
      activityFormPriority.setAttribute('class','activityFormPriority');
      
      activityFormTitleInput.setAttribute('id',`activityFormTitleInput${index}${actIndex}`);
      activityFormDescriptionInput.setAttribute('id',`activityFormDescriptionInput${index}${actIndex}`);
      activityFormDueDateInput.setAttribute('id',`activityFormDueDateInput${index}${actIndex}`);
      activityFormPriorityInput.setAttribute('id',`activityFormPriorityInput${index}${actIndex}`);
  
      activityFormTitleInput.setAttribute('class','activityFormTitleInput');
      activityFormDescriptionInput.setAttribute('class','activityFormDescriptionInput');
      activityFormDueDateInput.setAttribute('class','activityFormDueDateInput');
      activityFormPriorityInput.setAttribute('class','activityFormPriorityInput');
  
      activityFormTitleInput.setAttribute('type','text');
      activityFormDescriptionInput.setAttribute('type','text');
      activityFormDueDateInput.setAttribute('type','date');
      activityFormPriorityInput.setAttribute('type','numeric');
  
      activityContainer.setAttribute('id',`activityContainer${index}${actIndex}`);
      activityTitle.setAttribute('id',`activityTitle${index}${actIndex}`);
      activityDescription.setAttribute('id',`activityDescription${index}${actIndex}`);
      activityDate.setAttribute('id',`activityDate${index}${actIndex}`);
      activityPriority.setAttribute('id',`activityPriority${index}${actIndex}`);
      delActButton.setAttribute('id',`delActButton${index}${actIndex}`);
      editActButton.setAttribute('id',`editActButton${index}${actIndex}`);
      actButtons.setAttribute('id',`actButtons${index}${actIndex}`);
    
      activityContainer.setAttribute('class','activityContainer');
      activityTitle.setAttribute('class','activityTitle');
      activityDescription.setAttribute('class','activityDescription');
      activityDate.setAttribute('class','activityDate');
      activityPriority.setAttribute('class','activityPriority');
      delActButton.setAttribute('id',`delActButton${index}${actIndex}`);
      editActButton.setAttribute('id',`editActButton${index}${actIndex}`);
      actButtons.setAttribute('class','actButtons');
  
      delActButton.addEventListener('click',aFunctions[0]);
      editActButton.addEventListener('click',aFunctions[1]);
  
      delActButton.innerHTML = 'Delete Activity';
      editActButton.innerHTML = 'Edit Activity';
  
      activityFormTitle.appendChild(activityFormTitleInput);
      activityFormDescription.appendChild(activityFormDescriptionInput);
      activityFormDueDate.appendChild(activityFormDueDateInput);
      activityFormPriority.appendChild(activityFormPriorityInput);
  
      activityFormContainer.appendChild(activityFormTitle);
      activityFormContainer.appendChild(activityFormDescription);
      activityFormContainer.appendChild(activityFormDueDate);
      activityFormContainer.appendChild(activityFormPriority);
      activityFormContainer.appendChild(activityEditAccept);
  
      actButtons.appendChild(delActButton);
      actButtons.appendChild(editActButton);

      actAttrContainer.appendChild(activityTitle);
      actAttrContainer.appendChild(activityDescription);
      actAttrContainer.appendChild(activityDate);
      actAttrContainer.appendChild(activityPriority);

      actInfoContainer.appendChild(actAttrContainer);
      actInfoContainer.appendChild(actButtons);
  
      activityContainer.appendChild(actInfoContainer);      
      activityContainer.appendChild(activityFormContainer);      
  
      actmainContainer.appendChild(activityContainer);
  
  
      activityTitle.innerHTML = activity.getTitle;
      activityDescription.innerHTML = activity.getDescription;
      activityDate.innerHTML = activity.getDueDate;
      activityPriority.innerHTML =activity.getPriority;
     }    
    break;

   default:
    const alertShower = document.createElement('div');
    const newProject = document.createElement('button');
    const defaultFormContainer = document.createElement('div');
    const defaultProjectName = document.createElement('div');
    const defaultProjectDates = document.createElement('div');
    const defaultProjectObjective = document.createElement('div');
    const defaultProjectDescription = document.createElement('div');

    const defaultProjectNameLabel = document.createElement('label');
    const defaultProjectDatesLabel = document.createElement('label');
    const defaultProjectObjectiveLabel = document.createElement('label');
    const defaultProjectDescriptionLabel = document.createElement('label');

    const defaultProjectNameInput = document.createElement('input');
    const defaultProjectDatesInput = document.createElement('input');
    const defaultProjectObjectiveInput = document.createElement('input');
    const defaultProjectDescriptionInput = document.createElement('input');

    const acceptNewProject = document.createElement('button');

    alertShower.setAttribute('id','masterAlert');
    alertShower.setAttribute('class','masterAlert');

    acceptNewProject.setAttribute('id','acceptNewProject');
    acceptNewProject.setAttribute('class','acceptNewProject');
    acceptNewProject.addEventListener('click',pFunctions[4]);
    acceptNewProject.innerHTML = 'Create';

    defaultProjectNameLabel.innerHTML = 'Project Name:';
    defaultProjectDatesLabel.innerHTML = 'Project Finishing Date:';
    defaultProjectObjectiveLabel.innerHTML = 'Project Objective:';
    defaultProjectDescriptionLabel.innerHTML = 'Project Description:';

    defaultFormContainer.setAttribute('id','defaultFormContainer');
    defaultProjectName.setAttribute('id','defaultProjectName');
    defaultProjectDates.setAttribute('id','defaultProjectDates');
    defaultProjectObjective.setAttribute('id','defaultProjectObjective');
    defaultProjectDescription.setAttribute('id','defaultProjectDescription');

    defaultFormContainer.setAttribute('class','defaultFormContainer hidden');
    defaultProjectName.setAttribute('class','defaultProjectName');
    defaultProjectDates.setAttribute('class','defaultProjectDates');
    defaultProjectObjective.setAttribute('class','defaultProjectObjective');
    defaultProjectDescription.setAttribute('class','defaultProjectDescription');

    defaultProjectNameInput.setAttribute('id','defaultProjectNameInput');
    defaultProjectDatesInput.setAttribute('id','defaultProjectDatesInput');
    defaultProjectObjectiveInput.setAttribute('id','defaultProjectObjectiveInput');
    defaultProjectDescriptionInput.setAttribute('id','defaultProjectDescriptionInput');

    defaultProjectNameInput.setAttribute('class','defaultProjectNameInput');
    defaultProjectDatesInput.setAttribute('class','defaultProjectDatesInput');
    defaultProjectObjectiveInput.setAttribute('class','defaultProjectObjectiveInput');
    defaultProjectDescriptionInput.setAttribute('class','defaultProjectDescriptionInput');

    defaultProjectNameInput.setAttribute('type','text');
    defaultProjectDatesInput.setAttribute('type','date');
    defaultProjectObjectiveInput.setAttribute('type','text');
    defaultProjectDescriptionInput.setAttribute('type','text');

    newProject.setAttribute('id','newProject');
    newProject.setAttribute('class','newProject');
    newProject.addEventListener('click',pFunctions[3]);

    newProject.innerHTML = 'New Project';
    
    defaultProjectName.appendChild(defaultProjectNameInput);
    defaultProjectDates.appendChild(defaultProjectDatesInput);
    defaultProjectObjective.appendChild(defaultProjectObjectiveInput);
    defaultProjectDescription.appendChild(defaultProjectDescriptionInput);

    defaultFormContainer.appendChild(defaultProjectNameLabel);
    defaultFormContainer.appendChild(defaultProjectName);
    defaultFormContainer.appendChild(defaultProjectDatesLabel);
    defaultFormContainer.appendChild(defaultProjectDates);
    defaultFormContainer.appendChild(defaultProjectObjectiveLabel);
    defaultFormContainer.appendChild(defaultProjectObjective);
    defaultFormContainer.appendChild(defaultProjectDescriptionLabel);
    defaultFormContainer.appendChild(defaultProjectDescription);
    defaultFormContainer.appendChild(acceptNewProject);

    mainContainer.appendChild(alertShower);
    mainContainer.appendChild(defaultFormContainer);
    mainContainer.appendChild(newProject);

    break;
 }
}

export { mainRenderer };