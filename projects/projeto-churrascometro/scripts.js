// Regra de Negocio
// Sempre que for criar um programa entenda a regra de negocio

// Homens
// Carne Bovina: 400 Gramas por pessoa + de 6 horas: 650 Gramas
// Carne de Frango: 300 Gramas por pessoa + de 6 horas: 600 Gramas
// Cerveja: 1200 Millilitros por pessoa + de 6 horas: 2000 Millilitros
// Refrigerante/ Água: 1000 Millilitros por pessoa + de 6 horas: 1500 Millilitros

// Mulheres
// Carne Bovina: 400 Gramas por pessoa + de 6 horas: 650 Gramas
// Carne de Frango: 300 Gramas por pessoa + de 6 horas: 600 Gramas
// Cerveja: 1200 Millilitros por pessoa + de 6 horas: 2000 Millilitros
// Refrigerante/ Água: 1000 Millilitros por pessoa + de 6 horas: 1500 Millilitros

// Crianças comemem metade disso (x0,5)

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular () {
    console.log("Calcular")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas)
    console.log(qdtTotalCarne);
}

function carnePP (duracao) {
    let carne = 400;
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}