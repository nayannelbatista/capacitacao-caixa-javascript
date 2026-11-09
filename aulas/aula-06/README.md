# Aula 6 — Objetos e programação orientada a objetos

## Objetivo e contexto

Esta aula parte de objetos literais para apresentar classes, instâncias, atributos e métodos. Os exemplos comentados preservam a transição entre representar dados manualmente e definir um modelo reutilizável.

## Conteúdos trabalhados

- objetos literais e acesso por ponto ou colchetes;
- classe e instância;
- atributos e métodos;
- `constructor` e `this`;
- alteração de estado em uma conta bancária.

## Arquivo e observações

| Arquivo | Exemplo | O que observar |
| --- | --- | --- |
| `poo.js` | Pessoa, produtos e conta bancária | O objeto `pessoa` demonstra acesso às propriedades. Os objetos de produto e a classe `Produto` comentada registram etapas anteriores. A classe `ContaBancaria` ativa mostra criação de instâncias e métodos para consultar saldo, depositar e sacar. |

Ao ler `ContaBancaria`, acompanhe a diferença entre o parâmetro `saldoInicial` recebido pelo construtor e o saldo armazenado na instância. A chamada de `consultarSaldo()` exibe o valor no próprio método; ela não retorna um valor para `console.log`.

## Como executar

Execute o exemplo com Node.js, a partir desta pasta:

```bash
node poo.js
```

O resultado aparece no console. Os exemplos comentados podem ser usados para discutir a evolução do modelo, mas não precisam ser ativados para executar a classe atual.

## Relação com a trilha

A aula combina funções e condições da [aula 4](../aula-04/README.md) com a organização de coleções discutida na [aula 5](../aula-05/README.md). Classes e objetos também são revisados no quiz de POO, enquanto a criação de elementos nas aulas 7–8 aplica uma forma diferente de modelar dados e comportamentos no navegador.

Para o contexto pedagógico dos trechos preservados, consulte [Como estudar os exemplos](../../docs/como-estudar-os-exemplos.md).

