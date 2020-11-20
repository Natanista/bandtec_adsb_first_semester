nome.value = ``;

function checar() {
  let nomePessoa = document.getElementById("nome").value;
  div_mens.innerHTML = ``;
  if (nomePessoa.length >= 10) {
    div_mens.innerHTML = `NOME OK`;
  } else {
    div_mens.innerHTML = `nome deve conter até 10 caracteres`;
  }
}
