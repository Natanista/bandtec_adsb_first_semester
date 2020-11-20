function analisar() {
  let dados = {
    vitoria: vitorias.value * 3,
    empate: empates.value * 1,
    derrota: derrotas.value * 0,
  };

  div_mens.innerHTML = `O time terminou o campeonato com <b>${
    dados.vitoria + dados.empate + dados.derrota
  }</b> pontos`;
}
