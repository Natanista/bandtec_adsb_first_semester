function calcular() {
    var descontoINSS = ((10/100)  * Number(salario.value));
    var descontoIR = ((20/100)  * Number(salario.value));
    var somaDescontos = Number(descontoINSS) + Number(descontoIR);
    salarioFinal = Number(salario.value) - Number(somaDescontos);
    resultado.innerHTML = `Seus descontos serão de:<br>INSS:R$${descontoINSS}<br>IR:R$${descontoIR}<br>Total de descontos:R$${somaDescontos}<br>Seu salário, após os descontos será de: <u>R$${salarioFinal}</u>`;

}