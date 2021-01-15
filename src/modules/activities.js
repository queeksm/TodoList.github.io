class Activity {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get getTitle() {
    return this.title;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getPriority() {
    return this.priority;
  }

  set setTitle(title) {
    this.title = title;
  }

  set setDescription(description) {
    this.description = description;
  }

  set setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set setPriority(priority) {
    this.priority = priority;
  }
}

export { Activity as default };