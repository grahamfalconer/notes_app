it("can create a note with a description and title", function () {
  var note = new Note("Testing title", "Test Description");
  assert.isEqual(note.title, "Testing title");
  assert.isEqual(note.description, "Test Description");
});
it("will return the first 20 characters if description exceeds 20 characters(nice test bro)", function () {
  var note = new Note(
    "Testing title",
    "Lorum Ipsum is a lady who was born in Croatia, her first haircut was by her mother beth, her second by her brother Bilo"
  );
  assert.isEqual(note.shortDescription, "Lorum Ipsum is a lad");
});
