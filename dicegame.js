const prompt = require('prompt-sync')();

console.log("-----BLUE ED TECH GAMES APRESENTA ----")
console.log(` -π²π² BEM VINDO AO DICE GAME! π²π²- `) 


let jogadores =+prompt(`Quantos jogadores vΓ£o jogar?π¨βπ¨βπ¦βπ¦   `);
let rodadas =+prompt(`Quantas rodadas vamos jogar?β   `);

var lista =[]; // LISTA COM OBJETOS SALVOS



   for (let i=0; i< jogadores ; i++){
    var nome= prompt("Qual o nome do jogador?  ")
     let jogador ={
    nome:nome,
    dado: Math.floor(Math.random() * 6 +1),
    rodada:rodadas
    }

    lista.push(jogador)
   }
 // ORGANIZANDO A LISTA DO MAIOR PARA MENOR!
lista.sort((a,b) => {
    if (b.dado < a.dado){
        return-1
    } else {
        return true;
    }
})
   
console.log(lista) // MOSTRANDO AO USUARIO O RESULTADO COM NOMES RESULTADO DO DADO E RODADA

setTimeout(function()  {
    console.log(`O Jogador ${lista[0].nome} venceu com o dado maior! PARABΓNS!πβ¨`)
}, 4000);  // ANUNCIANDO O VENCEDOR APOS 4 SEGS! A POSICAO ZERO SEMPRE SERA VENCEDORA DEVIDO A LISTA ESTAR DECRESCENTE! 

setTimeout(function()  {
    console.log(`π²π²π² Thanks for playing!  π²π²π² `)
}, 5000);


