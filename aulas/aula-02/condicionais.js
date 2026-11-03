// if, else if, else e switch


console.log("=== IF ===");

// Executa o bloco somente se a condição for verdadeira.
const temperatura = 32;

if (temperatura > 30) {
  console.log("Está quente!");
}


console.log("\n=== IF / ELSE ===");

// Escolhe entre dois caminhos.
const idade = 17;

if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}


console.log("\n=== IF / ELSE IF / ELSE ===");

// Avalia várias condições em sequência.
const nota = 8;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Aprovada!");
} else if (nota >= 5) {
  console.log("Recuperação.");
} else {
  console.log("Reprovada.");
}

console.log("\n=== SWITCH ===");

// Útil quando queremos comparar um valor com
// diferentes opções específicas.
const dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido.");
}
