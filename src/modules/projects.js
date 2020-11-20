class Project {
  constructor(name,objective) {
    let date = new Date();
    this.name = name;
    this.objective = objective;
    this.startDate = date;
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
    this.activities = activities;
  }

}

export { Project  as default};