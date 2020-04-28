function NotePad() {
  this.notes = [];
}

NotePad.prototype.newNote = function (title, description) {
  let id = this.notes.length
  let note = new Note(title, description, id);
  this.notes.push(note);
  return note
};
