let tela = document.getElementById('tela')

let context = tela.getContext('2d')


// Fazendo uma acao com a linha
context.beginPath()

context.lineWidth = 4
context.strokeStyle = "red"
context.moveTo(10, 10)
context.lineTo(400, 200)
context.stroke()


// Fazendo outra acao com linha
context.beginPath()

context.lineWidth = 7
context.strokeStyle = "blue"
context.moveTo(30, 10)
context.lineTo(300, 300)
context.stroke()


// Fazendo mais outra acao com linha
context.beginPath()

context.lineWidth = 15
context.strokeStyle = "pink"
context.fillStyle = "green"
context.moveTo(250, 70)
context.lineTo(200, 200)
context.lineTo(100, 200)
context.closePath()
context.stroke()
context.fill()