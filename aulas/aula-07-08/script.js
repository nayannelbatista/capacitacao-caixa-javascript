const URL_API = 'https://dummyjson.com/products?limit=12&delay=1500';

const mensagemStatus = document.querySelector('#status');
const produtos = document.querySelector('#produtos');
const botaoRecarregar = document.querySelector('#recarregar');

// Busca os produtos na API
async function buscarProdutos() {
  const resposta = await fetch(URL_API);

  if (!resposta.ok) {
    throw new Error(`Erro HTTP ${resposta.status}`);
  }

  const dados = await resposta.json();
  return dados.products;
}

// Cria o card de um produto
function criarCard(produto) {
  const card = document.createElement('article');
  card.className = 'card';

  const imagem = document.createElement('img');
  imagem.src = produto.thumbnail;
  imagem.alt = produto.title;

  const titulo = document.createElement('h2');
  titulo.textContent = produto.title;

  const preco = document.createElement('p');
  preco.textContent = `US$ ${produto.price.toFixed(2)}`;

  card.append(imagem, titulo, preco);

  return card;
}

// Exibe os produtos na página
function renderizarProdutos(lista) {
  produtos.replaceChildren(...lista.map(criarCard));
}

// Atualiza a mensagem de status
function mostrarStatus(mensagem, classe = '') {
  mensagemStatus.textContent = mensagem;
  mensagemStatus.className = classe;
}

// Controla o carregamento do catálogo
async function carregarCatalogo() {
  botaoRecarregar.disabled = true;
  produtos.replaceChildren();
  mostrarStatus('Carregando produtos...', 'carregando');

  try {
    const lista = await buscarProdutos();
    renderizarProdutos(lista);
    mostrarStatus(`${lista.length} produtos carregados.`);

  } catch (erro) {
    console.error('Falha ao carregar:', erro.message);
    mostrarStatus('Não foi possível carregar os produtos. Tente novamente.', 'erro');

  } finally {
    botaoRecarregar.disabled = false;
  }
}

botaoRecarregar.addEventListener('click', carregarCatalogo);
carregarCatalogo();
