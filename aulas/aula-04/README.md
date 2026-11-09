# Aula 4 — Funções, escopo, closures e callbacks

## Objetivo e contexto

Esta aula mostra como organizar comportamentos em funções e como o JavaScript controla a visibilidade de variáveis. Os arquivos registram etapas de explicação e comparação; por isso, alguns devem ser executados somente em partes ou usados para investigar um comportamento específico.

## Conteúdos trabalhados

- parâmetros, retorno e reutilização de funções;
- function declaration, function expression e arrow function;
- escopo global, de função e de bloco;
- hoisting;
- closure;
- callbacks e funções de ordem superior.

## Arquivos e observações

| Arquivo | Exemplo | O que observar |
| --- | --- | --- |
| `function.js` | Construção de funções e desconto | O arquivo reúne cálculos diretos, extração para função, formas de declaração e anotações sobre hoisting. Há nomes repetidos e referências que impedem sua execução integral; leia cada bloco como parte da explicação, não como uma aplicação final. |
| `escopo.js` | Visibilidade de variáveis | `mensagem` é criada dentro de `apresentar()` e acessada fora dela para produzir o `ReferenceError` indicado no comentário. Esse ponto interrompe a execução antes do exemplo de bloco abaixo. |
| `closure.js` | Função que preserva estado | Compare o `total` dentro de `criarContador()` com o `total` externo. As chamadas sucessivas de `contador()` mostram o valor preservado pelo closure. |
| `callback.js` | Evolução de abordagens | As três primeiras abordagens estão comentadas: condicionais por texto, funções separadas e callback. A quarta, ativa, usa um objeto de operações. Compare as responsabilidades assumidas por cada versão. |

## Como executar

`closure.js` e `callback.js` podem ser executados individualmente com Node.js:

```bash
node closure.js
node callback.js
```

`escopo.js` é uma demonstração de erro de execução, e `function.js` reúne trechos que não formam um arquivo executável integral. Execute-os apenas quando o objetivo for investigar os blocos e regras indicados nos comentários.

## Relação com a trilha

Esta aula usa condicionais e repetição das [aulas 2](../aula-02/README.md) e [3](../aula-03/README.md). As funções e os callbacks ajudam a entender os percursos de arrays da [aula 5](../aula-05/README.md), enquanto escopo e closures reaparecem na manipulação de DOM e nos quizzes.

Consulte [Como estudar os exemplos](../../docs/como-estudar-os-exemplos.md) antes de alterar trechos comentados ou investigar erros.

