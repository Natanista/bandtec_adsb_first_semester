function checar() {
  div_mens.innerHTML = ``;
  let emailA = texto.value;
  if (emailA.includes("@") == true) {
    div_mens.innerHTML = `tem arroba :)`;
  } else {
    div_mens.innerHTML = `nao tem arroba :(`;
  }
}
