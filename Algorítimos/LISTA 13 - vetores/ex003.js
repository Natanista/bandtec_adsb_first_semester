filme.value = ``;
let filmes = [];

function cadastrar() {
  filmes.unshift(filme.value);
  filme.value = ``;

  res.innerHTML += `<br>${filmes[0]}`;
}
