# Aula 2 — Variáveis, operadores e condicionais

## Objetivo e contexto

Esta aula apresenta fundamentos usados nos exemplos seguintes: declarar valores, realizar operações e tomar decisões com base em condições. Os arquivos são pequenos e independentes, permitindo observar cada conceito no console.

## Conteúdos trabalhados

- declarações com `let` e `const`;
- valores de texto, número e booleano;
- operadores aritméticos, de atribuição, comparação e lógicos;
- estruturas `if`, `else if`, `else` e `switch`.

## Arquivos e observações

| Arquivo | Exemplo | O que observar |
| --- | --- | --- |
| `variaveis.js` | Declaração e reatribuição | `idade` é alterada após ser declarada com `let`; a reatribuição comentada de `nome` serve para observar a regra de `const`. |
| `operadores.js` | Cálculos e expressões booleanas | Compare o valor de `pontos` antes e depois de `+=` e `-=`; acompanhe os resultados de comparação e dos operadores `&&`, `||` e `!`. |
| `condicionais.js` | Escolhas por condição | Cada bloco usa dados diferentes para mostrar uma forma de decisão. No `switch`, observe o uso de `break` e de `default`. |

## Como executar

Os arquivos são JavaScript sem dependências. Execute um arquivo por vez com Node.js, a partir desta pasta, por exemplo:

```bash
node variaveis.js
```

Também podem ser testados no console do navegador. Leia os comentários antes de descomentar linhas usadas para demonstrar erros.

## Relação com a trilha

Os valores e expressões desta aula dão base para [a aula 3](../aula-03/README.md), que explora tipos e repetições. Os condicionais reaparecem nos exemplos de funções, arrays, objetos e desafios posteriores.

Para o contexto geral do material, consulte [Como estudar os exemplos](../../docs/como-estudar-os-exemplos.md).

