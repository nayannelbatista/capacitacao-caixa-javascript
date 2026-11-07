'use strict';

/* ==========================================================
   Quiz de POO em JavaScript
   ========================================================== */

const linhas = (...l) => l.join('\n');

const TIPOS = {
  mc: 'Múltipla escolha',
  vf: 'Verdadeiro ou falso',
  cod: 'Interpretação de código'
};

/* ==========================================================
   QUESTÕES
   Em cada questão:
   - opcoes[i].t  = texto da alternativa
   - opcoes[i].c  = comentário do gabarito para essa alternativa
   - correta      = índice da alternativa correta
   Use `crases` para destacar trechos de código no texto.
   ========================================================== */
const questoes = [
  /* ---------- 1 ---------- */
  {
    tipo: 'mc',
    nivel: 'Básico',
    topico: 'Conceito de POO',
    enunciado: 'Qual alternativa define corretamente a Programação Orientada a Objetos (POO)?',
    correta: 0,
    opcoes: [
      {
        t: 'Um paradigma que organiza o programa em objetos, que reúnem dados (atributos) e comportamentos (métodos).',
        c: 'POO modela o problema com objetos. Cada objeto guarda os seus dados e as operações que podem ser feitas com eles.'
      },
      {
        t: 'Um paradigma em que o programa é uma sequência de instruções executadas linha a linha, sem agrupar dados e comportamentos.',
        c: 'Isso se aproxima da programação procedural, em que dados e funções ficam separados. Não é a ideia central da POO.'
      },
      {
        t: 'Uma linguagem de programação criada especificamente para desenvolver páginas web.',
        c: 'POO é um paradigma (uma forma de organizar o código), não uma linguagem. Várias linguagens, como JavaScript, Java e C#, permitem usá-lo.'
      },
      {
        t: 'Uma técnica para executar várias tarefas ao mesmo tempo, dividindo o programa em processos.',
        c: 'Isso descreve concorrência ou paralelismo, que é outro assunto e não define a POO.'
      }
    ]
  },

  /* ---------- 2 ---------- */
  {
    tipo: 'vf',
    nivel: 'Básico',
    topico: 'Classe e objeto',
    enunciado: 'Verdadeiro ou falso: declarar a classe `Produto`, como no código abaixo, já cria na memória um produto com nome e preço, pronto para ser usado.',
    codigo: linhas(
      'class Produto {',
      '  nome;',
      '  preco;',
      '  constructor(nome, preco) {',
      '    this.nome = nome;',
      '    this.preco = preco;',
      '  }',
      '}'
    ),
    correta: 1,
    opcoes: [
      {
        t: 'Verdadeiro',
        c: 'A declaração apenas define o molde, com seus atributos e métodos. Nenhum produto específico existe até que a classe seja instanciada.'
      },
      {
        t: 'Falso',
        c: 'A classe é o molde; os objetos (instâncias) só passam a existir quando usamos `new`, como em `new Produto("Mouse", 80)`.'
      }
    ]
  },

  /* ---------- 3 ---------- */
  {
    tipo: 'mc',
    nivel: 'Básico',
    topico: 'Atributos e métodos',
    enunciado: 'Observe a classe abaixo. Qual alternativa lista apenas atributos de `Produto`?',
    codigo: linhas(
      'class Produto {',
      '  nome;',
      '  preco;',
      '  constructor(nome, preco) {',
      '    this.nome = nome;',
      '    this.preco = preco;',
      '  }',
      '',
      '  validar() { /* ... */ }',
      '  formatar() { /* ... */ }',
      '  paraAPI()  { /* ... */ }',
      '}'
    ),
    correta: 2,
    opcoes: [
      {
        t: '`nome` e `validar()`',
        c: '`nome` é atributo, mas `validar()` é um método: ele executa uma ação, não guarda um dado.'
      },
      {
        t: '`preco` e `paraAPI()`',
        c: '`preco` é atributo, mas `paraAPI()` é um método.'
      },
      {
        t: '`nome` e `preco`',
        c: 'Atributos guardam os dados do objeto. Aqui eles são criados com `this` dentro do `constructor`.'
      },
      {
        t: '`validar()`, `formatar()` e `paraAPI()`',
        c: 'As três são métodos: representam comportamentos do objeto, não dados guardados nele.'
      }
    ]
  },

  /* ---------- 4 ---------- */
  {
    tipo: 'mc',
    nivel: 'Básico',
    topico: 'constructor',
    enunciado: 'Considere a linha abaixo. Quando o `constructor` da classe `Produto` é executado?',
    codigo: 'const p = new Produto("Mouse", 80);',
    correta: 1,
    opcoes: [
      {
        t: 'Sempre que qualquer método da classe é chamado, para garantir que os atributos existam.',
        c: 'O `constructor` não roda a cada chamada de método. Ele cuida apenas da criação do objeto.'
      },
      {
        t: 'Automaticamente, uma vez para cada objeto, no momento em que ele é criado com `new`.',
        c: 'Cada `new` executa o `constructor` uma vez para o objeto recém-criado, inicializando os atributos dele.'
      },
      {
        t: 'Uma única vez, quando a classe é declarada, antes de qualquer objeto existir.',
        c: 'Ele roda a cada objeto criado, e não uma única vez na declaração da classe. Dois `new` significam duas execuções.'
      },
      {
        t: 'Somente quando o chamamos manualmente, como se fosse um método comum.',
        c: 'Não o chamamos manualmente: é o operador `new` que o dispara.'
      }
    ]
  },

  /* ---------- 5 ---------- */
  {
    tipo: 'mc',
    nivel: 'Básico',
    topico: 'Palavra-chave this',
    enunciado: 'No `constructor` abaixo, a que o `this` se refere?',
    codigo: linhas(
      'constructor(nome, preco) {',
      '  this.nome = nome;',
      '  this.preco = preco;',
      '}'
    ),
    correta: 3,
    opcoes: [
      {
        t: 'À própria classe `Produto`, compartilhada por todos os objetos.',
        c: 'O `this` não aponta para a classe, e sim para o objeto que está sendo criado. Cada objeto tem os seus próprios valores.'
      },
      {
        t: 'Ao parâmetro `nome` recebido pelo `constructor`.',
        c: '`nome` é um parâmetro, isto é, um valor recebido. Já `this.nome` é o atributo guardado dentro do objeto.'
      },
      {
        t: 'Ao primeiro objeto que foi criado a partir da classe.',
        c: 'O `this` não fica preso ao primeiro objeto: ele acompanha a instância que está sendo criada ou usada no momento.'
      },
      {
        t: 'Ao objeto que está sendo criado naquele momento (a instância atual).',
        c: 'Em `new Produto("Mouse", 80)`, o `this` é o novo objeto, e `this.nome = nome` grava o valor recebido dentro dele.'
      }
    ]
  },

  /* ---------- 6 ---------- */
  {
    tipo: 'cod',
    nivel: 'Básico',
    topico: 'Instanciação com new',
    enunciado: 'O que será exibido no console ao executar o código abaixo?',
    codigo: linhas(
      'class Produto {',
      '  nome;',
      '  preco;',
      '  constructor(nome, preco) {',
      '    this.nome = nome;',
      '    this.preco = preco;',
      '  }',
      '}',
      '',
      'const p1 = new Produto("Teclado", 150);',
      'const p2 = new Produto("Monitor", 900);',
      'p1.preco = 120;',
      'console.log(p1.preco, p2.preco);'
    ),
    correta: 2,
    opcoes: [
      {
        t: '`150 900`',
        c: 'A linha `p1.preco = 120` altera o atributo de `p1`, então o preço dele deixa de ser 150.'
      },
      {
        t: '`120 120`',
        c: 'Cada objeto tem os seus próprios atributos. Alterar `p1` não afeta `p2`, que continua com 900.'
      },
      {
        t: '`120 900`',
        c: '`p1` e `p2` são instâncias independentes. Mudar `p1.preco` para 120 não altera `p2.preco`, que segue em 900.'
      },
      {
        t: 'Um erro, pois não é possível alterar um atributo depois que o objeto foi criado.',
        c: 'Atributos podem ser reatribuídos depois da criação do objeto. Nada no código impede isso.'
      }
    ]
  },

  /* ---------- 7 ---------- */
  {
    tipo: 'vf',
    nivel: 'Básico',
    topico: 'Instanciação com new',
    enunciado: 'Verdadeiro ou falso: a linha abaixo funciona normalmente, e `p` passa a ser um objeto `Produto`, pois o `new` é opcional ao usar classes.',
    codigo: 'const p = Produto("Mouse", 80);',
    correta: 1,
    opcoes: [
      {
        t: 'Verdadeiro',
        c: 'Classes não podem ser chamadas como funções comuns. Sem `new`, o JavaScript lança um `TypeError` ("Class constructor Produto cannot be invoked without \'new\'").'
      },
      {
        t: 'Falso',
        c: 'O `new` é obrigatório: é ele que cria o objeto, associa o `this` a ele e executa o `constructor`. Sem `new`, ocorre um `TypeError`.'
      }
    ]
  },

  /* ---------- 8 ---------- */
  {
    tipo: 'cod',
    nivel: 'Intermediário',
    topico: 'Métodos de uma classe',
    enunciado: 'O que será exibido no console? (Lembre que `toFixed(2)` converte o número em texto com duas casas decimais, usando ponto como separador.)',
    codigo: linhas(
      'class Produto {',
      '  nome;',
      '  preco;',
      '  constructor(nome, preco) {',
      '    this.nome = nome;',
      '    this.preco = preco;',
      '  }',
      '',
      '  formatar() {',
      '    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;',
      '  }',
      '}',
      '',
      'const p = new Produto("Caderno", 12.5);',
      'console.log(p.formatar());'
    ),
    correta: 1,
    opcoes: [
      {
        t: '`Caderno - R$ 12.5`',
        c: 'O `toFixed(2)` sempre mostra duas casas decimais, então 12.5 vira "12.50".'
      },
      {
        t: '`Caderno - R$ 12.50`',
        c: '`this.nome` vale "Caderno" e `12.5.toFixed(2)` resulta em "12.50". O método devolve o texto montado com esses dois valores.'
      },
      {
        t: '`Caderno - R$ 12,50`',
        c: 'O `toFixed` usa ponto, e não vírgula, como separador decimal.'
      },
      {
        t: '`Caderno - R$ 13`',
        c: 'O `toFixed(2)` não arredonda para inteiro: ele mantém duas casas decimais.'
      }
    ]
  },

  /* ---------- 9 ---------- */
  {
    tipo: 'cod',
    nivel: 'Intermediário',
    topico: 'Validação de dados',
    enunciado: 'O que será exibido no console? (Lembre que `trim()` remove os espaços do início e do fim de um texto.)',
    codigo: linhas(
      'class Produto {',
      '  nome;',
      '  preco;',
      '  constructor(nome, preco) {',
      '    this.nome = nome;',
      '    this.preco = preco;',
      '  }',
      '',
      '  validar() {',
      '    return this.nome.trim() !== "" && this.preco > 0;',
      '  }',
      '}',
      '',
      'const a = new Produto("Caneta", 3.5);',
      'const b = new Produto("   ", 20);',
      'const c = new Produto("Lápis", 0);',
      'console.log(a.validar(), b.validar(), c.validar());'
    ),
    correta: 3,
    opcoes: [
      {
        t: '`true true false`',
        c: 'O nome de `b` é só espaços: depois do `trim()` ele vira "", então `b.validar()` é `false`.'
      },
      {
        t: '`true false true`',
        c: '`c` tem preço 0, e `0 > 0` é `false`. Portanto `c.validar()` é `false`.'
      },
      {
        t: '`false false false`',
        c: '`a` tem nome preenchido e preço maior que zero, então `a.validar()` é `true`.'
      },
      {
        t: '`true false false`',
        c: '`a`: nome preenchido e preço > 0, então `true`. `b`: o nome só com espaços vira "" após o `trim()`, então `false`. `c`: preço 0 não é maior que 0, então `false`.'
      }
    ]
  },

  /* ---------- 10 ---------- */
  {
    tipo: 'mc',
    nivel: 'Intermediário',
    topico: 'Validação de dados',
    enunciado: 'A regra de validação foi escrita dentro da classe, no método `validar()`, em vez de repetir `if` em vários pontos do sistema. Qual é a principal vantagem dessa abordagem?',
    codigo: linhas(
      'validar() {',
      '  return this.nome.trim() !== "" && this.preco > 0;',
      '}'
    ),
    correta: 0,
    opcoes: [
      {
        t: 'A regra fica junto dos dados que ela valida e pode ser reutilizada em qualquer lugar chamando `produto.validar()`.',
        c: 'Se a regra mudar, basta alterar um único ponto. Todo código que usa o objeto passa a seguir a regra nova.'
      },
      {
        t: 'O JavaScript executa `validar()` sozinho logo após o `constructor` e bloqueia a criação de objetos inválidos.',
        c: 'O JavaScript não chama `validar()` automaticamente. Um `Produto` com dados inválidos ainda pode ser criado; é preciso chamar o método explicitamente.'
      },
      {
        t: 'Métodos de classe são sempre executados mais rápido do que funções comuns.',
        c: 'Não há ganho de desempenho garantido. A vantagem é de organização e reaproveitamento do código.'
      },
      {
        t: 'Sem um método chamado `validar()`, não seria possível criar objetos com `new`.',
        c: 'O `new` funciona com ou sem `validar()`. Ele é apenas mais um comportamento definido na classe.'
      }
    ]
  },
];

