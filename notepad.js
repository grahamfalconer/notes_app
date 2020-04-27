function NotePad() {
  this.notes = []
}

NotePad.prototype.newNote = function(title, description) {
  let note = new Note(title, description)
  this.notes.push(note)
}
