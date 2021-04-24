let tela = document.getElementById('tela')

let context = tela.getContext('2d')



let circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
    // Consegui mudar o sentido que esta sendo gerado o circulo
    antiHours: false
}

function drawCircule(circle) {

    context.beginPath()
    context.rect(0, 0, 500, 500)
    context.fillStyle = "beige"
    context.fill()


    context.beginPath()
    context.strokeStyle = "red"
    context.fillStyle = "blue"
    
    context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim, circle.antiHours)
    
    context.fill()
    context.stroke()
}

setInterval(function(){

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.1
        circle.x += 2.3
    }

    drawCircule(circle)

}, 50)