function avaliar() {
    if (arroz.value == '2' && cozimento.value == 10 && sal.value <= 10 || arroz.value == '1' && cozimento
        .value == 20 && sal.value <= 15) {
    resultado.innerHTML = 'Seu arroz está perfeito';
    imagem.src = 'img/arroz.jpeg';
    } else {
        resultado.innerHTML = 'Seu arroz não está perfeito';
        imagem.src = 'img/jacquin.jpeg';
    }
}