// DESAFIO 2 — Operadores de comparação
// Regra: pessoas com cadastro ativo a partir de 18 anos podem acessar.

const anoNascimento = 2008;
const anoAtual = 2026;
const temCadastroAtivo = false;
const idade = anoAtual - anoNascimento

const podeAcessar = idade >= 18 && temCadastroAtivo;
// true && true == true

console.log("Pode acessar o sistema:", podeAcessar);
document.querySelector("#idade").textContent = anoAtual - anoNascimento;
document.querySelector("#mensagem").textContent =
  podeAcessar ? "Acesso liberado." : "Acesso negado.";
