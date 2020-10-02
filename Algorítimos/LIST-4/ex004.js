 //Calcula a quantidade de refrigerantes
 function calcular() {
    let consumo = Number(qtdRefri.value) * 365;
    if (consumo >= 500) { //se >=500 exibe alert na tela
        alerta.innerHTML = `<span style ='color:white; background-color:red;'>Cuidado com a Diabetes!</span>`;
    }
    resultado.innerHTML = `R: ${consumo}`;
}