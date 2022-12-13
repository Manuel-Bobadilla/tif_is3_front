import {JSDOM} from "jsdom"

describe('Testing Html', () => {
    test('Texto Boton Mas', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#mas')
        expect(elementoHttp.textContent).toBe("+")
    })

    test('Funcion Boton Mas', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#mas')
        expect(elementoHttp.getAttribute('onclick')).toBe("sumar()")
    })

    test('Texto Boton Reiniciar', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#cero')
        expect(elementoHttp.textContent).toBe("0")
    })

    test('Funcion Boton Reiniciar', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#cero')
        expect(elementoHttp.getAttribute('onclick')).toBe("reiniciar()")
    })

    test('Texto Boton Menos', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#menos')
        expect(elementoHttp.textContent).toBe("-")
    })

    test('Funcion Boton Menos', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#menos')
        expect(elementoHttp.getAttribute('onclick')).toBe("restar()")
    })
    
    test('Texto Campo Texto', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#texto')
        expect(elementoHttp.textContent).toBe("")
    })

    test('Solo Lectura Campo Texto', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#texto')
        expect(elementoHttp.getAttribute('readonly')).toBe("")
    })

    test('Solo Numeros Campo Texto', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#texto')
        expect(elementoHttp.getAttribute('type')).toBe("number")
    })
})