function provar() {
    if(tempo.value == 5){
        resultado.innerHTML = `Parabéns! Arroz Perfeito!`;
        resultado2.src = '/LIST-5/img/arroz.jpeg';
    } else {
        resultado.innerHTML = 'Arroz cru ou cozido demais!';
        resultado2.src = '/LIST-5/img/queimado.jpeg';
    }
}