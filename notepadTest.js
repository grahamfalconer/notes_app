it("can create a new note and add it to the stored notes", () => {
  let notePad = new NotePad();
  notePad.newNote("Title", "Description");
  assert.isEqual(notePad.notes[0].title, "Title");
});
