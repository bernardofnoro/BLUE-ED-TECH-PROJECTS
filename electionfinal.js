const prompt = require('prompt-sync')();

// abertura do programa //
console.log("-------- BLUE ED TECH PROJETCS APRESENTA: -------");
console.log( " 💻💻 ELEIÇÕES 2021  💻💻");
console.log( ` Bem vindo ao programa da urna eletronica!`);

let eleitor = String(prompt("Qual o seu nome?  "));
let nascimento = Number(prompt("Que ano voce nasceu? 4 digitos: "));
let idade = 2021 - nascimento;

// Ter uma função chamada autorizaVoto retornando: "Negado`, "Opcional"  ou "Obrigatório";
function autorizaVoto(nascimento){
    if (idade >= 16  && idade <= 18 ){
        console.log(`Voto Opcional! Parabéns ${eleitor} por ajudar a escolher o futuro do nosso País!`);
        return "opcional"
     }
     else if (idade > 18 && idade < 70 ) {
        console.log(`Voto Obrigatório! Obrigado por fazer a sua parte ${eleitor}!! `);
        return "obrigatorio"
    }
     else if (idade > 70 ) {
        console.log(`Voto Opcional! Parabéns ${eleitor} por continuar a escolher o futuro do nosso País! `);
        return "opcional"
    } 
    else {
        console.log(`Voto NEGADO! Voce ainda nao tem idade suficiente! Aguarde mais alguns anos ${eleitor}`)
         return "negado"

   }  
}


console.log(`STATUS:--------${autorizaVoto(idade)}`);
console.log();
console.log();

// FUNCAO PARA DEMONSTRAR SE O ELEITOR ESTA AUTORIZADO A VOTAR
function eleitorapto(){

    if (autorizaVoto  = "opcional" ){
        console.log( `ELEITOR AUTORIZADO A VOTAR!  STATUS: 🆗`)
    } else if ( autorizaVoto = "obrigatorio" ){
        console.log(`ELEITOR AUTORIZADO A VOTAR! STATUS: 🆗`)
    } else if (autorizaVoto = "negado")
        console.log(`ELEITOR NAO AUTORIZADO A VOTAR! STATUS: ❌`)
    
}

console.log();
eleitorapto();

/*Ter uma função chamada votacao  que valida  e contabiliza o voto (número entre 1 e 5) 
ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado*/
 
  var candidato1 =0;
  var candidato2 = 0;
  var candidato3 = 0;
  var votonulo = 0;
  var votobranco = 0;

 let votardenovo = 0;
    // CRIANDO A FUNCAO PARA EXIBIR OS RESULTADOS
 function exibirResultados(candidato1,candidato2,candidato3,votonulo,votobranco){
    console.log(`CANDIDATO 1 TEVE ${candidato1} VOTOS! `);
    console.log(`CANDIDATO 2 TEVE ${candidato2} VOTOS! `);
    console.log(`CANDIDATO 3 TEVE ${candidato3} VOTOS! `);
    console.log( ` NESSA ELEIÇÃO TIVEMOS ${votonulo} VOTOS NULOS! `);
    console.log(` NESSA ELEIÇÃO TIVEMOS ${votobranco} VOTOS BRANCOS! `);
    if (candidato1 > candidato2 && candidato1 > candidato3){
        console.log (` COM A MAIORIA DOS VOTOS O CANDIDATO ELEITO É O CANDIDATO 1 !!!`);
    } else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log(` COM A MAIORIA DOS VOTOS O CANDIDATO ELEITO É O CANDIDATO 2 !!! `);
    } else if (candidato3 > candidato1 && candidato3 > candidato2){
        console.log(`COM A MAIORIA DOS VOTOS O CANDIDATO ELEITO É O CANDIDATO 3 !!!`)
    } else console.log(` TIVEMOS UM EMPATE!!!`)

    return console.log(` OBRIGADO POR PARTICIPAR DAS ELEIÇÕES 2021 BLUE ED TECH!😀`)
}
 
 // INSERIR O WHILE AQUI
     do {
  let votoeleitor =+prompt("Digite o numero do candidato:  ")

  function votacao(votoeleitor){
        if(votoeleitor ==1){
            console.log(`Voto computado com sucesso! Voce votou no candidato 1! `)
            return candidato1++
        } 
        else if (votoeleitor ==2) {
            console.log(`Voto computado com sucesso! Voce votou no candidato 2! `)
            return candidato2++
        }
        else if (votoeleitor==3){
            console.log(`Voto computado com sucesso! Voce votou no candidato 3! `)
            return candidato3++
        } 
        else if (votoeleitor==4){
            console.log(`Voto computado com sucesso! Voce votou NULO! `)
            return votonulo++
        } 
        else if (votoeleitor==5){
            console.log(`Voto computado com sucesso! Voce votou em BRANCO!`)
            return votobranco++
        } else {
            console.log(`ATENCAO, VOCE NAO PODE VOTAR. VOTO NAO FOI VALIDO!`)
        }
  }
  
  votacao(votoeleitor);
  console.log(` RESULTADO PARCIAL: `)
  console.log(`VOTOS NO CANDIDATO 1 : ${candidato1}`);
  console.log(`VOTOS NO CANDIDATO 2 : ${candidato2}`);
  console.log(`VOTOS NO CANDIDATO 3 : ${candidato3}`);
  console.log(`VOTOS NULO : ${votonulo}`)
  console.log(`VOTOS EM BRANCO : ${votobranco}`);
  
  votardenovo = prompt(`Deseja votar novamente? "1" para SIM  e "2" para NAO :   `) 
  
  while (votardenovo != 2 && votardenovo != 1) {
    
    }
    if (votardenovo == 2) {
        console.log("Fim da votação! ELEICOES BLUE ED TECH!")
    }
} while (votardenovo == 1)

 console.log(' CALCULANDO O RESULTADO DA ELEICÃO! ')

 exibirResultados(candidato1,candidato2,candidato3,votonulo,votobranco);
     
     
 



   






























