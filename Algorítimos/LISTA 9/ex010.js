let dado1 = 0;
let dado2 = 0;
let empatar = 0;

function jogar() {
  let jogar1 = Math.trunc(Math.random() * 6 + 1);
  let jogar2 = Math.trunc(Math.random() * 6 + 1);
  resultado1.innerHTML = `dado 1: ${jogar1}`;
  resultado2.innerHTML = `dado 2: ${jogar2}`;
  //resultado
  jogo1.innerHTML = `${dado1}`;
  jogo2.innerHTML = `${dado2}`;
  empate.innerHTML = `${empatar}`;

  if (jogar1 > jogar2) {
    dado1++;
  } else if (jogar2 > jogar1) {
    dado2++;
  } else {
    empatar++;
  }

  if (dado1 > dado2) {
    div_mens.innerHTML = `O jogador 1 está vencendo`;
  } else if (dado2 > dado1) {
    div_mens.innerHTML = `O jogador 2 está vencendo`;
  } else {
    div_mens.innerHTML = `Empate`;
  }
}
