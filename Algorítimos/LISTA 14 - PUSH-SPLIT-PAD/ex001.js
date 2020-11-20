let conta = document.getElementById("email").value;
function checar(){
    if(conta.charAt('@') == -1){
        div_mens.innerHTML = `Email inválido`;
    }else{
        div_mens.innerHTML = `Email válido`;
    }
}