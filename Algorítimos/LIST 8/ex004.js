function verificar() {
    if(bolsa.value >= 1800 || vr.value >= 20 || deslocamento.value <= 30) {
        resultado.innerHTML = `A empresa ${empresa.value} é uma de suas preferências`;
    } else {
        resultado.innerHTML = `A empresa ${empresa.value} está fora da sua lista`;
    }
}