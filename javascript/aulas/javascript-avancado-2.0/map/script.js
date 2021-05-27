function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Luigi", 45),
    novoAluno("Princesa", 29),
    novoAluno("Bonzer", 35),
    novoAluno("Fantasma", 18),
]

function nomeEidade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
}

console.log(alunos.map(nomeEidade))


// Entendo mais sobre MAP