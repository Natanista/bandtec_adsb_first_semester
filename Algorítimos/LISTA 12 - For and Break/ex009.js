function ver(){
    let quantidade = Number(document.getElementById("qtde").value);

    for(let c = 1;c <= quantidade;c = c + 2,){
        div_mens.innerHTML += `<img src="leite.png">`;
    }

    for(let l = 1; l <= quantidade; l++){
        div_mens.innerHTML = ``;
    }
}