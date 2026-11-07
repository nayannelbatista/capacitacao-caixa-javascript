const questoes = [
    {
        pergunta: "Considere que existem três elementos com a classe 'mensagem' na página. O que acontece ao executar document.querySelector('.mensagem')?",
        alternativas: [
            "Retorna os três elementos em uma lista.",
            "Retorna somente o primeiro elemento encontrado.",
            "Retorna a quantidade de elementos encontrados.",
            "Retorna um erro porque existem elementos repetidos."
        ],
        correta: 1,
        explicacao: "querySelector() retorna apenas o primeiro elemento que corresponde ao seletor. Para selecionar todos, usamos querySelectorAll()."
    },
    {
        pergunta: "Observe o código: const botoes = document.querySelectorAll('.botao'); console.log(botoes.length); Existem três botões com essa classe. Qual será o resultado?",
        alternativas: [
            "3",
            "undefined",
            "Um HTMLCollection com três elementos.",
            "Um erro, pois NodeList não possui length."
        ],
        correta: 0,
        explicacao: "querySelectorAll() retorna uma NodeList. A propriedade length informa quantos elementos foram encontrados."
    },
    {
        pergunta: "O que será exibido na página após executar: elemento.textContent = '<strong>Sucesso!</strong>'?",
        alternativas: [
            "A palavra Sucesso em negrito.",
            "Um elemento strong criado automaticamente.",
            "O texto literal <strong>Sucesso!</strong>.",
            "Nada será exibido porque textContent aceita apenas números."
        ],
        correta: 2,
        explicacao: "textContent interpreta o conteúdo como texto. Para interpretar uma string como HTML, existe innerHTML."
    },
    {
        pergunta: "Analise: botao.addEventListener('click', function() { console.log('Clicou!'); }); Quando a mensagem será exibida?",
        alternativas: [
            "Assim que o navegador carregar o JavaScript.",
            "Quando o botão receber foco.",
            "Quando o usuário clicar no botão.",
            "Somente quando a página for atualizada."
        ],
        correta: 2,
        explicacao: "addEventListener registra uma função para ser executada quando o evento informado acontecer."
    },
    {
        pergunta: "Qual é o problema neste código? botao.addEventListener('click', mostrarMensagem());",
        alternativas: [
            "O evento click não pode ser usado com addEventListener.",
            "A função é executada imediatamente, e seu retorno é passado como listener.",
            "A função precisa obrigatoriamente receber um parâmetro.",
            "O método correto seria querySelector()."
        ],
        correta: 1,
        explicacao: "Devemos passar a referência da função: mostrarMensagem. Os parênteses executam a função imediatamente."
    },
    {
        pergunta: "Um botão executa elemento.classList.toggle('ativo') ao ser clicado. Qual comportamento podemos esperar?",
        alternativas: [
            "A classe ativo será removida permanentemente.",
            "A classe ativo será adicionada, mas nunca removida.",
            "A classe ativo será adicionada se não existir e removida se já existir.",
            "O elemento será removido do DOM."
        ],
        correta: 2,
        explicacao: "toggle() alterna a presença de uma classe no elemento."
    },
    {
        pergunta: "Considere: const item = document.createElement('li'); O que acontece nesse momento?",
        alternativas: [
            "Um elemento li é criado, mas ainda não foi inserido na página.",
            "Um item é automaticamente adicionado à primeira lista do HTML.",
            "O conteúdo da página é substituído por um elemento li.",
            "Um evento de clique é registrado no elemento."
        ],
        correta: 0,
        explicacao: "createElement() cria um elemento, mas é necessário inseri-lo no DOM com métodos como appendChild() ou append()."
    },
    {
        pergunta: "Qual é o efeito de executar item.remove() em um elemento que está na página?",
        alternativas: [
            "Remove apenas o texto, mantendo o elemento.",
            "Remove o próprio elemento do DOM.",
            "Oculta o elemento temporariamente.",
            "Remove todos os elementos que possuem a mesma classe."
        ],
        correta: 1,
        explicacao: "remove() retira o próprio elemento da árvore DOM."
    },
    {
        pergunta: "Um formulário possui um evento submit. Por que normalmente utilizamos event.preventDefault() dentro do listener?",
        alternativas: [
            "Para limpar automaticamente todos os campos.",
            "Para impedir o comportamento padrão de envio e permitir tratar os dados com JavaScript.",
            "Para impedir que o evento submit seja registrado.",
            "Para transformar o formulário em um elemento div."
        ],
        correta: 1,
        explicacao: "preventDefault() impede a ação padrão do navegador, como o envio tradicional e o recarregamento da página."
    },
    {
        pergunta: "Em um formulário, qual propriedade permite obter o valor digitado pelo usuário em um input?",
        alternativas: [
            "input.textContent",
            "input.innerHTML",
            "input.value",
            "input.className"
        ],
        correta: 2,
        explicacao: "A propriedade value contém o valor atual de um campo de formulário."
    },
    {
        pergunta: "Analise: let contador = 0; botao.addEventListener('click', () => { contador++; }); Se o usuário clicar três vezes no botão, qual será o valor de contador?",
        alternativas: [
            "0",
            "1",
            "3",
            "undefined"
        ],
        correta: 2,
        explicacao: "Cada clique executa o callback e incrementa a variável contador em uma unidade."
    },
    {
        pergunta: "Uma função interna consegue acessar uma variável declarada na função externa, mesmo depois que a função externa já terminou sua execução. Esse comportamento está relacionado a qual conceito?",
        alternativas: [
            "Herança.",
            "Closure (fechamento léxico).",
            "Manipulação de CSS.",
            "Instanciação de objetos."
        ],
        correta: 1,
        explicacao: "Closure permite que uma função mantenha acesso ao escopo léxico em que foi criada."
    },
    {
        pergunta: "Considere: lista.innerHTML += '<li>Novo item</li>'; Qual afirmação descreve melhor essa operação?",
        alternativas: [
            "O conteúdo HTML atual é lido e combinado com a nova string, e o conteúdo interno é interpretado novamente.",
            "Um elemento li é criado diretamente por createElement().",
            "Apenas o texto do último li é alterado.",
            "O navegador adiciona o item sem modificar o conteúdo interno existente."
        ],
        correta: 0,
        explicacao: "O operador += lê o HTML atual e atribui a string combinada novamente. Isso faz o conteúdo interno ser interpretado novamente e pode afetar referências e listeners associados aos elementos filhos."
    },
    {
        pergunta: "O que acontece quando executamos elemento.style.display = 'none'?",
        alternativas: [
            "O elemento é removido definitivamente do DOM.",
            "O elemento fica transparente, mas continua ocupando espaço.",
            "O elemento deixa de ser exibido e não ocupa espaço no layout, mas continua no DOM.",
            "O elemento é convertido em um comentário HTML."
        ],
        correta: 2,
        explicacao: "display: none oculta o elemento e retira seu espaço do layout. Ele continua existindo na árvore DOM."
    },
    {
        pergunta: "Um botão possui o seguinte listener: botao.addEventListener('click', () => { const item = document.createElement('li'); item.textContent = 'Novo item'; lista.appendChild(item); }); O que acontece se o usuário clicar duas vezes?",
        alternativas: [
            "Um único li será criado, porque o navegador ignora cliques repetidos.",
            "Dois elementos li serão criados e adicionados à lista.",
            "O segundo clique substituirá o primeiro elemento.",
            "A lista será removida e recriada automaticamente."
        ],
        correta: 1,
        explicacao: "Cada clique executa o callback, cria um novo elemento e o adiciona à lista. Portanto, dois cliques produzem dois itens."
    }
];

