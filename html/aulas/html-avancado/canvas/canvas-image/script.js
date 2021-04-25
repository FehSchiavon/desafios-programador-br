let tela = document.getElementById('tela')

let context = tela.getContext('2d')

// === Forma 1° de colocar imagem no Canvas === //
// let img = document.getElementById("bible")
// context.drawImage(img, 20, 20)

// === Forma 2° de colocar imagem no Canvas === //
let img = new Image()
img.src = "./bible.png"

img.onload = desenharImg

function desenharImg() {
    context.drawImage(this, 20, 20, this.naturalWidth / 3, this.naturalHeight / 3)

}

