document.addEventListener('DOMContentLoaded', function() {

  var notepad = new NotePad()

  document.getElementById('submit').addEventListener("click",function(event){
    event.preventDefault()

    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

    let note = notepad.newNote(title, description)

    titleText = document.createTextNode(title)
    descriptionText = document.createTextNode(description)

    let noteTitle = document.createElement('h3')
    let noteDescription = document.createElement('p')
    
    noteTitle.appendChild(titleText)
    noteDescription.appendChild(descriptionText)

    let noteItem = document.createElement('li')

    noteItem.append(noteTitle)
    noteItem.append(noteDescription)

    let noteLink = document.createElement('a')

    noteLink.append(noteItem)


    noteLink.setAttribute('href', `#${note.id}`)

    document.getElementById('notes').append(noteLink)

    document.getElementById('title').value = ""
    document.getElementById('description').value = ""
  })

})


