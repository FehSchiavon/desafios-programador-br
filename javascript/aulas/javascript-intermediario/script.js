// Window
console.log("=== Aprendo mais sobre o Window ===");
// Window que dona das propridades [console.log / alert / prompt ...]
window.console.log("Ele vem do Window")
alert("É como se fosse POP / A propriedade Alert()")






// Document acessa todo o nosso HTML
console.log("=== Usado o Document ou DOM");
window.document
console.log(document);
// Acessando o Body
console.log(document.body);
// Escrevendo dentro do Body
console.log(document.body.innerHTML = "<h1>Inserindo um texto por InnerHtml</h1>" + document.body.innerHTML); // Uso duas vezes o InnerHTML para puxar os dados antigos também






// Acessando elementos HTML com JS
console.log("=== Usando getElementById / getElementsByClassName ===");
let paragrafos = document.getElementsByClassName("paragrafo")
console.log(paragrafos);

let paragrafosId = document.getElementById("p1")
console.log(paragrafosId);

let todosParagrafos = document.getElementsByTagName("p")
console.log(todosParagrafos);






// Modificando elementos três forma
console.log("=== Modificando Elementos ===");
let p = document.getElementById("p1")
p.innerHTML = "Novo Conteúdo innetHTML" // Da para colocar Tags HTML como h1, p, body
p.innerText = "Novo Conteúdo innerText" // Não dá para colocar tags HTML, porem vai mostrar mais o que esta na tela
p.textContent = "Novo Conteúdo textContent" // Não dá para colocar tags HTML, agora o textContent vai mostra o texto e mais o que estiver lá no HTML também
