// Regra de Negocio
// Sempre que for criar um programa entenda a regra de negocio

// Homens
// [X] Carne Bovina: 400 Gramas por pessoa + de 6 horas: 650 Gramas 
// [] Carne de Frango: 300 Gramas por pessoa + de 6 horas: 600 Gramas
// [X] Cerveja: 1200 Millilitros por pessoa + de 6 horas: 2000 Millilitros
// [X] Refrigerante/ Água: 1000 Millilitros por pessoa + de 6 horas: 1500 Millilitros

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

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Lavas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2 Litros de Bebidas</p>`
}

function carnePP (duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP (duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP (duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}