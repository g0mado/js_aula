const eu= {
    nome: `Gomes`,
    time: `Grizzlies`,
    jogadorfavorito: `Ja Morant`
}
const msgBoasVindas1= `Olá, sejá  bem-vindo torcedor do Lakers!`
const msgBoasVindas2= ` Olá, sejá  bem-vindo torcedor do Grizzlies!`


let numrep= 1'0;

do{
eu.time=== `Grizzlies` ? console.log(msgBoasVindas2) : console.log(msgBoasVindas1); 

}while (numrep < 50);

