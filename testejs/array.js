//ex1
let numero= [10]
console.log(`O número é ${[10]}`)

//ex2
let numeros = [1, 2, 3, 4, 5]
console.log(`Os números são ${numeros[0]}`)
console.log(`Os números são ${numeros[1]}`)
console.log(`Os números são ${numeros[2]}`)
console.log(`Os números são ${numeros[3]}`)
console.log(`Os números são ${numeros[4]}`)

//ex 3
console.log(`Os números são ${numeros[4]=100}`)

//ex 4


const meuArray2 = ["maçã", "banana", "laranja", "uva", "manga"];

console.log(meuArray2.length);

//ex 5
let numeros2 = [1, 2, 3, 4, 5];

let somaTotal = numeros2.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`A soma dos números é ${somaTotal}`);

//ex6

let meuArray = [1, 2, 3, 4, 5];
meuArray.pop();

console.log(meuArray);

//ex7

let unshift = [2, 3, 4, 5];

unshift.unshift(1);

console.log(unshift);

//ex8

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayCombinado = array1.concat(array2);

console.log(arrayCombinado);

//MÉDIO
//ex1
const array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//ex2

const livros = [
    { nome: 'O Alquimista', autor: 'Paulo Coelho' },
    { nome: '1984', autor: 'George Orwell' },
    { nome: 'Dom Casmurro', autor: 'Machado de Assis' }
];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].nome);
}

//ex3
const numeros3 = [1, 2, 3, 4, 5];

const numerosDobrados = numeros3.map(x => x * 2);

console.log(numerosDobrados);
//ex4
const numeros4 = [5, 12, 8, 20, 3, 15];

const maioresQueDez = numeros4.filter(x => x > 10);

console.log(maioresQueDez);

//ex5

const numeros5 = [2, 4, 6, 8, 10];

const todosPares = numeros5.every(x => x % 2 === 0);

console.log(todosPares); 
