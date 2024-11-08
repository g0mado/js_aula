/*
const eu= {
    nome: `Gomes`,
    time: `Grizzlies`,
    jogadorfavorito: `Ja Morant`
}
const msgBoasVindas1= `Olá, sejá  bem-vindo torcedor do Lakers!`
const msgBoasVindas2= ` Olá, sejá  bem-vindo torcedor do Grizzlies!`


let numrep= 1

do{
eu.time=== `Grizzlies` ? console.log(msgBoasVindas2) : console.log(msgBoasVindas1); 

}while (numrep < 50); */
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//ex-1
//  const prompt= require ('prompt-sync')();

// let cadastroalunos = [ ];
// let continuar;

// do{
//     let nome = prompt('Digite o nome do aluno:  ');
//     let idade = prompt('Digite a idade do aluno:  ');
//   
//     cadastroalunos.push({nome: nome, idade: idade});

//     continuar= prompt('Deseja cadatrar novo aluno? (s/n) ')
// } while(continuar.toLocaleLowerCase() == 's')

//     console.log( 'Alunos cadastro na lista: ', cadastroalunos)


//Ex.2

// const SimularNotas = require ('prompt-sync')();

// let NotaAlunos = [];
// let Prosseguir;

// do {
//     let Nota1 = parseFloat(SimularNotas(" Digite sua primeira nota: "));
//     let Nota2 = parseFloat(SimularNotas(" Digite sua segunda nota: "));
//     let Nota3 = parseFloat(SimularNotas(" Digite sua terceira nota: "));
//     let MediaNotas = (Nota1 + Nota2 + Nota3 ) /3;

//     console.log(MediaNotas);

//     NotaAlunos.push({nota1: Nota1, nota2: Nota2, nota3: Nota3});
//     NotaAlunos.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja avaliar mais uma média de notas? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,NotaAlunos);

//EXERCÍCIOS
//ex-3

// const usuario = {
//     nome: 'gomes',
//     senha: 1234
// };

// do{
// if (usuario.nome === 'gomes' && usuario.senha === 1234) {
//     console.log(`Bem-vindo, ${usuario.nome}`);
// } else {
//     console.log('Acesso negado.');
// }
// }while(false);


//ex-4

// let num = require ('prompt-sync')();
// let poten = [];
// let contin;

// do{
//     let numero = num("digite um numero");
//     let potencia = num("digite uma potencia");
//     let calculo = numero ** potencia

//     poten.push ({calculo});

//     calculo = num('deseja colocar outra conta (s/n): ');
// }while(calculo.toLowerCase() === 's');

// console.log('contas feitas,', poten);

//EXERCICIO 5

// let usuario5 = require ('prompt-sync') ();

// function senhaForte(senha) {
//     let temLetra = /[A-Za-z]/.test(senha)
//     let temNumero = /[1-9]/.test(senha)
//     return senha.length >= 8 && temLetra && temNumero;
// }

// let senhaValida = false;

// do {
//     let senha = usuario5('Cadastre sua senha: ');
    
//     if (senhaForte(senha)) {
//         console.log('Senha aprovada');
//         senhaValida = true;
//     } else {
//         console.log('A senha cadastrada deve conter 8 ou mais caracteres, incluindo letras e números');
//     }
// } while (!senhaValida );

//ex-6

// let nota = require ('prompt-sync')();
// let fdp = [];
// let calcular;

// do{
//     let nota1 = parseFloat(nota("digite uma nota"));
//     let nota2 = parseFloat(nota("digite outra nota"));
//     let nota3 = parseFloat(nota("digite mais uma nota"));
//     let calculado = (nota1+nota2+nota3)/3;
   

//     fdp.push ({calculado});

//     calcular = nota('deseja calcular a nota de outro aluno?(s/n): ');
// }while(calcular.toLowerCase() === 's');

// console.log('notas', fdp);

// //Ex. 7

// let NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
// let TentativaDeAdivinhar;

// do {
//     TentativaDeAdivinhar = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    
//     if (TentativaDeAdivinhar !== NumeroAleatorio) {
//         alert("O número que você digitou não é o número sorteado."); }

// } while (TentativaDeAdivinhar !== NumeroAleatorio);

