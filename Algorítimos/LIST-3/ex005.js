function calcularVT(){
    var gasto = Number(campo1.value) * Number(campo2.value);
    resultado.innerHTML  = `Você vai gastar <u>R$${gasto}</u> por mês com ônibus`;
}