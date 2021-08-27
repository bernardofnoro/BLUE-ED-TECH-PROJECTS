// intro
const prompt = require('prompt-sync')();
console.log('----------Bem vindo a Blue Ed Tech Games!-------');
console.log('---------JOKENPO!-----------');

var player = 0;
var npc = 0;


//decisao do numero de rodadas
var rodadas =+prompt('Quantas rodadas voce deseja jogar!?  ');
console.log('Ok! Vamos jogar '+rodadas+' partidas e ver quem será o grande campeão!');
 //escolha do usuario


 let escolha =prompt('Qual a sua escolha: pedra, papel ou tesoura?  ');

//escolha random do npc

let escolhanpc = ['pedra','papel','tesoura'];
let random = Math.floor(Math.random() * 3);
var decisao = escolhanpc[random];
//console.log(`O computador escolheu: ${decisao}!`)


// inicio das comparacoes?

if(escolha ==='pedra' && decisao === 'pedra') {
    console.log(`----Voce escolheu pedra e eu ${escolhanpc[0]}! Deu EMPATE!----`)
} else if (escolha === 'pedra' && decisao === 'papel') {
    console.log(`----Voce escolheu pedra e eu ${escolhanpc[1]}! Uma vitoria para mim!----`);
    npc = ++npc;
} else if (escolha === 'pedra' && decisao === 'tesoura') {
    console.log(`----Voce escolheu pedra e eu ${escolhanpc[2]}! Uma vitoria para voce! Parabens!----`);
    player = ++player;


}else if (escolha === 'papel'&& decisao === 'pedra') {
    console.log(`----Voce escolheu papel e eu ${escolhanpc[0]}! Uma vitoria para voce! Parabens!---- `);
    player = ++player
}else if (escolha === 'papel' && decisao === 'papel') {
    console.log(`----Voce escolheu papel e eu ${escolhanpc[1]}! Deu EMPATE! ----`)
}else if (escolha === 'papel' && decisao ==='tesoura') {
    console.log(`----Voce escolheu papel e eu ${escolhanpc[2]}! Uma vitoria para mim!----`)
    npc = ++npc

}else if (escolha === 'tesoura' && decisao === 'pedra') {
    console.log(`----Voce escolheu tesoura e eu ${escolhanpc[0]}! Uma vitoria para mim!----`)
    npc = ++npc
} else if (escolha === 'tesoura' && decisao === 'papel') {
    console.log(`----Voce escolheu tesoura e eu ${escolhanpc[1]}! Uma vitoria para voce! Parabens!----`)
    player = ++player
}else if (escolha === 'tesoura' && decisao === 'tesoura') {
    console.log(`----Voce escolheu tesoura e eu ${escolhanpc[2]}! Deu EMPATE! ----`)
} 
console.log(`Voce tem ${player} pontos!`);
console.log(`O computador tem ${npc} pontos!`);


// aprender o loop da rodada e o reset do jogo















