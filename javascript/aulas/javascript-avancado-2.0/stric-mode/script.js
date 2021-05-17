// Quando uma variavel é usada sem o VAR antes. Ela se torna Global

var x = 7; // É Global pois não esta dentro de uma Função

function imprimir() {
    var y = 9
    console.log(y)
}

imprimir()
console.log(x)
console.log(window)