// alert("Muito bem! Este foi o número sorteado");


//ex-8 

//  const prompt= require ('prompt-sync')();

// let cadastroalunos = [ ];
// let continuar;

// do{
//     let nome = prompt('Digite o nome do aluno:  ');
//     let idade = prompt('Digite a idade do aluno:  ');
//     if (idade >=16 && idade <= 100) {
//         console.log(`A idade está entre 16 e 100 anos`);
//     }

//     cadastroalunos.push({nome: nome, idade: idade});

//     continuar= prompt('Deseja cadatrar novo aluno? (s/n) ')
// } while(continuar.toLocaleLowerCase() == 's')

//     console.log( 'Alunos cadastro na lista: ', cadastroalunos)

//Ex.9 

// const AveriguarEstoqueEproduto = require (prompt-sync)();

// let EstoqueEproduto = [];
// let ProximoPasso;

// do {
//     let NomeProduto = AveriguarEstoqueEproduto(" Digite o nome de seu produto: ");
//     let QuantidadeEstoque = AveriguarEstoqueEproduto(" Digite a quantidade de produtos em seu estoque: ");

//     EstoqueEproduto.push({nomdeproduto: NomeProduto, quantidadeestoque: QuantidadeEstoque});

//     ProximoPasso = AveriguarEstoqueEproduto(" Deseja vincular o número de outro produto com a quantidade em estoque? (S/N): ");

// } while (ProximoPasso == "S" || ProximoPasso == "s");

// console.log(`Estoque dos produtos denidos, `,EstoqueEproduto);


//ex-10

// const prompt = require('prompt-sync')()
// function fatorial(n) {
//     let resultado = 1;
//     for (let i = 2; i <= n; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

// let continuar;

// do {
  
//     let numero = parseInt(prompt("Digite um número inteiro positivo para calcular seu fatorial:"));

//     if (numero >= 0) {
      
//         let resultado = fatorial(numero);
//         console.log("O fatorial de " + numero + " é " + resultado + ".");
//     } else {
//         console.log("Por favor, digite um número inteiro positivo.");
//     }

//     continuar = prompt("Você deseja calcular outro fatorial? (sim/não):").toLowerCase();

// } while (continuar === "sim");

// console.log("Obrigado por usar o programa!");

// //Ex.12 

// let continuar;

// do {
//     let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
//     let fahrenheit = (celsius * 9/5) + 32;

//     alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F.");

//     continuar = prompt("Deseja realizar outra conversão? (s/n):").toLowerCase();

// } while (continuar === S || continuar === s);
//     alert("Obrigado por usar o aplicativo!");

// //ex-13
// const SimularNotas = require ('prompt-sync')();

// let compras = [ ];
// let Prosseguir;

// do {
//     let c1 = parseFloat(SimularNotas(" Digite o valor da primeira compra: "));
//     let c2 = parseFloat(SimularNotas(" Digite  o valor da segunda compra: "));
//     let c3 = parseFloat(SimularNotas(" Digite  o valor da terceira compra: "));
//     let MediaNotas = (c1 + c2 + c3 ) ;

//     console.log(MediaNotas);

//     compras.push({nota1: c1, nota2: c2, nota3: c3});
//     compras.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja saber o valor de mais alguma compra? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,compras);

//ex-15
// const avaliacao = require ('prompt-sync')();

// let avaliacaoAlunos= [ ];
// let continuar;

//     do{
//         let nome = avaliacao("Digite o nome do aluno: ");
//         let nota1 = parseFloat(avaliacao("Digite a nota de avaliação de 1 a 5 para a escola: "));

//         avaliacaoAlunos.push((nota1))
//         prosseguir= avaliacao("Deseja fazer outra avaliação? (S/N): ");
//     } while(prosseguir== 'S' || prosseguir == 's') (prosseguir=='N' || prosseguir == 'n')
//         console.log(avaliacaoAlunos);

        //ex-16
        let parcela= require ('prompt-sync')();
        let parcelas = [ ];
        let continuar;

      

        do{
            let parcela = parseFloat(prompt("Digite o valor da parcela: "));
            parcelas.push(parcela);
            continuar = prompt("Deseja continuar? (S/N): ");
            
        } while (continuar == "S" || continuar == "s");