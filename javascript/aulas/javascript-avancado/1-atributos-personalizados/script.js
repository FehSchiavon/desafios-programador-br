let image = document.getElementById("like")

image.addEventListener("click", function() {
    // Primeira forma de fazer
    // image.src = "./dislike.png"


    // Segunda forma de fazer 
    image.setAttribute("src", "./dislike.png")

    // O setAttribute por fazer também, que e criar uma class/id/o que quiser dentro do elemento
    image.setAttribute("cor", "vermelho")
})


//=== === === === === === === === === === === === ===//
// Atributos Personalizados 1 - Criando Lista pelo JS
let lista = document.getElementById("lista")
let num = parseInt(lista.getAttribute("num"))

let conteudo = ""

for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "<li>"
}

lista.innerHTML = conteudo
//=== === === === === === === === === === === === ===//

//=== === === === === === === === === === === === ===//
// Atribuitos Personalizados 2 