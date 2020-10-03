function estudar() {
  let media = Number(gols.value) / Number(partidas.value);
  if (media < 0.2) {
    resultado.innerHTML = `Melhor mudar de posição`;
    resultado2.src = "/LIST-5/img/ruim.jpeg";
  } else if (media > 0.2 && media < 0.6) {
    resultado.innerHTML = "Atacante mediano";
    resultado2.src = "/LIST-5/img/mediano.jpeg";
  } else {
    resultado.innerHTML = "Atacante de futuro";
    resultado2.src = "/LIST-5/img/perfeito.jpeg";
  }

  final.innerHTML = `<b>Sua média de gols/partida é de ${media.toFixed(
    1
  )}</b>`;
}
