let tela = document.getElementById('tela')

let context = tela.getContext('2d')


let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 2 * Math.PI

context.beginPath()
context.stokeStyle = "red"

context.arc(x, y, raio, inicio, fim)

context.stoke()