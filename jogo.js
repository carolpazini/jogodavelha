
letra = "X";
 
function joga(celula){
    celulaclicada = document.getElementById(celula).innerHTML;
   if (celulaclicada == "X" || celulaclicada == "O"){
       alert("Opa, este quadrado já foi escolhido!");
   }else{
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X"){

            letra = "O";

        }else{
            letra = "X";
        }
   }
}
 
function verif(){
   a1 = document.getElementById('a1').innerHTML;
   a2 = document.getElementById('a2').innerHTML;
   a3 = document.getElementById('a3').innerHTML;
   b1 = document.getElementById('b1').innerHTML;
   b2 = document.getElementById('b2').innerHTML;
   b3 = document.getElementById('b3').innerHTML;
   c1 = document.getElementById('c1').innerHTML;
   c2 = document.getElementById('c2').innerHTML;
   c3 = document.getElementById('c3').innerHTML;

   if ((
        (a1 != '') && (a2 != '') && (a3 != '') && (a1 == a2) && (a2 == a3)) || (
        (a1 != '') && (b2 != '') && (c3 != '') && (a1 == b2) && (b2 == c3)) || (
        (a1 != '') && (b1 != '') && (c1 != '') && (a1 == b1) && (b1 == c1)) || (
        (b1 != '') && (b2 != '') && (b3 != '') && (b1 == b2) && (b2 == b3)) || (
        (c1 != '') && (c2 != '') && (c3 != '') && (c1 == c2) && (c2 == c3)) || (
        (a2 != '') && (b2 != '') && (c2 != '') && (a2 == b2) && (b2 == c2)) || (
        (a3 != '') && (b3 != '') && (c3 != '') && (a3 == b3) && (b3 == c3)) || (
        (c1 != '') && (b2 != '') && (a3 != '') && (c1 == b2) && (b2 == a3))
    ){

       alert('Você ganhou! Parabéns campeão!');
      novo();
      
    }
}
 
function novo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          nomecelula = 'cel' + i + j
           document.getElementById(nomecelula).innerHTML = '';
      
      }
   }
}
 
 
