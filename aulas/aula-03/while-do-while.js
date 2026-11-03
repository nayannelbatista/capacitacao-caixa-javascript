// Exemplo: simular a venda de unidades de um produto.

let estoque = 3;
let unidadesVendidas = 0;

// Enquanto houver produtos no estoque, continuamos vendendo.
while (estoque > 0) {
    unidadesVendidas++;
    estoque--;

    console.log("Unidades vendidas:", unidadesVendidas);
    console.log("Estoque restante:", estoque);
}

// Quando o estoque chegar a zero, a condição será falsa.
// O laço será encerrado.

console.log("Estoque esgotado!");

// Exemplo: exibir um menu pelo menos uma vez.

let opcao = 0;

do {
    console.log("=== MENU ===");
    console.log("1 - Cadastrar produto");
    console.log("2 - Consultar produtos");
    console.log("0 - Sair");

    // Simula a escolha da opção de saída.
    opcao = 0;

    console.log("Opção selecionada:", opcao);

} while (opcao !== 0);

// Mesmo com a opção 0, o menu foi exibido uma vez.
// Depois, a condição opcao !== 0 é falsa e o laço termina.

// Mas por que não usar um while normal?
// Veja a diferença. Se começarmos com opcao = 0 e usarmos:
let opcao2 = 0;

while (opcao2 !== 0) {
    console.log("=== MENU ===");
    console.log("1 - Cadastrar produto");
    console.log("2 - Consultar produtos");
    console.log("0 - Sair");
}

// O menu não será exibido nenhuma vez, porque o while verifica a condição antes de entrar no bloco. Como 0 !== 0 é falso, o programa pula o bloco inteiro.

// No do-while, por outro lado, o menu aparece uma vez antes dessa verificação.

// while verifica antes; do-while executa primeiro e verifica depois.

