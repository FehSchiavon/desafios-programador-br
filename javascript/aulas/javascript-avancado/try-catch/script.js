// Try Catch serve para Tratar Erros

// let nome = ""

try {
    console.log(nome)
} catch (err) {
    console.log("Houve um erro", err)
} finally {
    console.log("Boa noite")
}

// OU

try {
    if(nome == "") {
        throw "O nome nao pode ser vazio"
    }
    console.log(nome)
} catch (err) {
    console.log("Houve um erro", err)
}

console.log("Boa noite")