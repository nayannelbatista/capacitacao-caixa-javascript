//criar funcao que recebe dois valores e uma operacao
//primeira abordagem
// function calcular(a, b, operacao) {
//     if(operacao === "somar") {
//         return a + b
//     } else if (operacao === "subtrair") {
//         return a - b
//     } else if (operacao === "multiplicar") {
//         return a * b
//     } else if (operacao === "dividir") {
//         return a / b
//     } else {
//         return "operacao invalida"
//     }
// }

// console.log(calcular(10, 5, "soma"))
// console.log(calcular(10, 5, "subtrair"))
// console.log(calcular(10, 5, "multiplicar"))
// console.log(calcular(10, 5, "dividir"))

//separar responsabilidades
//callbacks
// function somar(a, b) {
//     return a + b
// }

// function subtrair(a, b) {
//     return a - b
// }

// function multiplicar(a, b) {
//     return a * b
// }

// function dividir(a, b) {
//     return a / b
// }

//segunda abordagem
// function calcular(a, b, operacao) {
//     if(operacao === "somar") {
//         return somar(a, b)
//     } else if (operacao === "subtrair") {
//         return subtrair(a, b)
//     } else if (operacao === "multiplicar") {
//         return multiplicar(a, b)
//     } else if (operacao === "dividir") {
//         return dividir(a, b)
//     } else {
//         return "operacao invalida"
//     }
// }

// console.log(calcular(10, 5, "somar"))
// console.log(calcular(10, 5, "subtrair"))
// console.log(calcular(10, 5, "multiplicar"))
// console.log(calcular(10, 5, "dividir"))

//terceira abordagem
//high order function
// function calcular(a, b, operacao) {
//     return operacao(a, b)
// }

// console.log(calcular(10, 5, somar))
// console.log(calcular(10, 5, subtrair))
// console.log(calcular(10, 5, multiplicar))
// console.log(calcular(10, 5, dividir))

//quarta abordagem
const operacoes = {
    somar: (a,b) => a+b,
    subtrair: (a,b) => a-b,
    multiplicar: (a,b) => a*b,
    dividir: (a,b) => a/b,
}

function calcular(a, b, operacao) {
    return operacoes[operacao](a, b)
}

console.log(calcular(5, 10, "somar"))