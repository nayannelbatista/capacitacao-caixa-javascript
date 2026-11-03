// DESAFIO 4 — Operador ternário e operações aritméticas
//
// REGRA DE NEGÓCIO:
// Compras a partir de R$ 100 recebem 10% de desconto.
// Compras abaixo de R$ 100 não recebem desconto.

const valorCompra = 250;

// const desconto = valorCompra >= 100 ? 10/100 : 0;
const desconto = valorCompra >= 100 ? valorCompra * (10/100) : 0;
const valorFinal = valorCompra - desconto;


document.querySelector("#valor").textContent =
  valorCompra.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

document.querySelector("#mensagem").textContent =
  `Desconto: ${desconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })} | Valor final: ${valorFinal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })}`;