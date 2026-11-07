// Desafio: sistema de notas
// Criação

// Regras:

// Uma turma precisa de um sistema simples para calcular resultados.
// 1. Criar uma função que receba duas notas e retorne a média.
// 2. Criar uma função que receba a média e retorne a situação: aprovado (média maior ou igual a 7) ou reprovado.
// 3. Criar uma função que receba o nome e a média, utilize a função do item 2 para verificar a situação e retorne uma mensagem com o resultado.
// 4. Testar as funções com pelo menos três alunos diferentes.

// Exemplo do resultado esperado:
// Ana: média 8.5 — Aprovada
// Carlos: média 5.0 — Reprovado
// Júlia: média 7.0 — Aprovada

// 1. Recebe duas notas e retorna a média
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// 2. Recebe a média e retorna a situação
function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovada";
  } else {
    return "Reprovado";
  }
}

// 3. Recebe o nome e a média e retorna uma mensagem
function gerarResultado(nome, media) {
  const situacao = verificarSituacao(media);

  return `${nome}: média ${media.toFixed(1)} — ${situacao}`;
}

// 4. Testando com três alunos

const mediaAna = calcularMedia(8, 9);
const mediaCarlos = calcularMedia(4, 6);
const mediaJulia = calcularMedia(7, 7);

console.log(gerarResultado("Ana", mediaAna));
console.log(gerarResultado("Carlos", mediaCarlos));
console.log(gerarResultado("Júlia", mediaJulia));