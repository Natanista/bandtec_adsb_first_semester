let media = 0;
function calcular(){
 media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
 if(media > 9.4){
     alert("Parabéns, você é fora de série!")
 }
 resultado.innerHTML = `Sua média foi de: ${media.toFixed(2)}`;
}

