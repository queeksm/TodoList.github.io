class Project {
  constructor(name, objective) {
    const date = new Date();
    this.name = name;
    this.objective = objective;
    this.startDate = date.toISOString();
    this.description = 'Lorem ipsus dolor sit amet';
    this.completionDate = 0;
    this.activities = [];
  }

  get getName() {
    return this.name;
  }

  get getObjective() {
    return this.objective;
  }

  get getStartDate() {
    return this.startDate;
  }

  get getDescription() {
    return this.description;
  }

  get getCompletionDate() {
    return this.completionDate;
  }

  get getActivities() {
    return this.activities;
  }

  set setName(name) {
    this.name = name;
  }

  set setObjective(objective) {
    this.objective = objective;
  }

  set setStartDate(startDate) {
    this.startDate = startDate;
  }

  set setDescription(description) {
    this.description = description;
  }

  set setCompletionDate(completionDate) {
    this.completionDate = completionDate;
  }

  set setActivities(activities) {
    this.activities.push(activities);
  }

  set eliminate(index) {
    this.activities.splice(index, 1);
  }
}

export { Project as default };