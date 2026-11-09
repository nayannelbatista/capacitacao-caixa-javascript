# Aulas 7 e 8 — DOM, API e TypeScript

## Objetivo e contexto

Estas aulas integram HTML, CSS e JavaScript em um catálogo de produtos. O material parte de uma implementação em JavaScript e inclui sua versão TypeScript, com tipagem, validação de elementos do DOM, operações assíncronas e tratamento de falhas de carregamento.

## Conteúdos trabalhados

- seleção e atualização de elementos do DOM;
- criação de elementos e renderização de cards;
- eventos de clique;
- `fetch`, `async`/`await`, `try`/`catch`/`finally`;
- interfaces, tipos de parâmetros e retornos no TypeScript;
- compilação de TypeScript para JavaScript;
- módulos e source maps.

## Arquivos e observações

| Arquivo | Função no material | O que observar |
| --- | --- | --- |
| `index.html` | Estrutura do catálogo | Contém o botão, a mensagem de status e o contêiner de produtos. Carrega `./dist/script.js` como módulo. |
| `style.css` | Apresentação visual | Define a grade de cards e os estados visuais de carregamento e erro. |
| `script.js` | Implementação em JavaScript | É uma referência do catálogo sem anotações de tipo. Não é o arquivo carregado por `index.html`. |
| `script.ts` | Fonte TypeScript do catálogo | Define `Produto`, tipa funções e reforça a validação dos elementos obtidos do DOM. É a fonte de `dist/script.js`. |
| `exemplo-tipagem.ts` | Exemplos de tipos | Mantém, em comentários, operações que o TypeScript rejeitaria. Elas servem para investigação controlada. |
| `tsconfig.json` | Configuração do compilador | Define ES2020, módulos ESNext, modo estrito, `dist/` como saída e source maps. |
| `package.json` e `package-lock.json` | Dependência de compilação | Declaram o TypeScript usado na aula. |
| `dist/` | Artefatos gerados | Contém o JavaScript compilado carregado pela página e seu source map. |

## Como executar

Antes de abrir o catálogo, instale a dependência e compile os arquivos TypeScript dentro desta pasta:

```bash
npm ci
npx tsc
```

Depois, abra `index.html` em um servidor local. A página usa o JavaScript compilado em `dist/script.js` e consulta a API configurada em `script.ts`.

O procedimento e a configuração estão detalhados em [Compilação TypeScript → JavaScript](../../docs/compilacao-typescript-javascript.md).

## Relação com a trilha

Estas aulas usam condições, funções, arrays e objetos apresentados das [aulas 2 a 6](../). A criação de cards retoma o trabalho com listas da [aula 5](../aula-05/README.md), e o catálogo aproxima esses conceitos da manipulação do DOM, de eventos e de dados recebidos por API.

Leia [Como estudar os exemplos](../../docs/como-estudar-os-exemplos.md) antes de comparar as versões JavaScript e TypeScript ou ativar as linhas de erro em `exemplo-tipagem.ts`.