let indiceAtual = 0;
let respostas = new Array(questoes.length).fill(null);

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const numeroQuestao = document.getElementById("numeroQuestao");
const porcentagem = document.getElementById("porcentagem");
const barraProgresso = document.getElementById("barraProgresso");

const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

function carregarQuestao() {
    const questao = questoes[indiceAtual];

    numeroQuestao.textContent =
        `Questão ${indiceAtual + 1} de ${questoes.length}`;

    const progresso = ((indiceAtual + 1) / questoes.length) * 100;

    porcentagem.textContent = `${Math.round(progresso)}%`;
    barraProgresso.style.width = `${progresso}%`;

    pergunta.textContent = questao.pergunta;
    alternativas.innerHTML = "";

    questao.alternativas.forEach((alternativa, indice) => {
        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        if (respostas[indiceAtual] === indice) {
            botao.classList.add("selecionada");
        }

        const letra = String.fromCharCode(65 + indice);

        botao.innerHTML = `
            <span class="letra">${letra})</span>
            <span>${alternativa}</span>
        `;

        botao.addEventListener("click", () => {
            respostas[indiceAtual] = indice;
            carregarQuestao();
        });

        alternativas.appendChild(botao);
    });

    btnVoltar.disabled = indiceAtual === 0;

    btnAvancar.textContent =
        indiceAtual === questoes.length - 1
            ? "Finalizar quiz"
            : "Próxima questão";
}

