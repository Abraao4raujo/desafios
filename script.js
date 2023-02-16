const keyboard = "opqrstuvwxyzabcdefghijklmn"
const keyboardSeparado = keyboard.split("")
const world = "eu"
const teclas = document.querySelectorAll('.tecla')
teclas.forEach((tecla, i) => {
    tecla.innerText = keyboardSeparado[i]
})
let primeiraTecla = 0
let resultadoAnterior = []
const span = document.querySelector('#resultado')
var sum = 0

teclas.forEach((tecla) => {
    tecla.addEventListener('click', (event) => {
        const letraClicada = event.target.innerText
        const numeroDaLetra = keyboardSeparado.indexOf(letraClicada)

        if (primeiraTecla != null) {
            sum = 0
            const resultado = subtrair(primeiraTecla, numeroDaLetra)
            console.log(`Do indice ${primeiraTecla} ate o ${numeroDaLetra} = ${resultado}`)
            primeiraTecla = numeroDaLetra
            resultadoAnterior.push(resultado)
            for (var i = 0; i < resultadoAnterior.length; i++) {
                sum += resultadoAnterior[i];
            }
            console.log(`Tempo total: ${sum}`)
            span.innerText = `${sum}`
        } else {
            primeiraTecla = numeroDaLetra
        }
    })

})

function subtrair(valor1, valor2) {
    return Math.abs(valor1 - valor2)
}
