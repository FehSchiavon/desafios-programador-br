function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Suzana", 45),
    novoAluno("Felipe", 29),
    novoAluno("Joao", 35),
    novoAluno("Marcia", 50)
]

for (let aluno of alunos) {
    if (aluno.idade < 30) {
        console.log(aluno.nome)
    }
}

// Ou usando o Filter

function temMenosde30(aluno) {
    return aluno.idade < 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)
console.log(alunosComMenosde30)