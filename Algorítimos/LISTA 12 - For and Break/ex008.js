function ver(){
    div_mens.innerHTML = ``;
    let quantidade = Number(document.getElementById("qtde").value);

    for(let c = 1; c <= quantidade; c++){
        div_mens.innerHTML += `<img style ="width:100px"  src="img/coca.png">`;
    }
}