function verificar() {
  let numPaes = Number(paes.value);
  let numBolachas = Number(bolachas.value);
  let numAchocolatados = Number(achocolatado.value);
  let calPaes = numPaes * 50;
  let calBolachas = numBolachas * 80;
  let calAchocolatados = numAchocolatados * 70;
  let calorias = calBolachas + calAchocolatados + calPaes;

  if (calorias < 200) {
    resultado.innerHTML = `Parabéns, vai sair em forma da quarentena!`;
  } else if (calorias >= 200 && calorias <= 400) {
    resultado.innerHTML = `Cuidado, vai ficar mais "fofinho(a)" após quarentena!`;
  } else {
    resultado.innerHTML = `Bom, acho que muitos não vão te reconhecer após a quarentena`;
  }
}
