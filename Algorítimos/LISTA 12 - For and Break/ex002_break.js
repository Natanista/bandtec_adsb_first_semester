function testar() {
    conjunto = [];
    let referencia = 0;
    res.innerHTML = ``;
    let numeroSorte = Number(document.getElementById("numero").value);
    let c = 1;
    while(c <= 20) {
        let randomico = (Math.trunc((Math.random() * 100) + 1));
        
        conjunto.push(randomico);
        res.innerHTML += `<b>${randomico} </b>`; 
        referencia++;
        c++
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