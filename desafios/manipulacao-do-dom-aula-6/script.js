// Selecionar os elementos HTML

const botaoTema = document.querySelector("#botaoTema");
const campoEmail = document.querySelector("#email");
const mensagemEmail = document.querySelector("#mensagemEmail");
const campoArea = document.querySelector("#area");
const mensagemArea = document.querySelector("#mensagemArea");
const campoNome = document.querySelector("#nome");

// DESAFIO 1 — Evento de clique
// Ao clicar no botão de modo escuro, alterne o tema da página.
// Dica: classList
botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = " ☀️ Modo claro"
    } else {
        botaoTema.textContent = " ☾ Modo escuro"
    }
})

// DESAFIO 2 — Evento de input
// Acompanhe a digitação do e-mail.
// Se o conteúdo tiver "@", apresente uma mensagem positiva.
// Caso contrário, apresente uma orientação.
campoEmail.addEventListener("input", function() {
    if(campoEmail.value.includes("@")) {
        mensagemEmail.textContent = "E-mail informado corretamente. Continue preenchendo!"
    } else {
        mensagemEmail.textContent = "Lembre-se de preencher um formato válido"
    }
})

// DESAFIO 3 — Evento de change
// Quando a pessoa escolher uma área,
// mostre a opção selecionada na mensagem.
campoArea.addEventListener("change", function() {
    if(campoArea.value === "") {
        mensagemArea.textContent = "Escolha uma área de interesse"
    } else {
        mensagemArea.textContent = "Área selecionada: " + campoArea.value;
    }
})

// Criar um Array para armazenar os dados das inscrições
const nomesInscritos = [];

//criando referencias para os elementos
const formulario = document.querySelector("#formInscricao");
const contador = document.querySelector("#contador");
const listaParticipantes = document.querySelector("#listaParticipantes");

// DESAFIO 4 — Evento de submit
// Capture os dados e crie um cartão para a pessoa inscrita.
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const area = campoArea.value;

    if (nome === "" || email === "" || area === "") {
        return;
    }

    nomesInscritos.push(nome);
    const cartao = document.createElement("article");
    cartao.classList.add("participante-card");

    const nomeCartao = document.createElement("h3");
    nomeCartao.textContent = nome;

    const areaCartao = document.createElement("p");
    areaCartao.classList.add("area-card");
    areaCartao.textContent = area;

    cartao.appendChild(nomeCartao);
    cartao.appendChild(areaCartao);
    listaParticipantes.appendChild(cartao);

    contador.textContent = nomesInscritos.length;

    //limpeza do formulario
    formulario.reset();
    mensagemEmail.textContent =
        "Informe um e-mail para contato.";

    mensagemArea.textContent =
        "Escolha uma área de interesse.";

    campoNome.focus();
});