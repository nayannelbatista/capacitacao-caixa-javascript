// Tipos primitivos e typeof

const nome = "Maria";
const idade = 25;
const altura = 1.68;
const estudante = true;
const telefone = null;

let endereco;

console.log("=== VALORES ===");
console.log(nome);
console.log(idade);
console.log(altura);
console.log(estudante);
console.log(telefone);
console.log(endereco);

console.log("=== TIPOS ===");
console.log(typeof nome);          // string
console.log(typeof idade);         // number
console.log(typeof altura);        // number
console.log(typeof estudante);     // boolean
console.log(typeof telefone);      // object
console.log(typeof endereco);      // undefined

console.log("=== IGUALDADE ===");
console.log(10 == "10");   // true
console.log(10 === "10");  // false

console.log("=== DIFERENÇA ===");
console.log(10 != "10");   // false
console.log(10 !== "10");  // true