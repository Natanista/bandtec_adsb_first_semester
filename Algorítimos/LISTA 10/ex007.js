function mostrar(){
    res.innerHTML = ``;
    let c = 1;
    let numero = Number(document.getElementById("combo").value);
    while(c < 10){
        let conta = numero * c;
        res.innerHTML += `<br>${numero} x ${c} = ${conta}`;
        c++;
    }
    
    
}