//puxa as imagens pro quadrado
icone = "<img src = ankh.png>";
 
 function jogada(bloco){
    document.getElementById(bloco).innerHTML = icone;{     
        
        if (icone == "<img src = ankh.png>"){

            icone = "<img src = horus.png>";

        }else{

            icone = "<img src = ankh.png>";

        }
   }
}

//verifica-chama o bloco escolhido
function verifica(){
    
   a1 = document.getElementById('a1').innerHTML;
   a2 = document.getElementById('a2').innerHTML;
   a3 = document.getElementById('a3').innerHTML;

   b1 = document.getElementById('b1').innerHTML;
   b2 = document.getElementById('b2').innerHTML;
   b3 = document.getElementById('b3').innerHTML;

   c1 = document.getElementById('c1').innerHTML;
   c2 = document.getElementById('c2').innerHTML;
   c3 = document.getElementById('c3').innerHTML;

//vê quem ganhou
   if(

        ((a1 != '') && (a2 != '') && (a3 != '') && (a1 == a2) && (a2 == a3)) || 
        ((a1 != '') && (b2 != '') && (c3 != '') && (a1 == b2) && (b2 == c3)) || 
        ((a1 != '') && (b1 != '') && (c1 != '') && (a1 == b1) && (b1 == c1)) || 
        ((b1 != '') && (b2 != '') && (b3 != '') && (b1 == b2) && (b2 == b3)) || 
        ((c1 != '') && (c2 != '') && (c3 != '') && (c1 == c2) && (c2 == c3)) || 
        ((a2 != '') && (b2 != '') && (c2 != '') && (a2 == b2) && (b2 == c2)) || 
        ((a3 != '') && (b3 != '') && (c3 != '') && (a3 == b3) && (b3 == c3)) || 
        ((c1 != '') && (b2 != '') && (a3 != '') && (c1 == b2) && (b2 == a3))

    ){

       alert('Parece que alguém ganhou!');

    }

}
 

