# Como estudar os exemplos

## O material registra o caminho, não apenas o resultado

Os exemplos deste repositório foram construídos gradualmente durante as explicações da capacitação. Eles não têm o objetivo exclusivo de apresentar código finalizado: também preservam decisões, comparações e comportamentos observados em aula.

Ao estudar, considere o arquivo, seus comentários e o momento da trilha em que ele aparece. Uma versão mais simples pode existir ao lado de outra mais elaborada para que seja possível comparar as duas.

## O que pode aparecer nos arquivos

### Trechos comentados

Comentários podem guardar uma etapa anterior da explicação, uma alternativa de implementação ou uma linha que deve ser ativada somente para observar um comportamento. Não os trate automaticamente como código descartado.

Por exemplo:

- em `aulas/aula-03/for.js`, a tabuada sem laço permanece comentada antes das versões com `for`;
- em `aulas/aula-04/callback.js`, quatro abordagens para calcular operações são mantidas para comparar evolução, separação de responsabilidades e callbacks;
- em `aulas/aula-05/arrays.js`, exemplos de índices, percursos e alterações em arrays são apresentados em etapas;
- em `aulas/aula-07-08/exemplo-tipagem.ts`, linhas inválidas estão comentadas para que o diagnóstico do TypeScript possa ser observado quando necessário.

### Nomes repetidos

Um nome pode reaparecer em etapas distintas ou em escopos diferentes. Isso pode ser parte da demonstração de regras da linguagem, como escopo de bloco, closure, declaração de funções e hoisting.

Em `aulas/aula-04/closure.js`, por exemplo, há um `total` interno à função criadora e outro fora dela. A comparação ajuda a mostrar qual valor é mantido pelo closure. Antes de concluir que uma repetição é um problema, verifique se as declarações pertencem ao mesmo escopo e leia os comentários próximos.

### Erros para investigação

Alguns exemplos existem justamente para produzir ou discutir um erro. `aulas/aula-04/escopo.js` tenta acessar `mensagem` fora da função em que ela foi declarada, acompanhando a linha com a indicação de `ReferenceError`. Já os desafios de correção de bugs incentivam a prever, executar e investigar resultados.

Um erro observado no código não deve ser automaticamente corrigido ao estudar. Primeiro, identifique a regra de JavaScript ou TypeScript que ele pretende evidenciar.

### Abordagens que coexistem

Mais de uma forma de resolver o mesmo problema pode coexistir no arquivo. Isso permite comparar legibilidade, reutilização e comportamento antes de escolher uma abordagem para um novo exercício.

O catálogo das aulas 7 e 8 também possui versões em JavaScript e TypeScript. O `index.html` da aula carrega `dist/script.js`, gerado a partir de `script.ts`; o arquivo `script.js` na raiz da aula continua útil como referência da implementação em JavaScript, mas não é o arquivo carregado pela página.

## Antes de executar

1. Leia o arquivo inteiro e os comentários que o cercam.
2. Identifique qual bloco está ativo e qual bloco representa uma etapa anterior ou alternativa.
3. Verifique se o exemplo depende de navegador, DOM, API externa, Node.js ou TypeScript.
4. Se o objetivo for observar um erro, execute apenas no contexto indicado e leia a mensagem resultante.
5. Faça alterações apenas em uma cópia ou em um exercício próprio quando a atividade pedir experimentação.

## Nem todo arquivo é uma aplicação final

Alguns arquivos são executáveis como estão; outros são roteiros de demonstração. Em especial, exemplos sobre escopo, hoisting e tipagem podem interromper a execução ou exigir que uma linha seja comentada/descomentada durante a explicação.

O objetivo é compreender o processo: começar por uma solução simples, observar seus limites e avançar para uma implementação mais adequada ao conceito estudado.

