function jogar() {
  let sorteio = Math.trunc(Math.random() * 3 + 1);
  if (sorteio == 1) {
    resultado.src = "img/pedra.png";
  } else if (sorteio == 2) {
    resultado.src = "img/papel.png";
  } else {
    resultado.src = "img/tesoura.png";
  }
}
