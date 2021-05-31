
function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak()
cat.speak()

// Bind server para voce nao deixar o This sem nada
// Porque o This ele precisa de algo antes se nao ele aparece como Underfind
let bindedFunction = speakGeneric.bind(cat)
bindedFunction()