// DESAFIO 5 — if / else
// Regra de desconto:
// menor que R$ 100: sem desconto
// de R$ 100 até R$ 199,99: 10%
// R$ 200 ou mais: 15%
// Teste 80, 150 e 250.

const valorCompra = 200;
let desconto = 0;

if (valorCompra >= 200) {
  desconto = 15;
} else if (valorCompra >= 100) {
  desconto = 10;
}

const valorFinal = valorCompra - (valorCompra * desconto / 100);

document.querySelector("#valor").textContent =
  valorCompra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
document.querySelector("#mensagem").textContent =
  `Desconto aplicado: ${desconto}%. Valor final: ${valorFinal.toLocaleString("pt-BR", {style:"currency",currency:"BRL"})}`;
