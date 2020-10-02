function analisar() {
    if(temperatura.value > 23) {
        resultado.innerHTML = `<b>Temperatura desconfortável - está calor!</b>`;
    } else if(temperatura.value < 22) {
        resultado.innerHTML = `<b>Temperatura desconfortável - está frio!</b>`;
    } else {
        resultado.innerHTML = `<b>Temperatura confortável</b>`;
    }
}