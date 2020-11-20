nome.value = ``;

function checar() {
  let nomeUser = document.getElementById("nome").value;
  div_mens.innerHTML = ``;

  if (
    nomeUser.length == 0 ||
    nomeUser.startsWith(" ") == true ||
    nomeUser.endsWith(" ") == true
  ) {
    div_mens.innerHTML = `nome inválido! :(`;
  } else if (nomeUser.includes("fogo")) {
    div_mens.innerHTML = `com fogo não se brinca :)`;
  } else {
    div_mens.innerHTML = `nome válido :)`;
  }
}
