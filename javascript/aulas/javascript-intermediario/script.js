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
console.log(document.body.innerHTML = "<h1>Inserindo um texto por InnerHtml</h1>" + document.body.innerHTML);