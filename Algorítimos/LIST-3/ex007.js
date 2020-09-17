function calcular() {
    var faltasPorCem = Number(faltas.value) * 100;
    var divididoPorAulas =  faltasPorCem / Number(aulas.value);
    var frequencia = 100 - divididoPorAulas;
    resultado.innerHTML = `Olá ${nome.value}! Sua frequência foi de:<div style="background-color: aqua ; height:20px; width:${frequencia}%" id="resultado">${frequencia}%</div>`;
}