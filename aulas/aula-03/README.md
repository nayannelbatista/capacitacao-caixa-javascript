# Aula 3 — Tipos e estruturas de repetição

## Objetivo e contexto

Esta aula amplia os fundamentos da aula 2 ao observar tipos de valores e a repetição de instruções. Os exemplos foram organizados para comparar comportamentos: igualdade frouxa e estrita, execução condicional de laços e abordagens manual e repetitiva para a mesma tarefa.

## Conteúdos trabalhados

- tipos primitivos, `null`, `undefined` e `typeof`;
- igualdade e diferença frouxas e estritas;
- `for`, `while` e `do...while`;
- contador, condição de parada, incremento e template strings.

## Arquivos e observações

| Arquivo | Exemplo | O que observar |
| --- | --- | --- |
| `tipos.js` | Valores e tipos | Compare a saída de `typeof` para cada valor. Os pares `==`/`===` e `!=`/`!==` foram colocados lado a lado para evidenciar a coerção de tipos. |
| `for.js` | Tabuada do número 3 | A versão manual está preservada em comentários antes das duas versões com `for`. Compare o início em `0` e em `1`, e leia a explicação das três partes do laço. |
| `while-do-while.js` | Estoque e menu | O `while` diminui o estoque até encerrar. Depois, o menu compara um `do...while`, que executa ao menos uma vez, com um `while` cuja condição inicial já é falsa. |

## Como executar

Os arquivos não possuem dependências e podem ser executados individualmente com Node.js. Por exemplo:

```bash
node for.js
```

O resultado é exibido no console. Os trechos comentados em `for.js` fazem parte da explicação; não é necessário ativá-los todos ao mesmo tempo.

## Relação com a trilha

[A aula 2](../aula-02/README.md) introduz valores, operadores e condições usados aqui. A repetição e o escopo de variáveis nos laços preparam o terreno para [a aula 4](../aula-04/README.md), que aborda funções e escopo.

Para entender por que abordagens diferentes permanecem no mesmo arquivo, leia [Como estudar os exemplos](../../docs/como-estudar-os-exemplos.md).

