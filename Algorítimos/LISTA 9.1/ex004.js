function sortear() {
  let numero = Math.trunc(Math.random() * 15 + 1);
  resultado.innerHTML = `${numero}`;

  if (
    numero == 3 ||
    numero == 4 ||
    numero == 7 ||
    numero == 10 ||
    numero == 12
  ) {
    cabalistico.innerHTML = `Eu S2 números cabalísticos`;
  } else {
    cabalistico.innerHTML = `Ah, me dá um número bom na próxima`;
  }
}
