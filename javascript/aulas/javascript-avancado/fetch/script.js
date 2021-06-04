let url = "https://economia.awesomeapi.com.br/usd-brl"

// fetch(url).
//     then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data[0].high)
//     })

function converter() {
    let input = document.getElementById("valor")
    let valor = input.value

    fetch(url).
    then((res) => {
        return res.json()
    })
    .then((data) => {
        let rate = data[0].high
        let resultado = `${valor} dolares = ${rate * valor} em reais`
        document.getElementById("resultado").innerHTML = resultado

        console.log(data[0].high)
    })
}