function checar() {
  div_mens.innerHTML = ``;
  let emailA = texto.value;
  if (
    emailA.includes("@") == true &&
    emailA.length >= 7 &&
    emailA.includes(".")
  ) {
    div_mens.innerHTML = `email valido :)`;
  } else {
    div_mens.innerHTML = `email inválido  :(`;
  }
}
