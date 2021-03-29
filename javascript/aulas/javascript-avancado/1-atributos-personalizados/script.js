let image = document.getElementById("like")

image.addEventListener("click", function() {
    // Primeira forma de fazer
    // image.src = "./dislike.png"


    // Segunda forma de fazer 
    image.setAttribute("src", "./dislike.png")

    
})