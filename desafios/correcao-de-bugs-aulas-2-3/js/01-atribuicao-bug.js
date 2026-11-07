// DESAFIO 1 — Operadores de atribuição
// Objetivo: aplicar um desconto de R$ 20 ao valor da compra.
// Pergunta: o que será exibido? O desconto foi aplicado corretamente?

let valorCompra = 150;
valorCompra - 20;
//150 - 20 = 130
//problema - falta atribuir valor a variável

//solucoes
// valorCompra = valorCompra - 20
// valorCompra -= 20;

let valorComDesconto = valorCompra -20;
console.log(valorCompra)

document.querySelector("#valor").textContent =
  valorComDesconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
document.querySelector("#mensagem").textContent = "Confira o valor no cartão e no Console.";
