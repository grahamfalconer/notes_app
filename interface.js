var notepad = new NotePad();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    note = createNote();
    addNoteToList(note.shortDescription, note.title, note.id);
    clearForm();
  });
});

function createNote() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  return notepad.newNote(title, description);
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
