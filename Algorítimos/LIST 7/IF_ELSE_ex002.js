function classificar() {
    let notaAluno = nota.value;

    if(notaAluno < 5){
        resultado.innerHTML = `<span style='color:red;'>O aluno precisa de muita ajuda!</span>`;
    } else if(notaAluno >= 5 && notaAluno <= 7){
        resultado.innerHTML = `<span style='color:orange;'>Aluno na média`;
    } else if(notaAluno > 7 && notaAluno <= 9.5){
        resultado.innerHTML = `<span style="color:green">Aluno acima da média</span>`;
    } else {
        resultado.innerHTML = `<span style="color:blue;">Aluno fora da curva</span>`;
    }
}