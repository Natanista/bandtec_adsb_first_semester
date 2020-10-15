function gerarFreq(){
    let freq = Math.random() * 100;
    frequencia.innerHTML = `Frequência: ${freq.toFixed(2)}`;
}
function gerarNota(){
    let notaAluno = Math.random() * 10;
    nota.innerHTML = `Nota: ${notaAluno.toFixed(2)}`;
}