const temperatura001 = 38.1;
const temperatura002 = 39.1;
const temperatura003 = 38.8;
const temperatura004 = 38.5;
const temperatura005 = 39.0;
const temperatura006 = 40.0;
const temperatura007 = 37.5;

//array - indice
// const temperaturas = [38.1, 39.1, 38.8, 38.5, 39.0, 40.0, 37.5, 39]
//-------------------------0-----1------2-----3----4-----5-----6----7--
//length = 7
//indice -> 0 até length - 1 -> 0 até 6

// console.log(typeof(temperaturas))
// console.log(Array.isArray(temperaturas))
// console.log(temperaturas.length)
// console.log(temperaturas[0]) //38.1
// console.log(temperaturas[7])

//atribuicao de valores
// temperaturas[6] = 35.6; //sobrescrevendo
// temperaturas[7] = 34.9;
// console.log(temperaturas)

//loops com arrays

// for (let i = 0; i < temperaturas.length; i++) {
//     const element = temperaturas[i];
//     console.log(element)
// }

//for...of
// for(const temperatura of temperaturas) {
//     console.log(temperatura)
// }

//forEach
//temperaturas.forEach(temperatura => console.log(temperatura))

//Métodos de adicao e remocao (modificam o array original)
//push - adiciona um elemento no final do array
//pop - remove um elemento do final do array
//unshift - adiciona um elemento no início do array
//shift - remove um elemento do início do array

const produtos = ["Notebook", "TV", "camera", "microfone"];

produtos.push("mouse") //retorna o novo tamanho do array
// console.log("Produtos: ", produtos)

produtos.unshift("celular") //retorna o novo tamanho do array
// console.log("Produtos: ", produtos)

produtos.pop() //retorna o elemento removido
console.log("Produtos: ", produtos)

console.log(produtos.shift()) //retorna o elemento removido
console.log("Produtos: ", produtos)










