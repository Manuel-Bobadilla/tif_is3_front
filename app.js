const url = "https://tif-production.up.railway.app/contador"
const urlIncrementar = "https://tif-production.up.railway.app/contador/incrementar"
const urlDecrementar = "https://tif-production.up.railway.app/contador/decrementar"
const urlReiniciar = "https://tif-production.up.railway.app/contador/reiniciar"

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

function reiniciar(){
    const xmlHttp = new XMLHttpRequest()
    
    xmlHttp.open("GET", urlReiniciar, false)
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