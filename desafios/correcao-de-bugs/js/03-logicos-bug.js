// DESAFIO 3 — Operadores lógicos
// Regra: a pessoa precisa ter 18 anos ou mais e
// possuir cadastro ativo ou realizar uma compra de pelo menos R$ 100.

const anoNascimento = 2007;
const anoAtual = 2026;
const cadastroAtivo = false;
const valorCompra = 90;

const idade = anoAtual - anoNascimento;
const compraMinima = valorCompra >= 100;

const elegivel = idade >= 18 && (cadastroAtivo || compraMinima);
//false E false OU true
//false OU true
//true

console.log("Idade:", idade);
console.log("Cadastro ativo:", cadastroAtivo);
console.log("Valor da compra:", valorCompra);
console.log("Compra mínima atingida?", compraMinima);
console.log("Elegível?", elegivel);

document.querySelector("#idade").textContent = idade;
document.querySelector("#mensagem").textContent =

  elegivel ? "Benefício liberado." : "Benefício não liberado.";