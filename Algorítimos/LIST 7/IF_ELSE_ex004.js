function falar() {
  if (times.value == "time1") {
    resultado.innerHTML = `<span style="background-color:black; color:white;">Salve o Corinthians</span>`;
  } else if (times.value == "time2") {
    resultado.innerHTML = `<span style="background-color:green; color:white;">Salve o alviverde imponente</span>`;
  } else if (times.value == "time3") {
    resultado.innerHTML = `Agora quem da bola é o Santos`;
  } else {
    resultado.innerHTML = `<span style="background-color:black; color:red;">Salve o tricolor Paulista</span>`;
  }
}
