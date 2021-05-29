var pessoa = {
    name: "José Silva",
    idade: 32
}

var contato = {
    telefone: 36248711,
    email: "name@gmail.com"
}

var copia = {...pessoa, cidade: "Rio de Janeiro", ...contato}
copia.idade = 88

console.log(pessoa)
console.log(copia)

// Juntando dos Arrays com Spread Operator

let notasTurma1 = [10, 12, 8, 4, 3]

let notasTurma2 = [4, 5, 6, 8, 9]

let todasNotasdaTurma = [...notasTurma1, ...notasTurma2]

console.log(todasNotasdaTurma)