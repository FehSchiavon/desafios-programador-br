var pessoa = {
    name: "José Silva",
    idade: 32
}

var contato = {
    telefone: 36248711,
    email: "name@gmail.com"
}

var copia = {...pessoa}
copia.idade = 88

console.log(pessoa)
console.log(copia)