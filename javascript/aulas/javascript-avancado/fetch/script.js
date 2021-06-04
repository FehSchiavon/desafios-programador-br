let url = "https://economia.awesomeapi.com.br/usd-brl"

fetch(url).
    then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data[0].high)
    })

function converter() {
    let input = document.getElementById(valor).value

}