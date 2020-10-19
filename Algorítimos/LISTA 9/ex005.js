function sortear() {
  let sorteio = Math.trunc(Math.random() * 40 - 20);
  temperatura.innerHTML = `${sorteio}ºC`;

  if (sorteio < 1) {
    resultado.innerHTML = `Da pra conservar alimentos`;
  } else if (sorteio >= 1 || sorteio <= 10) {
    resultado.innerHTML = `Conserva a maioria dos alimentos`;
  } else {
    resultado.innerHTML = `Estraga a maioria dos alimentos`;
  }
}
