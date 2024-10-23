/*
//ex-1 Fácil

let numMaior= [ 10, 20, 38, 69 ];
console.log(Math.max(null, ...numMaior));

//ex-2 
let fruta = [`banana`,`manga` ,`laranja`]
if (fruta.includes(`manga`)){
    console.log(`manga esta na lista`);
}else {
    console.log(`manga não esta na lista`);
}

//ex-3
let inv = [1, 2, 3, 4, 5];
let reverse= inv.reverse(`1, 2, 3, 4, 5`)

console.log(reverse)

//ex-4

let last = [1, 2, 3, 4, 5];
let last2 = last.pop(5)

console.log(last2);

//ex-5
let unshift = [2, 3, 4, 5];

unshift.unshift(1);

console.log(unshift);
*/
//ex-6

let shift = [2, 3, 4, 5];

shift.shift(1);

console.log(shift);

//ex-7

const numeros5 = [2, 4, 6, 8, 10];

const todosPares = numeros5.every((x) => x % 2 === 0);

console.log(todosPares);

//ex-8
let numeros2 = [1, 2, 3, 4, 5];

let somaTotal = numeros2.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`A soma dos números é ${somaTotal}`);

//ex-9
let num = [9, 4, 7];
let result = num.map((x) => x * 2);

console.log(result);

//ex-10

let maiorDez = (currentValue) => currentValue >= 10;

let array1 = [11, 30, 39, 29, 10, 13];

console.log(array1.every(maiorDez));

//ex-1 MÉDIO

let name2 = ['Arnaldo', 'Juruminga', 'Pedro', 'Alícia'];

if (name2.filter(name2 =>                                                                       
    name2.includes('A')).length > 0) {
    console.log('Existe nomes com A');
} else {
    console.log('Não existe nomes com A');
}

//ex-2  MÉDIO

