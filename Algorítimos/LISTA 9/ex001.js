function gerarNota() {
    let randomico = (Math.random() * 11).toFixed(2);
    randomico < 10 ? nota.innerHTML = `${randomico}` : nota.innerHTML = 10;
}

function gerarFreq() {
    let randomico2 = (Math.random() * 101).toFixed(2);
    randomico2 < 100 ? frequencia.innerHTML = `${randomico2}` : frequencia.innerHTML = 100;
}