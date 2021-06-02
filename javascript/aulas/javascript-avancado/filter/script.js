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

function temMaisde30(aluno) {
    return aluno.idade > 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30) // Trocando temMenosde30 por temMaisde30 ele funciona normalmente
console.log(alunosComMenosde30)






// Filter mais elaborado
function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

function filtro(callback) {

    let alunosFiltrados = []
    for(let aluno of alunos) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

console.log(filtro(temMaisde30))





// Filter nivel PRO
let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Marcela", 45),
    novoAluno("Bruna", 29),
    novoAluno("Pedro", 35),
    novoAluno("Josi", 50)
]

function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

function filtroPRO(callback) {

    let alunosFiltrados = []
    for(let aluno of this) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

alunos.filtroPRO = filtroPRO
jogadores.filtroPRO = filtroPRO

// Desta forma você PODE usar qualquer Array. So trocar o nome do Array
// console.log(alunos.filtro(temMaisde30))
console.log(jogadores.filtroPRO(temMaisde30))