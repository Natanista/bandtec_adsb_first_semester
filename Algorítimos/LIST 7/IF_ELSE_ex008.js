let times = 0;
function clicar() {
  times++;
  numero.innerHTML = times;

  if (times < 5) {
    resultado.innerHTML = `Dedo fraquinho, hein`;
  } else if (times >= 5 && times <= 10) {
    resultado.innerHTML = `Dedo bom mano`;
  } else if (times >= 11 && times <= 15) {
    resultado.innerHTML = `Gosta de clicar, hein!`;
  } else {
    resultado.innerHTML = `Eita dedo nervoso!`;
  }
}
