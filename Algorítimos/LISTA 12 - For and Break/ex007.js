function verificar(){
    let phrase = document.getElementById("frase").value;
    let numero = Number(document.getElementById("qtde").value);

    for(let c = 1;c <= numero;c++){
        div_mens.innerHTML += `<br>${c} - ${phrase}`; 
    }
}