/*
// ex 1
let nome = 'Isabella Alvez Gomes'
console.log(nome.toUpperCase('Isabella Alvez Gomes'))

let nome1 = 'Isabella Alvez Gomes'
console.log(nome.toLowerCase('Isabella Alvez Gomes'))

//ex 2
let palavra = 'média aritmética de tal número é tAl'

console.log(palavra.includes('a', 'A'))
console.log(palavra.indexOf('a'))


//ex 3
let d = 'ASSISTA! ViniJr não ganha a bola de ouro'
console.log(d.split('não'));


// ex 4
let c = 'Olá, bom dia meu amigo!'
console.log(c.concat(' EI já é de tarde, burro'))

//ex 5
let frase = 'Já vai tarde meu amigo'
console.log(frase.replace(`amigo`, `brother`))

//ex 6

let frase2 = 'Lápis quebrados ainda podem colorir.'
console.log(frase2.split(` `), frase2.join(`-`))


//ex 7

let array = [
    senha1 = '34',
    senha2 = '26',
    senha3 = '18',
    senha4 = '12',
    senha5 = '67'
]
array.push(senha1,  senha2, senha3, senha4)
array.pop()
console.log(array)

//ex 8
const fruits = ["johnny", "lucas", "luis", "Marcos"];
fruits.shift();
console.log(fruits);


const array1 = ["johnny", "lucas", "luis", "Marcos"];
console.log(array1.unshift('braga', 'isabela'));
console.log(array1);

//ex 9
const num = ["Farinha", "Ovo", "Leite", "Nescau"];
num.reverse();
console.log(num)

//ex 10
let p = [
    arroz = 30,
    microondas = 800,
    batata = 20
]

console.log(p.map ((item) => item * 0.9)) 

//ex 11
let alunos = [
    nome = 'Astolfo', nota =  5.5,
    nome = 'Isabella', nota =  8.5,
    nome = 'Roger', nota =  9.5
]

console.log(alunos.filter( alunos => alunos >= 7))

//ex 12
let valores = [5, 10, 69]

let  soma = valores.reduce((acumulador, valor) => acumulador + valor,)
console.log(soma)

//ex 13
const livros = ["Collen Hoover", "Clarice Lispector", "Karl Marx", "Dostoiévski"];
livros.sort();

console.log(livros)

//ex 14

function numaleatoriot(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  
  console.log(numaleatoriot(0, 100))

  //ex -15

  let object1= {
    a:10,
    b: `qqr texto`,
    c: true,
  };
  
  console.log(Object.keys(object1));
  console.log(Object.values(object1));

  */

//ex-16

const objectCarro={
    carro: `Mclaren Senna`,
    marca: `Mclaren`  ,


marcaecarro: function () {
    const carro= this.carro + this.marca
    console.log(`O carro ${carro} é da marca ${marca}`);
}
}

console.log(marcaecarro)