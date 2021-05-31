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

// IDADE
function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

// Reduce ele faz a soma total de algum Array ou Objeto que você tenha
// Contatena tudo
console.log(alunos.reduce(idadeDaTurma, 0))




// NOMEZAO
function nomezaoTurma(nomezao, aluno) {
    return nomezao + aluno.nome
}

console.log(alunos.reduce(nomezaoTurma, ""))