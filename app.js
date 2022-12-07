const url = "http://localhost:3000/contador"
const urlIncrementar = "http://localhost:3000/contador/incrementar"
const urlDecrementar = "http://localhost:3000/contador/decrementar"

function inicializar(){
    const xmlHttp = new XMLHttpRequest()

    xmlHttp.open("POST", url, false)
    xmlHttp.send()
    mostrarContador()
}

function sumar(){
    const xmlHttp = new XMLHttpRequest()

    xmlHttp.open("GET", urlIncrementar, false)
    xmlHttp.send()
    mostrarContador()
}

function restar(){
    const xmlHttp = new XMLHttpRequest()
    
    xmlHttp.open("GET", urlDecrementar, false)
    xmlHttp.send()
    mostrarContador()
}

function mostrarContador(){
    const xmlHttp = new XMLHttpRequest()

    xmlHttp.open("GET", url, false)
    xmlHttp.send()

    const respuesta = xmlHttp.responseText
    const respuestaParseada = JSON.parse(respuesta)

    document.getElementById("texto").value = respuestaParseada.valor
}