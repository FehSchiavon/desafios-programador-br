// Array
let turmaA = ["Igor", "José", "Paula"] 

// Sever para desvincular os Arrays
let turmaB = turmaA.slice()

// Ou com [...]
let turmaC = [...turmaA]

turmaB.push("João")


// ====================================



// Objetos
let alunoA = {nome: "Igor", idade: 23}

let alunoB = Object.arguments({}, alunoA)
alunoB.idade = 25

// Ou com {...}

let alunoC = {...alunoA}
alunoC.idade = 25
