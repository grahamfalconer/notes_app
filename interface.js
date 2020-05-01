var notepad = new NotePad();

document.addEventListener("DOMContentLoaded", function() {
  //renderSubmit()
  let home = document.getElementById("content").innerHTML;
  window.location.hash = "#list";
  window.addEventListener("hashchange", function () {
    if (window.location.hash === "#list") {
      restoreList(home);
    } else {
      displayNote();
    }
  })
  submitListener()
})


function restoreList(home) {
  document.getElementById("content").innerHTML = home;
  submitListener()
  notepad.notes.forEach((note) =>
    addNoteToList(note.shortDescription, note.title, note.id)
  );
}

function displayNote() {
  let noteIndex = window.location.hash.split("#")[1];
  let note = notepad.notes[noteIndex];
  let title = prepareElement("h2", note.title);
  let description = prepareElement("p", note.description);
  let content = document.getElementById("content");
  content.innerHTML = "";
  let back = prepareElement("a", "back");
  content.append(title, description, back);
  back.setAttribute("href", `#list`);
}

function createNote() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  return notepad.newNote(title, description);
}

function addNoteToList(description, title, id) {
  let noteDescription = prepareElement("p", description + "...");
  let noteTitle = prepareElement("h3", title);
  let noteLink = document.createElement("a");
  let noteItem = document.createElement("li");
  noteItem.append(noteTitle, noteDescription);
  noteLink.append(noteItem);
  noteLink.setAttribute("href", `#${id}`);
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

function submitListener() {
  document.getElementById("submit").addEventListener("click", function() {
    note = createNote();
    addNoteToList(note.shortDescription, note.title, note.id);
    clearForm();
  })};
