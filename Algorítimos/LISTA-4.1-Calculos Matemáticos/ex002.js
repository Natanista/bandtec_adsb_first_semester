function calcular() {
    let area = 3.14 * (Number(raio.value) * Number(raio.value));
    resultado.innerHTML = `${area.toFixed(1)}`;

}