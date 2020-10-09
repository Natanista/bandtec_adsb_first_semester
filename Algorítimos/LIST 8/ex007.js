function avaliar() {
    if (umidade.value > 100 || umidade.value < 0) {
        alert(`Valor de umidade inválido`);
    } else if (temperatura.value >= 22 && temperatura.value <= 23 && umidade.value < 60) {
        resultado.innerHTML = `Clima agradável`;
    } else {
        resultado.innerHTML = `Clima desconfortável`;
    }

}