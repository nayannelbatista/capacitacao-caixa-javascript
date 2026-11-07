
//objeto
const pessoa = {
    nome: 'Maria',
    idade: 28,
    cadastroAtivo: true
}

console.log(pessoa.nome)
console.log(pessoa.cadastroAtivo)
console.log(pessoa["idade"])

// const produto = {
//     nome: 'Notebook',
//     preco: 4000
// }


// const produto2 = {
//     titulo: 'Mouse',
//     preco: 50
// }


// const produto3 = {
//     nome: 'Teclado',
//     preco: 100,
//     codigo: 4566
// }

// classe
// instancia
// atributos
// metodos - comportamentos

// class Produto {
//     nome;
//     preco;
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }

//     validar() {
//         console.log("Código validado")
//     }
// }

// const produto = new Produto("Notebook", 4000)
// produto.validar()


class ContaBancaria {

  titular;
  saldoInicial;
  
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  consultarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

const conta1 = new ContaBancaria('Nay', 3000000000)
const conta2 = new ContaBancaria('Ally', 7000000000)

console.log(conta1.consultarSaldo())





