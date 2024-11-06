/*
let a= 10;
let b= 2
let c=5

let result= (a+b+c)/3

if (result>=6){
    console.log(`O aluno teve a nota ${result} e foi  aprovado`)
} else {
    console.log(`O aluno teve a nota ${result} e foi reprovado`)
}

//ex-2 
let age= 18

if (age<=16){
    console.log(`Você pode se inscrever no curso do Senai Morvan Figueredo`)
} else{
    console.log(`Você não pode se inscrever no curso do Senai Morvan Figueredo`)
}

//ex-3

let value= 70
let final= (value*0.9)
if (value>=50){
    console.log(`O valor com desconto é ${final}`)
}else{
    console.log(value)
}

//ex-4
let frequencia= 80

if(frequencia>= 75){
    console.log(`Aprovado`)
}else{
    console.log(`Reprovado`)
}

//ex-5

const msgM= `Bom dia, bons estudos`
const msgV=  `Boa tarde, bons estudos`
const msgN= `Boa noite, bons estudos`

let usuario={
    nome: "João",
    turno: "noite"
}
if(usuario.turno ===  "manha"){
    console.log(msgM)
} else if (usuario.turno ===  "tarde"){

    console.log(msgV)
} else if(usuario.turno ===  "noite"){

    console.log(msgN)
}
*/


//ex-6

let d= 10;
let e= 11
let f=10

let result2= (d+e+f)/3

if (result2>=6){
    console.log(`O aluno foi  aprovado direto`);

} else if (result2=4 && result2>6){
    console.log(`O aluno está de recuperação`);

} else if (result2<4){
    console.log(`O aluno foi reprovado`);
}

//ex-7

let estoquePC=  10;


const msgComEstoque= ` O produto está em estoque`
const msgSemEstoque= ` O produto não está em estoque`

if(estoquePC>=10){
    console.log(msgComEstoque)
} else{
    console.log(msgSemEstoque)
}

//ex-8

let not1 = 7
let not2 = 7
let not3 = 7
let totalnootas = ((not1+not2+not3)/3)

console.log(totalnootas)
 
if(totalnootas >=8) {
    console.log("excelente")
}

else if(totalnootas < 7.9 && totalnootas >= 6 ){
console.log("bom")
}
else if(totalnootas < 5.9){
    console.log("melhorar")
}

//ex-9
let matriculado="yep"
let matricula= 500
let resultado= matricula * 0.20

if(matriculado==="yep" ){
    console.log(`O aluno foi matriculado e teve  R$  ${resultado} de desconto`)

}else{
    console.log(`O aluno não foi matriculado`)
}

//ex- 10


function avaliarProjeto(funcionalidade, design, documentacao) {
 
    let media = (funcionalidade + design + documentacao) / 3;


    if (media >= 8) {
        console.log("Excelente");
    } else if (media >= 6) {
        console.log("Bom");
    } else {
        console.log("Precisa Melhorar");
    }
}


avaliarProjeto(9, 8, 10);

//ex-11

let media=  2
let frequencia= 75

if(media >=6 && frequencia>= 75){
    console.log("aprovado")
} else if( media>=4 && media<=5.9){
    console.log("recuperação")
} else if(media<3.9){
     console.log(`reprovado`)
}


//ex-12

let possuiCartao = prompt("Você possui cartão de acesso? (sim/não)").toLowerCase();

if (possuiCartao === "sim") {
    let cartaoAtivo = prompt("O cartão está ativo? (sim/não)").toLowerCase();
    if (cartaoAtivo === "sim") {
        console.log("Acesso permitido.");
    } else {
        console.log("Acesso negado.");
    }
} else {
    console.log("Acesso negado.");
}


//ex-13

let recursosSolicitados = parseInt(prompt("Quantos recursos você deseja solicitar?"));
let recursosDisponiveis = 10; // Exemplo de recursos disponíveis

if (recursosSolicitados <= recursosDisponiveis) {
    console.log("Pedido atendido.");
} else {
    console.log("Necessário fazer uma reserva para uma data futura.");
}

//ex-14

let tipoDisciplina = prompt("Você deseja se matricular em uma disciplina obrigatória ou eletiva?").toLowerCase();

if (tipoDisciplina === "obrigatória") {
    console.log("Você foi matriculado na disciplina obrigatória.");
} else if (tipoDisciplina === "eletiva") {
    let vagasDisponiveis = prompt("Há vagas disponíveis? (sim/não)").toLowerCase();
    if (vagasDisponiveis === "sim") {
        console.log("Você foi matriculado na disciplina eletiva.");
    } else {
        console.log("Você está na lista de espera para a disciplina eletiva.");
    }
} else {
    console.log("Tipo de disciplina inválido.");
}

//ex-15

let nota1 = 7; // Exemplo de notas
let nota2 = 8;
let nota3 = 5;

let media2 = (nota1 + nota2 + nota3) / 3;

if (media2 >= 6) {
    console.log("Aprovado");
    if (media2 > 8) {
        console.log("Parabéns! Você teve um desempenho destacado.");
    }
} else if (media2 >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//ex-16

let infrações = [3, 2, 5]; // Exemplo de pontos por infrações
let totalPontos = infrações.reduce((acc, pontos) => acc + pontos, 0);

if (totalPontos >= 20) {
    console.log("Suspensão da carteira.");
} else {
    console.log(`Você ainda pode acumular ${20 - totalPontos} pontos antes do limite.`);
}

//ex-17

let valorEmprestimo = parseFloat(prompt("Informe o valor do empréstimo:"));
let numeroParcelas = parseInt(prompt("Informe o número de parcelas:"));
let taxaJuros = 0.05; // Exemplo de taxa de juros

let valorFinal = valorEmprestimo * Math.pow((1 + taxaJuros), numeroParcelas);
console.log(`O valor total ao final do empréstimo será R$ ${valorFinal.toFixed(2)}.`);

//ex-18

let nota11 = 6;
let nota22 = 7;
let nota33 = 8;
let atividadesExtras = true; // Exemplo de atividades extras completadas

let media3 = (nota11 + nota22 + nota33) / 3;
if (atividadesExtras) {
    media3 *= 1.05; // Bônus de 5%
}

if (media3 >= 6) {
    console.log("Aprovado");
} else if (media3 >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado")
    }

    //ex-19

    
    let qualidade = 8; // Exemplo de qualidade de 0 a 10
    let preco = 100; // Exemplo de preço
    
    if (qualidade >= 8 && preco <= 100) {
        console.log("Ótimo Custo-Benefício");
    } else if (qualidade >= 6) {
        console.log("Bom");
    } else if (qualidade >= 4) {
        console.log("Regular");
    } else {
        console.log("Ruim");
    }

    //ex-20

    let consumo = parseFloat(prompt("Informe o consumo de energia em kWh:"));
let valorTotal;

if (consumo <= 100) {
    valorTotal = consumo * 0.50; // Exemplo de tarifa
} else if (consumo <= 200) {
    valorTotal = consumo * 0.75;
} else {
    valorTotal = consumo * 1.00;
}

console.log(`O valor total da conta de energia é R$ ${valorTotal.toFixed(2)}.`);