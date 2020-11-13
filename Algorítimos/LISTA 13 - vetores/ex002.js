viagem.value = ``;
numero.value = ``;
let locais = [];

function cadastrar() {
    locais.push(viagem.value);
    viagem.value = ``;
}

function relembrar(){
    
    if(numero.value <= locais.length){
        div_mens.innerHTML = `${locais[numero.value]}`;
    }else{
        div_mens.innerHTML = `Você não fez uma ${numero.value}ª viagem!`;
    }
    numero.value = ``;
}