function criarContador() {
    let total = 0;

    return function() {
        total++;
        return total;
    }
}

//closure
let total = 125;
console.log(total); //125

const contador = criarContador();

console.log(contador());// 1
console.log(contador());// 2
console.log(contador());// 3