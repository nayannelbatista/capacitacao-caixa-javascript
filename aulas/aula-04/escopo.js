// Escopo de variáveis
// Escopo é a região do código 
// na qual uma variável pode ser acessada.

const nome = "Ana";

function apresentar() {
  const mensagem = "Olá, " + nome;
  console.log(mensagem);
}

apresentar();

console.log(nome);
console.log(mensagem); // ReferenceError

//outro exemplo: escopo de bloco

if (true) {
  let idade = 30;
  const cidade = "Patos";
}

//console.log(idade); // ReferenceError
// com var idade da certo
// let e const respeitam o escopo de bloco. 
// Já var tem comportamento diferente, pois possui escopo de função.