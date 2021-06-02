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

let jogadores = [
    criarAlunos("Ana", 77),
    criarAlunos("Julio", 30),
    criarAlunos("Gabriel", 11),
    criarAlunos("Natan", 17),
    criarAlunos("Andreia", 98)
]





// Criando REDUCE MANUAL NOME
function reduzirManualNome(array, valor) {
    let todosAlunos = valor

    for(let i = 0; i < array.length; i++) {     
        todosAlunos  += array[i].nome
    }

    console.log(todosAlunos)
}

reduzirManualNome(alunos, "")
reduzirManualNome(jogadores, "")





// Criando REDUCE MANUAL IDADE
function reduzirManualIdade(array, valor) {
    let todosAlunos = valor

    for(let i = 0; i < array.length; i++) {     
        todosAlunos  += array[i].idade
    }

    console.log(todosAlunos)
}

reduzirManualIdade(alunos, 0)
reduzirManualIdade(jogadores, 0)