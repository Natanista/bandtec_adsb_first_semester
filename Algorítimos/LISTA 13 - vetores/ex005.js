aluno.value = ``;
let nomes = [];

function cadastrar() {
  nomes.push(aluno.value);
  aluno.value = ``;

  div_mens.innerHTML += `<br>${nomes[0]}`;
}
