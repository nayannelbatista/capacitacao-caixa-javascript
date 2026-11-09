# Compilação de TypeScript para JavaScript — aulas 7 e 8

As aulas 7 e 8 ficam em `aulas/aula-07-08/` e incluem um catálogo de produtos escrito em TypeScript. O navegador não executa diretamente o arquivo `.ts`; ele carrega o JavaScript gerado pelo compilador.

## Arquivos envolvidos

- `script.ts`: implementação tipada do catálogo.
- `exemplo-tipagem.ts`: exemplos curtos de inferência, anotações e erros de tipo deixados em comentários.
- `tsconfig.json`: configuração da compilação.
- `package.json` e `package-lock.json`: declaram o TypeScript como dependência de desenvolvimento.
- `dist/script.js`: JavaScript gerado e carregado pela página.
- `dist/script.js.map`: source map gerado para relacionar o JavaScript ao TypeScript original.
- `index.html`: carrega `./dist/script.js` como módulo.

## Configuração utilizada

O `tsconfig.json` da aula define:

- `target: "ES2020"`;
- `module: "ESNext"`;
- bibliotecas `ES2020` e `DOM`;
- `strict: true`;
- `rootDir: "."`;
- `outDir: "./dist"`;
- `sourceMap: true`;
- inclusão de todos os arquivos `*.ts` na raiz da pasta da aula.

Assim, a compilação considera `script.ts` e `exemplo-tipagem.ts` e grava os artefatos JavaScript na pasta `dist/`.

## Procedimento

É necessário ter Node.js e npm disponíveis no computador.

No terminal, partindo da raiz do repositório:

```bash
cd aulas/aula-07-08
npm ci
npx tsc
```

`npm ci` instala as dependências registradas no `package-lock.json`, incluindo o compilador TypeScript. `npx tsc` usa o `tsconfig.json` presente nessa pasta para compilar os arquivos TypeScript.

Após a compilação, abra `index.html` em um servidor local para que a página carregue o módulo `./dist/script.js`. O HTML também depende dos elementos com os identificadores `recarregar`, `status` e `produtos`, já presentes no próprio arquivo, e o catálogo consulta a API indicada em `script.ts`.

## Relação entre as versões JavaScript e TypeScript

Há um `script.js` diretamente na pasta da aula e há o `dist/script.js`. Eles não têm a mesma função no fluxo atual:

- `script.js` é uma implementação em JavaScript disponível como material de estudo;
- `script.ts` é a fonte TypeScript da implementação carregada pela página;
- `dist/script.js` é o resultado da compilação de `script.ts` e é o arquivo referenciado por `index.html`.

Não edite `dist/script.js` como fonte principal: alterações nele serão substituídas na próxima compilação. Para mudar o catálogo tipado, a referência é `script.ts`.

## Sobre `exemplo-tipagem.ts`

Esse arquivo foi preparado para discutir o que o TypeScript aceita e rejeita. As linhas que causariam erros estão comentadas de propósito. Para uma atividade de investigação, elas podem ser ativadas uma por vez e compiladas novamente, observando a mensagem do compilador. Depois da observação, restaure o estado do material.

## Observação sobre scripts npm

O `package.json` atual não define scripts de compilação ou servidor; o único script registrado é `test`, que é o comando padrão criado pelo npm e encerra com erro. Por isso, o procedimento de compilação efetivamente configurado nesta aula é executar `npx tsc` dentro de `aulas/aula-07-08/`.
