function calcular() { 
    var total = Number(candidato1.value) + Number(candidato2.value) + Number(brancos.value);
    var biloriloPorCem = Number(candidato1.value) * 100;
    var luloriloPorcem = Number(candidato2.value) * 100;
    var brancosPorCem = Number(brancos.value) * 100; 
    var biloriloPorcentagem = (biloriloPorCem / total);
    var luloriloPorcentagem = (luloriloPorcem / total);
    var brancosPorcentagem = (brancosPorCem / total); 
    resultado.innerHTML = `Total de votos:<u>${total}</u><br>Bilorilo:${biloriloPorcentagem.toFixed(2)}%(${candidato1.value}votos)<div style="background-color:green;width:${biloriloPorcentagem.toFixed(2)}%;height:20px";></div>Lulorilo:${luloriloPorcentagem.toFixed(2)}%(${candidato2.value}votos)<div style="background-color:red;width:${luloriloPorcentagem.toFixed(2)}%;height:20px";></div>Inválidos:${brancosPorcentagem.toFixed(2)}%(${brancos.value}votos)<div style="background-color:gray;width:${brancosPorcentagem.toFixed(2)}%;height:20px";></div>`;
}