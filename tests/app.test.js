import {JSDOM} from "jsdom"

describe('Testing Funciones Contador', () => {
    /*test('Sumando al contador', () => {
        expect(incrementar(0)).toBe(1);
        expect(incrementar(1)).toBe(2);
        expect(incrementar(-1)).toBe(0);
        expect(incrementar(-2)).toBe(-1);
    });*/
    test('Creacion Request http', async () => {
        const dom = await JSDOM.fromFile('/home/manuel/Documents/tif_front/index.html')
        const categoria = dom.window.document.querySelector('#mas')
        console.log(categoria.textContent)
    })
})