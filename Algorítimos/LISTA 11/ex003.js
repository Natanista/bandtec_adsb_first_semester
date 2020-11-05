function avaliar(){
    let notaAluno = document.getElementById("nota").value;
    let freqAluno = document.getElementById("frequencia").value;

    if(notaAluno >= 6 && freqAluno >=75){
        res.innerHTML = `Parabéns, aprovado(a)!`;
    }else if(notaAluno < 6 && freqAluno >= 75){
        res.innerHTML = `Reprovado(a) por nota!`;
    }else if(notaAluno >= 6 && freqAluno < 75){
        res.innerHTML = `Reprovado(a) por frequência!`;
    }else{
        res.innerHTML = `Reprovado(a) por nota!`
        res.innerHTML += `<br>Reprovado(a) por frequência!`
    }
}