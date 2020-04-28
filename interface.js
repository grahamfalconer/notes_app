var notepad = new NotePad();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    createNote();
    clearForm();
  });
});

function createNote() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let note = notepad.newNote(title, description);

  addNoteToList(note.shortDescription, title, note.id);
}

function addNoteToList(description, title, noteId) {
  let noteDescription = prepareElement("p", description + "...");
  let noteTitle = prepareElement("h3", title);
  let noteLink = document.createElement("a");
  let noteItem = document.createElement("li");
  noteItem.append(noteTitle, noteDescription);
  noteLink.append(noteItem);
  noteLink.setAttribute("href", `#${noteId}`);
  document.getElementById("notes").append(noteLink);
}

function prepareElement(element, text) {
  text = document.createTextNode(text);
  let tag = document.createElement(element);
  tag.appendChild(text);
  return tag;
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}
