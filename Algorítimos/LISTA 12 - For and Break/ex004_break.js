function ver(){
    res.innerHTML = ``;
    let filme;
    let contador = 0;
    let filmes = [];
    let outroFilme;
    let valor = combo.value;
    if(valor == "1"){
        filme = 'Marvel';
        outroFilme = 'DC';
    }else{
        filme = 'DC';
        outroFilme = 'Marvel';
    }


    for(let c = 1; c <= 5; c++){
        let randomico = Math.trunc((Math.random() * 2) + 1);
       contador = c;
        if(randomico == valor){
            filmes.push(filme);
            res.innerHTML += `<br>${c}º-${filme}`; 
            break;
        }else{
            filmes.push(outroFilme);
            res.innerHTML += `<br>${c}º${outroFilme}`;
        }
        

    }
    if(filmes.indexOf(filme) == -1){
        res.innerHTML += `<br>É, ou lê um livro ou assiste um filme que não gosta mesmo`
    }else{
        res.innerHTML += `<br>Você verá um filme que gosta no ${contador}º dia`;
    }

}