btnVoltar.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        carregarQuestao();
    }
});

btnAvancar.addEventListener("click", () => {
    if (respostas[indiceAtual] === null) {
        alert("Selecione uma alternativa antes de continuar.");
        return;
    }

    if (indiceAtual < questoes.length - 1) {
        indiceAtual++;
        carregarQuestao();
    } else {
        finalizarQuiz();
    }
});

function finalizarQuiz() {
    let acertos = 0;

    questoes.forEach((questao, indice) => {
        if (respostas[indice] === questao.correta) {
            acertos++;
        }
    });

    document.getElementById("quiz").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");

    document.getElementById("pontuacao").textContent =
        `${acertos}/${questoes.length}`;

    const mensagem = document.getElementById("mensagemResultado");

    if (acertos >= 13) {
        mensagem.textContent = "Excelente! Você demonstrou ótimo domínio do conteúdo.";
    } else if (acertos >= 9) {
        mensagem.textContent = "Muito bem! Você está no caminho certo.";
    } else if (acertos >= 6) {
        mensagem.textContent = "Bom esforço! Vale revisar alguns conceitos.";
    } else {
        mensagem.textContent = "Continue praticando! Cada exercício ajuda a evoluir.";
    }

    mostrarGabarito();
}

function mostrarGabarito() {
    const gabarito = document.getElementById("gabarito");

    gabarito.innerHTML = "";

    questoes.forEach((questao, indice) => {
        const acertou = respostas[indice] === questao.correta;

        const item = document.createElement("div");

        item.classList.add(
            "item-gabarito",
            acertou ? "correta" : "incorreta"
        );

        const letraCorreta = String.fromCharCode(65 + questao.correta);
        const suaResposta = respostas[indice] === null
            ? "Não respondida"
            : String.fromCharCode(65 + respostas[indice]);

        item.innerHTML = `
            <strong>
                ${indice + 1}. ${acertou ? "✓ Correta" : "✗ Incorreta"}
            </strong>
            <p><strong>Resposta correta:</strong> ${letraCorreta}</p>
            <p><strong>Sua resposta:</strong> ${suaResposta}</p>
            <p>${questao.explicacao}</p>
        `;

        gabarito.appendChild(item);
    });
}

document.getElementById("btnReiniciar").addEventListener("click", () => {
    indiceAtual = 0;
    respostas = new Array(questoes.length).fill(null);

    document.getElementById("resultado").classList.add("escondido");
    document.getElementById("quiz").classList.remove("escondido");

    carregarQuestao();
});

carregarQuestao();