function calcular() {
    let custo = Number(saborUM.value) + Number(saborDOIS.value) + Number(saborTRES.value);
    resultado.innerHTML = `A pizza de ${sabor.value} vai custar um total de R$${custo}`; 
}