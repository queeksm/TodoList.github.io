// Project class generator.
// Required: Name, Objective, Description, Creation and Estimated Completion dates, List of Activities.

class Projects {
  constructor(name,objective) {
    this.name = name;
    this.objective = objective;
    this.startDate = Date.now();
    this.description = '';
    this.completionDate = 0;
    this.activities = [];
  }

  get name() {
    return this.name;
  }

  get objective() {
    return this.objective;
  }

  get startDate() {
    return this.startDate;
  }

  get description() {
    return this.description;
  }

  get completionDate() {
    return this.completionDate;
  }

  get activities() {
    return this.activities;
  }

  set name(name) {
    this.name = name;
  }

  set objective(objective) {
    this.objective = objective;
  }

  set startDate(startDate) {
    this.startDate = startDate;
  }

  set description(description) {
    this.description = description;
  }

  set completionDate(completionDate) {
    this.completionDate = completionDate;
  }

  set activities(activities) {
    this.activities = activities;
  }
}