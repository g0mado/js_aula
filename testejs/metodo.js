/*
function caltamanhototal (Sala, Cozinha, Quarto, Banheiro){
    const tamanhoTotal=  Sala + Cozinha + Quarto + Banheiro;
    return `O tamanho da casa é ${tamanhoTotal}m²`;
}
console.log (caltamanhototal(5, 3, 6, 8))


let a=  5.00006;
console.log(a.toFixed(3))
console.log(a.toString(8))

let b= `é gol do roni`
console.log(b.charAt(2))


let c= `é real que o gomes ama cacho? `
console.log(c.concat(`Yessir`))

let d= `Isabella é demais `
console.log(d.split(` `))

let e= `1010`
console.log(Number.parseInt(e));
console.log(Number.isNaN(Number.parseInt(d)));

let f= `Pabro`
console.log(f.length);
*/

const listAget= [
    {nome: `João`, idade: 5},
    {nome: `Maria`, idade: 30},
    {nome: `Pedro`, idade: 35}
    ];

    const votar= listAget.filter(function(pessoas){
        return pessoas.idade >= 18
    })
    console.log(votar);


    const Nvotar= listAget.find(function(pessoas){
        return pessoas.idade === 18
    })
    console.log(votar);
