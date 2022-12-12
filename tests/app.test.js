import {JSDOM} from "jsdom"

describe('Testing Html', () => {
    test('Boton Mas', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#mas')
        expect(elementoHttp.textContent).toBe("+")
    })

    test('Boton Menos', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#menos')
        expect(elementoHttp.textContent).toBe("-")
    })
    
    test('Campo Texto', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const elementoHttp = dom.window.document.querySelector('#texto')
        expect(elementoHttp.textContent).toBe("")
    })
})