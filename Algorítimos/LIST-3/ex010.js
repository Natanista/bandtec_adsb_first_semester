function calcular(){
    var menorQue10 = Number(menor10.value) * 30;
    var igualMaior10 = Number(maior10.value) * 20;
    var somaFilhos = menorQue10 + igualMaior10;
    resultado.innerHTML = `Você tem ${menor10.value} filhos menores de 10 anos e ${maior10.value} filhos a partir de 10 anos, logo, seu "Auxílio Filhos" será de R$${somaFilhos}`;
}