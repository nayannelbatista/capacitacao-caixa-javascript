// operadores matemáticos, de comparação e lógicos.

console.log("=== OPERADORES ARITMÉTICOS ===");

const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);

console.log("\n=== OPERADORES DE ATRIBUIÇÃO ===");

let pontos = 10;

pontos += 5; // Equivale a pontos = pontos + 5
console.log("Após += 5:", pontos);

pontos -= 3; // Equivale a pontos = pontos - 3
console.log("Após -= 3:", pontos);

console.log("\n=== OPERADORES DE COMPARAÇÃO ===");

console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 10:", 10 >= 10);
console.log("10 != 5:", 10 != 5);

console.log("\n=== OPERADORES LÓGICOS ===");

const temCadastro = true;
const temIngresso = false;

console.log("E (&&):", temCadastro && temIngresso);
console.log("OU (||):", temCadastro || temIngresso);
console.log("NÃO (!):", !temCadastro);
