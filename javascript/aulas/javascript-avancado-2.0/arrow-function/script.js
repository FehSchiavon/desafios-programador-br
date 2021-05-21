// Forma Tradicional
function dobro(x) {
    console.log(2 * x)
}

dobro(2)




// Forma Dentro de uma Variavel (Funcao Anonima)
let dobro2 = function (x) {
    console.log(2 * x)
}

dobro2(4)




// Arrow Function Tradicional (Funcao Anonima)
let dobro3 = (x) => {
    console.log(2 * x)
}

dobro3(7)




// Arrow Function Simplificada com UM Argumento (Funcao Anonima)
let dobro4 = x => {
    console.log(2 * x)
}

dobro4(13)




// Arrow Function Simplificada com UM Argumento usando RETURN (Funcao Anonima)
let dobro5 = x => {
    return(2 * x)
}

console.log(dobro5(1))




// Arrow Function SUPER Simplificada com UM Argumento usando RETURN (Funcao Anonima)
let dobro6 = x => (2 * x)

console.log(dobro6(100))

// Ou
let dobro7 = x => 2 * x

console.log(dobro7(337))



// Arrow Function This e Bind não existe ela pega sempre o TAG Global 
// Que é o navegador
let dobro8 = function() {
    return 2 * this.x
}

let numero = {
    x: 8,
    d: dobro8
}

console.log(numero.d())
