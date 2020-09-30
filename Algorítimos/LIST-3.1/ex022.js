function show() {
    if (combo1.value == 2) {
        combo2.style = 'display:block';
        combo3.style = 'display:none';
        foto1.src = '';
        foto2.src = '';
        valorANIMAL.style = 'display: none';
    } else if (combo1.value == 3) {
        combo3.style = 'display: block';
        combo2.style = 'display: none';
        foto1.src = '';
        foto2.src = '';
        valorANIMAL.style = 'display: none';
        
    } else {
        combo3.style = 'display: none';
        combo2.style = 'display: none';
        foto1.src = '';
        foto2.src = '';
        valorANIMAL.style = 'display: none';
    }
}

function mudarIMG1() {
    valorANIMAL.style = 'display: block';
    if (combo2.value == 5) {
        foto1.src = '/LIST-3.1/img/galinha.jpeg';
    } else if (combo2.value == 6) {
        foto1.src = '/LIST-3.1/img/peixe.jpeg';
    } else if (combo2.value == 7) {
        foto1.src = '/LIST-3.1/img/tartaruga.jpeg'
    } else {
        foto1.src = '/';
        valorANIMAL.style = 'display: none';
    }
}

function mudarIMG2() {
    valorANIMAL.style = 'display: block';
    if (combo3.value == 9) {
        foto2.src = '/LIST-3.1/img/elefante.jpeg';
    } else if (combo3.value == 10) {
        foto2.src = '/LIST-3.1/img/porco.jpeg';
    } else if (combo3.value == 11) {
        foto2.src = '/LIST-3.1/img/coelho.jpeg';
    } else {
        foto2.src = '';
    }
}

function calcular() {
    if (combo1.value == 2) {
        precinho = (5 / 100) * Number(preco.value);
        resultado.innerHTML = `O imposto será de R$${precinho}`;
    } else {
        precinho2 = (10 / 100) * Number(preco.value);
        resultado.innerHTML = `O imposto será de R$${precinho2}`;
    }
}