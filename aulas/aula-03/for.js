// Exemplo: exibir a tabuada do número 3.
//exibir a tabuada do numero 3

let numero = 3;

console.log(numero + " * 0" + " = " + numero*0);
//exibir a tabuada do numero 3
//abordagem sem loop
// let numero = 3;

// console.log(numero + " * 0" + " = " + numero*0);
// console.log(`${numero} * 0 = ${numero*0}`); //template string

// console.log(numero + " * 1" + " = " + numero*1);
// console.log(numero + " * 2" + " = " + numero*2);
// console.log(numero + " * 3" + " = " + numero*3);
// console.log(numero + " * 4" + " = " + numero*4);
// console.log(numero + " * 5" + " = " + numero*5);
// console.log(numero + " * 6" + " = " + numero*6);
// console.log(numero + " * 7" + " = " + numero*7);
// console.log(numero + " * 8" + " = " + numero*8);
// console.log(numero + " * 9" + " = " + numero*9);
// console.log(numero + " * 10" + " = " + numero*10);


// let numero = 3;

for(let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`)
}

//const numero = 3;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
}

// O for possui três partes:
// 1. Inicialização: let i = 1
//    Cria a variável de controle e começa em 1.
// 2. Condição: i <= 10
//    O laço continua enquanto i for menor ou igual a 10.
// 3. Incremento: i++
//    Aumenta o valor de i em 1 a cada repetição.

// Quando i chega a 11, a condição i <= 10 é falsa.
// Por isso, o laço é encerrado.