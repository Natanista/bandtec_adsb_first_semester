function verificar() {
    if (distancia.value < 25 && distancia.value > 5) {
        resultado.innerHTML = `A sua pizza será entregue, porém o valor de entrega é de R$ 25,00`;
    } else if (distancia.value <= 5) {
        resultado.innerHTML = `A sua pizza será entregue e não custará nada para você :)`;
    } else {
        resultado.innerHTML = `A Pizza Rãti não entrega neste endereço!`;
    }
}