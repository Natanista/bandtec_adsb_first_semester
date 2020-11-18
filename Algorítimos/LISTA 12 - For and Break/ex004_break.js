function ver() {
    conjunto = [];
    let referencia = 0;
    res.innerHTML = ``;
    let numeroSorte = Number(document.getElementById("numero").value);
    for (let c = 1; c <= 20; c++) {
        let randomico = (Math.trunc((Math.random() * 100) + 1));
        
        conjunto.push(randomico);
        res.innerHTML += `<b>${randomico} </b>`; 
        referencia++;
        if(randomico == numeroSorte){
            break;
        }else{
            continue;
        }
      
    }
    if(conjunto.indexOf(numeroSorte) == -1){
        res.innerHTML += `<br>É, você não tem muita sorte em sorteios, pelo visto`
    }else{
        res.innerHTML += `<br>Muito bem, você é uma pessoa de sorte! Seu número saiu no ${referencia}º sorteio`;
    }
}