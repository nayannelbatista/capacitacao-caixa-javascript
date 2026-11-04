
/* 
aplicar um desconto de 10% em compras à vista
*/

let valorCompra = 100;
let percentualDesconto = 0.1;

let valorFinal1 = valorCompra1 * (1 - percentualDesconto);

console.log(valorFinal);

let valorCompra2 = 450;
let valorFinal2 = valorCompra2 * 0.9;
console.log(valorFinal2);

//receber o valor da compra e calcular o desconto
//criando uma funcao

function calcularDesconto(preco, percentual) {
  let precoComDesconto = preco - (preco * percentual);
  return precoComDesconto;
}

const total = calcularDesconto(100, 0.1)
console.log(total)
calcularDesconto(450, 0.15)

// criar uma funcao que recebe dois valores como parametro e mostra a soma no console
// fazer a funcao retornar o valor da soma
// chamar essa funcao passando os dois valores como parametros

// formas de declarar uma funcao
// // Function declaration
function somar(a, b) {
    return a + b;
}

// // Function expression
const subtrair = function(a, b) {
    return a - b;
};

// // Arrow function
const multiplicar = (a, b) => {
    return a * b;
};

//sobre os parenteses
// Sem parâmetros
const saudacao = () => "Olá!";

// // Um parâmetro: parênteses opcionais
const dobrar = numero => numero * 2;
const dobrar2 = (numero) => numero * 2;

// // Dois parâmetros: parênteses obrigatórios
const somar = (a, b) => a + b;

//hoisting - içamento

// É o comportamento do JavaScript de 
// processar declarações antes da execução do código.
// Funciona na declaracao tradicional porque as declarações de função são 
// disponibilizadas durante a etapa 
// de preparação do código, antes da execução linha a linha.

console.log(somar(10, 20))

function somar(a, b) {
    let soma = a + b
    return soma
}

// Isso acontece porque const não pode ser 
// acessada antes de sua inicialização

// Se fosse var, o comportamento seria diferente: 
// a variável seria içada e inicializada com undefined, 
// e a tentativa de chamada resultaria em TypeError.

// funcao anonima
const divisao = function (a, b) {
    return a/b
}

//arrow function
const imposto = (a, b) => {
    return a/b
}
console.log(imposto(20, 5))


