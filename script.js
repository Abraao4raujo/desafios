const keyboard = "abcdefghijklmnopqrstuvwxyz"
const keyboardSeparado = keyboard.split("")
const world = "eu"
const teclas = document.querySelectorAll('.tecla')
let primeiraTecla = 0
let resultadoAnterior = []
const reducer = (accumulator, currentValue) => {
    accumulator + currentValue
}

teclas.forEach((tecla) => {
    tecla.addEventListener('click', (event) => {
        const teclaClicada = event.target.innerText
        const indice = keyboardSeparado.indexOf(teclaClicada)
        
        if (primeiraTecla != null) {
            const resultado = subtrair(primeiraTecla, indice)
            console.log(`Do indice ${primeiraTecla} ate o ${indice} = ${resultado}`)
            primeiraTecla = indice
            resultadoAnterior.push(resultado)
            var sum = 0
            for (var i = 0; i < resultadoAnterior.length; i++) {
                (sum += resultadoAnterior[i])
            }
            console.log(`Tempo total: ${sum}`)
        } else {
            primeiraTecla = indice
        }
    })

})



function subtrair(valor1, valor2) {
    return Math.abs(valor1 - valor2)
}
