it("can create a new note and add it to the stored notes", () => {
  let notePad = new NotePad();
  testNote = notePad.newNote("Title", "Description");
  assert.isEqual(notePad.notes[0].title, "Title");
  assert.isEqual(testNote.title, "Title");
  assert.isEqual(testNote.id, 0);
});
