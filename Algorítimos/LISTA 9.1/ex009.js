let pares = 0;
let impares = 0;

function sortear() {
  let sorteio = Math.trunc(Math.random() * 100 + 1);
  resultado.innerHTML = `${sorteio}`;

  if (sorteio % 2 == 0) {
    pares++;
    par.innerHTML = `${pares}`;
  } else {
    impares++;
    impar.innerHTML = `${impares}`;
  }
}
