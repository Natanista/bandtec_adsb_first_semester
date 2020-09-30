function calcular() {
    var faltasPorCem = Number(faltas.value) * 100;
    var divididoPorAulas =  faltasPorCem / Number(aulas.value);
    var frequencia = 100 - divididoPorAulas;
    resultado.innerHTML = `<span style='color:blue;'>Olá, ${nome.value}! Sua frequência foi de</span> <span style= 'color:green'><b>${frequencia}%</b></span>`;
    div_barra.style.width = `${frequencia}%`;
}