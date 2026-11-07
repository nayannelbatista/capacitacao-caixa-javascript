// DESAFIO 7 — for
// A intenção é contar de 2 até 10.
// Antes de executar, tentem prever o resultado.

// for (let i = 2; i != 10; i += 3) {
//   console.log("Contagem:", i);
//   if (i > 10) break; // Proteção para a demonstração.
// }

// document.querySelector("#mensagem").textContent =
//   "Veja no Console: a contagem terminou como esperado?";

// Antes de executar, preveja o que será exibido no Console.

let numero = 0;
for (let i = 1; i <= 3; ++i) { //pre-incremento
  console.log("Contador:", i);
  console.log("Número:", numero++); //pos-incremento
}

// 1 0
// 2 1
// 3 2

//primeira iteracao-> i: 1   numero: 1
//segunda iteracao-> i:  2   numero: 1 ou 2??
//terceira iteracao-> i: 3   numero: 1


document.querySelector("#mensagem").textContent =
  "Compare os valores exibidos no Console.";


  