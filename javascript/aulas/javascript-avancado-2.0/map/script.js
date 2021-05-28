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

function nomeEidade1(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
}

console.log(alunos.map(nomeEidade1))


// Entendo mais sobre MAP
function nomeEidade2(aluno) {
    return {
        name: aluno.nome,
        age: aluno.idade
    }
}

console.log(alunos.map(nomeEidade2))


// Entendo mais sobre MAP - ERROS usado +=
function nomeEidade3(aluno) {
    aluno.idade += 5
    return aluno
}

console.log(alunos.map(nomeEidade3))