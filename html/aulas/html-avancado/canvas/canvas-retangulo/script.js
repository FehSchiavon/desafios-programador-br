let tela = document.getElementById('tela')

let context = tela.getContext('2d')

// === Retangulo preenchido === //
// context.fillStyle = "blue"
// context.fillRect(10, 10, 100, 200)

// === Retangulo sem preenchimento === //
// context.strokeStyle = "red"
// context.strokeRect(10, 10, 100, 200)

// === Outra forma de fazer a aplicação do Retangulo === //
context.rect(10, 10, 100, 200)
context.fillStyle = "blue"
context.lineWidth = 5
context.strokeStyle = "red"

context.fill()
context.stroke()

context.clearRect(20, 20, 30, 30)