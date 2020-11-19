filme.value = ``;
let filmes = [];

function cadastrar() {
  filmes.push(filme.value);
  filme.value = ``;

  res.innerHTML += `<br>${filmes[filmes.length - 1]}`;
}
