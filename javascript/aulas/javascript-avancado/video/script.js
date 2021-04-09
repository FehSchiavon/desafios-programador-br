let video = document.getElementById("video1")
let selectButton= document.getElementsByClassName("btn")

// Selecionar Botao e Mudar de Seta pa Mão
selectButton[0].style.cursor = "pointer"
selectButton[1].style.cursor = "pointer"
selectButton[2].style.cursor = "pointer"
selectButton[3].style.cursor = "pointer"
selectButton[4].style.cursor = "pointer"
selectButton[5].style.cursor = "pointer"


// Funcionalidades dos Botoes
function retroceder() {
    video.currentTime -= 15
}

function avancar() {
    video.currentTime += 15
}

function diminuir_vel() {
    video.playbackRate -= 0.1
}

function aumentar_vel() {
    video.playbackRate += 0.1
}

function play() {
    video.play()
}

function stop() {
    video.pause()
    video.currentTime = 0
}
