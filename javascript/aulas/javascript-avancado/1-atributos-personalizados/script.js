let image = document.getElementById("like")

image.addEventListener("click", function() {
    // Primeira forma de fazer
    // image.src = "./dislike.png"


    // Segunda forma de fazer 
    image.setAttribute("src", "./dislike.png")

    // O setAttribute por fazer também, que e criar uma class/id/o que quiser dentro do elemento
    image.setAttribute("cor", "vermelho")
})