/* ==========================================================
   Utilitários de renderização
   ========================================================== */

const $ = (id) => document.getElementById(id);

/* Texto com `trechos de código` entre crases */
function escreverTexto(elemento, texto) {
  const partes = texto.split('`');
  partes.forEach((parte, i) => {
    if (parte === '') return;
    if (i % 2 === 1) {
      const code = document.createElement('code');
      code.textContent = parte;
      elemento.appendChild(code);
    } else {
      elemento.appendChild(document.createTextNode(parte));
    }
  });
}

/* Bloco de código com destaque de sintaxe simples */
function criarBlocoCodigo(codigo) {
  const pre = document.createElement('pre');
  pre.className = 'codigo';
  pre.tabIndex = 0;
  pre.setAttribute('aria-label', 'Trecho de código');

  const code = document.createElement('code');
  const regex = /(\/\/.*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(class|extends|constructor|super|new|return|const|this|true|false)\b|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)(?=\()/g;

  let ultimo = 0;
  let m;
  while ((m = regex.exec(codigo)) !== null) {
    if (m.index > ultimo) {
      code.appendChild(document.createTextNode(codigo.slice(ultimo, m.index)));
    }
    const span = document.createElement('span');
    span.className = m[1] ? 'tk-com' : m[2] ? 'tk-str' : m[3] ? 'tk-kw' : m[4] ? 'tk-num' : 'tk-fn';
    span.textContent = m[0];
    code.appendChild(span);
    ultimo = regex.lastIndex;
  }
  if (ultimo < codigo.length) {
    code.appendChild(document.createTextNode(codigo.slice(ultimo)));
  }

  pre.appendChild(code);
  return pre;
}

function letraDe(questao, i) {
  return questao.tipo === 'vf' ? (i === 0 ? 'V' : 'F') : 'ABCD'[i];
}

/* ==========================================================
   Estado e elementos
   ========================================================== */

let atual = 0;
let respostas = [];

const telaInicio = $('tela-inicio');
const telaQuiz = $('tela-quiz');
const telaResultado = $('tela-resultado');

/* ==========================================================
   Fluxo do quiz
   ========================================================== */

function iniciar() {
  atual = 0;
  respostas = new Array(questoes.length).fill(null);
  telaInicio.hidden = true;
  telaResultado.hidden = true;
  telaQuiz.hidden = false;
  mostrarQuestao();
}

function mostrarQuestao() {
  const q = questoes[atual];
  const total = questoes.length;

  $('progresso-rotulo').textContent = 'Questão ' + (atual + 1) + ' de ' + total;
  $('progresso-nivel').textContent = q.nivel;
  $('barra').setAttribute('aria-valuenow', String(atual + 1));
  $('barra').setAttribute('aria-valuemax', String(total));
  $('barra-preenchida').style.width = ((atual + 1) / total * 100) + '%';

  $('q-tipo').textContent = TIPOS[q.tipo];
  $('q-topico').textContent = q.topico;

  const enunciado = $('q-enunciado');
  enunciado.textContent = '';
  escreverTexto(enunciado, q.enunciado);

  const areaCodigo = $('q-codigo');
  areaCodigo.textContent = '';
  if (q.codigo) areaCodigo.appendChild(criarBlocoCodigo(q.codigo));

  const areaOpcoes = $('q-opcoes');
  areaOpcoes.textContent = '';
  q.opcoes.forEach((op, i) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao';
    botao.setAttribute('aria-pressed', respostas[atual] === i ? 'true' : 'false');

    const letra = document.createElement('span');
    letra.className = 'opcao-letra';
    letra.setAttribute('aria-hidden', 'true');
    letra.textContent = letraDe(q, i);

    const texto = document.createElement('span');
    texto.className = 'opcao-texto';
    escreverTexto(texto, op.t);

    botao.appendChild(letra);
    botao.appendChild(texto);
    botao.addEventListener('click', () => selecionar(i));
    areaOpcoes.appendChild(botao);
  });

  const btn = $('btn-proxima');
  btn.textContent = atual === total - 1 ? 'Finalizar quiz' : 'Próxima questão';
  btn.disabled = respostas[atual] === null;

  enunciado.focus({ preventScroll: true });
  window.scrollTo({ top: 0 });
}

