let porcentagem = (Number(prestacao.value) / Number(renda.value)) * 100;
function verificar(){
    resultado.innerHTML = `A prestação corresponde a ${porcentagem.toFixed(2)}%`;
   if(porcentagem > 30) {
        alerta.innerHTML = `<b style='color:red';>Será necessário complementar a renda familiar</b>`;
 
   }
}