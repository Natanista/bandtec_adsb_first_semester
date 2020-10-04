function calcular() {
  let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
  resultado.innerHTML = `${imc.toFixed(2)}`;
}
