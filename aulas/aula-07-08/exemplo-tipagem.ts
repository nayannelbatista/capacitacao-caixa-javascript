let nome = 'Ana';           
let idade: number = 30;
//nome = 10;                   

function calcularDesconto(preco: number, percentual: number): number {
  return preco - preco * (percentual / 100);
}
//calcularDesconto(100, '10'); // erro

const precos: number[] = [10, 20];
//precos.push('30');           // erro
//precos.push(true);           // erro

interface Produto {
  id: number;
  title: string;
  price: number;
}

//const p: Produto = { id: 1, title: 'Mascara' };  // erro
//p.titulo;                    // erro