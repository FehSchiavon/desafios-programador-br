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
console.log("=== Transformando String em Numeros ===");

var ta = "3"
var tb = "5"
var tc = "7.3"
// var totalc = ta + tb



// Usa para número inteiros
console.log("Usa para número inteiros - parseInt");

var numeroInteiro = parseInt(ta) + parseInt(tb);
console.log(numeroInteiro)



// Usa para número quebrados
console.log("Usa para número quebrados - parseFloat");

var numeroQuebrado = parseFloat(ta) + parseFloat(tc)
console.log(numeroQuebrado)


// Calculo no prompt
console.log("===Usando Prompt===")
// var numeroCalc = parseInt(prompt("Digite um número:"))

// var dobro = numeroCalc + numeroCalc

// Usando Alert
// alert("O dobro de  " + numeroCalc + " é " + dobro)

// Operador Ternário [Pode as vezes subistitir o IF]
// === Operação ? true : false;=== //
console.log("=== Operador Ternário ===");


var idadeTernario = 17

idadeTernario >= 18 ? console.log("Pode") : console.log("Não pode")
var pode = idadeTernario >= 18 ? true : false;
console.log(pode);



// Switch
console.log("Switch");

var nota1 = 5.0;
var nota2 = 5.8;

var media = (nota1 + nota2) / 2;

var conceito = "";

// ==================== //
if (media >= 8) {
    conceito = "Ótimo"
} else if (media >= 6.5) {
    conceito = "Bom"
} else {
    conceito = "Regular"
}

console.log(media);
console.log(conceito);
// ==================== //

switch (conceito) {
    case "Ótimo" :
        console.log("Parabéns você é um ótimo aluno")
        break
    case "Bom":
        console.log("Você está quase perfeito")
        break;
    case "Regular" :
        console.log("Estude mais um pouco");
        break;
    default:
        console.log("Houve algum erro");
        break;
}
// ==================== //


// Laços ou Loop (For e While)
// For
console.log("=== Usando FOR ===");

var numeroFor = 5

for (var vez = 0; vez < numeroFor; vez++) {
    console.log("Executando o FOR, pela " + vez + " Vez")
}
console.log("Acabou");


// While
console.log("=== Usando WHILE ===");

var numeroWhile = 5

while (numeroWhile < 10) {
    console.log("Numero " + numeroWhile)
    numeroWhile++
}

// Math.random() cria um numere entre (0 e 1)
console.log("=== Math.random() ===")
var valorAleatorio = Math.random()
console.log(valorAleatorio)


// ==================== //
// Arrays
console.log("=== Arrays ===");

var vetor = new Array();
var vetor1 = [];

var alunos = new Array("Igor", "Felipe", "Suzana");
console.log(alunos[0])
console.log(alunos.length);


console.log("=== For Tradicional ===");
for(var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

console.log("=== For IN ==="); // For com IN ele pega o Index
for (var i in alunos) {
    console.log(alunos[i]);
}

console.log("=== For OF ==="); // For com OF ele vai pegar já o elemento lá dentro
for (var i of alunos) {
    console.log(i);
}
// ==================== //



// Funções 
console.log("=== Usando Function ===");

function mediaFunction(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var mediaFunction = (nota1 + nota2) / 2
    // console.log(media);

    return mediaFunction
}

var resultado1 = mediaFunction(3, 4)
var resultado2 = mediaFunction(5, 8)

console.log(resultado1 + " E " + resultado2)

// Saudação Exemplo

function saudacao() {
    return "Olá Mundo"
}

// var s = saudacao()
// console.log(s)

// ou sendo que na segunda ele chama propria variavel

var s = saudacao
console.log(s())



// Function Anonima são (Funcões dentro de Variveis)
console.log("=== Function Anônima Normal ===");

var mediaAnonima = function (n1, n2) {
    return (n1 + n2) / 2
}

console.log(mediaAnonima(5, 6));

// Ou Arrow Function
console.log("=== Função Anônima Em Arrow Function===");

var mediaAnonima = (n1, n2) => {
    return (n1 + n2) / 2
}

console.log(mediaAnonima(5, 6));

// Juntando tudo até aqui
console.log("=== Juntando tudo até aqui ===");

// Nome do aluno - nota 1 - nota 2 - média = Aprovado / Reprovado

var nomes = ["Igor", "Felipe", "Suzana"];
var notaA = [7.0 , 6.5, 9.5];
var notaB = [8.0, 7.0 , 8.5];

function mediaAlunos(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    
    if (media > 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var index in nomes) {

    var nota1Alunos = notaA[index];
    var nota2Alunos = notaB[index];
    var m = media(nota1Alunos, nota2Alunos)
    
    console.log(nomes[index] + " - " + nota1Alunos + " - " + nota2Alunos + " - " + m + " - " + passou(m))
}




// Objetos - Propriedades
console.log("=== Objetos - Propriedades ===");
