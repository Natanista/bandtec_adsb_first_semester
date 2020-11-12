function ver(){
    div_mens.innerHTML = ``;
    let quantidade = Number(document.getElementById("qtde").value);

    for(let c = 0;c <= quantidade;c = c + 2){
        div_mens.innerHTML += `<img style="width:300px" src="img/leite.png">`;
    }

    for(let l = 0; l <= quantidade; l++){
        div_mens.innerHTML += `<img style="width:300px" src="img/café.jpg">`;
    }
}