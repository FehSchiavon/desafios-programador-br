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


// Atribuição por VALOR
// Faz uma cópia do orginal, mas não reflete no original

// Atribuição por REFERENCIA
// Não faz um cópia do original, mas modifica o elemento original