function selecionar(indice) {
  respostas[atual] = indice;
  document.querySelectorAll('#q-opcoes .opcao').forEach((botao, i) => {
    botao.setAttribute('aria-pressed', i === indice ? 'true' : 'false');
  });
  $('btn-proxima').disabled = false;
}

function avancar() {
  if (respostas[atual] === null) return;
  if (atual < questoes.length - 1) {
    atual++;
    mostrarQuestao();
  } else {
    finalizar();
  }
}

/* ==========================================================
   Resultado e gabarito
   ========================================================== */

function finalizar() {
  const total = questoes.length;
  const acertos = respostas.filter((r, i) => r === questoes[i].correta).length;
  const pct = Math.round(acertos / total * 100);

  telaQuiz.hidden = true;
  telaResultado.hidden = false;

  $('anel').style.setProperty('--pct', String(pct));
  $('anel-pct').textContent = pct + '%';
  $('res-pontuacao').textContent =
    'Você acertou ' + acertos + ' de ' + total + ' questões (' + pct + '% de acertos).';

  let mensagem;
  if (pct === 100) {
    mensagem = 'Gabarito completo! Você domina os conceitos de classe e objeto vistos neste quiz.';
  } else if (pct >= 80) {
    mensagem = 'Muito bom! Dê uma olhada no gabarito comentado das questões que errou para fechar as lacunas.';
  } else if (pct >= 60) {
    mensagem = 'Bom caminho. Leia os comentários das questões erradas e refaça o quiz para fixar os conceitos.';
  } else {
    mensagem = 'Vale revisar a aula com calma, principalmente os trechos de código. O gabarito comentado explica cada alternativa.';
  }
  $('res-mensagem').textContent = mensagem;

  const temErros = acertos < total;
  document.querySelectorAll('.btn-filtro').forEach((b) => {
    const ativo = b.dataset.filtro === 'todas';
    b.classList.toggle('ativo', ativo);
    b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  });
  document.querySelector('.filtro').hidden = !temErros;

  renderizarGabarito('todas');

  const titulo = $('titulo-resultado');
  titulo.focus({ preventScroll: true });
  window.scrollTo({ top: 0 });
}

