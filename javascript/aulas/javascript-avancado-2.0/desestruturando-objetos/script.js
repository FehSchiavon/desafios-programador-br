let aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 991273538,
    cidade: "Barra do Pirai"
}

let aluno1 = {
    matricula: 1204,
    nome: "Pedro",
    telefone: 99214538,
    cidade: "Avenida do Pirai"
}

let aluno2 = {
    matricula: 1704,
    nome: "Gabriel",
    telefone: 99214538,
    cidade: "Avenida do Pirai"
}

// Desestruturando UM itens somente - OBJETO
// let { matricula } = aluno
// console.log(matricula)

// let { nome } = aluno
// console.log(nome)




// Desestriturando MAIS ITENS - OBJETO
// let { matricula, nome, ...resto } = aluno
// console.log(resto)
// Observe que o RESTO só aparece telefone/cidade
// Quando coloca mais itens. Ele somente vai deixa separado os que estao nos ...






// Juntos a desestruturacao dentro de uma ARRAY
// let alunos = [aluno, aluno1]
// console.log(alunos)

// let [marcos, pedro] = alunos //Lembre de manter a mesma sequencia
// console.log(marcos)








// Desestruturando ARRAY maior
let turmaAlunos = [aluno, aluno1, aluno2]

let [marcos, ...outros] = turmaAlunos
console.log(marcos)
console.log(outros)
