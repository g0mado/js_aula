/*

//ex-1
function parimpar (num){
    if (num % 2 == 0) {
        return "par"
} else {
    return "ímpar"}
}
console.log(parimpar(4));
console.log(parimpar(9));

//ex-2

const nascimento= 2000

if (nascimento<=2006){
    console.log("Você tem mais de 18 anos")
}else{
    console.log("Volte mais tarde, faz o L")
}

//ex-3

let nota=  10
let  nota2=  0

let media=( nota+nota2) /2

if (media<=7){
    console.log("Você está reprovado")
}else{
    console.log("Você está aprovado")
}

//ex-4

const idadeVotar= 2000

if (idadeVotar<=2006){
    console.log("Avonts, vota aí")
}else{
    console.log("Volte mais tarde, faz o L")
}

//ex-5

let a=10
let  b= 0

let maior=(a > b) ?  a : b;

console.log (`Número 1: ${a} Número 2:${b}, O maior é ${maior} `);

//ex-6

let horas= 60
if(horas>=40){
    console.log("Você trabalhou mais de 40 horas");
}else {
    console.log("Vai trabalhar, vagabundo.")
};

//ex-7
/*
let num= 69
if(num>=50 &&  num<=100){
console.log(`Está entre 50 e 100`)
}else{
    console.log(`Não está entre 50 e 100`)
}

//ex-8
let letter = "calorzin pai";

if (/[aeiouAEIOU]/.test(letter)) {
    console.log("Tem vogal");
} else {
    console.log("Não tem vogal");
}


//ex-9

let mes = "abril"
if (mes === "dezembro" || mes === "janeiro" || mes === "julho"){
    console.log("descansar né, homi num é di ferru")
}else{
    console.log("Vai trabalhar, vagabundo")
}

//ex-10
let nota = 10
if(nota>=9){
    console.log("A")
}else if(nota >=8){
    console.log("B")
}
else if (nota >= 7){
    console.log("C")
}else if ( nota >= 6){
console.log("D")
}  else if (nota >= 5){
    console.log("F")
}

//ex-1 MÉDIO

let x= 50
let y= 90
let z=60

if(x> y && z){
    console.log("x é maior")
}else if (y>z &&  x){
    console.log("y é maior")
}else if(  z>y && x){
    console.log("z é maior")
};


//ex-2 MÉDIO

//ex-3 MÉDIO

let graus= 20
if(graus<=15){
    console.log("frio")
}else if (graus>15 &&  graus <30){
console.log("moderado")
}else if( graus>=30){
    console.log("quente")
};


//ex-4 MÉDIO

let atual = 2021
let bissexto = (atual % 4 === 0 && atual % 100 !== 0) || (atual % 400 ===0);

if (bissexto) {
    console.log(${bissexto} é um ano bissexto)
} else {
    console.log(${bissexto} não é um ano bissexto)
}



//ex-5 MÉDIO
function DIVISOR(PARAMS){
    return PARAMS % 5 ==0 ? "É divisor  de 5" : "Não é divisor de 5"

}

console.log(DIVISOR(19))

//ex- 6 MÉDIO

let farol= "verde"

if (farol === "vermelho"){
    console.log("Pare o carro")
}else if  (farol === "verde"){
 console.log("Pode seguir, meu nobre")
} else if (  farol === "amarelo"){
 console.log("Cuidado, vai parando")
}

//ex-7 MÉDIO

let primo = 3;
let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

if (primos.includes(primo)){
    console.log("É primo")
} else{
    console.log("Não é primo")
}

//ex-8  MÉDIO

let per = 4;
let soma2 = 0;

for (let i = 1; i <= per /2; i++) {
    if(per % i === 0) {
        soma2 += i;
    }
}

for(;soma2 === per;){
    console.log(`${per} é um número perfeito`)
    break;
}

for(;soma2 !== per;){
    console.log(`${per} não é um número perfeito`)
    break;
}
*/

//ex-9 MÉDIO

//ex-10 MÉDIO

let palin= "kayak";
let  inverso = palin.split("").reverse().join("");

if (inverso=== palin){
    console.log(`${palin} um palíndromo`)

}else {
    console.log(`${palin} não é um palíndromo`)
}

