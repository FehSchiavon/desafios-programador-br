function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]
console.log(alunos)

function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))