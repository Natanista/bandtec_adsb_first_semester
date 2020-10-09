function avaliar() {
    if (nota.value == 5) {
        imagem.src = 'img/5.png';
    } else if (nota.value < 1) {

        imagem.src = 'img/0.png';

    } else if (nota.value >= 1 && nota.value < 2) {

        imagem.src = 'img/1.png';

    } else if (nota.value >= 2 && nota.value < 3) {

        imagem.src = 'img/2.png';

    } else if (nota.value >= 3 && nota.value < 4) {

        imagem.src = 'img/3.png ';

    } else if (nota.value >= 4 && nota.value < 5) {

        imagem.src = 'img/4.png';

    } else if (nota.value == 5) {

        imagem.src = 'img/5.png';

    } else {
        alert('Nota inválida. Digite valores entre 0 e 5!');
    }
}