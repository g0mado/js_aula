/*
function pegarComanda(){
    console.log(`Olá, boa noite!`);
    console.log(`Pegue aqui a sua comanda!`);
    console.log(`Bom apetite!`);
    console.log(`_______________________`);
}

pegarComanda();



function calculo(numvez){
    console.log(`O número da vez é ${numvez}, ao quadrado é ${numvez ** 2}`)
}

calculo(3)



function raiz(base){
   return  base **(1/2)
   
}
console.log(raiz(81));



function baskara(a,  b, c) {
    const delta= b** 2 - 4 * a * c;
    const x1= (-b + raiz (delta)) / (2*a);
    const x2= (-b - raiz (delta))  / (2*a);

console.log(`Os dois valores de X dos pontos de parábola no eixo X são ${x1} e ${x2}`)
}

baskara(2, 7, -2)



function saudacao(ola){
    return  `Olá, ${ola}`
}
console.log(saudacao("João"))



function soma(soma){
    return  soma + 10

}

console.log(soma(10))



function parimpar (num){
    if (num % 2 == 0) {
        return "par"
} else {
    return "ímpar"}
}
console.log(parimpar(4));
console.log(parimpar(9));


function multiplicacao(multiplicacao){
    return  multiplicacao * 9

}

console.log(multiplicacao(10))


 
function  conversao (C){
    
    return C * 1.8 + 32
}

console.log (conversao(35));



function media (a, b, c){
    return (a + b + c) /  3
}

console.log(media(10, 7, 8))



function minutosSegundos ( minutos){

    return minutos * 60
}

console.log(minutosSegundos(2))

 function ehPositivo (norp){
    if (norp > 0){ return "positivo"}
else{
    return "negativo"
}
 }
 console.log(ehPositivo(-5));


 function repeatWord (Jubileu){
    return Jubileu.repeat(3)
 }

 console.log(repeatWord("gomes"));

  function area(base,  altura){
    return (base * altura) 
  }
  console.log(area(10, 5))
    

let palin = "subinoonibus";
let inverso = palin.split("").reverse().join("");

function ehPalindromo(palavras) {
  return palavras === inverso;
}
console.log(ehPalindromo(palin));


//ex-2 MÉDIO

function fatorial(){
    let n = 2;
    let fat = 1;
    for (let i = n; i > 0; i--) {
        fat *= i;}
        return fat;
}
console.log(fatorial());
*/

//ex-3

let array=  [1,2 , 3, 4, 5];


function ehPar(item){
    if (item  % 2 === 0)
        console.log(array=item)
}

array.forEach(ehPar)

//ex-4

function contaVogais(){
    let texto =  "gomes";
    let vogais =" aeiouAEIOU";
    let contagem = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contagem++;
            }
}
}
console.log(
    contaVogais())

