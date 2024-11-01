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


avaliarProjeto(9, 8, 10); // Saída: Excelente
