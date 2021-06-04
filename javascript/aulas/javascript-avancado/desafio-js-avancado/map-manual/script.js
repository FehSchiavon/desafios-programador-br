// MAP MANUAL
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

let jogadores = [
    criarAlunos("Ana", 77),
    criarAlunos("Julio", 30),
    criarAlunos("Gabriel", 11),
    criarAlunos("Natan", 17),
    criarAlunos("Andreia", 98)
]

function nomeEidade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
}

// MAP MANUAL
let newArray = []
for (let i = 0; i < alunos.length; i++) {    
    newArray.push(nomeEidade(alunos[i]))
}

console.log(newArray)

// MAP MANUAL MAIS AUTOMATICO - [] Criar

// MAP TRADICIONAL
console.log(alunos.map(nomeEidade))