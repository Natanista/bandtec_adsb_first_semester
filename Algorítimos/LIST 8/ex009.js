function analisar(){
    if(nota.value >= 0 && nota.value < 6 && frequencia.value >= 75){
        resultado.innerHTML = `Aluno ficou abaixo da média`;
        resultado2.innerHTML = `Aluno aprovado por frequência`;
    }
    else if(nota.value >= 0 && nota.value < 6 && frequencia.value < 75){
        resultado.innerHTML = `Aluno ficou abaixo da média`;
        resultado2.innerHTML = `Aluno reprovado por frequência`;
    } else if(nota.value >= 6 && nota.value <= 8 && frequencia.value >= 75){
        resultado.innerHTML = `Aluno ficou da média`;
        resultado2.innerHTML = `Aluno aprovado por frequência`;
    }else if(nota.value >= 6 && nota.value <= 8 && frequencia.value < 75){
        resultado.innerHTML = `Aluno ficou da média`;
        resultado2.innerHTML = `Aluno reprovado por frequência`;
    } 
    else if(nota.value > 8 && nota.value <=10 && frequencia.value >= 75){
        resultado.innerHTML = `Aluno acima da média`;
        resultado2.innerHTML = `Aluno aprovado por frequência`;
    }else if(nota.value > 8 && nota.value <=10 && frequencia.value < 75){
        resultado.innerHTML = `Aluno acima da média`;
        resultado2.innerHTML = `Aluno reprovado por frequência`;
    }
     else if(nota.value < 0 || nota.value > 10){
      alert(`Onde já se viu nota <0 ou >10?!`);
        resultado2.innerHTML = ``;
    } else if(frequencia.value > 100 || frequencia.value < 0){
        alert(`Onde já se viu frequência < 0 ou >10?!`);
        resultado2.innerHTML = ``;
    }else {
        resultado.innerHTML = ``;
        resultado2.innerHTML = ``;
    }
    }