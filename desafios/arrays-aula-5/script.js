/*
 SORRISO+ — ARQUIVO INICIAL DOS DESAFIOS
 A interface e as funções de atualização visual já estão prontas.
 Complete as funções marcadas com TODO. O foco é praticar arrays.
*/

let fila = ["Ana Paula", "Carlos Mendes", "Juliana Costa", "Pedro Henrique"];
let totalChamados = 0;
let nomesExibidos = [...fila]; //spread operator - operador de espalhamento

// ===== FUNÇÕES DE APOIO À INTERFACE (já prontas) =====
// Não é necessário alterar estas funções para resolver os primeiros desafios.
const $ = (id) => document.getElementById(id);

function atualizarPainel() {
  $("queueCount").textContent = fila.length;
  $("nextNumber").textContent = String(totalChamados + 1).padStart(3, "0");
  $("calledCount").textContent = totalChamados;
  $("nextPatient").textContent = fila[0] ?? "Aguardando chegada";
  $("nextTicket").textContent = fila.length ? `Senha ${String(totalChamados + 1).padStart(3, "0")} · aguardando chamada` : "Nenhuma pessoa na fila";
  $("listCount").textContent = `${nomesExibidos.length} ${nomesExibidos.length === 1 ? "pessoa" : "pessoas"}`;

  const lista = $("queueList");
  lista.innerHTML = "";
  nomesExibidos.forEach((nome, indice) => {
    const item = document.createElement("li");
    item.innerHTML = `<span class="number">${String(indice + 1).padStart(2, "0")}</span><span class="person-name"></span><span class="waiting-tag">Aguardando</span>`;
    item.querySelector(".person-name").textContent = nome;
    lista.appendChild(item);
  });
  $("emptyMessage").hidden = nomesExibidos.length > 0;
}

function atualizarListaCompleta() {
  nomesExibidos = [...fila];
  $("viewMessage").textContent = "Exibindo a fila completa.";
  atualizarPainel();
}

// ===== DESAFIOS: COMPLETE AS FUNÇÕES =====

// DESAFIO 1 — Adicionar pessoa
// Recebe um nome e adiciona ao final do array fila.
function adicionarPessoa(nome) {
  if(!nome) return false;
  fila.push(nome);
  return true;
}

// DESAFIO 2 — Chamar próxima pessoa
// Remove e retorna a primeira pessoa da fila.
// Se a fila estiver vazia, retorne uma mensagem adequada.
function chamarProximaPessoa() {
  if(fila.length === 0) return "A fila está vazia"
  totalChamados++;
  return fila.shift();
}

// DESAFIO 3 — Consultar quantidade
// Retorne a quantidade de pessoas que estão aguardando.
function consultarQuantidade() {
  return fila.length;
}

// DESAFIO 4 — Localizar pessoa
// Recebe um nome e retorna o primeiro nome encontrado.
// Se não encontrar, retorne undefined.
function localizarPessoa(nome) {
  return fila.find((pessoa) => pessoa.toLowerCase() === nome.toLowerCase());
}

// DESAFIO 5 — Verificar presença
// Recebe um nome e retorna true ou false.
function pessoaEstaNaFila(nome) {
  return fila.includes(nome);
}

// DESAFIO 6 — Listar pessoas
// Retorne uma lista com os nomes da fila.
// Para este desafio, percorra fila com forEach().
function listarPessoas() {
  const nomes = [];
  fila.forEach((nome) => nomes.push(nome))
  return nomes;
}

// DESAFIO 7 — Gerar nomes em maiúsculas
// Retorne um NOVO array com todos os nomes 
// em letras maiúsculas.
function gerarNomesMaiusculos() {
  return fila.map(nome => nome.toUpperCase());
}

// DESAFIO 8 — Filtrar pela inicial
// Recebe uma letra e retorna um NOVO array com nomes que começam com ela.
// Considere maiúsculas e minúsculas.
function filtrarPelaInicial(letra) {
  if (!letra) return [];
  return fila.filter((nome) => nome.toLowerCase().startsWith(letra.toLowerCase()))
}

// ===== EVENTOS DA PÁGINA (já prontos) =====
$("addButton").addEventListener("click", () => {
  const nome = $("patientName").value.trim();
  if (!nome) {
    $("formMessage").textContent = "Digite um nome antes de adicionar.";
    return;
  }
  const resultado = adicionarPessoa(nome);
  if (resultado === false) {
    $("formMessage").textContent = "Não foi possível adicionar. Confira sua função.";
  } else {
    $("patientName").value = "";
    $("formMessage").textContent = "Pessoa adicionada à fila!";
    atualizarListaCompleta();
  }
});

$("callButton").addEventListener("click", () => {
  const chamada = chamarProximaPessoa();
  $("formMessage").textContent = typeof chamada === "string" ? chamada : `Próximo atendimento: ${chamada ?? "—"}`;
  atualizarListaCompleta();
});

$("searchButton").addEventListener("click", () => {
  const nome = $("searchName").value.trim();
  const encontrado = localizarPessoa(nome);
  $("searchResult").textContent = encontrado ? `Encontrado: ${encontrado}` : "Pessoa não encontrada na fila.";
});

$("filterButton").addEventListener("click", () => {
  const letra = $("initialFilter").value.trim();
  nomesExibidos = filtrarPelaInicial(letra) ?? [];
  $("viewMessage").textContent = `Filtro aplicado: inicial "${letra.toUpperCase()}".`;
  atualizarPainel();
});

$("allButton").addEventListener("click", atualizarListaCompleta);

$("upperButton").addEventListener("click", () => {
  nomesExibidos = gerarNomesMaiusculos() ?? [];
  $("viewMessage").textContent = "Exibindo uma versão em letras maiúsculas.";
  atualizarPainel();
});

atualizarPainel();
