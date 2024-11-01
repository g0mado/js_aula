const eu= {
    nome: `Gomes`,
    time: `Grizzlies`,
    jogadorfavorito: `Ja Morant`
}
const msgBoasVindas1= `Olá, sejá  bem-vindo torcedor do Lakers!`
const msgBoasVindas2= ` Olá, sejá  bem-vindo torcedor do Grizzlies!`

if(eu.time === `Grizzlies`){
    console.log(msgBoasVindas2)
}else if(eu.time ===  `Lakers`){
    console.log(msgBoasVindas1)
} else{
    console.log(`Olá, você é um torcedor de um time que não é Lakers nem Grizzlies`)
}

const msgEscolha= `Clique para acompanhar o jogo`
const msgFinal= `Boa sorte!`

console.log(msgEscolha);
console.log(msgFinal);