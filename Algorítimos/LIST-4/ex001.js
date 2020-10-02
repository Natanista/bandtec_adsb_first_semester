 //Calcula a quantidade de refrigerantes
 function calcular() {
    let consumo = Number(qtdRefri.value) * 365;
    if (consumo >= 500) { //se >=500 exibe alert na tela
        alerta.innerHTML = `Cuidado com a Diabetes!`;
    }
    resultado.innerHTML = `R: ${consumo}`;
}