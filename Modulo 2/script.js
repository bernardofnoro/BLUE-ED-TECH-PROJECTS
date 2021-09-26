
 var imagematual=0;
 var listafotos = [

 {foto:"./media/angrycatgif.gif", humor:"PISTOLITO! 😤", alt:`gato brabo`},

 {foto:"./media/hungrycatsgif.gif", humor: "ME SIRVA HUMANO! 😎", alt: `gato fome`},

 {foto:"./media/happycatgif.gif", humor:"PLAY TIME! 😂" ,alt:`gato feliz`},
 
 {foto:"./media/coolcatgif.gif", humor:"QUANDO O CÓDIGO NÃO BUGA 😎" ,alt:`gato de oculos`},

 {foto:"./media/laptopgif.gif", humor:"QUERIA CODAR HUMANO? QUE PENA! 🤡" ,alt:`gato em cima do teclado`}
 ];


 function trocarHumor(){
    if(imagematual == listafotos.length){
        imagematual=0;
    }
    document.getElementById('imagem1').src=listafotos[imagematual].foto;
    document.getElementById('legendafoto').innerHTML= listafotos[imagematual].humor;
    document.getElementById('imagem1').alt= listafotos[imagematual].alt;
    imagematual++;
     

 
 }
    













    
    
// INNER TEXT TROCA O TEXTO
// IMAGEM.SRC  troca a imagem



    