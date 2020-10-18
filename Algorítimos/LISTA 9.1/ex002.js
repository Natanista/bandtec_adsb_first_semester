let dado1 = Math.trunc(Math.random() * 6) + 1;
let dado2 = Math.trunc(Math.random() * 6) + 1;

function jogar1() {
  jogador1.innerHTML = `${dado1}`;
}

function jogar2() {
  jogador2.innerHTML = `${dado2}`;
}

function validar() {
  if (dado1 > dado2) {
    resultado.innerHTML = `O jogador 1 venceu`;
  } else if (dado2 > dado1) {
    resultado.innerHTML = `O jogador 2 venceu`;
  } else {
    resultado.innerHTML = `Empate`;
  }
}
