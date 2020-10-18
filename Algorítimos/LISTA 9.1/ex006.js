function sortear() {
  let sorteio = Math.trunc(Math.random() * 4 + 1);

  if (sorteio == 1) {
    escudo.src = "img/spfc.png";
  } else if (sorteio == 2) {
    escudo.src = "img/corinthians.png";
  } else if (sorteio == 3) {
    escudo.src = "img/juventus.png";
  } else {
    escudo.src = "img/santos.png";
  }
}