function renderizarGabarito(filtro) {
  const area = $('gabarito');
  area.textContent = '';

  questoes.forEach((q, n) => {
    const escolhida = respostas[n];
    const acertou = escolhida === q.correta;
    if (filtro === 'erradas' && acertou) return;

    const item = document.createElement('article');
    item.className = 'item-gabarito ' + (acertou ? 'acertou' : 'errou');

    const cab = document.createElement('div');
    cab.className = 'item-cabecalho';

    const num = document.createElement('span');
    num.className = 'item-numero';
    num.textContent = 'Questão ' + (n + 1);

    const status = document.createElement('span');
    status.className = 'status ' + (acertou ? 'acertou' : 'errou');
    status.textContent = acertou ? 'Você acertou' : 'Você errou';

    const tipo = document.createElement('span');
    tipo.className = 'etiqueta etiqueta-suave';
    tipo.textContent = TIPOS[q.tipo];

    cab.appendChild(num);
    cab.appendChild(status);
    cab.appendChild(tipo);
    item.appendChild(cab);

    const enun = document.createElement('p');
    enun.className = 'item-enunciado';
    escreverTexto(enun, q.enunciado);
    item.appendChild(enun);

    if (q.codigo) item.appendChild(criarBlocoCodigo(q.codigo));

    const lista = document.createElement('ul');
    lista.className = 'lista-gabarito';

    q.opcoes.forEach((op, i) => {
      const ehCorreta = i === q.correta;
      const ehEscolhida = i === escolhida;

      const li = document.createElement('li');
      li.className = 'resp' + (ehCorreta ? ' correta' : '') + (ehEscolhida && !ehCorreta ? ' marcada-errada' : '');

      const topo = document.createElement('div');
      topo.className = 'resp-topo';

      const letra = document.createElement('span');
      letra.className = 'resp-letra';
      letra.textContent = letraDe(q, i) + ')';
      topo.appendChild(letra);

      const texto = document.createElement('span');
      escreverTexto(texto, op.t);
      topo.appendChild(texto);

      if (ehCorreta) {
        const selo = document.createElement('span');
        selo.className = 'selo selo-correta';
        selo.textContent = 'Resposta correta';
        topo.appendChild(selo);
      }
      if (ehEscolhida) {
        const selo = document.createElement('span');
        selo.className = 'selo selo-sua' + (ehCorreta ? ' acerto' : '');
        selo.textContent = 'Sua resposta';
        topo.appendChild(selo);
      }
      li.appendChild(topo);

      const coment = document.createElement('p');
      coment.className = 'resp-comentario';
      const prefixo = document.createElement('strong');
      prefixo.textContent = ehCorreta ? 'Por que está correta: ' : 'Por que está incorreta: ';
      coment.appendChild(prefixo);
      escreverTexto(coment, op.c);
      li.appendChild(coment);

      lista.appendChild(li);
    });

    item.appendChild(lista);
    area.appendChild(item);
  });
}

function reiniciar() {
  iniciar();
}

/* ==========================================================
   Eventos
   ========================================================== */

$('total-questoes').textContent = String(questoes.length);
$('btn-iniciar').addEventListener('click', iniciar);
$('btn-proxima').addEventListener('click', avancar);
$('btn-reiniciar').addEventListener('click', reiniciar);
$('btn-reiniciar-2').addEventListener('click', reiniciar);

document.querySelectorAll('.btn-filtro').forEach((botao) => {
  botao.addEventListener('click', () => {
    document.querySelectorAll('.btn-filtro').forEach((b) => {
      const ativo = b === botao;
      b.classList.toggle('ativo', ativo);
      b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
    renderizarGabarito(botao.dataset.filtro);
  });
});
