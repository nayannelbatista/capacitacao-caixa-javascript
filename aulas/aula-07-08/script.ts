interface Produto {
 id: number;
 title: string;
 thumbnail: string;
 price: number;
}

const URL_API = "https://dummyjson.com/products?limit=6&delay=1500";

const mensagemStatus = document.querySelector("#status");
const produtos = document.querySelector("#produtos");
const botaoRecarregar = document.querySelector<HTMLButtonElement>("#recarregar");


if (!mensagemStatus || !produtos || !botaoRecarregar) {
 throw new Error("Elementos HTML não encontrados.");
}


const status = mensagemStatus;
const containerProdutos = produtos;
const botao = botaoRecarregar;


async function buscarProdutos(): Promise<Produto[]> {
 const resposta = await fetch(URL_API);


 if (!resposta.ok) {
   throw new Error(`Erro HTTP ${resposta.status}`);
 }


 const dados = await resposta.json();
 return dados.products;
}


function criarCard(produto: Produto) {
 const card = document.createElement("article");
 card.className = "card";


 const imagem = document.createElement("img");
 imagem.src = produto.thumbnail;
 imagem.alt = produto.title;


 const titulo = document.createElement("h2");
 titulo.textContent = produto.title;


 const preco = document.createElement("p");
 preco.textContent = `US$ ${produto.price.toFixed(2)}`;


 card.append(imagem, titulo, preco);


 return card;
}


// Exibe os produtos na página
function renderizarProdutos(lista: Produto[]) {
 containerProdutos.replaceChildren(...lista.map(criarCard));
}


// Atualiza a mensagem de status
function mostrarStatus(mensagem: string, classe = "") {
 status.textContent = mensagem;
 status.className = classe;
}


// Controla o carregamento do catálogo
async function carregarCatalogo(): Promise<void> {
 botao.disabled = true;
 containerProdutos.replaceChildren();
 mostrarStatus("Carregando produtos...", "carregando");


 try {
   const lista = await buscarProdutos();
   renderizarProdutos(lista);
   mostrarStatus(`${lista.length} produtos carregados.`);
 } catch (erro) {
   if (erro instanceof Error) {
     console.error("Falha ao carregar:", erro.message);
   }
   mostrarStatus(
     "Não foi possível carregar os produtos. Tente novamente.",
     "erro",
   );
 } finally {
   botao.disabled = false;
 }
}


botaoRecarregar.addEventListener("click", carregarCatalogo);
carregarCatalogo();


export {};
