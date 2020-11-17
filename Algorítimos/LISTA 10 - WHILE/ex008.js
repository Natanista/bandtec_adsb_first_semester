function mostrar(){
    res.innerHTML = ``;
    let c = 1;
    let numero = Number(document.getElementById("combo").value);
    while(c < 10){
        let conta = numero * c;
        if(conta % 2 == 0){
            res.innerHTML += `<br>${numero} x ${c} = <span style="color:blue">${conta}</span>`;
        }else{
            res.innerHTML += `<br>${numero} x ${c} = <span style="color:red">${conta}</span>`;
        }
        

        c++;
    }

    
    
}