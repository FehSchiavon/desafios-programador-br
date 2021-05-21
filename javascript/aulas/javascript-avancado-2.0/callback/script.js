// Primeiro exemplo de Callback
function ola() {
    console.log("Ola")
}

function tchau() {
    console.log("Tchau")
}

function saudacao(s, nome) {
    s()
    console.log(nome)
}

saudacao(tchau, "Felipe")



// Segundo Exemplo

let usuarios = ["Felipe", "Igor", "José"]