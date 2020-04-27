function Note(title, description){
    this.title = title
    this.description = description
    this.shortDescription = description.substring(0, 20)
}