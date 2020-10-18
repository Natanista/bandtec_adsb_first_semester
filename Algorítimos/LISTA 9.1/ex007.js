function jogar() {
  let sorteio = Math.trunc(Math.random() * 6 + 1);
  if (sorteio == 1) {
    dado.src = "img/1.png";
  } else if (sorteio == 2) {
    dado.src = "img/2.png";
  } else if (sorteio == 3) {
    dado.src = "img/3.png";
  } else if (sorteio == 4) {
    dado.src = "img/4.png";
  } else if (sorteio == 5) {
    dado.src = "img/5.png";
  } else {
    dado.src = "img/6.png";
  }
}
