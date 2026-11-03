// DESAFIO 8 — while
// A intenção é contar de 1 a 5. 

let contador = 1;
let tentativas = 0;

while (contador <= 5 && tentativas < 6) {
  console.log("Contagem:", contador);
  contador++;
  tentativas++;
}

document.querySelector("#mensagem").textContent =
  "Veja no Console: qual alteração faria o contador avançar e o laço terminar?";