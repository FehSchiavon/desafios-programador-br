// REDUCE MANUAL
function criarAlunos(nome, idade) {
    return {nome, idade}
}

let alunos = [
    criarAlunos("Pedro", 25),
    criarAlunos("Suzana", 23),
    criarAlunos("Felipe", 28),
    criarAlunos("Matheus", 19),
    criarAlunos("Ronaldo", 35)
]

console.log(alunos.length)

for(aluno of alunos) {
    // console.log(aluno.nome)
    let turmaAlunos = aluno.nome + aluno.nome
    // console.log(turmaAlunos)
}

for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
    let turmaAlunos = alunos[i].nome
    console.log(turmaAlunos)
}