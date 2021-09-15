const prompt = require('prompt-sync')()
// ABERTURA //
console.log("✨🎉----------------------------------- Blue Edtech apresenta: ---------------------------------------------🎉✨")
console.log(" ------------------------------------- CAROL POR UM DIA : O JOGO -------------------------------------------------")
console.log ( "Carol vai deixar todas as escolhas dela por sua conta! Preste atenção , suas escolhas tem consequencias diferentes!");


// CLASS E HERITAGE
class Item {
    constructor (nome,status){
        this.nome = nome,
        this.status = status
    }
};


class MochilaCarol extends Item {
    constructor (nome,status,Dinheiro,Material){
    super(nome,status)
        Dinheiro = this.Dinheiro;
        Material= this.Material;
    }
};


// TIMELINE MANHA E ESCOLHA 1 //
let manha = ["7:00 da manhã, Carol acorda assustada com o despertador! ","Sua mãe já grita de longe: Caroline! hora de ir pra escola!!!", 
"Como num passe de magica, Carol ja esta de uniforme e saindo pelo portao com sua mochila!"];

console.log(manha);

let irEscola =1;
let matarAula =2;
let resposta1usuario= +prompt(`Chegamos a primeira escolha! Carol deve ir a escola? Digite[1]!  Carol deve matar aula? Digite[2]! `);

let resultescola = ["Voce escolheu ir para a escola! ","Carol consegue chegar a tempo de assistir todas as suas aulas ",
"ao sair da escola, Carol encontra uma amiga que estava lhe devendo um caderno novo! "];

let resultmataraula = ["Voce escolheu matar aula! ", "Carol virou a esquina de casa e acabou esbarrando com um estranho! ",
"Sem perceber o estranho deixou cair um caderno! Carol, pega o caderno e antes que ela pudesse devolver, o homem apressado ja estava longe...",
"Carol passa a manha passeando e pensando em como iria encontrar o homem para devolver o seu caderno! "]

// FUNCTION E RESULTADO DA ESCOLHA 1 //
function decisao1(){
    if (resposta1usuario ===1){
        console.log(resultescola);
        console.log(" Caderno foi adicionado na Mochila de Carol! ")
        return MochilaCarol.Material= +1;
    } 
    else if (resposta1usuario === 2){
        console.log(resultmataraula)
        console.log(" Caderno foi adicionado na Mochila de Carol! ")
        return MochilaCarol.Material= +1;
    }   
}
console.log(decisao1(resposta1usuario));

// TIMELINE TARDE //
let tarde= ["12:00 PM, Após uma manhã cheia, Carol finalmente volta pra casa! ", "Sua mae esta na cozinha", "Almoçam juntas e sua mãe sai para resolver algumas coisas ",
"Carol pensa no que pode fazer enquanto a mae esta fora! ","Carol se lembra do caderno em sua mochila!"]

console.log(tarde);


var resposta2usuario=  +prompt("Carol deve abrir o caderno? Digite [1] Sim ou [2] Nao! ");
if (resposta2usuario == 1){
console.log(["Voce escolheu abrir o caderno!","Voce achou um bilhete secreto escondido nas paginas do caderno que diz: MOLINA ACERTOU A MEGA SENA! e junto uma nota de 200 reais!"])
console.log("200 Reais adicionados na mochila de Carol!")
MochilaCarol.Dinheiro= +200;
} else if (resposta2usuario == 2){
console.log(["Carol nao abriu o caderno e o guardou na estante do seu quarto"]);
MochilaCarol.Dinheiro = 0;
} 


 
// TIMELINE NOITE //

let noite = ["8:00 PM , uma noite quente..." ,"Carol e sua mae se preparam para dormir ","mas Carol recebe uma mensagem no celular de um grupo de amigos!",
"a mensagem diz: Churrasco na laje da Blue!"];

console.log(noite);

let resposta3usuario =+prompt("Carol deve sair escondida para o churrasco!? Digite[1] SIM ou [2] Nao!  ");

if (resposta3usuario ===1 ){
 console.log(["Voce escolheu ir ao churrasco!","Carol esperou a mae dormir e foi de fininho para a festa da Blue!"])
 
} else if (resposta3usuario ===2) {
    console.log(["Voce escolheu NÃO ir ao churrasco! ","Carol ligou o despertador e foi deitar! ","Amanha é dia de aula e tem projeto pra entregar! "])
    
}
// for pra exibir a mochila em casos especificos no futuro
function exibirMochila(MochilaCarol){
    for (let i in MochilaCarol){
        console.log(i)
    }
}

console.log(`STATUS DA MOCHILA NO FINAL DO PRIMEIRO DIA: ${MochilaCarol.Dinheiro} em dinheiro! e ${MochilaCarol.Material} Material escolar. `)


console.log(" ----------------------------------------- FIM DE JOGO  ------------------------------------------------- ")
console.log(" --------------------------------- pelo menos por hoje né Carol!? 😁 -------------------------------------")
console.log()
console.log()
console.log("🎮----------------------------------- BLUE ED TECH GAMES -----------------------------------------------🎮")

