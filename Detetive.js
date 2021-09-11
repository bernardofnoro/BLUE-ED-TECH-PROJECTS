console.log(`Olá, bem vindo ao programa de investigações!`);
console.log(`As perguntas a seguir serão inclusas
no processo investigado e poderão ser usadas como evidência!`);
console.log("As perguntas deverão ser respondidas apenas com numero 1(um) para SIM e 0 (zero) para NÃO.");

let p1 =+prompt('Você telefonou para a vítima?')
//if(p1 !==0 && p1!==1) {
//  console.log(`Favor digitar um numero valido!`)
//}; APRENDER LOOP DE PERGUNTA!

let p2 =+prompt(`Você esteve no local do crime?`);

let p3 =+prompt(`Você mora perto da vítima?`);

let p4 =+prompt(`Você tinha alguma dívida com a vítima?`);

let p5 =+prompt(`Você já trabalhou com a vítima?`);

let resultado = p1+p2+p3+p4+p5
if(resultado===2) {
  console.log(`Analise de dados indica: SUSPEITO.`)
} else if(resultado===3 || resultado===4 ) {
  console.log(`Análise de dados indica: CÚMPLICE!`)
}  else if(resultado===5) {
  console.log(`Análise de dados indica: ASSASSINO!`)
} else console.log(`Análise de dados indica: INOCENTE!`);
console.log(`Por favor aguarde o agente responsável!`);
console.log(`A equipe de investigação agradece a sua colaboração!`);
console.log(' BLUE ED TECH INVESTIGAÇÕES ©');
