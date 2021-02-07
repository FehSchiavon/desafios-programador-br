// alert("Integrando com arquivo externo")
// Usando Console
console.log("Oláá")


// ===Tipos de Dados=== //
// Boolean
// Null
// Undefined
// Number
// String

var a = "Palavra"; // String o \n coloca na proxima linha
console.log(a)

var b = 10; // Number
console.log(b)

var c =  // Undefined é indefinido
console.log(c)

var d = null; // Null é vazio
console.log(d)

var e = true; // Boolean é Verdadeiro ou Falso
console.log(e)



// ===Operações aritméticas=== //

// + Adição
// - Subtração
// * Multiplicação
// / Divisão
//  % Módulo é o resto da divisão
// ++ Incremento (ex: ++a adiciona antes / a++ adiciona depois)
// -- Decremento (ex: --b adiciona antes / b-- adiciona depois)

var a = 10;
var b = 15;

var c = a % b;
console.log(c)



// ===Atribuições=== //

// =    x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y

var ab = 30;

// Assim da para ajustar o tamanho incremento que você quer ( += )
a += 5;
// Ficaria 35



// ===Operadores Comparativos=== //

// == igual a
// === valor igual e igual
// != não é igual
// !== não igual ou não igual
// > maior que
// < menor de
// >= Maior que ou igual a
// <= Menor que ou igual a

var op = 3;
var com = 3;



// ===Operadores Lógicos=== //

// && e // quanto um for falso todos vao ser falso
// || ou // quantos somente os dois forem falsos ai vai ser falso
// Negativo

// var a = false;
// var b = false;

// var c = a && b

// console.log(c)

// Exemplo com validação de idade

var idade = 25;

var maior20 = idade > 20;
var menor30 = idade < 30;

var entre = maior20 && menor30

console.log("Idade", idade)
console.log("Maior que vinte", maior20)
console.log('Menor que trinta', menor30)
console.log("Entre 20 e 30", entre);

// Passe de Onibus Gratis

var idade = 10;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65

console.log("Idade", idade)
console.log('Menor que dez', menor10)
console.log("Maior que sessenta e cinco", maior65)
console.log("Tem direiro a gratuidade", gratuidade);


// ===STRING=== //
// Ele falou um pouco mais concatenação 

// ===Estruturas Condicionais IF / ELSE=== //
console.log("=== Estruturas Condicionais IF / ELSE ===");
// Exemplo de beber bebida alcoólica
console.log("--- Exemplo de beber bebida alcoólica ---");
var idadeParaBeber = 17;

if (idadeParaBeber >= 18) {
    console.log("Pode beber")
} else {
    console.log("Não pode beber");
}


// Transformando String em Numeros parseInt()
console.log("=== Transformando String em Numeros - parseInt() ===");

var ta = "3"
var tb = "5"
// var totalc = ta + tb

// Usa para número inteiros
var totalc = parseInt(ta) + parseInt(tb);

// Usa para número quebrados

console.log(totalc)