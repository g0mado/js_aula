let nome= 'gomes';
console.log(nome)

let string1 = "texto";
let string2 = "texto";

let iguais = string1 === string2;
console.log(iguais); 

let x=11;
let result= x>10
console.log(result);

let age= 25;
if (age>=18) {
    console.log("Parabéns");
}
else{
    console.log("menor de idade");
}
//atv de votar

let ageVotar=15

if (ageVotar>=16) {
    console.log("Pode Votar!");
}
else{
    console.log("volte mais tarde, safado!");
}

//50 e 100

let numero = 75;

if (numero >= 50 && numero <= 100) {
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número está fora do intervalo.");
}

//médio 1

let nomeRecebida= "gomes"
let idadeRecebida= 16
if (idadeRecebida>=18){
    console.log(`Meu nome é ${nomeRecebida} e sou maior de idade`);
}else{
    console.log(`Meu nome é ${nomeRecebida} e sou menor de idade`);
}

let a=10
let b=20
if  (a>b){
console.log(`${a} é maior que ${b}`)
}else{
    console.log(`${a} é menor que ${b}`)
}

const texto = "Pablo vittar é meu pai";

if (texto.length > 5) {
    console.log("O texto contém mais de 5 caracteres.");
} else {
    console.log("O texto não contém mais de 5 caracteres.");
}

const num1 = 4; 
const num2 = 7; 

if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log("Ambos os números são pares.");
} else {
    console.log("Pelo menos um dos números não é par.");
}

const texto1 = "Eu estou aprendendo JavaScript e é muito divertido.";

if (texto.includes("JavaScript")) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}


//ex 6
let salario= 2500
if  (salario > 2000){
 console.log(`Seu salário de ${salario} é maior que 2000`)
}else{
    console.log(`Seu salário de ${salario} é menor que 2000`)
}

const senha = "suaSenha123"; 

function verificarSenha(senha) {
    const temNumero = /\d/; 
    if (senha.length >= 8 && temNumero.test(senha)) {
        console.log("A senha é válida.");
    } else {
        console.log("A senha deve ter pelo menos 8 caracteres e conter pelo menos um número.");
    }
}

verificarSenha(senha);


const nota1 = 7.5;  vgb  
const nota2 = 6.0;
const nota3 = 8.0;


function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}


const media = calcularMedia(nota1, nota2, nota3);


if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
