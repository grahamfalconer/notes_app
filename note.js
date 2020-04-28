function Note(title, description, id) {
  this.title = title;
  this.description = description;
  this.id = id;
  this.shortDescription = description.substring(0, 20);
}
