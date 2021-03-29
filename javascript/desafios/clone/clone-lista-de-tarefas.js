function criarObjetoTarefa(id, n, d, ch) {
    return {
        id: id,
        nome: n,
        data: d,
        checked: ch
    }
}
let txtNomeTarefa = document.getElementById("task-name");
let botaoAdd = document.getElementById("add-task");
let arrayTarefas = [];
let arrayTemp = [];

botaoAdd.addEventListener("click", adicionarTarefa);

onload = function () {
    if (localStorage.length > 0) {
        arrayTarefas = JSON.parse(localStorage.getItem("tarefas"));
        for (tarefa of arrayTarefas) {
            carregarTarefas(tarefa);
        }
    }
    let exibeData = document.getElementById("date");
    exibeData.innerHTML = `<p>${gerarData().dia} de ${gerarData().mesPorExtenso()}</p>`;
}

function getRandomInt() {
    let min = Math.ceil(3529);
    let max = Math.floor(4858);
    return Math.floor(Math.random() * (max - min)) + min;
}

function adicionarTarefa() {
    if (txtNomeTarefa.value != "" && txtNomeTarefa.value.length > 2) {
        let tarefa = criarObjetoTarefa(getRandomInt(), txtNomeTarefa.value, gerarData().toString, false);
        carregarTarefas(tarefa)
        arrayTarefas.push(tarefa);

        //limpar campo de texto e colocar o foco nele
        txtNomeTarefa.value = "";
        txtNomeTarefa.focus();

        //armazena no localstorage
        localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
    }
    else {
        alert("o valor do texto não deve ser vazio e nem menor do que 2");
    }
}

function carregarTarefas(tarefa) {
    //criação do elemento LI passando o nome do objeto como TextNode
    let li = document.createElement("li");
    li.className = "tarefa";
    li.id = tarefa.id;
    let p = document.createElement("p");
    p.style.fontSize = "8px"
    p.appendChild(document.createTextNode(`Criado: ${tarefa.data}`));
    li.appendChild(document.createTextNode(tarefa.nome));
    li.appendChild(p);
    //adicionando elemento LI criado ao UL
    document.getElementById("task-list").appendChild(li);
    adicionarDeleteTarefa(li);
    verificarCheck();
}

//adiciona o botão para deletar a terefa para cada uma delas
function adicionarDeleteTarefa(li) {
    let span = document.createElement("span");
    span.className = "delete";
    span.appendChild(document.createTextNode("\u00D7"));
    li.appendChild(span);

    span.addEventListener("click", deletarTarefa);
    li.addEventListener("click", marcarOuDesmarcar);

}

function deletarTarefa() {
    for (let i = 0; i < arrayTarefas.length; i++) {

        if (arrayTarefas[i].id == this.parentElement.id) {
            arrayTarefas.splice(i, 1);
            this.parentElement.remove();
            localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
        }
    }
}

function verificarCheck() {
    //para cada LI dentro de todos os elementos LI encontrados na pagina, faça:
    for (li of document.getElementsByTagName("li")) {
        for (let i = 0; i < arrayTarefas.length; i++) {
            //aqui ele vai pegar o li atual e comparar com o id da tarefa atual do array, caso seja igual ele passa para a validação de se está ou não checked;
            if (li.id == arrayTarefas[i].id) {
                if (arrayTarefas[i].checked == true)
                    li.className = "tarefa checked";
            }
        }
    }
}

function marcarOuDesmarcar() {
    for (tarefa of arrayTarefas) {
        if (tarefa.id == this.id) {
            if (tarefa.checked == false) {
                this.className = "tarefa checked";
                tarefa.checked = true;
            }
            else if (tarefa.checked == true) {
                this.className = "tarefa";
                tarefa.checked = false;
            }
            localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
        }
    }
}

function excluirSelecionados() {
    let lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        for (let j = 0; j < arrayTarefas.length; j++) {
            if (lis[i].id == arrayTarefas[j].id && arrayTarefas[j].checked == false) {
                arrayTemp.push(arrayTarefas[j]);
            }
        }
    }
    arrayTarefas = arrayTemp;
    console.log(arrayTarefas);
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
    location.reload();
}

function limparTudo() {
    if (confirm("Deseja realmente limpar lista?")) {
        localStorage.clear();
        location.reload();
    }
}

function detectaTecla(event) {
    if (event.keyCode == 13) {
        adicionarTarefa()
    }
}

function gerarData() {
    data = new Date();
    dia = data.getDate().toString();
    mes = (data.getMonth() + 1).toString();//+1 pois no getMonth Janeiro começa com zero.
    hora = data.getHours().toString();
    min = data.getMinutes().toString();
    seg = data.getSeconds().toString();
    return {
        dia: diaF = (dia.length == 1) ? '0' + dia : dia,
        mes: mesF = (mes.length == 1) ? '0' + mes : mes,
        hora: hora = data.getHours().toString(),
        minuto: minF = (min.length == 1) ? '0' + min : min,
        segundos: seg = data.getSeconds().toString(),
        toString: `${diaF}/${mesF} ${hora}:${min}:${seg}`,
        mesPorExtenso: function () {
            switch (mesF) {
                case "01":
                    return "Janeiro";
                    break;
                case "02":
                    return "Fevereiro";
                    break;
                case "03":
                    return "Março";
                    break;
                case "04":
                    return "Abril";
                    break;
                case "05":
                    return "Maio";
                    break;
                case "06":
                    return "Junho";
                    break;
                case "07":
                    return "Julho";
                    break;
                case "08":
                    return "Agosto";
                    break;
                case "09":
                    return "Setembro";
                    break;
                case "10":
                    return "Outubro";
                    break;
                case "11":
                    return "Novembro";
                    break;
                case "12":
                    return "Dezembro";
                    break;;
            }
        }
    }
}